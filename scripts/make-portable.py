# Usage: python3 scripts/make-portable.py dist <output-dir>
# Copies a static build and rewrites root-relative URLs to relative ones (directory links point at
# index.html), so the site works when served from any sub-path, e.g. a claude.ai artifact.
import os, re, shutil, sys, posixpath
src, dst = sys.argv[1], sys.argv[2]
shutil.rmtree(dst, ignore_errors=True)
shutil.copytree(src, dst)

def rel(target, from_dir):
    path, sep, frag = target.partition('#')
    path, qsep, query = path.partition('?')
    if path.endswith('/'):
        path += 'index.html'
    r = posixpath.relpath(path.lstrip('/') or 'index.html', from_dir or '.')
    return r + (qsep + query) + (sep + frag)

for root, _, files in os.walk(dst):
    for name in files:
        p = os.path.join(root, name)
        from_dir = os.path.relpath(root, dst).replace(os.sep, '/')
        from_dir = '' if from_dir == '.' else from_dir
        if name.endswith('.html'):
            s = open(p, encoding='utf-8').read()
            s = re.sub(r'(\s(?:href|src|action)=")(/(?!/)[^"]*)"', lambda m: m.group(1) + rel(m.group(2), from_dir) + '"', s)
            s = re.sub(r'(\ssrcset=")([^"]*)"', lambda m: m.group(1) + ', '.join(
                (rel(part.strip().split(' ')[0], from_dir) + ' ' + ' '.join(part.strip().split(' ')[1:])).strip()
                for part in m.group(2).split(',')) + '"', s)
            s = s.replace("location.assign('/contact/thanks/')", "location.assign('thanks/index.html')")
            open(p, 'w', encoding='utf-8').write(s)
        elif name.endswith('.css'):
            s = open(p, encoding='utf-8').read()
            s = re.sub(r'url\((/[^)]*)\)', lambda m: 'url(' + rel(m.group(1), from_dir) + ')', s)
            open(p, 'w', encoding='utf-8').write(s)
