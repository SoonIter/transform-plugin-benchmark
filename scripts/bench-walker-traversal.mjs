import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const code = `
import { Bench } from 'tinybench';
import { walk as yuku } from 'yuku-ast';
import { walk as zimmerframe } from 'zimmerframe';
import { parseSync, CommentMode, Lang, SourceType } from '@swc-next/core';
import { loadStyledComponentsCorpus } from './scripts/styled-components-corpus.ts';
const name = process.argv[1];
const programs = loadStyledComponentsCorpus().files.map(f => parseSync(f.source, { comments:CommentMode.None,lang:Lang.Jsx,preserveParens:true,sourceType:SourceType.Module }).program);
let count=0;
const yVisitors={Identifier(){count++}};
const zVisitors={Identifier(node,context){count++;context.next()}};
const task = () => {count=0;for(const p of programs){if(name==='yuku')yuku(p,yVisitors);else zimmerframe(p,null,zVisitors)}};
task(); const expected=count;
const bench=new Bench({time:2000,warmupTime:1000});bench.add(name,task);await bench.run();
if(count!==expected)throw Error('count mismatch');
const result=bench.tasks[0].result;if(result.state!=='completed')throw Error('incomplete');
console.log(JSON.stringify({name,identifiers:count,medianMs:result.latency.p50,samples:result.latency.samplesCount}));
`;
const runs=[];
for(let i=0;i<6;i++)for(const name of (i%2?['zimmerframe','yuku']:['yuku','zimmerframe'])){
const child=spawnSync(process.execPath,['--import','tsx','--input-type=module','-e',code,name],{encoding:'utf8'});
if(child.status!==0)throw Error(child.stderr);
const r=JSON.parse(child.stdout);runs.push({run:i+1,...r}); console.log(JSON.stringify(r));
}
if(new Set(runs.map(r=>r.identifiers)).size!==1)throw Error('walkers visited different identifiers');
const median = xs => {xs.sort((a,b)=>a-b);return (xs[2]+xs[3])/2};
const results=['yuku','zimmerframe'].map(name=>({name,medianMs:median(runs.filter(r=>r.name===name).map(r=>r.medianMs))}));
const result={scope:'Read-only Identifier counting over the same 87 pre-parsed SWC Next ASTs; parse, plugin transform, adapter and print excluded. Visitor objects reused. Warmed ASTs reused across iterations.',runtime:process.version,benchmark:{runs:6,warmupMs:1000,timeMs:2000},versions:{swcNext:'0.2.1',yukuAst:'0.8.5',zimmerframe:'1.1.5'},results,runs};
writeFileSync('result/swc-next-walkers-traversal.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(results));
