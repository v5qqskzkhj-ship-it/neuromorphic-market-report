import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const data=JSON.parse(fs.readFileSync(path.join(root,'evidence.json'),'utf8'));
const html=fs.readFileSync(path.join(root,'web-template.html'),'utf8').replace('__DATA__',JSON.stringify(data).replaceAll('<','\\u003c'));
for(const name of ['index.html','dashboard.html'])fs.writeFileSync(path.join(root,name),html);
console.log(`Generated ${data.company.length} companies / ${data.products.length} products.`);
