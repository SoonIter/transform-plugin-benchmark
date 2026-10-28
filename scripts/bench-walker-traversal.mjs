import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const code = `
import { Bench } from 'tinybench';
import { walk as yuku } from 'yuku-ast';
import { walk as zimmerframe } from 'zimmerframe';
import { parseSync } from '@swc-next/core';
import { walk as swcNext } from '@swc-next/walker';
import { loadStyledComponentsCorpus } from './scripts/styled-components-corpus.ts';
const name = process.argv[1];
const programs = loadStyledComponentsCorpus().files.map(f => parseSync(f.source, { comments:"none",lang:"jsx",preserveParens:true,sourceType:"module" }).program);
let count=0;
const yVisitors={Identifier(){count++}};
const zVisitors={Identifier(node,context){count++;context.next()}};
const task = () => {count=0;for(const p of programs){if(name==='swc-next')swcNext(p,yVisitors);else if(name==='yuku')yuku(p,yVisitors);else zimmerframe(p,null,zVisitors)}};
task(); const expected=count;
const bench=new Bench({time:2000,warmupTime:1000});bench.add(name,task);await bench.run();
if(count!==expected)throw Error('count mismatch');
const result=bench.tasks[0].result;if(result.state!=='completed')throw Error('incomplete');
console.log(JSON.stringify({name,identifiers:count,medianMs:result.latency.p50,samples:result.latency.samplesCount}));
`;
const runs=[];
const names=['swc-next','yuku','zimmerframe'];
for(let i=0;i<6;i++)for(const name of [...names.slice(i%names.length),...names.slice(0,i%names.length)]){
const child=spawnSync(process.execPath,['--import','tsx','--input-type=module','-e',code,name],{encoding:'utf8'});
if(child.status!==0)throw Error(child.stderr);
const r=JSON.parse(child.stdout);runs.push({run:i+1,...r}); console.log(JSON.stringify(r));
}
if(new Set(runs.map(r=>r.identifiers)).size!==1)throw Error('walkers visited different identifiers');
const median = xs => {xs.sort((a,b)=>a-b);return (xs[2]+xs[3])/2};
const results=names.map(name=>({name,medianMs:median(runs.filter(r=>r.name===name).map(r=>r.medianMs))}));
function packageVersion(name) {
  let directory=dirname(fileURLToPath(import.meta.resolve(name)));
  while (true) {
    try {
      const info=JSON.parse(readFileSync(join(directory,'package.json'),'utf8'));
      if(info.name===name)return info.version;
    } catch(error) { if(error.code!=='ENOENT')throw error; }
    const parent=dirname(directory);
    if(parent===directory)throw Error('Missing package version: '+name);
    directory=parent;
  }
}
const result={scope:'Read-only Identifier counting over the same 87 pre-parsed SWC Next ASTs; parse, plugin transform, adapter and print excluded. Visitor objects reused. Warmed ASTs reused across iterations.',runtime:process.version,benchmark:{runs:6,warmupMs:1000,timeMs:2000},versions:{swcNext:packageVersion('@swc-next/core'),swcNextWalker:packageVersion('@swc-next/walker'),yukuAst:packageVersion('yuku-ast'),zimmerframe:packageVersion('zimmerframe')},results,runs};
writeFileSync('result/swc-next-walkers-traversal-current.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(results));
