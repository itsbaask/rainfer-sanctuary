from pathlib import Path
from html.parser import HTMLParser
import json, re

SRC = Path('/home/ubuntu/rainfer_site/rainfer.org')
OUT = Path('/home/ubuntu/rainfer/src/content/mirror.ts')
SKIP = ('author/', 'comments/', 'feed/', 'category/noticias/feed/', 'wp-json/')
CANONICAL = {
    'index.html', 'el-centro/index.html', 'el-centro/equipo-tecnico/index.html',
    'el-centro/equipo-tecnico.html', 'que-hacemos/index.html',
    'que-hacemos/rescate-y-rehabilitacion.html', 'que-hacemos/formacion-y-educacion.html',
    'cursos/index.html', 'los-primates-2/index.html', 'los-primates-2/chimpances.html',
    'los-primates-2/orangutan.html', 'los-primates-2/gibon.html', 'los-primates-2/capuchinos.html',
    'visitanos/index.html', 'visitanos/visitas-guiadas.html', 'que-puedes-hacer-tu/index.html',
    'que-puedes-hacer-tu/apadrina-un-primate.html', 'que-puedes-hacer-tu/donaciones.html',
    'que-puedes-hacer-tu/voluntariado.html', 'category/noticias/index.html', 'contacto/index.html',
}

class Extractor(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=[]; self.parts=[]; self.tag=''; self.skip=0
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style','noscript','svg'): self.skip += 1
        if tag == 'title': self.tag='title'
        if tag == 'p' and self.skip == 0: self.tag='p'
    def handle_endtag(self, tag):
        if tag in ('script','style','noscript','svg') and self.skip: self.skip -= 1
        if tag in ('title','p'): self.tag=''
    def handle_data(self, data):
        if self.skip: return
        text=' '.join(data.split())
        if not text: return
        if self.tag == 'title': self.title.append(text)
        if self.tag == 'p' and len(text) > 35: self.parts.append(text)

def slug_for(rel):
    raw = rel.replace('index.html?p=', 'p-').replace('index.html', 'index').replace('.html','')
    raw = re.sub(r'[^a-zA-Z0-9]+', '-', raw).strip('-').lower()
    return 'archivo/' + (raw or 'pagina')

def esc(value):
    return value.replace('\\','\\\\').replace("'", "\\'").replace('\n',' ')

records=[]
for path in sorted(SRC.rglob('*.html')):
    rel=str(path.relative_to(SRC))
    if rel in CANONICAL or any(rel.startswith(prefix) for prefix in SKIP): continue
    parser=Extractor()
    try: parser.feed(path.read_text(errors='ignore'))
    except Exception: continue
    title=' '.join(parser.title).strip() or rel
    title=re.sub(r'\s+', ' ', title).replace('Rainfer – Chimpatía – ', '').replace('Rainfer - Chimpatía - ', '')
    parts=[]
    for part in parser.parts:
        if part not in parts: parts.append(part)
    body=parts[:3] or ['Contenido textual no extraído automáticamente; requiere revisión editorial antes de publicación.']
    summary=body[0][:220].rstrip(' .,;:') + '.' if body else 'Página pública migrada desde la copia suministrada.'
    records.append({'path':slug_for(rel),'title':title,'summary':summary,'body':body,'source':rel})

seen=set(); unique=[]
for record in records:
    if record['path'] in seen: continue
    seen.add(record['path']); unique.append(record)

lines=["import type { Page } from './site';", '', 'export const legacyPages: Page[] = [']
for r in unique:
    lines.append('  {')
    lines.append(f"    path: '{esc(r['path'])}', kind: 'editorial', title: '{esc(r['title'])}', enTitle: '{esc(r['title'])}',")
    lines.append("    eyebrow: 'Página migrada', enEyebrow: 'Migrated page',")
    lines.append(f"    summary: '{esc(r['summary'])}', enSummary: 'No verified English translation is available for this source page.',")
    lines.append("    body: [" + ', '.join("'"+esc(x[:700]) + "'" for x in r['body']) + "],")
    lines.append("    enBody: ['No verified English translation is available for this source page.'],")
    lines.append(f"    status: 'mapped', sourceFile: '{esc(r['source'])}'")
    lines.append('  },')
lines.append('];')
OUT.write_text('\n'.join(lines) + '\n')
print(f'generated {len(unique)} migrated pages')
