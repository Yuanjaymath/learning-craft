import{b as ai}from"./chunk-74FLV4OS.js";var li=class{constructor({now:e=()=>performance.now(),budgetMs:t=4,maxExpansions:i=128}={}){Object.assign(this,{now:e,budgetMs:t,maxExpansions:i}),this.jobs=new Map,this.terrain=new Map,this.last={expansions:0,ms:0}}get size(){return this.jobs.size}request(e,t,i,s){this.jobs.set(e,{search:t,valid:i,apply:s})}cancel(e){this.jobs.delete(e)}clear(){this.jobs.clear(),this.terrain.clear()}tick(){let e=this.now(),t=0;for(;this.jobs.size&&t<this.maxExpansions&&this.now()-e<this.budgetMs;){let[i,s]=this.jobs.entries().next().value;if(this.jobs.delete(i),!s.valid())continue;let r=s.search.next();t++,r.done?s.valid()&&s.apply(r.value):this.jobs.set(i,s)}return this.last={expansions:t,ms:this.now()-e},this.last}},ci=class{constructor(){this.items=[]}get length(){return this.items.length}push(e){let t=this.items,i=t.length;for(t.push(e);i>0;){let s=i-1>>1;if(t[s].f<=e.f)break;t[i]=t[s],i=s}t[i]=e}pop(){let e=this.items,t=e[0],i=e.pop();if(e.length){let s=0;for(;s*2+1<e.length;){let r=s*2+1;if(r+1<e.length&&e[r+1].f<e[r].f&&r++,e[r].f>=i.f)break;e[s]=e[r],s=r}e[s]=i}return t}};var hi=Object.freeze([{id:"linear-equations",label:"\u89E3\u4E00\u5143\u4E00\u6B21\u65B9\u7A0B\u5F0F"},{id:"factors-multiples",label:"\u56E0\u6578\u8207\u500D\u6578"}]),ot=hi[0].id;function Rt(n,e=ot){if(!hi.some(t=>t.id===e))throw Error("\u9078\u64C7\u7684\u984C\u5EAB\u4E0D\u5B58\u5728");return n.filter(t=>(t.bankId||ot)===e)}var di=19-4/Math.SQRT2,tn=Object.freeze({red:Object.freeze({x:-di,z:di}),blue:Object.freeze({x:di,z:-di})});function Ce(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();let n=new Uint8Array(16);return globalThis.crypto.getRandomValues(n),n[6]=n[6]&15|64,n[8]=n[8]&63|128,[...n].map((e,t)=>([4,6,8,10].includes(t)?"-":"")+e.toString(16).padStart(2,"0")).join("")}var Ha=new WeakMap;function Vd(n){let e=Ha.get(n);if(!e){e={minX:1/0,minZ:1/0,maxX:-1/0,maxZ:-1/0};for(let[t,i]of n)e.minX=Math.min(e.minX,t),e.maxX=Math.max(e.maxX,t),e.minZ=Math.min(e.minZ,i),e.maxZ=Math.max(e.maxZ,i);Ha.set(n,e)}return e}function ja(n,e,t){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,c]=n[r];a>t!=c>t&&e<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i}function qa(n,e,t){let i=1/0;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,c]=n[s],h=l-o,d=c-a,u=Math.max(0,Math.min(1,((e-o)*h+(t-a)*d)/(h*h+d*d||1)));i=Math.min(i,(e-o-h*u)**2+(t-a-d*u)**2)}return Math.sqrt(i)}function $a(n,e,t,i=.45,s="movement"){for(let r of n){if(s==="sight"&&r.blocksSight===!1)continue;if(r.shape!=="polygon"){if(Math.hypot(e-r.x,t-r.z)<r.r+i)return!0;continue}let o=Vd(r.polygon);if(!(e<o.minX-i||e>o.maxX+i||t<o.minZ-i||t>o.maxZ+i)&&!(!ja(r.polygon,e,t)&&qa(r.polygon,e,t)>i)&&!r.holes?.some(a=>ja(a,e,t)&&qa(a,e,t)>=i))return!0}return!1}function Hd(n){return 1.45+.28*Math.cos(n*.19)+.16*Math.cos(n*.61)}function m_(n,e){let t=(n+e)/Math.SQRT2,i=(e-n)/Math.SQRT2;if(Math.abs(t)<=2.2&&Math.abs(i)<=3.6)return .13+.65*Math.cos(i/3.6*Math.PI/2)**2;for(let{x:o,z:a}of Object.values(tn))if(Math.hypot(n-o,e-a)<4.1)return .12;let s=.12+.045*Math.cos(t*.32)*Math.cos(i*.28)+.022*Math.cos(t*.75)*Math.cos(i*.48),r=Math.abs(i)-Hd(t);if(r<-.2)return-.32;if(r<.4){let o=(r+.2)/.6,a=o*o*(3-2*o);return-.32+(s+.32)*a}return s}var nn=2.8230303030303032;function nr(n,e){let t=Math.atan2(-n.x,-n.z),i=e.x-n.x,s=e.z-n.z,r=Math.abs(Math.cos(t)*i-Math.sin(t)*s)-3.4,o=Math.abs(Math.sin(t)*i+Math.cos(t)*s)-nn;return Math.hypot(Math.max(0,r),Math.max(0,o))+Math.min(0,Math.max(r,o))}function ir(n,e,t=.7){let i=Math.atan2(-n.x,-n.z),s=Math.cos(i),r=Math.sin(i),o=e.x-n.x,a=e.z-n.z,l=s*o-r*a,c=r*o+s*a,h=Math.max(-3.4,Math.min(3.4,l)),d=Math.max(-nn,Math.min(nn,c)),u=l-h,p=c-d,f=Math.hypot(u,p);return f<1e-8&&(3.4-Math.abs(l)<nn-Math.abs(c)?(h=Math.sign(l||1)*3.4,u=Math.sign(l||1),p=0):(d=Math.sign(c||1)*nn,p=Math.sign(c||1),u=0),f=1),l=h+u/f*t,c=d+p/f*t,{x:n.x+s*l+r*c,z:n.z-r*l+s*c}}var Ga=Math.hypot(38,38)/7.5,Ka=.6,sr=1.6,Ya=4,rr=4;var R={duration:900,prep:300,cap:36,walletCap:200,bombCost:20,protection:3,units:{tank:{hp:150,speed:Math.hypot(38,38)/30,range:5,damage:30,cooldown:3},mech:{hp:120,speed:Math.hypot(38,38)/15,range:.9,damage:10,cooldown:1},drone:{hp:90,speed:Ga,range:.7,damage:20,cooldown:2},base:{hp:150,speed:0,range:68,damage:0,cooldown:0}},missiles:{light:{cost:20,slots:1,interval:5,damage:[15]},medium:{cost:40,slots:3,interval:8,damage:[20,15,10]},heavy:{cost:60,slots:5,interval:10,damage:[30,25,20,15,10]}},prototypePolicies:{meleeRadius:.9,explosionCoreRadius:.6,ringWidth:1,bombArea:!0,lateCombatJoin:!1,tie:"draw",emptyBank:"practice-only",revivalAccumulatorSeparate:!0}},H=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),Gd=n=>n==="red"?"blue":"red",Kd=()=>({bomb:0,light:0,medium:0,heavy:0}),Ja=()=>Object.fromEntries(["\u6613","\u4E2D","\u96E3"].map(n=>[n,{correct:0,wrong:0}])),Qa=()=>({tank:0,mech:0,drone:0,base:0}),sn=n=>n.unit==="tank"||n.unit==="mech",Yd=n=>({\u7C21\u55AE:"\u6613",\u4E2D\u7B49:"\u4E2D",\u56F0\u96E3:"\u96E3"})[n]||n;var at=class{constructor(e=[],{castleMissiles:t=!1,practiceMode:i=!1,incrementalPaths:s=!1}={}){this.navigation=s?new li:null,this.castleMissiles=t,this.practiceMode=i,this.practiceEnemyTeam=null,this.practiceBattleOpenedAt=null,this.questionBankId=ot,this.id=Ce(),this.hostId=null,this.round=0,this.winner=null,this.castleDestruction=null,this.earlyBattleUnlocked=!1,this.blessing=null,this.blessingSequence=0,this.players=[],this.obstacles=e,this.time=0,this.running=!1,this.ended=!1,this.castles={red:{id:"castle:red",team:"red",...tn.red,hp:0,maxHp:0,castle:!0},blue:{id:"castle:blue",team:"blue",...tn.blue,hp:0,maxHp:0,castle:!0}},this.missiles=[],this.bombs=[],this.combatEffects=[],this.battleMessages=[],this.battleMessageSequence=0,this.lastCastleWarning={red:-1/0,blue:-1/0},this.events=[],this.starting={red:0,blue:0}}join(e,t,i){if(!["red","blue","observer"].includes(t)||!Object.hasOwn(R.units,i))throw Error("\u968A\u4F0D\u6216\u5175\u7A2E\u7121\u6548");if(t!=="observer"&&(this.running||this.ended))throw Error("\u5DF2\u958B\u5C40\uFF0C\u50C5\u63A5\u53D7\u539F\u8EAB\u4EFD\u91CD\u9023\u6216\u65C1\u89C0");if(this.players.filter(r=>r.team===t).length>=36&&t!=="observer")throw Error("\u968A\u4F0D\u5DF2\u6EFF");let s={id:Ce(),token:Ce(),name:String(e).trim().slice(0,20)||"\u5B78\u54E1",team:t,unit:i,hp:t==="observer"?0:R.units[i].hp,maxHp:R.units[i].hp,x:0,z:0,connected:!0,crystals:0,mathRaw:0,damage:0,ammo:{bomb:i==="drone"?6:0,light:0,medium:0,heavy:0},solved:{},revivalCount:0,revivalHP:0,protectedUntil:0,lastShot:-1/0,order:null,ticket:null,practice:!1};return Object.assign(s,{deployed:!1,answers:Ja(),kills:Qa(),review:[]}),this.players.push(s),t!=="observer"&&(this.spawn(s),this.hostId??=s.id),s}baseBoundarySlots(e){if(this.baseSpawnSlots??={},this.baseSpawnSlots[e])return this.baseSpawnSlots[e];let t=e==="red"?-1:1,i=[];for(let l=0;l<=176;l++){let c=22-l*.25;for(let h of[{x:t*22.8,z:-t*c},{x:t*c,z:-t*22.8}])!this.blocked(h.x,h.z,.9)&&i.every(d=>H(d,h)>=2)&&i.push(h)}let s=this.castles[e],r=i.filter(l=>l.x===t*22.8).sort((l,c)=>Math.abs(l.z-s.z)-Math.abs(c.z-s.z)),o=i.filter(l=>l.x!==t*22.8).sort((l,c)=>Math.abs(l.x-s.x)-Math.abs(c.x-s.x)),a=[];for(let l=0;l<Math.max(r.length,o.length);l++)r[l]&&a.push(r[l]),o[l]&&a.push(o[l]);return this.baseSpawnSlots[e]=a}spawn(e){if(e.unit==="base"){let i=this.baseBoundarySlots(e.team),s=i.find(r=>r.x===e.x&&r.z===e.z);for(let r of s?[s,...i]:i)if(!this.players.some(o=>o!==e&&(o.unit==="base"||o.deployed&&o.hp>0)&&H(o,r)<(o.unit==="base"?2:1.4))){e.x=r.x,e.z=r.z;return}throw Error("\u5730\u5716\u908A\u754C\u6C92\u6709\u53EF\u7528\u7684\u98DB\u5F48\u57FA\u5730\u51FA\u751F\u9EDE")}let t=this.castles[e.team];for(let i=0;i<800;i++){let s=i*2.399963,r=4.7+Math.sqrt(i)*.24,o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!(Math.abs(o)>22.8||Math.abs(a)>22.8||this.blocked(o,a,.5)||this.players.some(l=>l!==e&&(l.unit==="base"||l.deployed&&l.hp>0)&&Math.hypot(l.x-o,l.z-a)<(l.unit==="base"?1.4:1.05)))){e.x=o,e.z=a;return}}throw Error("\u6C92\u6709\u5B89\u5168\u51FA\u751F\u9EDE")}selectQuestionBank(e,t){if(e!==this.hostId||!this.player(e)?.connected)throw Error("\u53EA\u6709\u958B\u5C40\u8005\u53EF\u9078\u64C7\u984C\u5EAB");if(this.running||this.ended)throw Error("\u53EA\u80FD\u5728\u5C1A\u672A\u958B\u59CB\u7684\u7B49\u5019\u5340\u9078\u64C7\u984C\u5EAB");if(!hi.some(i=>i.id===t))throw Error("\u9078\u64C7\u7684\u984C\u5EAB\u4E0D\u5B58\u5728");this.questionBankId=t}start(e=this.hostId){if(e!==this.hostId||!this.player(e)?.connected)throw Error("\u53EA\u6709\u958B\u5C40\u8005\u53EF\u958B\u59CB");if(this.running||this.ended)throw Error("\u5DF2\u958B\u59CB");for(let t of["red","blue"])if(this.starting[t]=this.players.filter(i=>i.team===t).length,!this.starting[t])throw Error("\u96D9\u65B9\u81F3\u5C11\u5404\u4E00\u4EBA");for(let t of this.players)this.prepareLife(t),Object.assign(t,{crystals:0,mathRaw:0,damage:0,solved:{},answers:Ja(),kills:Qa(),review:[],ticket:null,lastShot:-1/0,protectedUntil:0,hasDeployedThisRound:!1});this.battleMessages=[],this.battleMessageSequence=0,this.lastCastleWarning={red:-1/0,blue:-1/0},this.practiceBattleOpenedAt=null;for(let t of["red","blue"])this.castles[t].hp=this.castles[t].maxHp=this.starting[Gd(t)]*50+300;this.earlyBattleUnlocked=!1,this.blessing=null,this.blessingSequence=0,this.round++,this.running=!0}restart(e){if(this.navigation?.clear(),!e||e!==this.hostId||!this.player(e)?.connected)throw Error("\u53EA\u6709\u958B\u5C40\u8005\u53EF\u91CD\u65B0\u958B\u5C40");if(!this.round)throw Error("\u8ACB\u5148\u958B\u59CB\u904A\u6232");this.time=0,this.running=!1,this.ended=!1,this.winner=null,this.castleDestruction=null,this.missiles=[],this.bombs=[],this.combatEffects=[],this.events=[];for(let t of this.players)t.hp=0;for(let t of this.players)Object.assign(t,{hp:t.team==="observer"?0:R.units[t.unit].hp,maxHp:R.units[t.unit].hp,crystals:0,mathRaw:0,damage:0,ammo:{bomb:t.unit==="drone"?6:0,light:0,medium:0,heavy:0},solved:{},revivalCount:0,revivalHP:0,protectedUntil:0,lastShot:-1/0,order:null,ticket:null,practice:!1}),t.team!=="observer"&&this.spawn(t);this.start(e)}prepareLife(e){e.life=(e.life||0)+1,e.deployed=!1,e.hp=e.team==="observer"||sn(e)?0:e.maxHp,e.ammo=Kd(),e.unit!=="base"&&(e.crystals=0),e.order=null,e.revivalCount=0,e.revivalHP=0}active(e){return!!e&&(e.castle||e.deployed===!0)&&e.hp>0}battleOpen(){if(this.time>=R.prep||this.earlyBattleUnlocked)return this.practiceEnemyTeam&&this.practiceBattleOpenedAt===null&&(this.practiceBattleOpenedAt=Math.min(this.time,R.prep)),!0;if(!this.running||this.ended)return!1;let e=this.players.filter(t=>(t.team==="red"||t.team==="blue")&&!t.practiceDummy);return e.length&&e.every(t=>sn(t)?t.hp>=t.maxHp:t.unit==="drone"?t.ammo.bomb>=6:this.slots(t)>=12)&&(this.earlyBattleUnlocked=!0),this.earlyBattleUnlocked&&this.practiceEnemyTeam&&this.practiceBattleOpenedAt===null&&(this.practiceBattleOpenedAt=this.time),this.earlyBattleUnlocked}practiceEnemy(e){return!!e&&e.practiceDummy===!0&&e.team===this.practiceEnemyTeam}practiceEnemyReady(){return this.battleOpen()&&this.practiceBattleOpenedAt!==null&&this.time+1e-8>=this.practiceBattleOpenedAt+10}missileInterval(e){return this.practiceMode?8:R.missiles[e].interval}attackCooldown(e){return this.practiceEnemy(e)&&e.unit==="drone"?3:R.units[e.unit].cooldown}canDeploy(e){return!!e&&e.connected&&e.team!=="observer"&&this.running&&!this.ended&&this.battleOpen()&&!e.deployed&&(sn(e)?e.hp>0:e.unit==="drone"?Math.floor(e.ammo.bomb)>=1:this.slots(e)>0)}deploy(e){let t=this.player(e);return t?.deployed&&this.active(t)&&t.connected&&this.running&&!this.ended&&this.battleOpen()?(t.ticket=null,!0):this.canDeploy(t)?(this.spawn(t),t.ticket=null,t.unit==="drone"&&(t.ammo.bomb=Math.floor(t.ammo.bomb)),t.deployed=!0,t.protectedUntil=this.time+R.protection,t.hasDeployedThisRound&&this.addBattleMessage("returned",t.team,t.id),t.hasDeployedThisRound=!0,!0):!1}addBattleMessage(e,t,i=null){this.battleMessages.push({id:++this.battleMessageSequence,at:this.time,type:e,team:t,playerId:i}),this.battleMessages.length>12&&this.battleMessages.shift()}setTime(e,t,i){if(i!=="4583500837"||!this.player(e)?.connected)throw Error("\u958B\u767C\u8005\u9A57\u8B49\u5931\u6557");if(!this.running||this.ended||!Number.isFinite(t)||t<0||t>R.duration)throw Error("\u8ACB\u8F38\u51650:00\u81F315:00\u4E4B\u9593\u7684\u9032\u884C\u6642\u9593");let s=t-this.time;for(let r of this.players)Number.isFinite(r.lastShot)&&(r.lastShot+=s),r.protectedUntil>this.time?r.protectedUntil+=s:r.protectedUntil=0,t<R.prep&&(r.deployed=!1,r.order=null);return this.missiles=[],this.bombs=[],this.combatEffects=[],this.battleMessages=[],this.lastCastleWarning={red:-1/0,blue:-1/0},this.time=t,t===R.duration&&this.finish(),!0}grantBlessing(e,t){if(t!=="4583500837"||!this.player(e)?.connected)throw Error("\u958B\u767C\u8005\u9A57\u8B49\u5931\u6557");if(!this.running||this.ended)throw Error("\u5C0D\u5C40\u5C1A\u672A\u9032\u884C");this.earlyBattleUnlocked=!0;for(let i of Object.values(this.castles))i.hp=i.maxHp;for(let i of this.players)i.team!=="observer"&&(i.hp=i.maxHp,i.unit==="drone"&&(i.ammo.bomb=6),i.unit==="base"&&(i.ammo.light+=Math.max(0,12-this.slots(i))),i.ticket=null,!i.deployed&&i.connected&&this.deploy(i.id));return this.blessing={id:++this.blessingSequence,round:this.round,at:this.time},!0}finish(){this.ended=!0,this.running=!1;let e=this.castles.red.hp<=0,t=this.castles.blue.hp<=0;this.winner=e&&t?"draw":e?"blue":t?"red":this.score("red")===this.score("blue")?"draw":this.score("red")>this.score("blue")?"red":"blue";for(let i of this.players)i.order=null,i.ticket=null}report(){return this.ended?{winner:this.winner,time:this.time,players:this.players.filter(e=>e.team!=="observer").map(e=>({id:e.id,name:e.name,team:e.team,unit:e.unit,answers:e.answers,kills:e.kills,mathRaw:e.mathRaw,damage:e.damage}))}:null}score(e){let t=this.starting[e]||1,i=this.players.filter(s=>s.team===e);return .7*i.reduce((s,r)=>s+r.mathRaw,0)/t+.3*i.reduce((s,r)=>s+r.damage/10,0)/t}disconnect(e){let t=this.player(e);t&&(t.connected=!1,t.order=null)}player(e){return this.players.find(t=>t.id===e)}target(e){return this.player(e)||Object.values(this.castles).find(t=>t.id===e)}blocked(e,t,i=.45,s="movement"){return $a(this.obstacles,e,t,i,s)||s==="movement"&&Object.values(this.castles).some(r=>nr(r,{x:e,z:t})<i)}visible(e,t,i=0,s="sight"){let r=H(e,t),o=Math.ceil(r/.1);for(let a=1;a<o;a++){let l=a/o;if(this.blocked(e.x+(t.x-e.x)*l,e.z+(t.z-e.z)*l,i,s))return!1}return!0}approachUnit(e,t,i){let s=H(e,t)||1,r=Math.max(.85,i*.85),o=Math.atan2(e.z-t.z,e.x-t.x),a=Array.from({length:16},(l,c)=>({x:t.x+Math.cos(o+c*Math.PI/8)*r,z:t.z+Math.sin(o+c*Math.PI/8)*r})).filter(l=>Math.abs(l.x)<=23&&Math.abs(l.z)<=23&&!this.blocked(l.x,l.z,.5)&&this.visible(l,t));return a.sort((l,c)=>H(l,e)-H(c,e)),a[0]||{x:t.x+(e.x-t.x)*r/s,z:t.z+(e.z-t.z)*r/s}}canMove(e,t,i){if(e.unit==="drone")return!0;let s=Math.max(1,Math.ceil(Math.hypot(t-e.x,i-e.z)/.1)),r=this.players.filter(o=>o!==e&&this.active(o)&&o.unit!=="drone");for(let o=1;o<=s;o++){let a={x:e.x+(t-e.x)*o/s,z:e.z+(i-e.z)*o/s};if(this.blocked(a.x,a.z)||r.some(l=>H(l,a)<.7))return!1}return!0}freeDestination(e,t){let i=s=>!this.blocked(s.x,s.z,.5)&&!this.players.some(r=>r!==e&&this.active(r)&&r.unit!=="drone"&&H(r,s)<.82);if(i(t))return t;for(let s of[.9,1.4,2]){let r=Array.from({length:16},(o,a)=>({x:t.x+Math.cos(a*Math.PI/8)*s,z:t.z+Math.sin(a*Math.PI/8)*s})).filter(o=>Math.abs(o.x)<=23&&Math.abs(o.z)<=23&&i(o));if(r.sort((o,a)=>H(o,e)-H(a,e)),r.length)return r[0]}return null}path(e,t,i=!1){let s=this.pathSearch(e,t,i),r;do r=s.next();while(!r.done);return r.value}requestPath(e,t,i,s=!1){if(!this.navigation){t.path=this.path(e,i,s);return}t.pathPending=!0;let r=this.round,o=e.life,a={x:e.x,z:e.z};this.navigation.request(e.id,this.pathSearch(a,i,s,e),()=>this.round===r&&e.life===o&&e.order===t&&this.active(e)&&e.connected&&!e.ticket,l=>{t.pathPending=!1,t.path=l,t.pathRetryAt=this.time+1})}*pathSearch(e,t,i=!1,s=e){yield;let r=i?this.players.filter(y=>y!==s&&this.active(y)&&y.unit!=="drone"):[],o=new Map,a=(y,_,A=.5)=>{let M=y+","+_+","+A;if(o.has(M))return o.get(M);let V=this.navigation?.terrain,$=V?.get(M);$===void 0&&($=this.blocked(y,_,A),V&&(V.size>=5e4&&V.clear(),V.set(M,$)));let ae=$||r.some(be=>Math.hypot(be.x-y,be.z-_)<.8);return o.set(M,ae),ae},l=(y,_,A=.5)=>{let M=Math.max(1,Math.ceil(H(y,_)/.1));for(let V=1;V<=M;V++)if(a(y.x+(_.x-y.x)*V/M,y.z+(_.z-y.z)*V/M,A))return!1;return!0};if(l(e,t)&&!a(t.x,t.z))return[{x:t.x,z:t.z}];let c=(y,_)=>`${y},${_}`,h=y=>{let _=[];for(let A=-2;A<=2;A++)for(let M=-2;M<=2;M++){let V=Math.round(y.x)+A,$=Math.round(y.z)+M;Math.abs(V)<=23&&Math.abs($)<=23&&!a(V,$,.5)&&_.push({x:V,z:$})}return _.sort((A,M)=>H(A,y)-H(M,y)),_.find(A=>l(y,A,.45))},d=h(e),u=h(t);if(!d||!u)return[];let p=d.x,f=d.z,w=u.x,O=u.z,B=new ci;B.push({x:p,z:f,g:0,f:0});let v=new Map,E=new Map([[c(p,f),0]]),k;for(let y=0;B.length&&y<1e4;y++){yield;let _=B.pop(),A=c(_.x,_.z);if(!(_.g>E.get(A))){if(_.x===w&&_.z===O){k=_;break}for(let[M,V]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let $=_.x+M,ae=_.z+V,be=c($,ae),Ue=_.g+Math.hypot(M,V);Math.abs($)>23||Math.abs(ae)>23||a($,ae,.5)||!l({x:_.x,z:_.z},{x:$,z:ae},.5)||Ue>=(E.get(be)??1/0)||(E.set(be,Ue),v.set(be,_),B.push({x:$,z:ae,g:Ue,f:Ue+Math.hypot($-w,ae-O)}))}}}if(!k)return[];let S=[];for(;k.x!==p||k.z!==f;)S.unshift({x:k.x,z:k.z}),k=v.get(c(k.x,k.z));return H(e,d)>1e-8&&S.unshift(d),(!S.length||H(S.at(-1),t)>1e-8)&&S.push({x:t.x,z:t.z}),S}command(e,t){let i=this.player(e);if(!this.running||!this.battleOpen()||!this.active(i)||!i.connected||i.ticket||i.team==="observer"||this.ended)return!1;if(t.kind==="move"){if(i.unit==="base"||!Number.isFinite(t.x)||!Number.isFinite(t.z))return!1;let s={x:Math.max(-23,Math.min(23,t.x)),z:Math.max(-23,Math.min(23,t.z))};if(i.unit!=="drone"&&this.blocked(s.x,s.z))return!1;if(i.order?.kind==="move"&&H(i.order,s)<.05&&(i.order.pathPending||i.order.path?.length))return!0;if(i.unit==="drone")i.order={kind:"move",...s,path:[s]};else if(this.navigation)i.order={kind:"move",...s,path:[]},this.requestPath(i,i.order,s);else{let r=this.path(i,s);if(!r.length)return!1;i.order={kind:"move",...s,path:r}}}else if(t.kind==="attack"){if(i.unit==="drone"){let r=this.target(t.target),o=Number.isFinite(t.x)&&Number.isFinite(t.z)?t:this.active(r)&&r.team!==i.team?r:null;return!o||Math.abs(o.x)>23||Math.abs(o.z)>23||i.ammo.bomb<1?!1:(i.order={kind:"bomb",x:o.x,z:o.z,path:[{x:o.x,z:o.z}]},i.protectedUntil=0,!0)}let s=this.target(t.target);if(!this.active(s)||s.team===i.team||i.unit==="base"&&s.castle&&!this.castleMissiles)return!1;if(i.order?.kind==="attack"&&i.order.target===s.id)return!0;i.order={kind:"attack",target:s.id}}else if(t.kind==="stop")i.order=null;else return!1;return i.protectedUntil=0,!0}slots(e){return["light","medium","heavy"].reduce((t,i)=>t+e.ammo[i]*R.missiles[i].slots,0)}buy(e,t){let i=this.player(e);if(!this.running||!i||!i.connected||i.team==="observer"||i.unit!=="base"||this.ended)return!1;if(t==="heal"){if(i.ticket)return!1;let r=Math.min(i.crystals,i.maxHp-i.hp);return r<=0?!1:(i.crystals-=r,i.hp+=r,!0)}let s=Object.hasOwn(R.missiles,t)?R.missiles[t]:null;return i.unit!=="base"||!s||i.crystals<s.cost||this.slots(i)+s.slots>12?!1:(i.crystals-=s.cost,i.ammo[t]++,!0)}canEarn(e){return sn(e)?e.hp<e.maxHp:e.unit==="drone"?e.ammo.bomb<6:e.crystals<R.walletCap}question(e){let t=this.player(e)?.ticket;return t?{...t.question,options:t.question.options.map(i=>({...i}))}:null}issue(e,t,i=!1){let s=this.player(e);if(!s||!s.connected||s.team==="observer"||!this.running||this.ended)return null;if(s.ticket)return this.question(e);if(t?.format!=="single-choice"||!Array.isArray(t.options)||t.options.length!==4||t.options.some(l=>!l||typeof l.id!="string"||!l.id||typeof l.text!="string"||!l.text.trim())||new Set(t.options.map(l=>l.id)).size!==4||new Set(t.options.map(l=>l.text.trim())).size!==4||t.options.filter(l=>l.id===t.correctOptionId).length!==1)throw Error("\u984C\u76EE\u5FC5\u9808\u6709\u56DB\u500B\u552F\u4E00\u9078\u9805\u8207\u4E00\u500B\u6B63\u78BA\u9078\u9805");if((s.solved[t.typeId]||0)>=2&&!i)return null;let r=t.options.map(l=>({id:Ce(),text:l.text,correct:l.id===t.correctOptionId,misconception:l.misconception}));for(let l=r.length-1;l>0;l--){let c=Math.floor(Math.random()*(l+1));[r[l],r[c]]=[r[c],r[l]]}let o=Ce(),a={id:o,round:this.round,blessingId:this.blessingSequence,prompt:t.prompt,difficulty:t.difficulty,typeId:t.typeId,practice:i,format:"single-choice",options:r.map(({id:l,text:c})=>({id:l,text:c}))};return s.life=(s.life||0)+1,s.order=null,s.practice=i,s.ticket={id:o,q:t,practice:i,question:a,choices:new Map(r.map(l=>[l.id,l]))},this.question(e)}answer(e,t,i){let s=this.player(e);if(!s?.ticket||s.ticket.id!==t||this.ended)return{id:t,accepted:!1,reason:"invalid-ticket"};if(typeof i!="string"||!s.ticket.choices.has(i))return{id:t,accepted:!1,reason:"invalid-choice"};let{q:r,practice:o,choices:a}=s.ticket,l=a.get(i),c=[...a.values()].find(_=>_.correct);s.ticket=null;let h=l.correct,d={\u6613:20,\u4E2D:30,\u96E3:50,\u7C21\u55AE:20,\u4E2D\u7B49:30,\u56F0\u96E3:50}[r.difficulty],u={\u6613:5,\u4E2D:10,\u96E3:15,\u7C21\u55AE:5,\u4E2D\u7B49:10,\u56F0\u96E3:15}[r.difficulty],p=sn(s)?"hp":s.unit==="drone"?"bomb":"crystal",f=p==="hp"?s.maxHp:p==="bomb"?6:R.walletCap,w=()=>p==="hp"?s.hp:p==="bomb"?s.ammo.bomb:s.crystals,O=w(),B=o?0:p==="bomb"?d/R.bombCost:d,v=o||h?0:p==="bomb"?.5:15;if(!o){s.mathRaw+=h?d:-u,h&&(s.solved[r.typeId]=(s.solved[r.typeId]||0)+1);let _=Math.max(0,Math.min(f,O+(h?B:-v)));if(p==="crystal")s.crystals=_;else if(s.crystals=0,p==="bomb")s.ammo.bomb=_;else if(s.hp=_,s.hp===0&&s.deployed){for(let A of this.missiles)A.target===s.id&&(A.tx=s.x,A.tz=s.z,A.target=null);this.addBattleMessage("destroyed",s.team,s.id),this.prepareLife(s)}}let E=Yd(r.difficulty);s.answers[E]&&s.answers[E][h?"correct":"wrong"]++,h||s.review.push({prompt:r.prompt,difficulty:E,typeId:r.typeId,selected:l.text,correctAnswer:c.text,explanation:r.explanation||"",distractorExplanation:l.misconception||"",at:this.time}),this.events.push({kind:"answer",player:s.id,type:r.typeId,difficulty:r.difficulty,correct:h,practice:o,at:Date.now(),expiresAt:Date.now()+7*864e5});let k=Math.max(0,w()-O),S=Math.max(0,O-w()),y={unit:s.unit,kind:p,gained:k,lost:S,balance:w(),maximum:f,practice:o,nominalGain:B,nominalLoss:v,capped:h&&!o?B-k:0};return{id:t,accepted:!0,correct:h,resourceOutcome:y,answer:c.text,correctOptionId:c.id,explanation:r.explanation,distractorExplanation:h?"":l.misconception||""}}damage(e,t,i=null){if(this.ended||!this.active(e)||e.protectedUntil>this.time||i?.team===e.team)return 0;let s=Math.min(e.hp,t);if(e.hp-=s,i&&(i.damage+=s),s>0&&e.castle&&this.time-this.lastCastleWarning[e.team]>=10&&(this.addBattleMessage("castle-attack",e.team),this.lastCastleWarning[e.team]=this.time),e.hp<=0&&!e.castle){i?.kills&&Object.hasOwn(i.kills,e.unit)&&i.kills[e.unit]++;for(let r of this.missiles)r.target===e.id&&(r.tx=e.x,r.tz=e.z,r.target=null);this.addBattleMessage("destroyed",e.team,e.id),this.prepareLife(e)}return e.castle&&e.hp<=0&&(this.castleDestruction={team:e.team,at:this.time},this.finish()),s}fireProblem(e,t,i){let s=this.player(e),r=this.target(t),o=Object.hasOwn(R.missiles,i)?R.missiles[i]:null;if(!this.running||this.ended)return"\u5C0D\u5C40\u5C1A\u672A\u958B\u59CB\u6216\u5DF2\u7D50\u675F\u3002";if(!this.battleOpen())return"\u5099\u6230\u6642\u9593\u5C1A\u672A\u7D50\u675F\uFF0C\u4E14\u5168\u54E1\u88DC\u7D66\u5C1A\u672A\u9054\u6A19\uFF0C\u76EE\u524D\u4E0D\u80FD\u767C\u5C04\u3002";if(!s?.connected)return"\u9023\u7DDA\u5DF2\u4E2D\u65B7\uFF0C\u8ACB\u5148\u6062\u5FA9\u9023\u7DDA\u3002";if(s.unit!=="base"||!this.active(s))return"\u8ACB\u5148\u4EE5\u98DB\u5F48\u57FA\u5730\u9032\u5165\u6230\u5834\u3002";if(s.ticket)return"\u8ACB\u5148\u5B8C\u6210\u76EE\u524D\u984C\u76EE\uFF0C\u4E26\u8FD4\u56DE\u6230\u5834\u518D\u767C\u5C04\u3002";if(!o)return"\u98DB\u5F48\u985E\u578B\u7121\u6548\u3002";if(this.practiceEnemy(s)&&(!this.practiceEnemyReady()||i!=="light"))return"\u6575\u65B9\u7DF4\u7FD2\u57FA\u5730\u50C5\u80FD\u5728\u958B\u6230\u5341\u79D2\u5F8C\u767C\u5C04\u8F15\u578B\u98DB\u5F48\u3002";if(s.ammo[i]<1)return"\u9019\u7A2E\u98DB\u5F48\u5DF2\u6C92\u6709\u5EAB\u5B58\uFF0C\u8ACB\u5148\u8CFC\u8CB7\u6216\u9078\u64C7\u5176\u4ED6\u7A2E\u985E\u3002";if(!this.active(r)||r.team===s.team)return"\u76EE\u6A19\u5DF2\u5931\u6548\u6216\u4E0D\u662F\u6575\u8ECD\uFF0C\u8ACB\u91CD\u65B0\u6307\u5B9A\u3002";if(r.castle&&!this.castleMissiles)return"\u7DB2\u8DEF\u5C0D\u6230\u7684\u98DB\u5F48\u57FA\u5730\u4E0D\u80FD\u76F4\u63A5\u653B\u64CA\u4E3B\u5821\u3002";if(r.protectedUntil>this.time)return"\u76EE\u6A19\u4ECD\u5728\u51FA\u751F\u4FDD\u8B77\u4E2D\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002";let a=this.missileInterval(i)-(this.time-s.lastShot);return a>0?`\u98DB\u5F48\u51B7\u537B\u4E2D\uFF0C\u9084\u9700 ${Math.ceil(a)} \u79D2\u3002`:""}fire(e,t,i){let s=this.player(e),r=this.target(t);if(this.fireProblem(e,t,i))return!1;s.lastShot=this.time,s.protectedUntil=0,s.ammo[i]--;let o={id:Ce(),owner:e,team:s.team,kind:i,x:s.x,z:s.z,tx:r.x,tz:r.z,target:t};return this.missiles.push(o),this.effect({type:"missile",id:o.id,from:e,to:t,team:s.team,kind:i,x:s.x,z:s.z,tx:r.x,tz:r.z,targetUnit:r.castle?"castle":r.unit}),!0}effect(e){this.combatEffects.push({at:this.time,...e}),this.combatEffects=this.combatEffects.filter(t=>t.at>=this.time-rr).slice(-512)}dropBomb(e,t){let i={id:Ce(),owner:e.id,team:e.team,x:t.x,z:t.z,at:this.time,landAt:this.time+.8};e.ammo.bomb--,e.lastShot=this.time,e.order=null,this.bombs.push(i),this.effect({type:"bomb",id:i.id,from:e.id,team:e.team,x:t.x,z:t.z,landAt:i.landAt})}explodeBomb(e){this.effect({type:"impact",id:e.id+":impact",projectileId:e.id,weapon:"bomb",team:e.team,x:e.x,z:e.z,radius:sr});for(let t of[...this.players,...Object.values(this.castles)]){if(this.ended)break;if(!this.active(t)||t.team===e.team||t.team==="observer")continue;let i=H(e,t);i<=sr&&this.damage(t,R.units.drone.damage*(i<=Ka?1:.5),this.player(e.owner))}}explode(e){let t=R.missiles[e.kind].damage,i=this.castleMissiles?[...this.players,...Object.values(this.castles)]:this.players;for(let s of i){if(this.ended)break;if(s.team===e.team||!this.active(s)||s.team==="observer")continue;let r=H(e,s),o=r<=.6?0:Math.ceil(r-.6);o<t.length&&this.damage(s,t[o],this.player(e.owner))}}step(e,{navigation:t=!0}={}){if(!this.running||this.ended||!Number.isFinite(e)||e<0)return;if(e=Math.min(e,R.duration-this.time),this.time+=e,this.combatEffects=this.combatEffects.filter(o=>o.at>=this.time-rr),this.time>=R.duration){this.finish();return}let i=this.battleOpen();for(let o of this.players){if(!i||!this.active(o)||!o.connected||o.ticket||!o.order||this.practiceEnemy(o)&&!this.practiceEnemyReady())continue;let a=R.units[o.unit],l=o.order;if(l.kind==="bomb"&&H(o,l)<.08){if(o.ammo.bomb<1){o.order=null;continue}this.time-o.lastShot>=this.attackCooldown(o)&&this.dropBomb(o,l);continue}if(l.kind==="attack"){let f=this.target(l.target);if(!this.active(f)){o.order=null;continue}if(o.unit==="base")continue;if((f.castle&&o.unit==="mech"?nr(f,o):H(o,f))<=a.range&&(o.unit==="drone"||this.visible(o,f))){i&&this.time-o.lastShot>=a.cooldown&&!(f.protectedUntil>this.time)&&(o.lastShot=this.time,o.unit==="tank"&&this.effect({type:"laser",id:Ce(),from:o.id,to:f.id,team:o.team,x:o.x,z:o.z,tx:f.x,tz:f.z,targetUnit:f.castle?"castle":f.unit}),this.damage(f,a.damage,o),this.events.push({kind:"shot",from:o.id,to:f.id,at:this.time}));continue}if(!l.pathPending&&!l.path?.length&&this.time>=(l.pathRetryAt||0)||Math.hypot(l.tx-f.x,l.tz-f.z)>1){l.pathRetryAt=this.time+1,l.tx=f.x,l.tz=f.z;let O=f.castle?ir(f,o,o.unit==="tank"?.52:.7):this.approachUnit(o,f,a.range);o.unit==="drone"?l.path=[{x:f.x,z:f.z}]:this.requestPath(o,l,O)}}let c=l.path?.[0];if(!c)continue;let h=H(o,c),d=Math.min(h,a.speed*e);if(h<.05){l.path.shift(),!l.path.length&&l.kind==="move"&&(o.order=null);continue}let u=o.x+(c.x-o.x)*d/h,p=o.z+(c.z-o.z)*d/h;if(this.canMove(o,u,p))o.x=u,o.z=p;else if(o.unit!=="drone"&&!l.pathPending&&this.time>=(l.repathAt||0)){l.repathAt=this.time+.5;let f=l.kind==="attack"?this.target(l.target):l;f?.castle?f=ir(f,o,o.unit==="tank"?.52:.7):l.kind==="attack"&&f&&(f=this.approachUnit(o,f,a.range)),f&&(f=this.freeDestination(o,f)),f&&this.requestPath(o,l,f,!0)}}t&&this.navigation?.tick();for(let o of[...this.bombs]){if(this.ended)break;this.time+1e-8>=o.landAt&&(this.explodeBomb(o),this.bombs.splice(this.bombs.indexOf(o),1))}for(let o of[...this.missiles]){if(this.ended)break;let a=this.target(o.target);this.active(a)&&(o.tx=a.x,o.tz=a.z);let l=Math.hypot(o.tx-o.x,o.tz-o.z),c=R.units.drone.speed*Ya*e;l<=c?(o.x=o.tx,o.z=o.tz,this.effect({type:"impact",id:o.id+":impact",projectileId:o.id,weapon:"missile",kind:o.kind,team:o.team,x:o.x,z:o.z,targetUnit:a?.castle?"castle":a?.unit||"tank",radius:.6+R.missiles[o.kind].damage.length-1}),this.explode(o),this.missiles.splice(this.missiles.indexOf(o),1)):(o.x+=(o.tx-o.x)*c/l,o.z+=(o.tz-o.z)*c/l)}let s=this.castles.red.hp<=0,r=this.castles.blue.hp<=0;(s||r||this.time>=R.duration)&&this.finish()}snapshot(e){let t=this.player(e);return{roomId:this.id,simulationPaused:!!this.simulationPaused,questionBankId:this.questionBankId,hostId:this.hostId,round:this.round,running:this.running,ended:this.ended,winner:this.winner,castleDestruction:this.castleDestruction,battleOpen:this.battleOpen(),blessing:this.blessing,time:this.time,report:this.report(),castles:this.castles,scores:{red:this.score("red"),blue:this.score("blue")},players:this.players.map(i=>({id:i.id,name:i.name,team:i.team,unit:i.unit,hp:i.hp,maxHp:i.maxHp,deployed:!!i.deployed,x:i.x,z:i.z,connected:i.connected,answering:!!i.ticket,bombCount:i.unit==="drone"?i.ammo.bomb:0,missileCount:i.unit==="base"?i.ammo.light+i.ammo.medium+i.ammo.heavy:0,lastShot:Number.isFinite(i.lastShot)?i.lastShot:null,attackTarget:i.order?.kind==="attack"?i.order.target:null,protected:i.protectedUntil>this.time})),missiles:this.missiles.map(({owner:i,...s})=>s),bombs:this.bombs.map(({owner:i,...s})=>s),combatEffects:this.combatEffects.map(i=>({...i})),battleMessages:this.battleMessages.map(i=>({...i})),me:t?{id:t.id,life:t.life??0,orderKind:t.order?.kind||"",hasDeployedThisRound:!!t.hasDeployedThisRound,canDeploy:this.canDeploy(t),review:this.ended?t.review:[],crystals:t.unit==="base"?t.crystals:0,walletCap:t.unit==="base"?R.walletCap:0,ammo:t.ammo,revivalCount:t.revivalCount,revivalHP:t.revivalHP,mathRaw:t.mathRaw,damage:t.damage}:null}}};function J(n,e=Date.now()){return n?n.status==="closed"?["restart","host-reloaded","host-disconnected","host-left"].includes(n.reason)?n.reason:"closed":!Number.isFinite(n.expiresAt)||n.expiresAt<=e?"expired":Number.isFinite(n.hostOfflineAt)?e-n.hostOfflineAt>=3e4?"host-disconnected":"paused":!Number.isFinite(n.heartbeat)||e-n.heartbeat>9e4?"host-disconnected":"active":"closed"}function ui(n){return{restart:"\u958B\u5C40\u8005\u5DF2\u91CD\u65B0\u958B\u5C40\uFF0C\u539F\u6230\u5C40\u5DF2\u95DC\u9589\u3002\u8ACB\u91CD\u65B0\u5EFA\u7ACB\u6216\u52A0\u5165\u6230\u5C40\u3002","host-reloaded":"\u958B\u5C40\u8005\u5DF2\u91CD\u65B0\u6574\u7406\u9801\u9762\uFF0C\u539F\u6230\u5C40\u5DF2\u95DC\u9589\u3002\u8ACB\u91CD\u65B0\u5EFA\u7ACB\u6216\u52A0\u5165\u6230\u5C40\u3002","host-disconnected":"\u958B\u5C40\u8005\u65B7\u7DDA\u8D85\u904E30\u79D2\uFF0C\u539F\u6230\u5C40\u5DF2\u95DC\u9589\u3002\u8ACB\u91CD\u65B0\u5EFA\u7ACB\u6216\u52A0\u5165\u6230\u5C40\u3002","host-left":"\u958B\u5C40\u8005\u5DF2\u96E2\u958B\uFF0C\u539F\u6230\u5C40\u5DF2\u95DC\u9589\u3002\u8ACB\u91CD\u65B0\u5EFA\u7ACB\u6216\u52A0\u5165\u6230\u5C40\u3002",expired:"\u539F\u6230\u5C40\u5DF2\u904E\u671F\uFF0C\u8ACB\u91CD\u65B0\u5EFA\u7ACB\u6216\u52A0\u5165\u6230\u5C40\u3002"}[n]||"\u539F\u6230\u5C40\u5DF2\u95DC\u9589\uFF0C\u8ACB\u91CD\u65B0\u5EFA\u7ACB\u6216\u52A0\u5165\u6230\u5C40\u3002"}var or=n=>"orbit-return-v1:"+n;function Xa(n,e){try{let t=JSON.parse(n?.getItem(or(e))||"null");return t?.uid===e&&typeof t.roomId=="string"&&typeof t.name=="string"&&["red","blue","observer"].includes(t.team)&&["tank","mech","drone","base"].includes(t.unit)?t:null}catch{return null}}function Za(n,e){try{n?.setItem(or(e.uid),JSON.stringify(e))}catch{}}function fi(n,e){try{n?.removeItem(or(e))}catch{}}function el(n,e){if(!n.running||n.ended||!n.battleOpen())return;let t=n.player(e);if(!(!t||t.team==="observer"))for(let i of n.players){if(!i.practiceDummy||!n.active(i))continue;if(n.practiceEnemy(i)&&!n.practiceEnemyReady()){i.order=null,i.aiTargetId=null;continue}let s=n.attackCooldown(i),r=n.missileInterval("light"),o=i.team==="red"?"blue":"red",a=n.players.filter(h=>h.team===o&&n.active(h)),c=a.find(h=>h.id===i.aiTargetId)||a.sort((h,d)=>Math.hypot(i.x-h.x,i.z-h.z)-Math.hypot(i.x-d.x,i.z-d.z))[0]||(n.players.some(h=>h.team===o&&h.hasDeployedThisRound)?n.castles[o]:null);if(!c){i.order=null,i.aiTargetId=null;continue}i.aiTargetId=c.id,i.unit==="drone"&&i.ammo.bomb<1&&n.time-i.lastShot>=s&&(i.ammo.bomb=1),i.unit==="base"&&i.ammo.light<1&&n.time-i.lastShot>=r&&(i.ammo.light=1),i.unit==="tank"||i.unit==="mech"?(i.order?.kind!=="attack"||i.order.target!==c.id)&&n.command(i.id,{kind:"attack",target:c.id}):i.unit==="drone"&&i.ammo.bomb>=1?i.order?.kind!=="bomb"&&n.time-i.lastShot>=s&&n.command(i.id,{kind:"attack",target:c.id}):i.unit==="base"&&i.ammo.light>=1&&n.time-i.lastShot>=r&&n.fire(i.id,c.id,"light")}}var tl=["tank","drone","mech","base"],nl={tank:"\u6230\u8ECA",mech:"\u6A5F\u7532",drone:"\u7121\u4EBA\u6A5F",base:"\u98DB\u5F48\u57FA\u5730"};function Jd(n){if(!Array.isArray(n)||n.length>6||n.some(e=>!Object.hasOwn(R.units,e)))throw Error("\u55AE\u6A5F\u589E\u63F4\u5175\u7A2E\u7121\u6548");return[...n]}function ar(n,e,t){let i=Jd(t),s=n.player(e);if(!s||s.team==="observer"||n.running||n.ended)throw Error("\u76EE\u524D\u4E0D\u80FD\u66F4\u6539\u55AE\u6A5F\u7DE8\u968A");n.players=n.players.filter(o=>!o.practiceDummy);for(let[o,a]of i.entries()){let l=n.join(`\u6211\u65B9\u589E\u63F4${o+1}\u30FB${nl[a]}`,s.team,a);l.practiceDummy=!0}let r=s.team==="red"?"blue":"red";for(let[o,a]of Array.from({length:i.length+1},(l,c)=>tl[c%tl.length]).entries()){let l=n.join(`\u6575\u65B9${o+1}\u30FB${nl[a]}`,r,a);l.practiceDummy=!0}return{allies:i.length+1,enemies:i.length+1}}var pi=class{constructor({bank:e,obstacles:t=[],autoTick:i=!0,questionSource:s=null,storage:r=null,clock:o=Date.now}){this.questionSource=s,this.room=new at(t,{castleMissiles:!0,practiceMode:!0}),this.bank=e,this.id=null,this.readyState=1,this.storage=r,this.clock=o,this.records=[];try{let a=JSON.parse(r?.getItem("orbit-learning-v1")||"[]");Array.isArray(a)&&(this.records=a)}catch{}if(this.prune(),queueMicrotask(()=>{this.readyState===1&&this.onopen?.()}),i){let a=performance.now();this.timer=setInterval(()=>{let l=performance.now();this.tick((l-a)/1e3,{maxSteps:5}),a=l},50),this.cleaner=setInterval(()=>this.prune(),6e4)}}emit(e){this.onmessage?.({data:JSON.stringify(e)})}prune(){this.records=this.records.filter(e=>Number.isFinite(e.expiresAt)&&e.expiresAt>this.clock());try{this.storage?.setItem("orbit-learning-v1",JSON.stringify(this.records))}catch{}}send(e){if(this.readyState===1)try{let t=JSON.parse(e),i=this.room;if(t.kind==="list"||t.kind==="rooms"){this.emit({kind:"rooms",rooms:[]});return}if(t.kind==="join"||t.kind==="create"){if(this.id)throw Error("\u5DF2\u52A0\u5165\u672C\u6A5F\u7DF4\u7FD2");if(t.kind==="create"){if(!String(t.name||"").trim())throw Error("\u8ACB\u586B\u5BEB\u73A9\u5BB6\u540D\u5B57");if(!String(t.roomName||"").trim())throw Error("\u8ACB\u586B\u5BEB\u6230\u5C40\u540D\u7A31");i.name=t.roomName.trim().slice(0,40),Rt(this.bank,t.questionBankId),t.questionBankId&&(i.questionBankId=t.questionBankId)}let s=i.join(t.name,t.team,t.unit);this.id=s.id,i.practiceEnemyTeam=s.team==="observer"?null:s.team==="red"?"blue":"red",s.team==="observer"?(i.join("\u7D05\u968A\u7DF4\u7FD2\u55AE\u4F4D","red","tank").practiceDummy=!0,i.join("\u85CD\u968A\u7DF4\u7FD2\u55AE\u4F4D","blue","drone").practiceDummy=!0):ar(i,s.id,[]),i.hostId=s.id,this.emit({kind:"identity",id:s.id,token:s.token,host:!0,questionBankId:i.questionBankId,roomId:i.id,roomName:i.name||"\u55AE\u6A5F\u7DF4\u7FD2"}),this.emit({kind:"notice",text:"\u55AE\u6A5F\u7DF4\u7FD2\uFF1A\u9078\u64C7\u589E\u63F4\u5F8C\uFF0C\u96D9\u65B9\u6703\u6D3E\u51FA\u76F8\u540C\u6578\u91CF\u7684\u4F5C\u6230\u55AE\u4F4D\u3002"})}else{if(!this.id)throw Error("\u8ACB\u5148\u52A0\u5165");if(t.kind==="question-bank")i.selectQuestionBank(this.id,t.questionBankId),this.questionSource&&this.questionSource.prepare(i.questionBankId).catch(s=>this.emit({kind:"notice",text:s.message})),this.emit({kind:"state",...i.snapshot(this.id),roomName:i.name||"\u55AE\u6A5F\u7DF4\u7FD2"});else if(t.kind==="practice-lineup")ar(i,this.id,t.units),this.emit({kind:"state",...i.snapshot(this.id),roomName:i.name||"\u55AE\u6A5F\u7DF4\u7FD2"});else if(t.kind==="start"){if(this.questionSource){this.startPrepared().catch(s=>this.emit({kind:"notice",text:s.message}));return}i.start(this.id),this.emit({kind:"notice",text:"\u672C\u6A5F\u7DF4\u7FD2\u5DF2\u958B\u59CB\uFF1B\u88DC\u7D66\u6EFF\u683C\u53EF\u63D0\u524D\u9032\u5834\u3002"})}else if(t.kind==="restart"){if(this.id!==i.hostId)throw Error("\u53EA\u6709\u958B\u5C40\u8005\u53EF\u91CD\u65B0\u958B\u5C40");let s=i.id;this.room=new at(i.obstacles,{castleMissiles:!0,practiceMode:!0}),this.id=null,this.observerRelay=null,this.emit({kind:"session-ended",roomId:s,reason:"restart",text:ui("restart")})}else if(t.kind==="deploy"){if(t.round!==i.round)throw Error("\u820A\u56DE\u5408\u6307\u4EE4\u5DF2\u5931\u6548");let s=i.deploy(this.id);this.emit({kind:"deployment",id:t.id??null,accepted:s}),this.emit({kind:"notice",text:s?"\u5DF2\u9032\u5165\u6230\u5834":"\u5C1A\u672A\u958B\u653E\u5165\u5834\u6216\u88DC\u7D66\u4E0D\u8DB3\uFF0C\u8ACB\u5148\u88DC\u5145\u751F\u547D\u503C\u6216\u5F48\u85E5\u3002"})}else if(t.kind==="developer"){if(t.round!==i.round)throw Error("\u820A\u56DE\u5408\u6307\u4EE4\u5DF2\u5931\u6548");t.action==="blessing"?i.grantBlessing(this.id,t.password):i.setTime(this.id,t.seconds,t.password),this.emit({kind:"notice",text:t.action==="blessing"?"\u311A\u6770\u7684\u6069\u8CDC\u5DF2\u555F\u52D5":"\u5C0D\u5C40\u9032\u884C\u6642\u9593\u5DF2\u66F4\u65B0"})}else if(t.kind==="watch"||t.kind==="screen")if(t.kind==="watch"&&t.target)this.emit({kind:"notice",text:"\u55AE\u6A5F\u7684\u96FB\u8166\u55AE\u4F4D\u6C92\u6709\u73A9\u5BB6\u87A2\u5E55\uFF1B\u7DB2\u8DEF\u5C0D\u6230\u53EF\u89C0\u770B\u5176\u4ED6\u73A9\u5BB6\u756B\u9762\u3002"}),this.emit({kind:"view-reset",target:null,round:i.round});else{this.observerRelay??=new ai(i);for(let s of this.observerRelay.handle(this.id,t))s.to===this.id&&this.emit(s.message)}else if(t.kind==="command")i.command(this.id,t.command||{});else if(t.kind==="buy")this.emit({kind:"notice",text:i.buy(this.id,t.item)?"\u88DC\u7D66\u5B8C\u6210":"\u6676\u6838\u4E0D\u8DB3\u3001\u5BB9\u91CF\u5DF2\u6EFF\u6216\u76EE\u524D\u4E0D\u80FD\u8CFC\u8CB7"});else if(t.kind==="fire")this.emit({kind:"notice",text:i.fire(this.id,t.target,t.missile)?"\u98DB\u5F48\u5DF2\u767C\u5C04":i.fireProblem(this.id,t.target,t.missile)});else if(t.kind==="question"){if(this.questionSource){this.sourceQuestion(t).catch(h=>this.emit({kind:"notice",text:h.message}));return}let s=i.player(this.id),r=Rt(this.bank,i.questionBankId).filter(h=>!t.difficulty||h.difficulty===t.difficulty),o=r.filter(h=>(s.solved[h.typeId]||0)<2),a=!1;if(o.length||(o=r,a=!0),!o.length)throw Error("\u6C92\u6709\u6B64\u96E3\u5EA6\u7684\u984C\u76EE");let l=o[Math.floor(Math.random()*o.length)],c=i.issue(this.id,l,a);if(!c)throw Error("\u8ACB\u5148\u958B\u59CB\u7DF4\u7FD2");this.emit({kind:"question",...c})}else if(t.kind==="answer"){let s=i.answer(this.id,t.id,t.choiceId);if(s.accepted){let r=i.player(this.id),o=i.events.findLast(a=>a.kind==="answer"&&a.player===this.id);o&&(this.records.push({...o,studentName:r.name,expiresAt:this.clock()+7*864e5}),this.prune())}this.emit({kind:"result",...s})}}}catch(t){this.emit({kind:"notice",text:t.message})}}async startPrepared(){let e=this.room,t=this.id,i=e.questionBankId;this.emit({kind:"notice",text:"\u6B63\u5728\u6E96\u5099\u984C\u76EE\u2026"}),await this.questionSource.prepare(i),!(this.readyState!==1||this.room!==e||this.id!==t||e.questionBankId!==i)&&(e.start(t),this.tick(0))}async sourceQuestion(e){let t=this.room,i=this.id,s=t.player(i),r=t.round,o=t.questionBankId;if(!t.running||t.ended)throw Error("\u8ACB\u5148\u958B\u59CB\u7DF4\u7FD2");if(s.ticket){this.emit({kind:"question",...t.question(i)});return}this.emit({kind:"notice",text:"\u4E0B\u4E00\u984C\u6E96\u5099\u4E2D\u2026"});let{question:a,practice:l}=await this.questionSource.take(o,e.difficulty||"\u6613",s.solved);if(this.readyState!==1||this.room!==t||this.id!==i||t.round!==r||t.ended||t.questionBankId!==o)return;let c=t.issue(i,a,l);c&&this.emit({kind:"question",...c})}tick(e,{maxSteps:t=1/0}={}){if(this.readyState!==1)return;let i=Math.min(R.duration,this.room.time+(Number.isFinite(e)?Math.max(0,e):0));for(let s=0;s<t&&this.room.time<i&&this.room.running&&!this.room.ended;s++){let r=this.room.time;if(this.room.step(Math.min(.05,i-r)),this.room.time<=r)break}if(this.room.running&&!this.room.ended&&this.room.time<i&&(this.room.time=i,this.room.time>=R.duration&&this.room.finish()),this.room.running&&this.room.battleOpen())for(let s of this.room.players)s.practiceDummy&&s.dummyRound!==this.room.round&&(s.hp=s.maxHp,s.unit==="drone"&&(s.ammo.bomb=6),s.unit==="base"&&(s.ammo.light=12),this.room.deploy(s.id)&&(s.dummyRound=this.room.round,s.protectedUntil=0));this.id&&el(this.room,this.id),this.id&&this.emit({kind:"state",...this.room.snapshot(this.id),roomName:this.room.name||"\u55AE\u6A5F\u7DF4\u7FD2"}),this.room.events.length=0}close(){this.readyState=3,clearInterval(this.timer),clearInterval(this.cleaner),this.onclose?.()}};var Qd=new Set(["connected","code","reason","steps","lag","paused","navigationMs","searches","pending","heartbeatAge","stateAge","round","time"]),mi=class{constructor({limit:e=64,now:t=Date.now}={}){this.limit=e,this.now=t,this.rows=[]}record(e,t={}){let i={at:this.now(),type:e};for(let[s,r]of Object.entries(t))Qd.has(s)&&["number","string","boolean"].includes(typeof r)&&(i[s]=r);this.rows.push(i),this.rows.length>this.limit&&this.rows.shift()}snapshot(){return this.rows.map(e=>({...e}))}};function il({joined:n,connected:e,hostAvailable:t,now:i=Date.now(),hostOfflineAt:s,heartbeat:r,lastPublicAt:o,simulationPaused:a}={}){let l="healthy",c="";return n?(e?t?a?(l="simulation-paused",c="\u958B\u5C40\u96FB\u8166\u904B\u7B97\u5EF6\u9072\uFF0C\u6230\u9B25\u8207\u5012\u6578\u66AB\u505C\uFF0C\u6B63\u5728\u540C\u6B65\u3002"):Number.isFinite(o)&&i-o>3e3&&(l="stale-state",c="\u7B49\u5F85\u958B\u5C40\u96FB\u8166\u7684\u6700\u65B0\u6230\u6CC1\uFF0C\u6B63\u5728\u540C\u6B65\u3002"):Number.isFinite(s)?(l="host-offline",c="\u958B\u5C40\u8005\u8207\u96F2\u7AEF\u9023\u7DDA\u4E2D\u65B7\uFF0C\u7B49\u5F85\u6062\u5FA9\u9023\u7DDA\u3002"):(l="host-unresponsive",c="\u958B\u5C40\u8005\u66AB\u7121\u56DE\u61C9\uFF0C\u6B63\u5728\u78BA\u8A8D\u9023\u7DDA\u8207\u904B\u7B97\u72C0\u614B\u3002"):(l="offline",c="\u672C\u6A5F\u8207\u96F2\u7AEF\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6B63\u5728\u91CD\u65B0\u9023\u7DDA\u3002"),{code:l,text:c}):{code:l,text:c}}function H_({getSocket:n,visualErrors:e=()=>[],doc:t=document}={}){let i=t.createElement("div");i.id="networkStatus",i.hidden=!0,i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),i.style.cssText="position:fixed;top:110px;left:50%;transform:translateX(-50%);max-width:80vw;padding:8px 14px;border-radius:8px;background:#fff2cd;color:#8b2020;z-index:40;pointer-events:none;text-align:center",t.body.append(i);let s=t.createElement("button");s.id="downloadDiagnostics",s.textContent="\u4E0B\u8F09\u9023\u7DDA\u8A3A\u65B7",s.hidden=!0,(t.getElementById("controls")||t.body).append(s);let r=()=>({...n()?.diagnostics?.(),visualErrors:e()});return s.onclick=()=>{let o=URL.createObjectURL(new Blob([JSON.stringify(r(),null,2)],{type:"application/json"})),a=t.createElement("a");a.href=o,a.download="ORBIT-\u9023\u7DDA\u8A3A\u65B7.json",t.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)},{report:r,tick(){let o=n(),a=o?.connectionHealth?.();s.hidden=!o?.diagnostics,i.hidden=!a?.text,i.textContent=a?.text||""}}}var gi=class{constructor({now:e=()=>performance.now(),maxSteps:t=5,budgetMs:i=4,pauseAfter:s=1}={}){Object.assign(this,{now:e,maxSteps:t,budgetMs:i,pauseAfter:s}),this.key="",this.debt=0,this.healthy=0,this.last={steps:0,lag:0,paused:!1}}advance(e,t,i=!0){let s=e.id+":"+e.round;if(s!==this.key&&(this.key=s,this.debt=0,this.healthy=0,e.simulationPaused=!1),t=Number.isFinite(t)?Math.max(0,t):0,this.last={steps:0,lag:0,paused:!!e.simulationPaused},!i||!e.running||e.ended)return this.debt=0,this.healthy=0,e.simulationPaused=!1,this.last.paused=!1,this.last;if(e.simulationPaused)return this.healthy=t<=.1?this.healthy+1:0,this.healthy>=3&&(e.simulationPaused=!1,this.healthy=0),this.last.paused=e.simulationPaused,this.last;if(this.debt+=t,this.debt>this.pauseAfter)return this.last.lag=this.debt,this.debt=0,e.simulationPaused=!0,this.last.paused=!0,this.last;let r=this.now();for(;this.debt>1e-8&&this.last.steps<this.maxSteps&&this.now()-r<this.budgetMs&&e.running&&!e.ended;){let o=Math.min(.05,this.debt),a=e.time;if(e.step(o,{navigation:!1}),e.time<=a)break;this.debt=Math.max(0,this.debt-(e.time-a)),this.last.steps++}return this.last.lag=this.debt,this.last}};var _i=class{constructor({send:e,onError:t=()=>{},intervalMs:i=100,now:s=()=>performance.now()}={}){Object.assign(this,{send:e,onError:t,intervalMs:i,now:s}),this.pending=null,this.inFlight=!1,this.scheduled=!1,this.generation=0,this.lastSent=-1/0,this.signature=null}get size(){return Number(this.inFlight)+ +!!this.pending}offer(e){let t=e.command,i=JSON.stringify([e.round,t.kind,t.target,t.x,t.z]);i!==this.signature&&(this.signature=i,this.signatureId=e.id,this.pending=e,t.kind==="stop"&&this.scheduled&&(clearTimeout(this.timer),this.generation++,this.scheduled=!1),this._schedule())}clear(){this.generation++,clearTimeout(this.timer),this.pending=null,this.signature=null,this.scheduled=!1}reject(e){e===this.signatureId&&(this.signature=null)}_schedule(){if(this.inFlight||this.scheduled||!this.pending)return;this.scheduled=!0;let e=this.generation,t=this.pending.command.kind==="stop"?0:Math.max(0,this.intervalMs-(this.now()-this.lastSent)),i=()=>{e===this.generation&&(this.scheduled=!1,this._flush())};t>0?this.timer=setTimeout(i,t):queueMicrotask(i)}async _flush(){if(this.inFlight||!this.pending)return;let e=this.pending,t=this.generation;this.pending=null,this.inFlight=!0,this.lastSent=this.now();try{await this.send(e)}catch(i){t===this.generation&&(this.signature=null,this.onError(i))}finally{this.inFlight=!1,this._schedule()}}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sl=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(n,e){if(!n)throw lt(e)},lt=function(n){return new Error("Firebase Database ("+cr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ol=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xd=function(n){let e=[],t=0,i=0;for(;t<n.length;){let s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){let r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){let r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{let r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){let r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4,u=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(u=64)),i.push(t[h],t[d],t[u],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){let r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;let c=s<n.length?t[n.charAt(s)]:64;++s;let d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new hr;let u=r<<2|a>>4;if(i.push(u),c!==64){let p=a<<4&240|c>>2;if(i.push(p),d!==64){let f=c<<6&192|d;i.push(f)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},hr=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},ur=function(n){let e=ol(n);return bi.encodeByteArray(e,!0)},rn=function(n){return ur(n).replace(/\./g,"")},Nt=function(n){try{return bi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){return ll(void 0,n)}function ll(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!Zd(t)||(n[t]=ll(n[t],e[t]));return n}function Zd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tu=()=>eu().__FIREBASE_DEFAULTS__,nu=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Nt(n[1]);return e&&JSON.parse(e)},fr=()=>{try{return sl()||tu()||nu()||iu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pr=n=>fr()?.emulatorHosts?.[n],cl=n=>{let e=pr(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},mr=()=>fr()?.config,gr=n=>fr()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[rn(JSON.stringify(t)),rn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function on(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function dl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ul(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ii(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fl(){let n=Q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ie(){return cr.NODE_CLIENT===!0||cr.NODE_ADMIN===!0}function pl(){try{return typeof indexedDB=="object"}catch{return!1}}function ml(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var su="FirebaseError",fe=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=su,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}},Pe=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ru(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fe(s,a,i)}};function ru(n,e){try{let t=0,i="";for(;t<n.length;){let s=n.indexOf("{$",t);if(s===-1){i+=n.substring(t);break}let r=n.indexOf("}",s+2);if(r===-1){i+=n.substring(t);break}let o=n.substring(s+2,r),a=e[o];i+=n.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=r+1}return i}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n){return JSON.parse(n)}function j(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gl=function(n){let e={},t={},i={},s="";try{let r=n.split(".");e=xt(Nt(r[0])||""),t=xt(Nt(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}};var _l=function(n){let e=gl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},yl=function(n){let e=gl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Fe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ot(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function an(n,e,t){let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function we(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let s of t){if(!i.includes(s))return!1;let r=n[s],o=e[s];if(rl(r)&&rl(o)){if(!we(r,o))return!1}else if(r!==o)return!1}for(let s of i)if(!t.includes(s))return!1;return!0}function rl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Dt(n){let e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){let[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Mt(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yi=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){let u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);let u=(s<<5|s>>>27)+c+l+h+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let i=t-this.blockSize,s=0,r=this.buf_,o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}};function bl(n,e){let t=new dr(n,e);return t.subscribe.bind(t)}var dr=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ou(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=lr),s.error===void 0&&(s.error=lr),s.complete===void 0&&(s.complete=lr);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function ou(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lr(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Il=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){let r=s-55296;i++,m(i<n.length,"Surrogate pair missing trail surrogate.");let o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ln=function(n){let e=0;for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y_=14400*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wi(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new Y;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lu(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(t);try{let r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[r,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){let i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);let r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:au(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function au(n){return n===ht?void 0:n}function lu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new vi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cu=[],D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));var hu={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},du=D.INFO,uu={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},fu=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),s=uu[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Be=class{constructor(e){this.name=e,this._logLevel=du,this._logHandler=fu,this._userLogHandler=null,cu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}};var pu=(n,e)=>e.some(t=>n instanceof t),wl,vl;function mu(){return wl||(wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gu(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var El=new WeakMap,yr=new WeakMap,kl=new WeakMap,_r=new WeakMap,Ir=new WeakMap;function _u(n){let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ve(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&El.set(t,n)}).catch(()=>{}),Ir.set(e,n),e}function yu(n){if(yr.has(n))return;let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});yr.set(n,e)}var br={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sl(n){br=n(br)}function bu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(Ei(this),e,...t);return kl.set(i,e.sort?e.sort():[e]),ve(i)}:gu().includes(n)?function(...e){return n.apply(Ei(this),e),ve(El.get(this))}:function(...e){return ve(n.apply(Ei(this),e))}}function Iu(n){return typeof n=="function"?bu(n):(n instanceof IDBTransaction&&yu(n),pu(n,mu())?new Proxy(n,br):n)}function ve(n){if(n instanceof IDBRequest)return _u(n);if(_r.has(n))return _r.get(n);let e=Iu(n);return e!==n&&(_r.set(n,e),Ir.set(e,n)),e}var Ei=n=>Ir.get(n);function Cl(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){let o=indexedDB.open(n,e),a=ve(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ve(o.result),l.oldVersion,l.newVersion,ve(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}var wu=["get","getKey","getAll","getAllKeys","count"],vu=["put","add","delete","clear"],wr=new Map;function Tl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wr.get(e))return wr.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,s=vu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wu.includes(t)))return;let r=async function(o,...a){let l=this.transaction(o,s?"readwrite":"readonly"),c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return wr.set(e,r),r}Sl(n=>({...n,get:(e,t,i)=>Tl(e,t)||n.get(e,t,i),has:(e,t)=>!!Tl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Eu(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function Eu(n){return n.getComponent()?.type==="VERSION"}var kr="@firebase/app",Pl="0.16.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re=new Be("@firebase/app"),ku="@firebase/app-compat",Su="@firebase/analytics-compat",Tu="@firebase/analytics",Cu="@firebase/app-check-compat",Pu="@firebase/app-check",Au="@firebase/auth",Ru="@firebase/auth-compat",Nu="@firebase/database",xu="@firebase/data-connect",Ou="@firebase/database-compat",Du="@firebase/functions",Mu="@firebase/functions-compat",Lu="@firebase/installations",Uu="@firebase/installations-compat",Fu="@firebase/messaging",zu="@firebase/messaging-compat",Wu="@firebase/performance",Bu="@firebase/performance-compat",Vu="@firebase/remote-config",Hu="@firebase/remote-config-compat",ju="@firebase/storage",qu="@firebase/storage-compat",$u="@firebase/firestore",Gu="@firebase/ai",Ku="@firebase/firestore-compat",Yu="firebase",Ju="13.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr="[DEFAULT]",Qu={[kr]:"fire-core",[ku]:"fire-core-compat",[Tu]:"fire-analytics",[Su]:"fire-analytics-compat",[Pu]:"fire-app-check",[Cu]:"fire-app-check-compat",[Au]:"fire-auth",[Ru]:"fire-auth-compat",[Nu]:"fire-rtdb",[xu]:"fire-data-connect",[Ou]:"fire-rtdb-compat",[Du]:"fire-fn",[Mu]:"fire-fn-compat",[Lu]:"fire-iid",[Uu]:"fire-iid-compat",[Fu]:"fire-fcm",[zu]:"fire-fcm-compat",[Wu]:"fire-perf",[Bu]:"fire-perf-compat",[Vu]:"fire-rc",[Hu]:"fire-rc-compat",[ju]:"fire-gcs",[qu]:"fire-gcs-compat",[$u]:"fire-fst",[Ku]:"fire-fst-compat",[Gu]:"fire-vertex","fire-js":"fire-js",[Yu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn=new Map,Xu=new Map,Tr=new Map;function Al(n,e){try{n.container.addComponent(e)}catch(t){Re.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ve(n){let e=n.name;if(Tr.has(e))return Re.debug(`There were multiple attempts to register component ${e}.`),!1;Tr.set(e,n);for(let t of hn.values())Al(t,n);for(let t of Xu.values())Al(t,n);return!0}function un(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function re(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new Pe("app","Firebase",Zu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr=class{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He=Ju;function fn(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i={name:Sr,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Ae.create("bad-app-name",{appName:String(s)});if(t||(t=mr()),!t)throw Ae.create("no-options");let r=hn.get(s);if(r)if(we(t,r.options)){if(we(i,r.config))return r;throw Ae.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(i)})}else throw Ae.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});let o=new cn(s);for(let l of Tr.values())o.addComponent(l);let a=new Cr(t,i,o);return hn.set(s,a),a}function ki(n=Sr){let e=hn.get(n);if(!e&&n===Sr&&mr())return fn();if(!e)throw Ae.create("no-app",{appName:n});return e}function Si(){return Array.from(hn.values())}function pe(n,e,t){let i=Qu[n]??n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){let o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Re.warn(o.join(" "));return}Ve(new ce(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ef="firebase-heartbeat-database",tf=1,dn="firebase-heartbeat-store",vr=null;function Ol(){return vr||(vr=Cl(ef,tf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ae.create("idb-open",{originalErrorMessage:n.message})})),vr}async function nf(n){try{let t=(await Ol()).transaction(dn),i=await t.objectStore(dn).get(Dl(n));return await t.done,i}catch(e){if(e instanceof fe)Re.warn(e.message);else{let t=Ae.create("idb-get",{originalErrorMessage:e?.message});Re.warn(t.message)}}}async function Rl(n,e){try{let i=(await Ol()).transaction(dn,"readwrite");await i.objectStore(dn).put(e,Dl(n)),await i.done}catch(t){if(t instanceof fe)Re.warn(t.message);else{let i=Ae.create("idb-set",{originalErrorMessage:t?.message});Re.warn(i.message)}}}function Dl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sf=1024,rf=30,Pr=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Ar(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nl();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>rf){let s=af(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Re.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=Nl(),{heartbeatsToSend:t,unsentEntries:i}=of(this._heartbeatsCache.heartbeats),s=rn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Re.warn(e),""}}};function Nl(){return new Date().toISOString().substring(0,10)}function of(n,e=sf){let t=[],i=n.slice();for(let s of n){let r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),xl(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),xl(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var Ar=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?ml().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await nf(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return Rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return Rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function xl(n){return rn(JSON.stringify({version:2,heartbeats:n})).length}function af(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n){Ve(new ce("platform-logger",e=>new Er(e),"PRIVATE")),Ve(new ce("heartbeat",e=>new Pr(e),"PRIVATE")),pe(kr,Pl,n),pe(kr,Pl,"esm2020"),pe("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lf("");var cf="firebase",hf="13.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(cf,hf,"app");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var tc=ec,nc=new Pe("auth","Firebase",ec());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi=new Be("@firebase/auth");function Ci(n,...e){Oi.logLevel<=D.WARN&&Oi.warn(`Auth (${He}): ${n}`,...e)}function Pi(n,...e){Oi.logLevel<=D.ERROR&&Oi.error(`Auth (${He}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,...e){throw eo(n,...e)}function ke(n,...e){return eo(n,...e)}function Zr(n,e,t){let i={...tc(),[e]:t};return new Pe("auth","Firebase",i).create(e,{appName:n.name})}function $e(n){return Zr(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eo(n,...e){if(typeof n!="string"){let t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return nc.create(n,...e)}function g(n,e,...t){if(!n)throw eo(e,...t)}function Ee(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Pi(e),new Error(e)}function xe(n,e){n||Ee(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return typeof self<"u"&&self.location?.href||""}function df(){return Ml()==="http:"||Ml()==="https:"}function Ml(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(df()||ul()||"connection"in navigator)?navigator.onLine:!0}function ff(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,xe(t>e,"Short delay should be less than long delay!"),this.isMobile=on()||Ii()}get(){return uf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e){xe(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Di=class{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gf=new dt(3e4,6e4);function q(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function X(n,e,t,i,s={}){return ic(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});let a=ze({...o,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let c={method:e,headers:l,...r};return dl()||(c.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ct(n.emulatorConfig.host)&&(c.credentials="include"),Di.fetch()(await sc(n,n.config.apiHost,t,a),c)})}async function ic(n,e,t){n._canInitEmulator=!1;let i={...pf,...e};try{let s=new Lr(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();let o=await r.json();if("needConfirmation"in o)throw mn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{let a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw mn(n,"user-disabled",o);let h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zr(n,h,c);me(n,h)}}catch(s){if(s instanceof fe)throw s;me(n,"network-request-failed",{message:String(s)})}}async function Ge(n,e,t,i,s={}){let r=await X(n,e,t,i,s);return"mfaPendingCredential"in r&&me(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function sc(n,e,t,i){let s=`${e}${t}?${i}`,r=n,o=r.config.emulator?to(n.config,s):`${n.config.apiScheme}://${s}`;return mf.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function _f(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Lr=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ke(this.auth,"network-request-failed")),gf.get())})}};function mn(n,e,t){let i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);let s=ke(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){return n!==void 0&&n.enterprise!==void 0}var Mi=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _f(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(n,e){return X(n,"GET","/v2/recaptchaConfig",q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(n,e){return X(n,"POST","/v1/accounts:delete",e)}async function Li(n,e){return X(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(n,e=!1){let t=W(n),i=await t.getIdToken(e),s=no(i);g(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");let r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:gn(Rr(s.auth_time)),issuedAtTime:gn(Rr(s.iat)),expirationTime:gn(Rr(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Rr(n){return Number(n)*1e3}function no(n){let[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{let s=Nt(t);return s?JSON.parse(s):(Pi("Failed to decode base64 JWT payload"),null)}catch(s){return Pi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ul(n){let e=no(n);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw ac(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ac(n){return n instanceof fe?n.code==="auth/user-disabled"||n.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;let i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vn=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(n){let e=n.auth,t=await n.getIdToken(),i=await wn(n,Li(e,{idToken:t}));g(i?.users.length,e,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let r=s.providerUserInfo?.length?cc(s.providerUserInfo):[],o=bf(n.providerData,r),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,c=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vn(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function lc(n){let e=W(n);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bf(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function cc(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(n,e){let t=await ic(n,{},async()=>{let i=ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await sc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:a,body:i};return n.emulatorConfig&&ct(n.emulatorConfig.host)&&(l.credentials="include"),Di.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wf(n,e){return X(n,"POST","/v2/accounts:revokeToken",q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){g(e.length!==0,"internal-error");let t=Ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:s,expiresIn:r}=await If(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){let{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new n;return i&&(g(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(g(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(g(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Ee("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){g(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var qe=class n{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Ur(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await wn(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oc(this,e)}reload(){return lc(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ui(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(re(this.auth.app))return Promise.reject($e(this.auth));let e=await this.getIdToken();return await wn(this,yf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){let i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:p,providerData:f,stsTokenManager:w}=t;g(d&&w,e,"internal-error");let O=_n.fromJSON(this.name,w);g(typeof d=="string",e,"internal-error"),je(i,e.name),je(s,e.name),g(typeof u=="boolean",e,"internal-error"),g(typeof p=="boolean",e,"internal-error"),je(r,e.name),je(o,e.name),je(a,e.name),je(l,e.name),je(c,e.name),je(h,e.name);let B=new n({uid:d,auth:e,email:s,emailVerified:u,displayName:i,isAnonymous:p,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:O,createdAt:c,lastLoginAt:h});return f&&Array.isArray(f)&&(B.providerData=f.map(v=>({...v}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,t,i=!1){let s=new _n;s.updateFromServerResponse(t);let r=new n({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ui(r),r}static async _fromGetAccountInfoResponse(e,t,i){let s=t.users[0];g(s.localId!==void 0,"internal-error");let r=s.providerUserInfo!==void 0?cc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!r?.length,a=new _n;a.updateFromIdToken(i);let l=new n({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new vn(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(l,c),l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fl=new Map;function Ne(n){xe(n instanceof Function,"Expected a class definition");let e=Fl.get(n);return e?(xe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fi=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Fi.type="NONE";var Fr=Fi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n,e,t){return`firebase:${n}:${e}:${t}`}var yn=class n{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:s,name:r}=this.auth;this.fullUserKey=Ai(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ai("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Li(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,i="authUser"){if(!t.length)return new n(Ne(Fr),e,i);let s=(await Promise.all(t.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c),r=s[0]||Ne(Fr),o=Ai(i,e.config.apiKey,e.name),a=null;for(let c of t)try{let h=await c._get(o);if(h){let d;if(typeof h=="string"){let u=await Li(e,{idToken:h}).catch(()=>{});if(!u)break;d=await qe._fromGetAccountInfoResponse(e,u,h)}else d=qe._fromJSON(e,h);c!==r&&(a=d),r=c;break}}catch{}let l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new n(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new n(r,e,i))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mc(e))return"Blackberry";if(gc(e))return"Webos";if(dc(e))return"Safari";if((e.includes("chrome/")||uc(e))&&!e.includes("edge/"))return"Chrome";if(pc(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function hc(n=Q()){return/firefox\//i.test(n)}function dc(n=Q()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uc(n=Q()){return/crios\//i.test(n)}function fc(n=Q()){return/iemobile/i.test(n)}function pc(n=Q()){return/android/i.test(n)}function mc(n=Q()){return/blackberry/i.test(n)}function gc(n=Q()){return/webos/i.test(n)}function io(n=Q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vf(n=Q()){return io(n)&&!!window.navigator?.standalone}function Ef(){return fl()&&document.documentMode===10}function _c(n=Q()){return io(n)||pc(n)||gc(n)||mc(n)||/windows phone/i.test(n)||fc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n,e=[]){let t;switch(n){case"Browser":t=zl(Q());break;case"Worker":t=`${zl(Q())}-${n}`;break;default:t=n}let i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${He}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zr=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=r=>new Promise((o,a)=>{try{let l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);let s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(let s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(n,e={}){return X(n,"GET","/v2/passwordPolicy",q(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sf=6,Wr=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Sf,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br=class{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zi(this),this.idTokenSubscription=new zi(this),this.beforeStateQueue=new zr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ne(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await yn.create(this,e)}catch(i){Ci(`Failed to initialize persistence: ${i}`),this.persistenceManager=await yn.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(i){Ci(`Failed to initialize current user: ${i}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Li(this,{idToken:e}),i=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(re(this.app)){let r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=this.redirectUser?._redirectEventId,o=i?._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&a?.user&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(t){if(ac(t))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ff()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(re(this.app))return Promise.reject($e(this));let t=e?W(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return re(this.app)?Promise.reject($e(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return re(this.app)?Promise.reject($e(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await kf(this),t=new Wr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pe("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await wf(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Ne(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[Ne(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};let r=typeof t=="function"?t:t.next.bind(t),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}).catch(l=>{if(!o)if(typeof t!="function"&&t.error)t.error(l);else if(i)i(l);else throw l}),typeof t=="function"){let l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{let l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){let i=t?.message||String(t),s=Zr(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);let i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ci(`Error while retrieving App Check token: ${e.error}`),e?.token}};function _t(n){return W(n)}var zi=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=bl(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ns={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tf(n){ns=n}function bc(n){return ns.loadJS(n)}function Cf(){return ns.recaptchaEnterpriseScript}function Pf(){return ns.gapiScript}function Ic(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=class{constructor(){this.enterprise=new Hr}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Hr=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Af="recaptcha-enterprise",bn="NO_RECAPTCHA",Wl="onFirebaseAuthREInstanceReady",En=class n{constructor(e){this.type=Af,this.auth=_t(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{rc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let c=new Mi(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){let l=window.grecaptcha;Ll(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(bn)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Vr().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(async a=>{if(!t&&Ll(window.grecaptcha)&&n.scriptInjectionDeferred)await n.scriptInjectionDeferred.promise,s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Cf();l.length!==0&&(l+=a+`&onload=${Wl}`),n.scriptInjectionDeferred=new Y,window[Wl]=()=>{n.scriptInjectionDeferred?.resolve()},bc(l).then(()=>n.scriptInjectionDeferred?.promise).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}};En.scriptInjectionDeferred=null;async function pn(n,e,t,i=!1,s=!1){let r=new En(n),o;if(s)o=bn;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}let a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){let l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function In(n,e,t,i,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let r=await pn(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await pn(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)});else if(s==="PHONE_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let r=await pn(n,e,t);return i(n,r).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let a=await pn(n,e,t,!1,!0);return i(n,a)}return Promise.reject(o)})}else{let r=await pn(n,e,t,!1,!0);return i(n,r)}else return Promise.reject(s+" provider is not supported.")}async function Rf(n){let e=_t(n),t=await rc(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new Mi(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new En(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n,e){let t=un(n,"auth");if(t.isInitialized()){let s=t.getImmediate(),r=t.getOptions();if(we(r,e??{}))return s;me(s,"already-initialized")}return t.initialize({options:e})}function Nf(n,e){let t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Ne);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function vc(n,e,t){let i=_t(n);g(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");let s=!!t?.disableWarnings,r=Ec(e),{host:o,port:a}=xf(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){g(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),g(we(c,i.config.emulator)&&we(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,ct(o)?wi(`${r}//${o}${l}`):s||Of()}function Ec(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xf(n){let e=Ec(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){let r=s[1];return{host:r,port:Bl(i.substr(r.length+1))}}else{let[r,o]=i.split(":");return{host:r,port:Bl(o)}}}function Bl(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Of(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ee("not implemented")}_getIdTokenResponse(e){return Ee("not implemented")}_linkToIdToken(e,t){return Ee("not implemented")}_getReauthenticationResolver(e){return Ee("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(n,e){return X(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(n,e){return Ge(n,"POST","/v1/accounts:signInWithPassword",q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(n,e){return Ge(n,"POST","/v1/accounts:signInWithEmailLink",q(n,e))}async function Uf(n,e){return Ge(n,"POST","/v1/accounts:signInWithEmailLink",q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn=class n extends ut{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new n(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,t,"signInWithPassword",Mf,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Lf(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,i,"signUpPassword",Df,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Uf(e,{idToken:t,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(n,e){return Ge(n,"POST","/v1/accounts:signInWithIdp",q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ff="http://localhost",ft=class n extends ut{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;let o=new n(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return Lt(e,t)}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,Lt(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Lt(e,t)}buildRequest(){let e={requestUri:Ff,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(n,e){return X(n,"POST","/v1/accounts:sendVerificationCode",q(n,e))}async function zf(n,e){return Ge(n,"POST","/v1/accounts:signInWithPhoneNumber",q(n,e))}async function Wf(n,e){let t=await Ge(n,"POST","/v1/accounts:signInWithPhoneNumber",q(n,e));if(t.temporaryProof)throw mn(n,"account-exists-with-different-credential",t);return t}var Bf={USER_NOT_FOUND:"user-not-found"};async function Vf(n,e){let t={...e,operation:"REAUTH"};return Ge(n,"POST","/v1/accounts:signInWithPhoneNumber",q(n,t),Bf)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn=class n extends ut{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return zf(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Wf(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Vf(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!t&&!s&&!r?null:new n({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jf(n){let e=Dt(Mt(n)).link,t=e?Dt(Mt(e)).deep_link_id:null,i=Dt(Mt(n)).deep_link_id;return(i?Dt(Mt(i)).link:null)||i||t||e||n}var Wi=class n{constructor(e){let t=Dt(Mt(e)),i=t.apiKey??null,s=t.oobCode??null,r=Hf(t.mode??null);g(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){let t=jf(e);try{return new n(t)}catch{return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return kn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=Wi.parseLink(t);return g(i,"argument-error"),kn._fromEmailAndCode(e,i.code,i.tenantId)}};Ut.PROVIDER_ID="password";Ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt=class extends Bi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn=class n extends pt{constructor(){super("facebook.com")}static credential(e){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn=class n extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return n.credential(t,i)}catch{return null}}};Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn=class n extends pt{constructor(){super("github.com")}static credential(e){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An=class n extends pt{constructor(){super("twitter.com")}static credential(e,t){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return n.credential(t,i)}catch{return null}}};An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e){return Ge(n,"POST","/v1/accounts:signUp",q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){let r=await qe._fromIdTokenResponse(e,i,s),o=Hl(i);return new n({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);let s=Hl(i);return new n({user:e,providerId:s,_tokenResponse:i,operationType:t})}};function Hl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(n){if(re(n.app))return Promise.reject($e(n));let e=_t(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new mt({user:e.currentUser,providerId:null,operationType:"signIn"});let t=await qf(e,{returnSecureToken:!0}),i=await mt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jr=class n extends fe{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new n(e,t,i,s)}};function kc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(n,r,e,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(n,e,t=!1){let i=await wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(n,e,t=!1){let{auth:i}=n;if(re(i.app))return Promise.reject($e(i));let s="reauthenticate";try{let r=await wn(n,kc(i,s,e,n),t);g(r.idToken,i,"internal-error");let o=no(r.idToken);g(o,i,"internal-error");let{sub:a}=o;return g(n.uid===a,i,"user-mismatch"),mt._forOperation(n,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&me(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(n,e,t=!1){if(re(n.app))return Promise.reject($e(n));let i="signIn",s=await kc(n,i,e),r=await mt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n,e){return W(n).setPersistence(e)}function Sc(n,e,t,i){return W(n).onIdTokenChanged(e,t,i)}function Tc(n,e,t){return W(n).beforeAuthStateChanged(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n,e){return X(n,"POST","/v2/accounts/mfaEnrollment:start",q(n,e))}function Yf(n,e){return X(n,"POST","/v2/accounts/mfaEnrollment:finalize",q(n,e))}function Jf(n,e){return X(n,"POST","/v2/accounts/mfaEnrollment:start",q(n,e))}function Qf(n,e){return X(n,"POST","/v2/accounts/mfaEnrollment:finalize",q(n,e))}var Vi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xf=1e3,Zf=10,ji=class extends Hi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_c(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}let i=e.key;t?this.detachListener():this.stopPolling();let s=()=>{let o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ef()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zf):s()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Xf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ji.type="LOCAL";var Cc=ji;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ep=1e3;function Nr(n){let e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return document.cookie.match(t)?.[1]??null}function xr(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var qr=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=xr(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:Nr(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let i=xr(e);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let i=xr(e);if(window.cookieStore){let a=(c=>{let h=c.changed.find(u=>u.name===i);h&&t(h.value),c.deleted.find(u=>u.name===i)&&t(null)}),l=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",a)}let s=Nr(i),r=setInterval(()=>{let a=Nr(i);a!==s&&(t(a),s=a)},ep),o=()=>clearInterval(r);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){let i=this.listenerUnsubscribes.get(t);i&&(i(),this.listenerUnsubscribes.delete(t))}};qr.type="COOKIE";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qi=class extends Hi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};qi.type="SESSION";var xn=qi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $i=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;let i=new n(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});let a=Array.from(o).map(async c=>c(t.origin,r)),l=await tp(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};$i.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $r=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{let c=oo("",20);s.port1.start();let h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){let u=d;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(u.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return window}function np(n){Se().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function ip(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sp(){return navigator?.serviceWorker?.controller||null}function rp(){return Pc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ac="firebaseLocalStorageDb",op=1,Gi="firebaseLocalStorage",Rc="fbase_key",gt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function is(n,e){return n.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function ap(){let n=indexedDB.deleteDatabase(Ac);return new gt(n).toPromise()}function Nc(){let n=indexedDB.open(Ac,op);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let i=n.result;try{i.createObjectStore(Gi,{keyPath:Rc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{let i=n.result;i.objectStoreNames.contains(Gi)?e(i):(i.close(),await ap(),e(await Nc()))})})}async function ql(n,e,t){let i=is(n,!0).put({[Rc]:e,value:t});return new gt(i).toPromise()}async function lp(n,e){let t=is(n,!1).get(e),i=await new gt(t).toPromise();return i===void 0?null:i.value}function $l(n,e){let t=is(n,!0).delete(e);return new gt(t).toPromise()}var cp=800,hp=3,Ki=class{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Nc(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{let i=await this._openDb();return await e(i)}catch(i){if(t++>hp)throw i;if(this.dbPromise){let s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$i._getInstance(rp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ip(),!this.activeServiceWorker)return;this.sender=new $r(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await ql(e,Vi,"1"),await $l(e,Vi)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ql(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(i=>lp(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{let e=await this._withRetries(s=>{let r=is(s,!1).getAll();return new gt(r).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],i=new Set;if(e.length!==0)for(let{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(let s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||Ci(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}};Ki.type="LOCAL";var xc=Ki;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n,e){return X(n,"POST","/v2/accounts/mfaSignIn:start",q(n,e))}function dp(n,e){return X(n,"POST","/v2/accounts/mfaSignIn:finalize",q(n,e))}function up(n,e){return X(n,"POST","/v2/accounts/mfaSignIn:finalize",q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w0=Ic("rcb"),v0=new dt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ri="recaptcha";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(n,e,t){if(!n._getRecaptchaConfig())try{await Rf(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){g(s.type==="enroll",n,"internal-error");let r={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await In(n,r,"mfaSmsEnrollment",async(c,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===bn){g(t?.type===Ri,c,"argument-error");let d=await Or(c,h,t);return jl(c,d)}return jl(c,h)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{g(s.type==="signin",n,"internal-error");let r=i.multiFactorHint?.uid||i.multiFactorUid;g(r,n,"missing-multi-factor-info");let o={mfaPendingCredential:s.credential,mfaEnrollmentId:r,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await In(n,o,"mfaSmsSignIn",async(h,d)=>{if(d.phoneSignInInfo.captchaResponse===bn){g(t?.type===Ri,h,"argument-error");let u=await Or(h,d,t);return Gl(h,u)}return Gl(h,d)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await In(n,s,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===bn){g(t?.type===Ri,l,"argument-error");let h=await Or(l,c,t);return Vl(l,h)}return Vl(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function Or(n,e,t){g(t.type===Ri,n,"argument-error");let i=await t.verify();g(typeof i=="string",n,"argument-error");let s={...e};if("phoneEnrollmentInfo"in s){let r=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:r,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){let r=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:r,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=_t(e)}verifyPhoneNumber(e,t){return fp(this.auth,e,W(t))}static credential(e,t){return Sn._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?Sn._fromTokenResponse(t,i):null}};Rn.PROVIDER_ID="phone";Rn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n,e){return e?Ne(e):(g(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn=class extends ut{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lt(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function mp(n){return Kf(n.auth,new Nn(n),n.bypassAuthState)}function gp(n){let{auth:e,user:t}=n;return g(t,e,"internal-error"),Gf(t,new Nn(n),n.bypassAuthState)}async function _p(n){let{auth:e,user:t}=n;return g(t,e,"internal-error"),$f(t,new Nn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yi=class{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}let l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mp;case"linkViaPopup":case"linkViaRedirect":return _p;case"reauthViaPopup":case"reauthViaRedirect":return gp;default:me(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yp=new dt(2e3,1e4);var Gr=class n extends Yi{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");let e=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yp.get())};e()}};Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bp="pendingRedirect",Ni=new Map,Kr=class extends Yi{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{let i=await Ip(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Ip(n,e){let t=Ep(e),i=vp(n);if(!await i._isAvailable())return!1;let s=await i._get(t)==="true";return await i._remove(t),s}function wp(n,e){Ni.set(n._key(),e)}function vp(n){return Ne(n._redirectPersistence)}function Ep(n){return Ai(bp,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(n,e,t=!1){if(re(n.app))return Promise.reject($e(n));let i=_t(n),s=pp(i,e),o=await new Kr(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sp=600*1e3,Yr=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Oc(e)){let i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ke(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kl(e))}saveEventToCache(e){this.cachedEventUids.add(Kl(e)),this.lastProcessedEventTime=Date.now()}};function Kl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Oc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Tp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,e={}){return X(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ap=/^https?/;async function Rp(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Cp(n);for(let t of e)try{if(Np(t))return}catch{}me(n,"unauthorized-domain")}function Np(n){let e=Mr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Ap.test(t))return!1;if(Pp.test(n))return i===n;let s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xp=new dt(3e4,6e4);function Yl(){let n=Se().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Op(n){return new Promise((e,t)=>{function i(){Yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yl(),t(ke(n,"network-request-failed"))},timeout:xp.get()})}if(Se().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Se().gapi?.load)i();else{let s=Ic("iframefcb");return Se()[s]=()=>{gapi.load?i():t(ke(n,"network-request-failed"))},bc(`${Pf()}?onload=${s}`).catch(r=>t(r))}}).catch(e=>{throw xi=null,e})}var xi=null;function Dp(n){return xi=xi||Op(n),xi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mp=new dt(5e3,15e3),Lp="__/auth/iframe",Up="emulator/auth/iframe",Fp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wp(n){let e=n.config;g(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?to(e,Up):`https://${n.config.authDomain}/${Lp}`,i={apiKey:e.apiKey,appName:n.name,v:He},s=zp.get(n.config.apiHost);s&&(i.eid=s);let r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${ze(i).slice(1)}`}async function Bp(n){let e=await Dp(n),t=Se().gapi;return g(t,n,"internal-error"),e.open({where:document.body,url:Wp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fp,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});let o=ke(n,"network-request-failed"),a=Se().setTimeout(()=>{r(o)},Mp.get());function l(){Se().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hp=500,jp=600,qp="_blank",$p="http://localhost",Ji=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Gp(n,e,t,i=Hp,s=jp){let r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),a="",l={...Vp,width:i.toString(),height:s.toString(),top:r,left:o},c=Q().toLowerCase();t&&(a=uc(c)?qp:t),hc(c)&&(e=e||$p,l.scrollbars="yes");let h=Object.entries(l).reduce((u,[p,f])=>`${u}${p}=${f},`,"");if(vf(c)&&a!=="_self")return Kp(e||"",a),new Ji(null);let d=window.open(e||"",a,h);g(d,n,"popup-blocked");try{d.focus()}catch{}return new Ji(d)}function Kp(n,e){let t=document.createElement("a");t.href=n,t.target=e;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yp="__/auth/handler",Jp="emulator/auth/handler",Qp=encodeURIComponent("fac");async function Jl(n,e,t,i,s,r){g(n.config.authDomain,n,"auth-domain-config-required"),g(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:He,eventId:s};if(e instanceof Bi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ot(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[h,d]of Object.entries(r||{}))o[h]=d}if(e instanceof pt){let h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);let a=o;for(let h of Object.keys(a))a[h]===void 0&&delete a[h];let l=await n._getAppCheckToken(),c=l?`#${Qp}=${encodeURIComponent(l)}`:"";return`${Xp(n)}?${ze(a).slice(1)}${c}`}function Xp({config:n}){return n.emulator?to(n,Jp):`https://${n.authDomain}/${Yp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr="webStorageSupport",Jr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xn,this._completeRedirectFn=kp,this._overrideRedirectResult=wp}async _openPopup(e,t,i,s){xe(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");let r=await Jl(e,t,i,Mr(),s);return Gp(e,r,oo())}async _openRedirect(e,t,i,s){await this._originValidation(e);let r=await Jl(e,t,i,Mr(),s);return np(r),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(xe(r,"If manager is not set, promise should be"),r)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await Bp(e),i=new Yr(e);return t.register("authEvent",s=>(g(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Dr,{type:Dr},s=>{let r=s?.[0]?.[Dr];r!==void 0&&t(!!r),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _c()||dc()||io()}},Dc=Jr,Qi=class{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ee("unexpected MultiFactorSessionType")}}},Qr=class n extends Qi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,i){return Yf(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return dp(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Xi=class{constructor(){}static assertion(e){return Qr._fromCredential(e)}};Xi.FACTOR_ID="phone";var Zi=class{static assertionForEnrollment(e,t){return es._fromSecret(e,t)}static assertionForSignIn(e,t){return es._fromEnrollmentId(e,t)}static async generateSecret(e){let t=e;g(typeof t.user?.auth<"u","internal-error");let i=await Jf(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ts._fromStartTotpMfaEnrollmentResponse(i,t.user.auth)}};Zi.FACTOR_ID="totp";var es=class n extends Qi{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,i){return g(typeof this.secret<"u",e,"argument-error"),Qf(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){g(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let i={verificationCode:this.otp};return up(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}},ts=class n{constructor(e,t,i,s,r,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let i=!1;return(Ti(e)||Ti(t))&&(i=!0),i&&(Ti(e)&&(e=this.auth.currentUser?.email||"unknownuser"),Ti(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ti(n){return typeof n>"u"||n?.length===0}var Ql="@firebase/auth",Xl="1.13.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xr=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function em(n){Ve(new ce("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});let l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yc(n)},c=new Br(i,s,r,l);return Nf(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ve(new ce("auth-internal",e=>{let t=_t(e.getProvider("auth").getImmediate());return(i=>new Xr(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(Ql,Xl,Zp(n)),pe(Ql,Xl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tm=300,nm=gr("authIdTokenMaxAge")||tm,Zl=null,im=n=>async e=>{let t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>nm)return;let s=t?.token;Zl!==s&&(Zl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ao(n=ki()){let e=un(n,"auth");if(e.isInitialized())return e.getImmediate();let t=wc(n,{popupRedirectResolver:Dc,persistence:[xc,Cc,xn]}),i=gr("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){let r=new URL(i,location.origin);if(location.origin===r.origin){let o=im(r.toString());Tc(t,o,()=>o(t.currentUser)),Sc(t,a=>o(a))}}let s=pr("auth");return s&&vc(t,`http://${s}`),t}function sm(){return document.getElementsByTagName("head")?.[0]??document}Tf({loadJS(n){return new Promise((e,t)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{let r=ke("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",sm().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});em("Browser");var Mc="@firebase/database",Lc="1.1.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ma="";function rm(n){ma=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var go=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:xt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _o=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mh=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){let e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new go(e)}}catch{}return new _o},bt=mh("localStorage"),yo=mh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=new Be("@firebase/database"),gh=(function(){let n=1;return function(){return n++}})(),_h=function(n){let e=Il(n),t=new yi;t.update(e);let i=t.digest();return bi.encodeByteArray(i)},Xn=function(...n){let e="";for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Xn.apply(null,i):typeof i=="object"?e+=j(i):e+=i,e+=" "}return e},It=null,Uc=!0,om=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Wt.logLevel=D.VERBOSE,It=Wt.log.bind(Wt),e&&yo.set("logging_enabled",!0)):typeof n=="function"?It=n:(It=null,yo.remove("logging_enabled"))},G=function(...n){if(Uc===!0&&(Uc=!1,It===null&&yo.get("logging_enabled")===!0&&om(!0)),It){let e=Xn.apply(null,n);It(e)}},Zn=function(n){return function(...e){G(n,...e)}},bo=function(...n){let e="FIREBASE INTERNAL ERROR: "+Xn(...n);Wt.error(e)},De=function(...n){let e=`FIREBASE FATAL ERROR: ${Xn(...n)}`;throw Wt.error(e),new Error(e)},ne=function(...n){let e="FIREBASE WARNING: "+Xn(...n);Wt.warn(e)},am=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},lm=function(n){if(Ie()||document.readyState==="complete")n();else{let e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vt="[MIN_NAME]",Ze="[MAX_NAME]",Tt=function(n,e){if(n===e)return 0;if(n===vt||e===Ze)return-1;if(e===vt||n===Ze)return 1;{let t=Fc(n),i=Fc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},cm=function(n,e){return n===e?0:n<e?-1:1},On=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+j(e))},ga=function(n){if(typeof n!="object"||n===null)return j(n);let e=[];for(let i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=j(e[i]),t+=":",t+=ga(n[e[i]]);return t+="}",t},yh=function(n,e){let t=n.length;if(t<=e)return[n];let i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function K(n,e){for(let t in n)n.hasOwnProperty(t)&&e(t,n[t])}var bh=function(n){m(!Rs(n),"Invalid JSON number");let e=11,t=52,i=(1<<e-1)-1,s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));let c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();let h=c.join(""),d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},hm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function um(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");let i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}var fm=new RegExp("^-?(0*)\\d{1,10}$"),pm=-2147483648,mm=2147483647,Fc=function(n){if(fm.test(n)){let e=Number(n);if(e>=pm&&e<=mm)return e}return null},Jt=function(n){try{n()}catch(e){setTimeout(()=>{let t=e.stack||"";throw ne("Exception was thrown by user callback.",t),e},Math.floor(0))}},gm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Un=function(n,e){let t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Io=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,re(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ne(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wo=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(G("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ne(e)}},Je=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Je.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rs="5",Ih="v",wh="s",vh="r",Eh="f",kh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sh="ls",Th="p",vo="ac",Ch="websocket",Ph="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var os=class{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function _m(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ah(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let i;if(e===Ch)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ph)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_m(n)&&(t.ns=n.namespace);let s=[];return K(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eo=class{constructor(){this.counters_={}}incrementCounter(e,t=1){le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return al(this.counters_)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lo={},co={};function _a(n){let e=n.toString();return lo[e]||(lo[e]=new Eo),lo[e]}function ym(n,e){let t=n.toString();return co[t]||(co[t]=e()),co[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ko=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Jt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zc="start",bm="close",Im="pLPCommand",wm="pRTLPCB",Rh="id",Nh="pw",xh="ser",vm="cb",Em="seg",km="ts",Sm="d",Tm="dframe",Oh=1870,Dh=30,Cm=Oh-Dh,Pm=25e3,Am=3e4,So=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zn(e),this.stats_=_a(t),this.urlFn=l=>(this.appCheckToken&&(l[vo]=this.appCheckToken),Ah(t,Ph,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ko(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Am)),lm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new To((...r)=>{let[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zc)this.id=a,this.password=l;else if(o===bm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{let[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);let i={};i[zc]="t",i[xh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[vm]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ih]=rs,this.transportSessionId&&(i[wh]=this.transportSessionId),this.lastSessionId&&(i[Sh]=this.lastSessionId),this.applicationId&&(i[Th]=this.applicationId),this.appCheckToken&&(i[vo]=this.appCheckToken),typeof location<"u"&&location.hostname&&kh.test(location.hostname)&&(i[vh]=Eh);let s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n.forceAllow_=!0}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){return Ie()?!1:n.forceAllow_?!0:!n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hm()&&!dm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=ur(t),s=yh(i,Cm);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Ie())return;this.myDisconnFrame=document.createElement("iframe");let i={};i[Tm]="t",i[Rh]=e,i[Nh]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=j(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},To=class n{constructor(e,t,i,s){if(this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,Ie())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=gh(),window[Im+this.uniqueCallbackIdentifier]=e,window[wm+this.uniqueCallbackIdentifier]=t,this.myIFrame=n.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');let o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){G("frame writing exception"),a.stack&&G(a.stack),G(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||G("No IE domain setting required")}catch{let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[Rh]=this.myID,e[Nh]=this.myPW,e[xh]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dh+i.length<=Oh;){let o=this.pendingSegs.shift();i=i+"&"+Em+s+"="+o.seg+"&"+km+s+"="+o.ts+"&"+Sm+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Pm)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){Ie()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{G("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rm=16384,Nm=45e3,as=null;typeof MozWebSocket<"u"?as=MozWebSocket:typeof WebSocket<"u"&&(as=WebSocket);var Oe=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zn(this.connId),this.stats_=_a(t),this.connURL=n.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){let o={};return o[Ih]=rs,!Ie()&&typeof location<"u"&&location.hostname&&kh.test(location.hostname)&&(o[vh]=Eh),t&&(o[wh]=t),i&&(o[Sh]=i),s&&(o[vo]=s),r&&(o[Th]=r),Ah(e,Ch,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bt.set("previous_websocket_failure",!0);try{let i;if(Ie()){let s=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/${rs}/${ma}/${process.platform}/${s}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=process.env,o=this.connURL.indexOf("wss://")===0?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new as(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){let t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&as!==null&&!n.forceDisallow_}static previouslyFailed(){return bt.isInMemoryStorage||bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let i=xt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();let t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=yh(t,Rm);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nm))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};Oe.responsesRequiredToBeHealthy=2;Oe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ls=class n{static get ALL_TRANSPORTS(){return[So,Oe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=Oe&&Oe.isAvailable(),i=t&&!Oe.previouslyFailed();if(e.webSocketOnly&&(t||ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Oe];else{let s=this.transports_=[];for(let r of n.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};ls.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xm=6e4,Om=5e3,Dm=10*1024,Mm=100*1024,ho="t",Wc="d",Lm="s",Bc="r",Um="e",Vc="o",Hc="a",jc="n",qc="p",Fm="h",Co=class{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zn("c:"+this.id+":"),this.transportManager_=new ls(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Un(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){let t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ho in e){let t=e[ho];t===Hc?this.upgradeIfSecondaryHealthy_():t===Bc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Vc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=On("t",e),i=On("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=On("t",e),i=On("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=On(ho,e);if(Wc in e){let i=e[Wc];if(t===Fm){let s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===jc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Lm?this.onConnectionShutdown_(i):t===Bc?this.onReset_(i):t===Um?bo("Server Error: "+i):t===Vc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bo("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),rs!==i&&ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Un(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Un(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Om))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qc,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cs=class{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hs=class{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);let s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds=class n extends hs{static getInstance(){return new n}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!on()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $c=32,Gc=768,x=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function N(){return new x("")}function T(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function et(n){return n.pieces_.length-n.pieceNum_}function L(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new x(n.pieces_,e)}function ya(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Bn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Mh(n){if(n.pieceNum_>=n.pieces_.length)return null;let e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new x(e,0)}function z(n,e){let t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof x)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{let i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new x(t,0)}function C(n){return n.pieceNum_>=n.pieces_.length}function te(n,e){let t=T(n),i=T(e);if(t===null)return e;if(t===i)return te(L(n),L(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Wm(n,e){let t=Bn(n,0),i=Bn(e,0);for(let s=0;s<t.length&&s<i.length;s++){let r=Tt(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function ba(n,e){if(et(n)!==et(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function he(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(et(n)>et(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}var Po=class{constructor(e,t){this.errorPrefix_=t,this.parts_=Bn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ln(this.parts_[i]);Lh(this)}};function Bm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ln(e),Lh(n)}function Vm(n){let e=n.parts_.pop();n.byteLength_-=ln(e),n.parts_.length>0&&(n.byteLength_-=1)}function Lh(n){if(n.byteLength_>Gc)throw new Error(n.errorPrefix_+"has a key path longer than "+Gc+" bytes ("+n.byteLength_+").");if(n.parts_.length>$c)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$c+") or object contains a cycle "+yt(n))}function yt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao=class n extends hs{static getInstance(){return new n}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn=1e3,Hm=300*1e3,Kc=30*1e3,jm=1.3,qm=3e4,$m="server_kill",Yc=3,Et=class n extends cs{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=n.nextPersistentConnectionId_++,this.log_=Zn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dn,this.maxReconnectDelay_=Hm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ie())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ao.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ds.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(j(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();let t=new Y,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{let a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();let r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");let a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);let r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{let l=a.d,c=a.s;n.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&le(e,"w")){let i=Fe(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=_l(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{let r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);let r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();let o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;let a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){let r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bo("Unrecognized action received from server: "+j(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qm&&(this.reconnectDelay_=Dn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+n.nextConnectionId_++,r=this.lastSessionId,o=!1,a=null,l=function(){a?a.close():(o=!0,i())},c=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};let h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?G("getToken() completed but was canceled"):(G("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new Co(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{ne(p+" ("+this.repoInfo_.toString()+")"),this.interrupt($m)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ne(d),l())}}}interrupt(e){G("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){G("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ot(this.interruptReasons_)&&(this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ga(r)).join("$"):i="default";let s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){let i=new x(e).toString(),s;if(this.listens.has(i)){let r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){G("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yc&&(this.reconnectDelay_=Kc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){G("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";Ie()&&(this.repoInfo_.nodeAdmin?t="admin_node":t="node"),e["sdk."+t+"."+ma.replace(/\./g,"-")]=1,on()?e["framework.cordova"]=1:Ii()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=ds.getInstance().currentlyOnline();return Ot(this.interruptReasons_)&&e}};Et.nextPersistentConnectionId_=0;Et.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=class n{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n(e,t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new P(vt,e),s=new P(vt,t);return this.compare(i,s)!==0}minPost(){return P.MIN}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss,us=class extends Bt{static get __EMPTY_NODE(){return ss}static set __EMPTY_NODE(e){ss=e}compare(e,t){return Tt(e.name,t.name)}isDefinedOn(e){throw lt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return P.MIN}maxPost(){return new P(Ze,ss)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,ss)}toString(){return".key"}},wt=new us;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},ee=class n{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??n.RED,this.left=s??de.EMPTY_NODE,this.right=r??de.EMPTY_NODE}copy(e,t,i,s,r){return new n(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this,r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return de.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};ee.RED=!0;ee.BLACK=!1;var Ro=class{copy(e,t,i,s,r){return this}insert(e,t,i){return new ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},de=class n{constructor(e,t=n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zt(this.root_,null,this.comparator_,!0,e)}};de.EMPTY_NODE=new Ro;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n,e){return Tt(n.name,e.name)}function Ia(n,e){return Tt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var No;function Km(n){No=n}var Uh=function(n){return typeof n=="number"?"number:"+bh(n):"string:"+n},Fh=function(n){if(n.isLeafNode()){let e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&le(e,".sv"),"Priority must be a string or number.")}else m(n===No||n.isEmpty(),"priority of unexpected type.");m(n===No||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jc,Me=class n{static set __childrenNodeConstructor(e){Jc=e}static get __childrenNodeConstructor(){return Jc}constructor(e,t=n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return C(e)?this:T(e)===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=T(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,n.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uh(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":",t==="number"?e+=bh(this.value_):e+=this.value_,this.lazyHash_=_h(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof n.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,s=n.VALUE_TYPE_ORDER.indexOf(t),r=n.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zh,Wh;function Ym(n){zh=n}function Jm(n){Wh=n}var xo=class extends Bt{compare(e,t){let i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Tt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return P.MIN}maxPost(){return new P(Ze,new Me("[PRIORITY-POST]",Wh))}makePost(e,t){let i=zh(e);return new P(t,new Me("[PRIORITY-POST]",i))}toString(){return".priority"}},U=new xo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qm=Math.log(2),Oo=class{constructor(e){let t=r=>parseInt(Math.log(r)/Qm,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;let s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},fs=function(n,e,t,i){n.sort(e);let s=function(l,c){let h=c-l,d,u;if(h===0)return null;if(h===1)return d=n[l],u=t?t(d):d,new ee(u,d.node,ee.BLACK,null,null);{let p=parseInt(h/2,10)+l,f=s(l,p),w=s(p+1,c);return d=n[p],u=t?t(d):d,new ee(u,d.node,ee.BLACK,f,w)}},r=function(l){let c=null,h=null,d=n.length,u=function(f,w){let O=d-f,B=d;d-=f;let v=s(O+1,B),E=n[O],k=t?t(E):E;p(new ee(k,E.node,w,null,v))},p=function(f){c?(c.left=f,c=f):(h=f,c=f)};for(let f=0;f<l.count;++f){let w=l.nextBitIsOne(),O=Math.pow(2,l.count-(f+1));w?u(O,ee.BLACK):(u(O,ee.BLACK),u(O,ee.RED))}return h},o=new Oo(n.length),a=r(o);return new de(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var uo,Ft={},Vt=class n{static get Default(){return m(Ft&&U,"ChildrenNode.ts has not been loaded"),uo=uo||new n({".priority":Ft},{".priority":U}),uo}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=Fe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof de?t:null}hasIndex(e){return le(this.indexSet_,e.toString())}addIndex(e,t){m(e!==wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],s=!1,r=t.getIterator(P.Wrap),o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=fs(i,e.getCompare()):a=Ft;let l=e.toString(),c={...this.indexSet_};c[l]=e;let h={...this.indexes_};return h[l]=a,new n(h,c)}addToIndexes(e,t){let i=an(this.indexes_,(s,r)=>{let o=Fe(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===Ft)if(o.isDefinedOn(e.node)){let a=[],l=t.getIterator(P.Wrap),c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fs(a,o.getCompare())}else return Ft;else{let a=t.get(e.name),l=s;return a&&(l=l.remove(new P(e.name,a))),l.insert(e,e.node)}});return new n(i,this.indexSet_)}removeFromIndexes(e,t){let i=an(this.indexes_,s=>{if(s===Ft)return s;{let r=t.get(e.name);return r?s.remove(new P(e.name,r)):s}});return new n(i,this.indexSet_)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn,b=class n{static get EMPTY_NODE(){return Mn||(Mn=new n(new de(Ia),null,Vt.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Fh(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mn}updatePriority(e){return this.children_.isEmpty()?this:new n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{let t=this.children_.get(e);return t===null?Mn:t}}getChild(e){let t=T(e);return t===null?this:this.getImmediateChild(t).getChild(L(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{let i=new P(e,t),s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));let o=s.isEmpty()?Mn:this.priorityNode_;return new n(s,o,r)}}updateChild(e,t){let i=T(e);if(i===null)return t;{m(T(e)!==".priority"||et(e)===1,".priority must be the last token in a path");let s=this.getImmediateChild(i).updateChild(L(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,s=0,r=!0;if(this.forEachChild(U,(o,a)=>{t[o]=a.val(e),i++,r&&n.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){let o=[];for(let a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uh(this.getPriority().val())+":"),this.forEachChild(U,(t,i)=>{let s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":_h(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let s=this.resolveIndex_(i);if(s){let r=s.getPredecessorKey(new P(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new P(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new P(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{let s=this.children_.getIteratorFrom(e.name,P.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{let s=this.children_.getReverseIteratorFrom(e.name,P.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ei?-1:0}withIndex(e){if(e===wt||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let i=this.getIterator(U),s=t.getIterator(U),r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wt?null:this.indexMap_.get(e.toString())}};b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Do=class extends b{constructor(){super(new de(Ia),b.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}},ei=new Do;Object.defineProperties(P,{MIN:{value:new P(vt,b.EMPTY_NODE)},MAX:{value:new P(Ze,ei)}});us.__EMPTY_NODE=b.EMPTY_NODE;Me.__childrenNodeConstructor=b;Km(ei);Jm(ei);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xm=!0;function F(n,e=null){if(n===null)return b.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){let t=n;return new Me(t,F(e))}if(!(n instanceof Array)&&Xm){let t=[],i=!1;if(K(n,(o,a)=>{if(o.substring(0,1)!=="."){let l=F(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new P(o,l)))}}),t.length===0)return b.EMPTY_NODE;let r=fs(t,Gm,o=>o.name,Ia);if(i){let o=fs(t,U.getCompare());return new b(r,F(e),new Vt({".priority":o},{".priority":U}))}else return new b(r,F(e),Vt.Default)}else{let t=b.EMPTY_NODE;return K(n,(i,s)=>{if(le(n,i)&&i.substring(0,1)!=="."){let r=F(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(F(e))}}Ym(F);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn=class extends Bt{constructor(e){super(),this.indexPath_=e,m(!C(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Tt(e.name,t.name):r}makePost(e,t){let i=F(e),s=b.EMPTY_NODE.updateChild(this.indexPath_,i);return new P(t,s)}maxPost(){let e=b.EMPTY_NODE.updateChild(this.indexPath_,ei);return new P(Ze,e)}toString(){return Bn(this.indexPath_,0).join("/")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mo=class extends Bt{compare(e,t){let i=e.node.compareTo(t.node);return i===0?Tt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,t){let i=F(e);return new P(t,i)}toString(){return".value"}},wa=new Mo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){return{type:"value",snapshotNode:n}}function Ht(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Hn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function jn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Zm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn=class{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Hn(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ht(t,i)):o.trackChildChange(jn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(U,(s,r)=>{t.hasChild(s)||i.trackChildChange(Hn(s,r))}),t.isLeafNode()||t.forEachChild(U,(s,r)=>{if(e.hasChild(s)){let o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(jn(s,r,o))}else i.trackChildChange(Ht(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ps=class n{constructor(e){this.indexedFilter_=new qn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=n.getStartPost_(e),this.endPost_=n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new P(t,i))||(i=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=b.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(b.EMPTY_NODE);let r=this;return t.forEachChild(U,(o,a)=>{r.matches(new P(o,a))||(s=s.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lo=class{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{let i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{let i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new P(t,i))||(i=b.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=b.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){let a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(b.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){let a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){let d=this.index_.getCompare();o=(u,p)=>d(p,u)}else o=this.index_.getCompare();let a=e;m(a.numChildren()===this.limit_,"");let l=new P(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){let d=a.getImmediateChild(t),u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);let p=u==null?1:o(u,l);if(h&&!i.isEmpty()&&p>=0)return r?.trackChildChange(jn(t,i,d)),a.updateImmediateChild(t,i);{r?.trackChildChange(Hn(t,d));let w=a.updateImmediateChild(t,b.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(Ht(u.name,u.node)),w.updateImmediateChild(u.name,u.node)):w}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Hn(c.name,c.node)),r.trackChildChange(Ht(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,b.EMPTY_NODE)):e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Uo=class n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=U}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ze}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===U}copy(){let e=new n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function eg(n){return n.loadsAllData()?new qn(n.getIndex()):n.hasLimit()?new Lo(n):new ps(n)}function tg(n,e){let t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function ng(n,e,t){let i=n.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,t!==void 0?(i.endNameSet_=!0,i.indexEndName_=t):(i.endNameSet_=!1,i.indexEndName_=""),i}function Vh(n,e){let t=n.copy();return t.index_=e,t}function Qc(n){let e={};if(n.isDefault())return e;let t;if(n.index_===U?t="$priority":n.index_===wa?t="$value":n.index_===wt?t="$key":(m(n.index_ instanceof Vn,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=j(t),n.startSet_){let i=n.startAfterSet_?"startAfter":"startAt";e[i]=j(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+j(n.indexStartName_))}if(n.endSet_){let i=n.endBeforeSet_?"endBefore":"endAt";e[i]=j(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+j(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Xc(n){let e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==U&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fo=class n extends cs{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Zn("p:rest:"),this.listens_={}}listen(e,t,i,s){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let o=n.getListenId_(e,i),a={};this.listens_[o]=a;let l=Qc(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Fe(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){let i=n.getListenId_(e,t);delete this.listens_[i]}get(e){let t=Qc(e._queryParams),i=e._path.toString(),s=new Y;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ze(t);this.log_("Sending REST request for "+o);let a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xt(a.responseText)}catch{ne("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ne("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zo=class{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(){return{value:null,children:new Map}}function Qt(n,e,t){if(C(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{let i=T(e);n.children.has(i)||n.children.set(i,ms());let s=n.children.get(i);e=L(e),Qt(s,e,t)}}function Wo(n,e){if(C(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{let t=n.value;return n.value=null,t.forEachChild(U,(i,s)=>{Qt(n,new x(i),s)}),Wo(n,e)}}else if(n.children.size>0){let t=T(e);return e=L(e),n.children.has(t)&&Wo(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Bo(n,e,t){n.value!==null?t(e,n.value):ig(n,(i,s)=>{let r=new x(e.toString()+"/"+i);Bo(s,r,t)})}function ig(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vo=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&K(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zc=10*1e3,sg=30*1e3,rg=300*1e3,Ho=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vo(e);let i=Zc+(sg-Zc)*Math.random();Un(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;K(e,(s,r)=>{r>0&&le(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Un(this.reportStats_.bind(this),Math.floor(Math.random()*2*rg))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ge||(ge={}));function va(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ea(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ka(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo=class n{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ge.ACK_USER_WRITE,this.source=va()}operationForChild(e){if(C(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new x(e));return new n(N(),t,this.revert)}}else return m(T(this.path)===e,"operationForChild called for unrelated child."),new n(L(this.path),this.affectedTree,this.revert)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gs=class n{constructor(e,t){this.source=e,this.path=t,this.type=ge.LISTEN_COMPLETE}operationForChild(e){return C(this.path)?new n(this.source,N()):new n(this.source,L(this.path))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt=class n{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ge.OVERWRITE}operationForChild(e){return C(this.path)?new n(this.source,N(),this.snap.getImmediateChild(e)):new n(this.source,L(this.path),this.snap)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n=class n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ge.MERGE}operationForChild(e){if(C(this.path)){let t=this.children.subtree(new x(e));return t.isEmpty()?null:t.value?new jt(this.source,N(),t.value):new n(this.source,N(),t)}else return m(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new n(this.source,L(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(C(e))return this.isFullyInitialized()&&!this.filtered_;let t=T(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qo=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function og(n,e,t,i){let s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Zm(o.childName,o.snapshotNode))}),Ln(n,s,"child_removed",e,i,t),Ln(n,s,"child_added",e,i,t),Ln(n,s,"child_moved",r,i,t),Ln(n,s,"child_changed",e,i,t),Ln(n,s,"value",e,i,t),s}function Ln(n,e,t,i,s,r){let o=i.filter(a=>a.type===t);o.sort((a,l)=>lg(n,a,l)),o.forEach(a=>{let l=ag(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function ag(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function lg(n,e,t){if(e.childName==null||t.childName==null)throw lt("Should only compare child_ events.");let i=new P(e.childName,e.snapshotNode),s=new P(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n,e){return{eventCache:n,serverCache:e}}function Fn(n,e,t,i){return Ns(new Te(e,t,i),n.serverCache)}function Hh(n,e,t,i){return Ns(n.eventCache,new Te(e,t,i))}function _s(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fo,cg=()=>(fo||(fo=new de(cm)),fo),ie=class n{static fromObject(e){let t=new n(null);return K(e,(i,s)=>{t=t.set(new x(i),s)}),t}constructor(e,t=cg()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(C(e))return null;{let i=T(e),s=this.children.get(i);if(s!==null){let r=s.findRootMostMatchingPathAndValue(L(e),t);return r!=null?{path:z(new x(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(C(e))return this;{let t=T(e),i=this.children.get(t);return i!==null?i.subtree(L(e)):new n(null)}}set(e,t){if(C(e))return new n(t,this.children);{let i=T(e),r=(this.children.get(i)||new n(null)).set(L(e),t),o=this.children.insert(i,r);return new n(this.value,o)}}remove(e){if(C(e))return this.children.isEmpty()?new n(null):new n(null,this.children);{let t=T(e),i=this.children.get(t);if(i){let s=i.remove(L(e)),r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new n(null):new n(this.value,r)}else return this}}get(e){if(C(e))return this.value;{let t=T(e),i=this.children.get(t);return i?i.get(L(e)):null}}setTree(e,t){if(C(e))return t;{let i=T(e),r=(this.children.get(i)||new n(null)).setTree(L(e),t),o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new n(this.value,o)}}fold(e){return this.fold_(N(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(z(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,i){let s=this.value?i(t,this.value):!1;if(s)return s;if(C(e))return null;{let r=T(e),o=this.children.get(r);return o?o.findOnPath_(L(e),z(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,i){if(C(e))return this;{this.value&&i(t,this.value);let s=T(e),r=this.children.get(s);return r?r.foreachOnPath_(L(e),z(t,s),i):new n(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(z(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e=class n{constructor(e){this.writeTree_=e}static empty(){return new n(new ie(null))}};function zn(n,e,t){if(C(e))return new _e(new ie(t));{let i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){let s=i.path,r=i.value,o=te(s,e);return r=r.updateChild(o,t),new _e(n.writeTree_.set(s,r))}else{let s=new ie(t),r=n.writeTree_.setTree(e,s);return new _e(r)}}}function $o(n,e,t){let i=n;return K(t,(s,r)=>{i=zn(i,z(e,s),r)}),i}function eh(n,e){if(C(e))return _e.empty();{let t=n.writeTree_.setTree(e,new ie(null));return new _e(t)}}function Go(n,e){return Ct(n,e)!=null}function Ct(n,e){let t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(te(t.path,e)):null}function th(n){let e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(U,(i,s)=>{e.push(new P(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new P(i,s.value))}),e}function Qe(n,e){if(C(e))return n;{let t=Ct(n,e);return t!=null?new _e(new ie(t)):new _e(n.writeTree_.subtree(e))}}function Ko(n){return n.writeTree_.isEmpty()}function qt(n,e){return jh(N(),n.writeTree_,e)}function jh(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=jh(z(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(z(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n,e){return Kh(e,n)}function hg(n,e,t,i,s){m(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=zn(n.visibleWrites,e,t)),n.lastWriteId=i}function dg(n,e,t,i){m(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=$o(n.visibleWrites,e,t),n.lastWriteId=i}function ug(n,e){for(let t=0;t<n.allWrites.length;t++){let i=n.allWrites[t];if(i.writeId===e)return i}return null}function fg(n,e){let t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");let i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){let a=n.allWrites[o];a.visible&&(o>=t&&pg(a,i.path)?s=!1:he(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return mg(n),!0;if(i.snap)n.visibleWrites=eh(n.visibleWrites,i.path);else{let a=i.children;K(a,l=>{n.visibleWrites=eh(n.visibleWrites,z(i.path,l))})}return!0}else return!1}function pg(n,e){if(n.snap)return he(n.path,e);for(let t in n.children)if(n.children.hasOwnProperty(t)&&he(z(n.path,t),e))return!0;return!1}function mg(n){n.visibleWrites=qh(n.allWrites,gg,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gg(n){return n.visible}function qh(n,e,t){let i=_e.empty();for(let s=0;s<n.length;++s){let r=n[s];if(e(r)){let o=r.path,a;if(r.snap)he(t,o)?(a=te(t,o),i=zn(i,a,r.snap)):he(o,t)&&(a=te(o,t),i=zn(i,N(),r.snap.getChild(a)));else if(r.children){if(he(t,o))a=te(t,o),i=$o(i,a,r.children);else if(he(o,t))if(a=te(o,t),C(a))i=$o(i,N(),r.children);else{let l=Fe(r.children,T(a));if(l){let c=l.getChild(L(a));i=zn(i,N(),c)}}}else throw lt("WriteRecord should have .snap or .children")}}return i}function $h(n,e,t,i,s){if(!i&&!s){let r=Ct(n.visibleWrites,e);if(r!=null)return r;{let o=Qe(n.visibleWrites,e);if(Ko(o))return t;if(t==null&&!Go(o,N()))return null;{let a=t||b.EMPTY_NODE;return qt(o,a)}}}else{let r=Qe(n.visibleWrites,e);if(!s&&Ko(r))return t;if(!s&&t==null&&!Go(r,N()))return null;{let o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(he(c.path,e)||he(e,c.path))},a=qh(n.allWrites,o,e),l=t||b.EMPTY_NODE;return qt(a,l)}}}function _g(n,e,t){let i=b.EMPTY_NODE,s=Ct(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(U,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){let r=Qe(n.visibleWrites,e);return t.forEachChild(U,(o,a)=>{let l=qt(Qe(r,new x(o)),a);i=i.updateImmediateChild(o,l)}),th(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{let r=Qe(n.visibleWrites,e);return th(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yg(n,e,t,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");let r=z(e,t);if(Go(n.visibleWrites,r))return null;{let o=Qe(n.visibleWrites,r);return Ko(o)?s.getChild(t):qt(o,s.getChild(t))}}function bg(n,e,t,i){let s=z(e,t),r=Ct(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){let o=Qe(n.visibleWrites,s);return qt(o,i.getNode().getImmediateChild(t))}else return null}function Ig(n,e){return Ct(n.visibleWrites,e)}function wg(n,e,t,i,s,r,o){let a,l=Qe(n.visibleWrites,e),c=Ct(l,N());if(c!=null)a=c;else if(t!=null)a=qt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){let h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),p=u.getNext();for(;p&&h.length<s;)d(p,i)!==0&&h.push(p),p=u.getNext();return h}else return[]}function vg(){return{visibleWrites:_e.empty(),allWrites:[],lastWriteId:-1}}function ys(n,e,t,i){return $h(n.writeTree,n.treePath,e,t,i)}function Sa(n,e){return _g(n.writeTree,n.treePath,e)}function nh(n,e,t,i){return yg(n.writeTree,n.treePath,e,t,i)}function bs(n,e){return Ig(n.writeTree,z(n.treePath,e))}function Eg(n,e,t,i,s,r){return wg(n.writeTree,n.treePath,e,t,i,s,r)}function Ta(n,e,t){return bg(n.writeTree,n.treePath,e,t)}function Gh(n,e){return Kh(z(n.treePath,e),n.writeTree)}function Kh(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yo=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");let s=this.changeMap.get(i);if(s){let r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,jn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Hn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ht(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,jn(i,e.snapshotNode,s.oldSnap));else throw lt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jo=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}},Yh=new Jo,Gn=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let i=this.optCompleteServerCache_!=null?new Te(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ta(this.writes_,e,i)}}getChildAfterChild(e,t,i){let s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kt(this.viewCache_),r=Eg(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){return{filter:n}}function Sg(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Tg(n,e,t,i,s){let r=new Yo,o,a;if(t.type===ge.OVERWRITE){let c=t;c.source.fromUser?o=Qo(n,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!C(c.path),o=Is(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ge.MERGE){let c=t;c.source.fromUser?o=Pg(n,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xo(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ge.ACK_USER_WRITE){let c=t;c.revert?o=Ng(n,e,c.path,i,s,r):o=Ag(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ge.LISTEN_COMPLETE)o=Rg(n,e,t.path,i,r);else throw lt("Unknown operation type: "+t.type);let l=r.getChanges();return Cg(e,o,l),{viewCache:o,changes:l}}function Cg(n,e,t){let i=e.eventCache;if(i.isFullyInitialized()){let s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_s(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Bh(_s(e)))}}function Jh(n,e,t,i,s,r){let o=e.eventCache;if(bs(i,t)!=null)return e;{let a,l;if(C(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){let c=kt(e),h=c instanceof b?c:b.EMPTY_NODE,d=Sa(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{let c=ys(i,kt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{let c=T(t);if(c===".priority"){m(et(t)===1,"Can't have a priority with additional path components");let h=o.getNode();l=e.serverCache.getNode();let d=nh(i,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{let h=L(t),d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();let u=nh(i,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=Ta(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,h,s,r):a=o.getNode()}}return Fn(e,a,o.isFullyInitialized()||C(t),n.filter.filtersNodes())}}function Is(n,e,t,i,s,r,o,a){let l=e.serverCache,c,h=o?n.filter:n.filter.getIndexedFilter();if(C(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){let p=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),p,null)}else{let p=T(t);if(!l.isCompleteForPath(t)&&et(t)>1)return e;let f=L(t),O=l.getNode().getImmediateChild(p).updateChild(f,i);p===".priority"?c=h.updatePriority(l.getNode(),O):c=h.updateChild(l.getNode(),p,O,f,Yh,null)}let d=Hh(e,c,l.isFullyInitialized()||C(t),h.filtersNodes()),u=new Gn(s,d,r);return Jh(n,d,t,s,u,a)}function Qo(n,e,t,i,s,r,o){let a=e.eventCache,l,c,h=new Gn(s,e,r);if(C(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Fn(e,c,!0,n.filter.filtersNodes());else{let d=T(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Fn(e,c,a.isFullyInitialized(),a.isFiltered());else{let u=L(t),p=a.getNode().getImmediateChild(d),f;if(C(u))f=i;else{let w=h.getCompleteChild(d);w!=null?ya(u)===".priority"&&w.getChild(Mh(u)).isEmpty()?f=w:f=w.updateChild(u,i):f=b.EMPTY_NODE}if(p.equals(f))l=e;else{let w=n.filter.updateChild(a.getNode(),d,f,u,h,o);l=Fn(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ih(n,e){return n.eventCache.isCompleteForChild(e)}function Pg(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{let h=z(t,l);ih(e,T(h))&&(a=Qo(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{let h=z(t,l);ih(e,T(h))||(a=Qo(n,a,h,c,s,r,o))}),a}function sh(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Xo(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;C(t)?c=i:c=new ie(null).setTree(t,i);let h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){let p=e.serverCache.getNode().getImmediateChild(d),f=sh(n,p,u);l=Is(n,l,new x(d),f,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{let p=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!p){let f=e.serverCache.getNode().getImmediateChild(d),w=sh(n,f,u);l=Is(n,l,new x(d),w,s,r,o,a)}}),l}function Ag(n,e,t,i,s,r,o){if(bs(s,t)!=null)return e;let a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(C(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Is(n,e,t,l.getNode().getChild(t),s,r,a,o);if(C(t)){let c=new ie(null);return l.getNode().forEachChild(wt,(h,d)=>{c=c.set(new x(h),d)}),Xo(n,e,t,c,s,r,a,o)}else return e}else{let c=new ie(null);return i.foreach((h,d)=>{let u=z(t,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),Xo(n,e,t,c,s,r,a,o)}}function Rg(n,e,t,i,s){let r=e.serverCache,o=Hh(e,r.getNode(),r.isFullyInitialized()||C(t),r.isFiltered());return Jh(n,o,t,i,Yh,s)}function Ng(n,e,t,i,s,r){let o;if(bs(i,t)!=null)return e;{let a=new Gn(i,e,s),l=e.eventCache.getNode(),c;if(C(t)||T(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ys(i,kt(e));else{let d=e.serverCache.getNode();m(d instanceof b,"serverChildren would be complete if leaf node"),h=Sa(i,d)}h=h,c=n.filter.updateFullNode(l,h,r)}else{let h=T(t),d=Ta(i,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=n.filter.updateChild(l,h,d,L(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,b.EMPTY_NODE,L(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ys(i,kt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||bs(i,N())!=null,Fn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zo=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,s=new qn(i.getIndex()),r=eg(i);this.processor_=kg(r);let o=t.serverCache,a=t.eventCache,l=s.updateFullNode(b.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(b.EMPTY_NODE,a.getNode(),null),h=new Te(l,o.isFullyInitialized(),s.filtersNodes()),d=new Te(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ns(d,h),this.eventGenerator_=new qo(this.query_)}get query(){return this.query_}};function xg(n){return n.viewCache_.serverCache.getNode()}function Og(n){return _s(n.viewCache_)}function Dg(n,e){let t=kt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!C(e)&&!t.getImmediateChild(T(e)).isEmpty())?t.getChild(e):null}function rh(n){return n.eventRegistrations_.length===0}function Mg(n,e){n.eventRegistrations_.push(e)}function oh(n,e,t){let i=[];if(t){m(e==null,"A cancel should cancel all event registrations.");let s=n.query._path;n.eventRegistrations_.forEach(r=>{let o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){let o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ah(n,e,t,i){e.type===ge.MERGE&&e.source.queryId!==null&&(m(kt(n.viewCache_),"We should always have a full cache before handling merges"),m(_s(n.viewCache_),"Missing event cache, even though we have a server cache"));let s=n.viewCache_,r=Tg(n.processor_,s,e,t,i);return Sg(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Qh(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Lg(n,e){let t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(U,(r,o)=>{i.push(Ht(r,o))}),t.isFullyInitialized()&&i.push(Bh(t.getNode())),Qh(n,i,t.getNode(),e)}function Qh(n,e,t,i){let s=i?[i]:n.eventRegistrations_;return og(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ws,vs=class{constructor(){this.views=new Map}};function Ug(n){m(!ws,"__referenceConstructor has already been defined"),ws=n}function Fg(){return m(ws,"Reference.ts has not been loaded"),ws}function zg(n){return n.views.size===0}function Ca(n,e,t,i){let s=e.source.queryId;if(s!==null){let r=n.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),ah(r,e,t,i)}else{let r=[];for(let o of n.views.values())r=r.concat(ah(o,e,t,i));return r}}function Xh(n,e,t,i,s){let r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ys(t,s?i:null),l=!1;a?l=!0:i instanceof b?(a=Sa(t,i),l=!1):(a=b.EMPTY_NODE,l=!1);let c=Ns(new Te(a,l,!1),new Te(i,s,!1));return new Zo(e,c)}return o}function Wg(n,e,t,i,s,r){let o=Xh(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Mg(o,t),Lg(o,t)}function Bg(n,e,t,i){let s=e._queryIdentifier,r=[],o=[],a=tt(n);if(s==="default")for(let[l,c]of n.views.entries())o=o.concat(oh(c,t,i)),rh(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{let l=n.views.get(s);l&&(o=o.concat(oh(l,t,i)),rh(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!tt(n)&&r.push(new(Fg())(e._repo,e._path)),{removed:r,events:o}}function Zh(n){let e=[];for(let t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Xe(n,e){let t=null;for(let i of n.views.values())t=t||Dg(i,e);return t}function ed(n,e){if(e._queryParams.loadsAllData())return Os(n);{let i=e._queryIdentifier;return n.views.get(i)}}function td(n,e){return ed(n,e)!=null}function tt(n){return Os(n)!=null}function Os(n){for(let e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Es;function Vg(n){m(!Es,"__referenceConstructor has already been defined"),Es=n}function Hg(){return m(Es,"Reference.ts has not been loaded"),Es}var jg=1,ks=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=vg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Pa(n,e,t,i,s){return hg(n.pendingWriteTree_,e,t,i,s),s?Xt(n,new jt(va(),e,t)):[]}function qg(n,e,t,i){dg(n.pendingWriteTree_,e,t,i);let s=ie.fromObject(t);return Xt(n,new $n(va(),e,s))}function Ke(n,e,t=!1){let i=ug(n.pendingWriteTree_,e);if(fg(n.pendingWriteTree_,e)){let r=new ie(null);return i.snap!=null?r=r.set(N(),!0):K(i.children,o=>{r=r.set(new x(o),!0)}),Xt(n,new jo(i.path,r,t))}else return[]}function ti(n,e,t){return Xt(n,new jt(Ea(),e,t))}function $g(n,e,t){let i=ie.fromObject(t);return Xt(n,new $n(Ea(),e,i))}function Gg(n,e){return Xt(n,new gs(Ea(),e))}function Kg(n,e,t){let i=Aa(n,t);if(i){let s=Ra(i),r=s.path,o=s.queryId,a=te(r,e),l=new gs(ka(o),a);return Na(n,r,l)}else return[]}function Ss(n,e,t,i,s=!1){let r=e._path,o=n.syncPointTree_.get(r),a=[];if(o&&(e._queryIdentifier==="default"||td(o,e))){let l=Bg(o,e,t,i);zg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));let c=l.removed;if(a=l.events,!s){let h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,p)=>tt(p));if(h&&!d){let u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){let p=Qg(u);for(let f=0;f<p.length;++f){let w=p[f],O=w.query,B=rd(n,w);n.listenProvider_.startListening(Wn(O),Kn(n,O),B.hashFn,B.onComplete)}}}!d&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(Wn(e),null):c.forEach(u=>{let p=n.queryToTagMap.get(Ms(u));n.listenProvider_.stopListening(Wn(u),p)}))}Xg(n,c)}return a}function nd(n,e,t,i){let s=Aa(n,i);if(s!=null){let r=Ra(s),o=r.path,a=r.queryId,l=te(o,e),c=new jt(ka(a),l,t);return Na(n,o,c)}else return[]}function Yg(n,e,t,i){let s=Aa(n,i);if(s){let r=Ra(s),o=r.path,a=r.queryId,l=te(o,e),c=ie.fromObject(t),h=new $n(ka(a),l,c);return Na(n,o,h)}else return[]}function ea(n,e,t,i=!1){let s=e._path,r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,p)=>{let f=te(u,s);r=r||Xe(p,f),o=o||tt(p)});let a=n.syncPointTree_.get(s);a?(o=o||tt(a),r=r||Xe(a,N())):(a=new vs,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=b.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,f)=>{let w=Xe(f,N());w&&(r=r.updateImmediateChild(p,w))}));let c=td(a,e);if(!c&&!e._queryParams.loadsAllData()){let u=Ms(e);m(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");let p=Zg();n.queryToTagMap.set(u,p),n.tagToQueryMap.set(p,u)}let h=xs(n.pendingWriteTree_,s),d=Wg(a,e,t,h,r,l);if(!c&&!o&&!i){let u=ed(a,e);d=d.concat(e1(n,e,u))}return d}function Ds(n,e,t){let s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{let l=te(o,e),c=Xe(a,l);if(c)return c});return $h(s,e,r,t,!0)}function Jg(n,e){let t=e._path,i=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{let d=te(c,t);i=i||Xe(h,d)});let s=n.syncPointTree_.get(t);s?i=i||Xe(s,N()):(s=new vs,n.syncPointTree_=n.syncPointTree_.set(t,s));let r=i!=null,o=r?new Te(i,!0,!1):null,a=xs(n.pendingWriteTree_,e._path),l=Xh(s,e,a,r?o.getNode():b.EMPTY_NODE,r);return Og(l)}function Xt(n,e){return id(e,n.syncPointTree_,null,xs(n.pendingWriteTree_,N()))}function id(n,e,t,i){if(C(n.path))return sd(n,e,t,i);{let s=e.get(N());t==null&&s!=null&&(t=Xe(s,N()));let r=[],o=T(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){let c=t?t.getImmediateChild(o):null,h=Gh(i,o);r=r.concat(id(a,l,c,h))}return s&&(r=r.concat(Ca(s,n,i,t))),r}}function sd(n,e,t,i){let s=e.get(N());t==null&&s!=null&&(t=Xe(s,N()));let r=[];return e.children.inorderTraversal((o,a)=>{let l=t?t.getImmediateChild(o):null,c=Gh(i,o),h=n.operationForChild(o);h&&(r=r.concat(sd(h,a,l,c)))}),s&&(r=r.concat(Ca(s,n,i,t))),r}function rd(n,e){let t=e.query,i=Kn(n,t);return{hashFn:()=>(xg(e)||b.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Kg(n,t._path,i):Gg(n,t._path);{let r=um(s,t);return Ss(n,t,null,r)}}}}function Kn(n,e){let t=Ms(e);return n.queryToTagMap.get(t)}function Ms(n){return n._path.toString()+"$"+n._queryIdentifier}function Aa(n,e){return n.tagToQueryMap.get(e)}function Ra(n){let e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new x(n.substr(0,e))}}function Na(n,e,t){let i=n.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");let s=xs(n.pendingWriteTree_,e);return Ca(i,t,s,null)}function Qg(n){return n.fold((e,t,i)=>{if(t&&tt(t))return[Os(t)];{let s=[];return t&&(s=Zh(t)),K(i,(r,o)=>{s=s.concat(o)}),s}})}function Wn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Hg())(n._repo,n._path):n}function Xg(n,e){for(let t=0;t<e.length;++t){let i=e[t];if(!i._queryParams.loadsAllData()){let s=Ms(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Zg(){return jg++}function e1(n,e,t){let i=e._path,s=Kn(n,e),r=rd(n,t),o=n.listenProvider_.startListening(Wn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)m(!tt(a.value),"If we're adding a query, it shouldn't be shadowed");else{let l=a.fold((c,h,d)=>{if(!C(c)&&h&&tt(h))return[Os(h).query];{let u=[];return h&&(u=u.concat(Zh(h).map(p=>p.query))),K(d,(p,f)=>{u=u.concat(f)}),u}});for(let c=0;c<l.length;++c){let h=l[c];n.listenProvider_.stopListening(Wn(h),Kn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta=class n{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new n(t)}node(){return this.node_}},na=class n{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=z(this.path_,e);return new n(this.syncTree_,t)}node(){return Ds(this.syncTree_,this.path_)}},t1=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},lh=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return n1(n[".sv"],e,t);if(typeof n[".sv"]=="object")return i1(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},n1=function(n,e,t){if(n==="timestamp")return t.timestamp;m(!1,"Unexpected server value: "+n)},i1=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));let i=n.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);let s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;let o=s.getValue();return typeof o!="number"?i:o+i},od=function(n,e,t,i){return Oa(e,new na(t,n),i)},xa=function(n,e,t){return Oa(n,new ta(e),t)};function Oa(n,e,t){let i=n.getPriority().val(),s=lh(i,e.getImmediateChild(".priority"),t),r;if(n.isLeafNode()){let o=n,a=lh(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Me(a,F(s)):n}else{let o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Me(s))),o.forEachChild(U,(a,l)=>{let c=Oa(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function Ls(n,e){let t=e instanceof x?e:new x(e),i=n,s=T(t);for(;s!==null;){let r=Fe(i.node.children,s)||{children:{},childCount:0};i=new Yn(s,i,r),t=L(t),s=T(t)}return i}function Pt(n){return n.node.value}function Da(n,e){n.node.value=e,ia(n)}function ad(n){return n.node.childCount>0}function s1(n){return Pt(n)===void 0&&!ad(n)}function Us(n,e){K(n.node.children,(t,i)=>{e(new Yn(t,n,i))})}function ld(n,e,t,i){t&&e(n),Us(n,s=>{ld(s,e,!0)})}function r1(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ni(n){return new x(n.parent===null?n.name:ni(n.parent)+"/"+n.name)}function ia(n){n.parent!==null&&o1(n.parent,n.name,n)}function o1(n,e,t){let i=s1(t),s=le(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ia(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ia(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var a1=/[\[\].#$\/\u0000-\u001F\u007F]/,l1=/[\[\].#$\u0000-\u001F\u007F]/,po=10*1024*1024,Fs=function(n){return typeof n=="string"&&n.length!==0&&!a1.test(n)},cd=function(n){return typeof n=="string"&&n.length!==0&&!l1.test(n)},c1=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cd(n)},Jn=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Rs(n)||n&&typeof n=="object"&&le(n,".sv")},Qn=function(n,e,t,i){i&&e===void 0||ii(We(n,"value"),e,t)},ii=function(n,e,t){let i=t instanceof x?new Po(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+yt(i));if(typeof e=="function")throw new Error(n+"contains a function "+yt(i)+" with contents = "+e.toString());if(Rs(e))throw new Error(n+"contains "+e.toString()+" "+yt(i));if(typeof e=="string"&&e.length>po/3&&ln(e)>po)throw new Error(n+"contains a string greater than "+po+" utf8 bytes "+yt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(K(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Fs(o)))throw new Error(n+" contains an invalid key ("+o+") "+yt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Bm(i,o),ii(n,a,i),Vm(i)}),s&&r)throw new Error(n+' contains ".value" child '+yt(i)+" in addition to actual children.")}},h1=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];let r=Bn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Fs(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Wm);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&he(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},hd=function(n,e,t,i){let s=We(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");let r=[];K(e,(o,a)=>{let l=new x(o);if(ii(s,a,z(t,l)),ya(l)===".priority"&&!Jn(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),h1(s,r)},d1=function(n,e,t){if(Rs(e))throw new Error(We(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Jn(e))throw new Error(We(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},u1=function(n,e,t,i){if(t!==void 0&&!Fs(t))throw new Error(We(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Ma=function(n,e,t,i){if(!(i&&t===void 0)&&!cd(t))throw new Error(We(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},f1=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ma(n,e,t,i)},Ye=function(n,e){if(T(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},p1=function(n,e){let t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!c1(t))throw new Error(We(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sa=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function zs(n,e){let t=null;for(let i=0;i<e.length;i++){let s=e[i],r=s.getPath();t!==null&&!ba(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function dd(n,e,t){zs(n,t),ud(n,i=>ba(i,e))}function oe(n,e,t){zs(n,t),ud(n,i=>he(i,e)||he(e,i))}function ud(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){let s=n.eventLists_[i];if(s){let r=s.path;e(r)?(m1(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function m1(n){for(let e=0;e<n.events.length;e++){let t=n.events[e];if(t!==null){n.events[e]=null;let i=t.getEventRunner();It&&G("event: "+t.toString()),Jt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fd="repo_interrupt",g1=25,ra=class{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sa,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ms(),this.transactionQueueTree_=new Yn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function _1(n,e,t){if(n.stats_=_a(n.repoInfo_),n.forceRestClient_||gm())n.server_=new Fo(n.repoInfo_,(i,s,r,o)=>{ch(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>hh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{j(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Et(n.repoInfo_,e,(i,s,r,o)=>{ch(n,i,s,r,o)},i=>{hh(n,i)},i=>{y1(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ym(n.repoInfo_,()=>new Ho(n.stats_,n.server_)),n.infoData_=new zo,n.infoSyncTree_=new ks({startListening:(i,s,r,o)=>{let a=[],l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=ti(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),La(n,"connected",!1),n.serverSyncTree_=new ks({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{let c=o(a,l);oe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function pd(n){let t=n.infoData_.getNode(new x(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function si(n){return t1({timestamp:pd(n)})}function ch(n,e,t,i,s){n.dataUpdateCount++;let r=new x(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){let l=an(t,c=>F(c));o=Yg(n.serverSyncTree_,r,l,s)}else{let l=F(t);o=nd(n.serverSyncTree_,r,l,s)}else if(i){let l=an(t,c=>F(c));o=$g(n.serverSyncTree_,r,l)}else{let l=F(t);o=ti(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$t(n,r)),oe(n.eventQueue_,a,o)}function hh(n,e){La(n,"connected",e),e===!1&&v1(n)}function y1(n,e){K(e,(t,i)=>{La(n,t,i)})}function La(n,e,t){let i=new x("/.info/"+e),s=F(t);n.infoData_.updateSnapshot(i,s);let r=ti(n.infoSyncTree_,i,s);oe(n.eventQueue_,i,r)}function Ws(n){return n.nextWriteId_++}function b1(n,e,t){let i=Jg(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{let r=F(s).withIndex(e._queryParams.getIndex());ea(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ti(n.serverSyncTree_,e._path,r);else{let a=Kn(n.serverSyncTree_,e);o=nd(n.serverSyncTree_,e._path,r,a)}return oe(n.eventQueue_,e._path,o),Ss(n.serverSyncTree_,e,t,null,!0),r},s=>(Zt(n,"get for query "+j(e)+" failed: "+s),Promise.reject(new Error(s))))}function I1(n,e,t,i,s){Zt(n,"set",{path:e.toString(),value:t,priority:i});let r=si(n),o=F(t,i),a=Ds(n.serverSyncTree_,e),l=xa(o,a,r),c=Ws(n),h=Pa(n.serverSyncTree_,e,l,c,!0);zs(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(u,p)=>{let f=u==="ok";f||ne("set at "+e+" failed: "+u);let w=Ke(n.serverSyncTree_,c,!f);oe(n.eventQueue_,e,w),nt(n,s,u,p)});let d=Fa(n,e);$t(n,d),oe(n.eventQueue_,d,[])}function w1(n,e,t,i){Zt(n,"update",{path:e.toString(),value:t});let s=!0,r=si(n),o={};if(K(t,(a,l)=>{s=!1,o[a]=od(z(e,a),F(l),n.serverSyncTree_,r)}),s)G("update() called with empty data.  Don't do anything."),nt(n,i,"ok",void 0);else{let a=Ws(n),l=qg(n.serverSyncTree_,e,o,a);zs(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{let d=c==="ok";d||ne("update at "+e+" failed: "+c);let u=Ke(n.serverSyncTree_,a,!d),p=u.length>0?$t(n,e):e;oe(n.eventQueue_,p,u),nt(n,i,c,h)}),K(t,c=>{let h=Fa(n,z(e,c));$t(n,h)}),oe(n.eventQueue_,e,[])}}function v1(n){Zt(n,"onDisconnectEvents");let e=si(n),t=ms();Bo(n.onDisconnect_,N(),(s,r)=>{let o=od(s,r,n.serverSyncTree_,e);Qt(t,s,o)});let i=[];Bo(t,N(),(s,r)=>{i=i.concat(ti(n.serverSyncTree_,s,r));let o=Fa(n,s);$t(n,o)}),n.onDisconnect_=ms(),oe(n.eventQueue_,N(),i)}function E1(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Wo(n.onDisconnect_,e),nt(n,t,i,s)})}function dh(n,e,t,i){let s=F(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Qt(n.onDisconnect_,e,s),nt(n,i,r,o)})}function k1(n,e,t,i,s){let r=F(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Qt(n.onDisconnect_,e,r),nt(n,s,o,a)})}function S1(n,e,t,i){if(Ot(t)){G("onDisconnect().update() called with empty data.  Don't do anything."),nt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&K(t,(o,a)=>{let l=F(a);Qt(n.onDisconnect_,z(e,o),l)}),nt(n,i,s,r)})}function T1(n,e,t){let i;T(e._path)===".info"?i=ea(n.infoSyncTree_,e,t):i=ea(n.serverSyncTree_,e,t),dd(n.eventQueue_,e._path,i)}function uh(n,e,t){let i;T(e._path)===".info"?i=Ss(n.infoSyncTree_,e,t):i=Ss(n.serverSyncTree_,e,t),dd(n.eventQueue_,e._path,i)}function md(n){n.persistentConnection_&&n.persistentConnection_.interrupt(fd)}function C1(n){n.persistentConnection_&&n.persistentConnection_.resume(fd)}function Zt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),G(t,...e)}function nt(n,e,t,i){e&&Jt(()=>{if(t==="ok")e(null);else{let s=(t||"error").toUpperCase(),r=s;i&&(r+=": "+i);let o=new Error(r);o.code=s,e(o)}})}function P1(n,e,t,i,s,r){Zt(n,"transaction on "+e);let o={path:e,update:t,onComplete:i,status:null,order:gh(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ua(n,e,void 0);o.currentInputSnapshot=a;let l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{ii("transaction failed: Data returned ",l,o.path),o.status=0;let c=Ls(n.transactionQueueTree_,e),h=Pt(c)||[];h.push(o),Da(c,h);let d;typeof l=="object"&&l!==null&&le(l,".priority")?(d=Fe(l,".priority"),m(Jn(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Ds(n.serverSyncTree_,e)||b.EMPTY_NODE).getPriority().val();let u=si(n),p=F(l,d),f=xa(p,a,u);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=f,o.currentWriteId=Ws(n);let w=Pa(n.serverSyncTree_,e,f,o.currentWriteId,o.applyLocally);oe(n.eventQueue_,e,w),Bs(n,n.transactionQueueTree_)}}function Ua(n,e,t){return Ds(n.serverSyncTree_,e,t)||b.EMPTY_NODE}function Bs(n,e=n.transactionQueueTree_){if(e||Vs(n,e),Pt(e)){let t=_d(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&A1(n,ni(e),t)}else ad(e)&&Us(e,t=>{Bs(n,t)})}function A1(n,e,t){let i=t.map(c=>c.currentWriteId),s=Ua(n,e,i),r=s,o=s.hash();for(let c=0;c<t.length;c++){let h=t[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let d=te(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}let a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Zt(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){let d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(Ke(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Vs(n,Ls(n.transactionQueueTree_,e)),Bs(n,n.transactionQueueTree_),oe(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)Jt(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{ne("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}$t(n,e)}},o)}function $t(n,e){let t=gd(n,e),i=ni(t),s=_d(n,t);return R1(n,s,i),i}function R1(n,e,t){if(e.length===0)return;let i=[],s=[],o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){let l=e[a],c=te(t,l.path),h=!1,d;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Ke(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=g1)h=!0,d="maxretry",s=s.concat(Ke(n.serverSyncTree_,l.currentWriteId,!0));else{let u=Ua(n,l.path,o);l.currentInputSnapshot=u;let p=e[a].update(u.val());if(p!==void 0){ii("transaction failed: Data returned ",p,l.path);let f=F(p);typeof p=="object"&&p!=null&&le(p,".priority")||(f=f.updatePriority(u.getPriority()));let O=l.currentWriteId,B=si(n),v=xa(f,u,B);l.currentOutputSnapshotRaw=f,l.currentOutputSnapshotResolved=v,l.currentWriteId=Ws(n),o.splice(o.indexOf(O),1),s=s.concat(Pa(n.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),s=s.concat(Ke(n.serverSyncTree_,O,!0))}else h=!0,d="nodata",s=s.concat(Ke(n.serverSyncTree_,l.currentWriteId,!0))}oe(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Vs(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Jt(i[a]);Bs(n,n.transactionQueueTree_)}function gd(n,e){let t,i=n.transactionQueueTree_;for(t=T(e);t!==null&&Pt(i)===void 0;)i=Ls(i,t),e=L(e),t=T(e);return i}function _d(n,e){let t=[];return yd(n,e,t),t.sort((i,s)=>i.order-s.order),t}function yd(n,e,t){let i=Pt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Us(e,s=>{yd(n,s,t)})}function Vs(n,e){let t=Pt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Da(e,t.length>0?t:void 0)}Us(e,i=>{Vs(n,i)})}function Fa(n,e){let t=ni(gd(n,e)),i=Ls(n.transactionQueueTree_,e);return r1(i,s=>{mo(n,s)}),mo(n,i),ld(i,s=>{mo(n,s)}),t}function mo(n,e){let t=Pt(e);if(t){let i=[],s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ke(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Da(e,void 0):t.length=r+1,oe(n.eventQueue_,ni(e),s);for(let o=0;o<i.length;o++)Jt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){let e="",t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function x1(n){let e={};n.charAt(0)==="?"&&(n=n.substring(1));for(let t of n.split("&")){if(t.length===0)continue;let i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ne(`Invalid query segment '${t}' in query '${n}'`)}return e}var fh=function(n,e){let t=O1(n),i=t.namespace;t.domain==="firebase.com"&&De(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&De("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||am();let s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new os(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new x(t.pathString)}},O1=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(s=N1(n.substring(h,d)));let u=x1(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;let p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{let f=e.indexOf(".");i=e.substring(0,f).toLowerCase(),t=e.substring(f+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ph="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",D1=(function(){let n=0,e=[];return function(t){let i=t===n;n=t;let s,r=new Array(8);for(s=7;s>=0;s--)r[s]=ph.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=ph.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ts=class{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){let e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+j(this.snapshot.exportVal())}},Cs=class{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oa=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new Y;return E1(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ye("OnDisconnect.remove",this._path);let e=new Y;return dh(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ye("OnDisconnect.set",this._path),Qn("OnDisconnect.set",e,this._path,!1);let t=new Y;return dh(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ye("OnDisconnect.setWithPriority",this._path),Qn("OnDisconnect.setWithPriority",e,this._path,!1),d1("OnDisconnect.setWithPriority",t);let i=new Y;return k1(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Ye("OnDisconnect.update",this._path),hd("OnDisconnect.update",e,this._path);let t=new Y;return S1(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St=class n{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return C(this._path)?null:ya(this._path)}get ref(){return new ye(this._repo,this._path)}get _queryIdentifier(){let e=Xc(this._queryParams),t=ga(e);return t==="{}"?"default":t}get _queryObject(){return Xc(this._queryParams)}isEqual(e){if(e=W(e),!(e instanceof n))return!1;let t=this._repo===e._repo,i=ba(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+zm(this._path)}};function bd(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function za(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===wt){let i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==vt)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==Ze)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===U){if(e!=null&&!Jn(e)||t!=null&&!Jn(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(m(n.getIndex()instanceof Vn||n.getIndex()===wa,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function M1(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var ye=class n extends St{constructor(e,t){super(e,t,new Uo,!1)}get parent(){let e=Mh(this._path);return e===null?null:new n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},Gt=class n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new x(e),i=Kt(this.ref,e);return new n(this._node.getChild(t),i,U)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new n(s,Kt(this.ref,i),U)))}hasChild(e){let t=new x(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function I(n,e){return n=W(n),n._checkNotDeleted("ref"),e!==void 0?Kt(n._root,e):n._root}function Kt(n,e){return n=W(n),T(n._path)===null?f1("child","path",e,!1):Ma("child","path",e,!1),new ye(n._repo,z(n._path,e))}function en(n){return n=W(n),new oa(n._repo,n._path)}function Hs(n,e){n=W(n),Ye("push",n._path),Qn("push",e,n._path,!0);let t=pd(n._repo),i=D1(t),s=Kt(n,i),r=Kt(n,i),o;return e!=null?o=At(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function js(n){return Ye("remove",n._path),At(n,null)}function At(n,e){n=W(n),Ye("set",n._path),Qn("set",e,n._path,!1);let t=new Y;return I1(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function it(n,e){hd("update",e,n._path);let t=new Y;return w1(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Z(n){n=W(n);let e=new Ps(()=>{}),t=new As(e);return b1(n._repo,n,t).then(i=>new Gt(i,new ye(n._repo,n._path),n._queryParams.getIndex()))}var As=class n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){let i=t._queryParams.getIndex();return new Ts("value",this,new Gt(e.snapshotNode,new ye(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Cs(this,e,t):null}matches(e){return e instanceof n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},aa=class n{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Cs(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");let i=Kt(new ye(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Ts(e.type,this,new Gt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof n?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function Id(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){let l=t,c=(h,d)=>{uh(n._repo,n,a),l(h,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}let o=new Ps(t,r||void 0),a=e==="value"?new As(o):new aa(e,o);return T1(n._repo,n,a),()=>uh(n._repo,n,a)}function Le(n,e,t,i){return Id(n,"value",e,t,i)}function Wa(n,e,t,i){return Id(n,"child_added",e,t,i)}var Yt=class{},la=class extends Yt{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Qn("endAt",this._value,e._path,!0);let t=ng(e._queryParams,this._value,this._key);if(M1(t),za(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new St(e._repo,e._path,t,e._orderByCalled)}};function qs(n,e){return u1("endAt","key",e),new la(n,e)}var ca=class extends Yt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new St(e._repo,e._path,tg(e._queryParams,this._limit),e._orderByCalled)}};function $s(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new ca(n)}var ha=class extends Yt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){bd(e,"orderByChild");let t=new x(this._path);if(C(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");let i=new Vn(t),s=Vh(e._queryParams,i);return za(s),new St(e._repo,e._path,s,!0)}};function wd(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ma("orderByChild","path",n,!1),new ha(n)}var da=class extends Yt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){bd(e,"orderByValue");let t=Vh(e._queryParams,wa);return za(t),new St(e._repo,e._path,t,!0)}};function vd(){return new da}function Gs(n,...e){let t=W(n);for(let i of e)t=i._apply(t);return t}Ug(ye);Vg(ye);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L1="FIREBASE_DATABASE_EMULATOR_HOST",ua={},U1=!1;function F1(n,e,t,i){let s=e.lastIndexOf(":"),r=e.substring(0,s),o=ct(r);n.repoInfo_=new os(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function z1(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||De("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),G("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=fh(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[L1]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=fh(r,s),a=o.repoInfo):l=!o.repoInfo.secure;let h=s&&l?new Je(Je.OWNER):new wo(n.name,n.options,e);p1("Invalid Firebase Database URL",o),C(o.path)||De("Database URL must point to the root of a Firebase Database (not including a child path).");let d=B1(a,n,h,new Io(n,t));return new fa(d,n)}function W1(n,e){let t=ua[e];(!t||t[n.key]!==n)&&De(`Database ${e}(${n.repoInfo_}) has already been deleted.`),md(n),delete t[n.key]}function B1(n,e,t,i){let s=ua[e.name];s||(s={},ua[e.name]=s);let r=s[n.toURLString()];return r&&De("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ra(n,U1,t,i),s[n.toURLString()]=r,r}var fa=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ye(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(W1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&De("Cannot call "+e+" on a deleted database.")}};function Ks(n=ki(),e){let t=un(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){let i=cl("database");i&&V1(t,...i)}return t}function V1(n,e,t,i={}){n=W(n),n._checkNotDeleted("useEmulator");let s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&we(i,r.repoInfo_.emulatorOptions))return;De("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&De('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Je(Je.OWNER);else if(i.mockUserToken){let a=typeof i.mockUserToken=="string"?i.mockUserToken:hl(i.mockUserToken,n.app.options.projectId);o=new Je(a)}ct(e)&&wi(e),F1(r,s,i,o)}function Ed(n){n=W(n),n._checkNotDeleted("goOffline"),md(n._repo)}function kd(n){n=W(n),n._checkNotDeleted("goOnline"),C1(n._repo)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(n){rm(He),Ve(new ce("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return z1(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),pe(Mc,Lc,n),pe(Mc,Lc,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j1={".sv":"timestamp"};function Sd(){return j1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pa=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function ue(n,e,t){if(n=W(n),Ye("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";let i=t?.applyLocally??!0,s=new Y,r=(a,l,c)=>{let h=null;a?s.reject(a):(h=new Gt(c,new ye(n._repo,n._path),U),s.resolve(new pa(l,h)))},o=Le(n,()=>{});return P1(n._repo,n._path,e,r,o,i),s.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Et.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */H1();var st=n=>Math.round(Number(n)*100)/100,q1=["tank","mech","drone","base"],rt=["red","blue","observer"],Td=["light","medium","heavy"],Ba=["destroyed","returned","castle-attack"],Qs=["at","type","id","from","to","team","kind","x","z","tx","tz","targetUnit","landAt","projectileId","weapon","radius"],Cd=n=>Object.fromEntries(Qs.filter(e=>n[e]!==void 0).map(e=>[e,n[e]])),Pd=23328,$1=36**3,Ys=n=>encodeURIComponent(String(n)).replaceAll(".","%2E"),Js=n=>Object.values(n||{}).filter(e=>Array.isArray(e));function G1(n){let e=n.flatMap(i=>[st(i.x),st(i.z)]),t=e.map(i=>Math.round(i*100)+Pd);return t.every(i=>Number.isInteger(i)&&i>=0&&i<$1)?t.map(i=>i.toString(36).padStart(3,"0")).join(""):e}function K1(n,e){if(Array.isArray(n)&&n.length===e*2)return n;if(typeof n!="string"||n.length!==e*6||!/^[0-9a-z]*$/.test(n))throw Error("\u96F2\u7AEF\u5EA7\u6A19\u683C\u5F0F\u7121\u6548");return Array.from({length:e*2},(t,i)=>(parseInt(n.slice(i*3,i*3+3),36)-Pd)/100)}function Ad(n){return Object.fromEntries(n.players.map(({id:e,name:t,team:i,unit:s,maxHp:r})=>[e,{name:t,team:i,unit:s,maxHp:r}]))}function Rd(n){let e=n.players.map(i=>i.id),t=new Map(e.map((i,s)=>[i,s]));return{v:2,ids:e,questionBankId:n.questionBankId||ot,roomId:n.roomId,roomName:n.roomName||"",hostId:n.hostId,simulationPaused:!!n.simulationPaused,round:n.round,running:!!n.running,ended:!!n.ended,winner:n.winner||"",castleDestruction:n.castleDestruction||null,battleOpen:!!n.battleOpen,blessing:n.blessing||null,time:st(n.time),hostDisconnected:!!n.hostDisconnected,castles:structuredClone(n.castles),scores:{...n.scores},report:n.ended&&n.report||null,positions:G1(n.players),players:n.players.map(i=>[i.hp,(i.connected?1:0)|(i.answering?2:0)|(i.protected?4:0)|(i.deployed?8:0),i.lastShot??-1,t.get(i.attackTarget)??i.attackTarget??-1,i.bombCount||0,i.missileCount||0]),bombs:Object.fromEntries((n.bombs||[]).map(i=>[Ys(i.id),[i.id,rt.indexOf(i.team),i.x,i.z,i.at,i.landAt]])),effects:Object.fromEntries((n.combatEffects||[]).map(i=>{let s=Cd(i);return[Ys(i.id),Qs.map(r=>s[r]??null)]})),messages:Object.fromEntries((n.battleMessages||[]).filter(Boolean).map(i=>["m:"+Ys(i.id),[i.id,st(i.at),Ba.indexOf(i.type),rt.indexOf(i.team),i.playerId||""]])),missiles:Object.fromEntries(n.missiles.map(i=>[Ys(i.id),[i.id,rt.indexOf(i.team),Td.indexOf(i.kind),st(i.x),st(i.z),st(i.tx),st(i.tz),t.get(i.target)??-1]]))}}function Nd(n,e){if(!n||n.v!==e.v||n.roomId!==e.roomId||n.round!==e.round||JSON.stringify(n.ids)!==JSON.stringify(e.ids))return{state:e};let t={};for(let i of Object.keys(e))if(JSON.stringify(n[i])!==JSON.stringify(e[i]))if(["players","effects","bombs","missiles","messages"].includes(i)){let s=n[i]||{},r=e[i]||{};for(let o of new Set([...Object.keys(s),...Object.keys(r)]))JSON.stringify(s[o])!==JSON.stringify(r[o])&&(t[`state/${i}/${o}`]=r[o]??null)}else t[`state/${i}`]=e[i];return t}function xd(n,e){if(!n||![1,2].includes(n.v)||!Array.isArray(n.ids)||n.ids.some(s=>!Object.hasOwn(e||{},s)))return null;let t=n.v===2?K1(n.positions,n.ids.length):null,i=n.ids.map((s,r)=>{let o=n.players?.[r],a=e[s],l=n.v===2&&Array.isArray(o)?[o[0],t[r*2],t[r*2+1],...o.slice(1)]:o;if(!Array.isArray(l)||!rt.includes(a.team)||!q1.includes(a.unit))throw Error("\u96F2\u7AEF\u6230\u6CC1\u683C\u5F0F\u7121\u6548");return{id:s,name:a.name,team:a.team,unit:a.unit,maxHp:a.maxHp,hp:l[0],x:l[1],z:l[2],deployed:!!(l[3]&8),connected:!!(l[3]&1),answering:!!(l[3]&2),lastShot:l[4]<0?null:l[4],attackTarget:typeof l[5]=="string"?l[5]:n.ids[l[5]]||null,protected:!!(l[3]&4),bombCount:l[6]||0,missileCount:l[7]||0}});return{roomId:n.roomId,questionBankId:n.questionBankId||ot,roomName:n.roomName,hostId:n.hostId,simulationPaused:!!n.simulationPaused,round:n.round,running:n.running,ended:n.ended,winner:n.winner||null,castleDestruction:n.castleDestruction||null,battleOpen:!!n.battleOpen,blessing:n.blessing||null,time:n.time,hostDisconnected:!!n.hostDisconnected,castles:n.castles,scores:n.scores,report:n.ended&&n.report||null,players:i,me:null,bombs:Js(n.bombs).map(s=>({id:s[0],team:rt[s[1]],x:s[2],z:s[3],at:s[4],landAt:s[5]})),combatEffects:Js(n.effects).map(s=>Cd(Object.fromEntries(Qs.filter((r,o)=>s[o]!==null&&s[o]!==void 0).map(r=>[r,s[Qs.indexOf(r)]])))),battleMessages:Js(n.messages).filter(s=>Number.isFinite(s[0])&&Ba[s[2]]&&rt[s[3]]).map(s=>({id:s[0],at:s[1],type:Ba[s[2]],team:rt[s[3]],playerId:s[4]||null})).sort((s,r)=>s.id-r.id),missiles:Js(n.missiles).map(s=>({id:s[0],team:rt[s[1]],kind:Td[s[2]],x:s[3],z:s[4],tx:s[5],tz:s[6],target:n.ids[s[7]]||null}))}}var Y1=10080*60*1e3,J1=/[.#$\[\]/\u0000-\u001f\u007f]/;function Xs(n,e){if(typeof n!="string"||!n||n.length>128||J1.test(n))throw new TypeError(`${e}\u7121\u6548`);return n}function ri(n){if(!Number.isSafeInteger(n)||n<0)throw new TypeError("\u5B78\u7FD2\u7D00\u9304\u6642\u9593\u7121\u6548");return n}function Va(n,e,t){if(typeof n!="string"||!n.trim()||n.trim().length>e)throw new TypeError(`${t}\u7121\u6548`);return n.trim()}function Q1(n,e=Date.now()){if(n?.accepted!==!0)return null;ri(e);let t=ri(n.at===void 0?e:n.at);if(t>e)throw new TypeError("\u5B78\u7FD2\u7D00\u9304\u6642\u9593\u4E0D\u80FD\u5728\u672A\u4F86");let i=t+Y1;if(!Number.isSafeInteger(i))throw new TypeError("\u5B78\u7FD2\u7D00\u9304\u671F\u9650\u7121\u6548");if(i<=e)throw new TypeError("\u5B78\u7FD2\u7D00\u9304\u5DF2\u5230\u671F");if(n.expiresAt!==void 0&&n.expiresAt!==i)throw new TypeError("\u5B78\u7FD2\u7D00\u9304\u671F\u9650\u5FC5\u9808\u70BA\u4E03\u5929");if(typeof n.correct!="boolean"||typeof n.practice!="boolean")throw new TypeError("\u7B54\u984C\u7D50\u679C\u8207\u7DF4\u7FD2\u6A19\u8A18\u5FC5\u9808\u662F\u5E03\u6797\u503C");return{studentName:Va(n.studentName,20,"\u5B78\u751F\u540D\u5B57"),type:Va(n.type,128,"\u984C\u578B"),difficulty:Va(n.difficulty,8,"\u96E3\u5EA6"),correct:n.correct,practice:n.practice,at:t,expiresAt:i}}function X1(n,e,t=Date.now()){let i=Q1(e,t);if(!i)return{};Xs(n,"\u4F7F\u7528\u8005 UID");let s=Xs(e.id,"\u7B54\u984C\u7968\u5238 ID");return{[`learning/${n}/${s}`]:i,[`expiry/${s}`]:{uid:n,expiresAt:i.expiresAt}}}async function Od(n,e,t){let i=X1(e,t);return Object.keys(i).length?(await it(I(n),i),!0):!1}function Z1(n,e=Date.now()){ri(e);let t={};for(let[i,s]of Object.entries(n||{}))try{if(Xs(i,"\u7B54\u984C\u7968\u5238 ID"),Xs(s?.uid,"\u4F7F\u7528\u8005 UID"),ri(s?.expiresAt),s.expiresAt>e)continue;t[`learning/${s.uid}/${i}`]=null,t[`expiry/${i}`]=null}catch{}return t}async function e_(n,e=Date.now()){ri(e);let t=await Z(Gs(I(n,"expiry"),wd("expiresAt"),qs(e),$s(100))),i=Z1(t.val(),e),s=Object.keys(i).length/2;return s&&await it(I(n),i),s}function Dd(n,{onError:e=t=>console.warn("\u96F2\u7AEF\u5B78\u7FD2\u7D00\u9304\u6E05\u7406\u5931\u6557",t)}={}){let t=!1,i=!1,s=async()=>{if(!(t||i||globalThis.navigator?.onLine===!1)){i=!0;try{await e_(n)}catch(o){e(o)}finally{i=!1}}},r=setInterval(s,6e4);return r.unref?.(),globalThis.addEventListener?.("online",s),s(),()=>{t=!0,clearInterval(r),globalThis.removeEventListener?.("online",s)}}var se="rooms/main",oi=["red","blue","observer"],t_=7200*1e3;var n_=new Set(["question-bank","start","restart","command","buy","fire","question","answer","deploy","developer","watch","screen"]),Md=(n,e,t)=>{if(typeof n!="string"||!n.trim())throw Error(`\u8ACB\u586B\u5BEB${e}`);return n.trim().slice(0,t)},er=n=>JSON.stringify(n),tr=class{constructor({config:e,bank:t,questionSource:i=null,obstacles:s=[],storage:r=null}){this.questionSource=i,this.readyState=0,this.resumeManaged=!0,this.bank=t,this.allQuestions=t,this.obstacles=s,this.storage=r,this.uid=null,this.room=null,this.roomId=null,this.roomName="",this.member=null,this.joined=!1,this.closed=!1,this.connected=!1,this.unsubscribers=[],this.sessionUnsubscribers=[],this.commandUnsubscribers=new Map,this.commandQueues=new Map,this.seenCommands=new Set,this.roster={},this.personal=null,this.publicState=null,this.members={},this.meta=null,this.serverOffset=0,this.pending=Promise.resolve(),this.memberQueue=Promise.resolve(),this.lastRoster="",this.lastPersonal=new Map,this.lastPublicState=null,this.lastPublish=0,this.publishing=!1,this.status=null,this.initialization=this._run(()=>this._initialize(e),!0)}now(){return Date.now()+(this.serverOffset||0)}recordDiagnostic(e,t){this.diagnosticLog??=new mi({now:()=>this.now()}),this.diagnosticLog.record(e,t)}connectionHealth(){return il({joined:this.joined,connected:this.connected,hostAvailable:this._hostAvailable(),now:this.now(),hostOfflineAt:this.meta?.hostOfflineAt,heartbeat:this.meta?.heartbeat,lastPublicAt:this.lastPublicReceivedAt,simulationPaused:this.room?.simulationPaused||this.publicState?.simulationPaused})}diagnostics(){return{version:"network-stability-20261106",at:this.now(),host:!!this.room,connected:this.connected,health:this.connectionHealth(),round:this.room?.round??this.publicState?.round??0,time:this.room?.time??this.publicState?.time??0,pendingOperations:this.outbox?.size||0,heartbeatAge:Number.isFinite(this.meta?.heartbeat)?this.now()-this.meta.heartbeat:null,stateAge:Number.isFinite(this.lastPublicReceivedAt)?this.now()-this.lastPublicReceivedAt:null,simulation:this.simulationClock?.last||null,navigation:this.room?.navigation?.last||null,events:this.diagnosticLog?.snapshot()||[]}}emit(e){this.closed||this.onmessage?.({data:er(e)})}notice(e){this.emit({kind:"notice",text:e})}_run(e,t=!1){return Promise.resolve().then(e).catch(i=>{this.notice(i?.message||"\u96F2\u7AEF\u64CD\u4F5C\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u91CD\u8A66"),t&&this.close()})}async _initialize(e){if(!e?.apiKey||!e?.databaseURL||!e?.projectId)throw Error("\u5C1A\u672A\u8A2D\u5B9A Firebase \u96F2\u7AEF\u9023\u7DDA");let t=`orbit-rts-${e.projectId}`,i=Si().find(a=>a.name===t);if(i&&i.options.databaseURL!==e.databaseURL)throw Error("Firebase \u5C08\u6848\u8A2D\u5B9A\u4E0D\u4E00\u81F4");this.app=i||fn(e,t),this.auth=ao(this.app),await ro(this.auth,xn),await this.auth.authStateReady();let s=this.auth.currentUser?.isAnonymous?this.auth.currentUser:(await so(this.auth)).user;if(this.closed)return;this.uid=s.uid,this.db=Ks(this.app,e.databaseURL),kd(this.db),this.stopLearningCleanup=Dd(this.db,{onError:a=>this.notice("\u4E03\u5929\u5B78\u7FD2\u7D00\u9304\u6E05\u7406\u5931\u6557\uFF1A"+a.message)}),this._run(()=>this._pruneExpiredSessions()),this.sessionCleanupTimer=setInterval(()=>this._run(()=>this._pruneExpiredSessions()),6e4);let r=a=>this.notice("\u96F2\u7AEF\u8B80\u53D6\u5931\u6557\uFF1A"+a.message);this.unsubscribers.push(Le(I(this.db,".info/serverTimeOffset"),a=>{Number.isFinite(a.val())&&(this.serverOffset=a.val())},r)),this.unsubscribers.push(Le(I(this.db,se),a=>this._slotChanged(a.val()),r)),this.unsubscribers.push(Le(I(this.db,".info/connected"),a=>this._run(()=>this._connectivity(a.val()===!0)),r));let o=performance.now();this.simulationTimer=setInterval(()=>{let a=performance.now(),l=Math.max(0,(a-o)/1e3);o=a,this._tick(l)},50),this.heartbeatTimer=setInterval(()=>this._run(()=>this._heartbeat()),1e4),this.presenceTimer=setInterval(()=>this._refreshHostAvailability(),1e3)}async _connectivity(e){if(this.closed)return;this.connected=e,this.recordDiagnostic("connection",{connected:e});let t=this.connectionEpoch=(this.connectionEpoch||0)+1;if(!e){this.outbox?.clear(),this.readyState=0,this.localOfflineAt??=this.now(),this.room&&this.room.disconnect(this.uid),this.joined&&this.notice(this.room?"\u958B\u5C40\u8005\u7DB2\u8DEF\u4E2D\u65B7\uFF0C\u6230\u5C40\u66AB\u505C\uFF0C\u4FDD\u755930\u79D2\u6062\u5FA9\u6642\u9593\u3002":"\u4F60\u7684\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u7DB2\u8DEF\u5F8C\u53EF\u9078\u64C7\u8FD4\u56DE\u539F\u6230\u5C40\u3002");return}if(this.abandonedHostRoomId){let i=this.abandonedHostRoomId;try{await this._closeCloudRoom("host-disconnected",i),this.abandonedHostRoomId=null}catch{this.notice("\u539F\u6230\u5C40\u95DC\u9589\u72C0\u614B\u5C1A\u5728\u540C\u6B65\uFF0C\u53EF\u91CD\u65B0\u5EFA\u7ACB\u6230\u5C40\u3002")}}if(this.roomId){let i=(await Z(I(this.db,se))).val(),s=J(i,this.now());!i||i.id!==this.roomId||!["active","paused"].includes(s)?this._endSession(s):this.room?this.localOfflineAt!=null&&this.now()-this.localOfflineAt>=3e4?await this._closeCloudRoom("host-disconnected"):(this.meta=i,await this._registerPresence(),this.room?.player(this.uid)&&(this.room.player(this.uid).connected=!0)):(this.meta=i,this._offerResume({uid:this.uid,roomId:this.roomId,name:this.member.name,team:this.team,unit:this.member.unit,host:!1}))}this.closed||!this.connected||t!==this.connectionEpoch||(this.readyState=1,this.onopen?.(),this.localOfflineAt=null,this.joined&&!this.resumePending&&this._receive(this._identity()),!this.roomId&&!this.lastEndedRoomId&&await this._checkSavedReturn())}_slotChanged(e){this.meta=e;let t=J(e,this.now()),i=this.roomId||this.returnIdentity?.roomId||this.pendingRoomId;i&&(!e||e.id!==i||!["active","paused"].includes(t))&&(this.recordDiagnostic("session-status",{reason:t}),this._endSession(e?.id===i?t:"closed",i)),this._refreshHostAvailability()}_hostAvailable(){return!this.connected||this.resumePending||!this.meta||this.meta.id!==this.roomId||J(this.meta,this.now())!=="active"?!1:Object.values(this.members).some(e=>e?.[this.meta.hostUid]?.connected===!0)}_refreshHostAvailability(){let e=this.roomId||this.returnIdentity?.roomId;if(!e)return;if(!this.connected){this.room&&this.localOfflineAt!=null&&this.now()-this.localOfflineAt>=3e4&&(this.abandonedHostRoomId=e,this._endSession("host-disconnected",e));return}let t=J(this.meta,this.now());if(!["active","paused"].includes(t)){t==="host-disconnected"&&this._run(()=>this._releaseExpiredSlot(e)),this._endSession(t,e);return}if(!this.joined||this.resumePending)return;let i=this._hostAvailable(),s=Number.isFinite(this.meta?.hostOfflineAt)?Math.max(0,Math.ceil((3e4-this.now()+this.meta.hostOfflineAt)/1e3)):null;this.lastGrace!==s&&(this.lastGrace=s,this._emitState()),this.hostAvailable!==i&&(this.hostAvailable=i,i?this.wasHostOffline&&this.notice("\u958B\u5C40\u8005\u5DF2\u6062\u5FA9\u9023\u7DDA\uFF0C\u7E7C\u7E8C\u539F\u6230\u5C40\u3002"):this.notice(Number.isFinite(this.meta?.hostOfflineAt)?"\u958B\u5C40\u8005\u8207\u96F2\u7AEF\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6230\u5C40\u66AB\u505C\uFF1B\u4FDD\u755930\u79D2\u6062\u5FA9\u6642\u9593\u3002":"\u958B\u5C40\u8005\u66AB\u7121\u56DE\u61C9\uFF0C\u6B63\u5728\u78BA\u8A8D\u9023\u7DDA\u8207\u904B\u7B97\u72C0\u614B\u3002"),this.wasHostOffline=!i,this._emitState())}_remember(){this.member&&this.roomId&&Za(this.storage,{uid:this.uid,roomId:this.roomId,name:this.member.name,team:this.team,unit:this.member.unit,host:this.meta?.hostUid===this.uid})}_offerResume(e){e.uid===this.uid&&(this.resumePending=!0,this.returnIdentity=e,this.emit({kind:"resume-offer",roomId:e.roomId,name:e.name,roomName:this.roomName||this.meta?.name||"\u539F\u6230\u5C40",team:e.team,unit:e.unit}))}async _checkSavedReturn(){let e=Xa(this.storage,this.uid);if(!e)return;let t=(await Z(I(this.db,se))).val(),i=J(t,this.now());if(this.closed||this.roomId||this.pendingRoomId)return;if(t?.id!==e.roomId||!["active","paused"].includes(i)){this._endSession(t?.id===e.roomId?i:"closed",e.roomId);return}if(this.meta=t,this.roomName=t.name,t.hostUid===this.uid){await this._closeCloudRoom("host-reloaded",t.id);return}let s=(await Z(I(this.db,`sessions/${t.id}/members/${e.team}/${this.uid}`))).val();if(!(this.closed||this.roomId||this.pendingRoomId)){if(this.meta?.id!==e.roomId||!["active","paused"].includes(J(this.meta,this.now()))){this._endSession(this.meta?.id===e.roomId?J(this.meta,this.now()):"closed",e.roomId);return}if(!s||s.name!==e.name||s.unit!==e.unit){fi(this.storage,this.uid);return}this._offerResume(e)}}async resume(){let e=this.returnIdentity;if(!e||e.uid!==this.uid||this.readyState!==1)throw Error("\u5C1A\u672A\u6062\u5FA9\u9023\u7DDA\uFF0C\u8ACB\u7A0D\u5019\u518D\u8A66\u3002");let t=(await Z(I(this.db,se))).val(),i=J(t,this.now());if(!(this.closed||this.returnIdentity!==e)){if(t?.id!==e.roomId||!["active","paused"].includes(i)){this._endSession(t?.id===e.roomId?i:"closed",e.roomId);return}if(i==="paused")throw Error("\u958B\u5C40\u8005\u6B63\u5728\u6062\u5FA9\u9023\u7DDA\uFF0C\u8ACB\u7A0D\u5019\u518D\u8FD4\u56DE\u3002");this._stopSession();try{await this._join({kind:"join",roomId:e.roomId,token:this.uid})}catch(s){throw!this.closed&&!this.roomId&&this.lastEndedRoomId!==e.roomId&&(this.resumePending=!0,this.returnIdentity=e),s}}}async declineResume(){let e=this.returnIdentity;if(e)try{if(this.connected){let t=this.member?{...this.member,team:this.team}:(await Z(I(this.db,`sessions/${e.roomId}/members/${e.team}/${this.uid}`))).val();t&&await this._releaseMembership(e.roomId,{...t,team:e.team})}}finally{this._endSession("declined",e.roomId,"\u5DF2\u96E2\u958B\u539F\u6230\u5C40\uFF0C\u53EF\u91CD\u65B0\u5EFA\u7ACB\u6216\u9078\u64C7\u6230\u5C40\u3002")}}_endSession(e,t=this.roomId,i=ui(e)){!t||this.lastEndedRoomId===t||(this.lastEndedRoomId=t,fi(this.storage,this.uid),this.recordDiagnostic("session-ended",{reason:e}),this._stopSession(),this.emit({kind:"session-ended",roomId:t,reason:e,text:i}))}async _closeCloudRoom(e,t=this.roomId){if(!t)return;(await ue(I(this.db,se),s=>!this.closed&&s?.id===t&&s.hostUid===this.uid?s.expiresAt<=this.now()?null:{...s,status:"closed",reason:e,heartbeat:this.now(),closedAt:this.now(),hostOfflineAt:null}:void 0,{applyLocally:!1})).committed&&this._endSession(e,t)}async _releaseExpiredSlot(e){await ue(I(this.db,se),t=>t?.id===e&&J(t,this.now())==="host-disconnected"?null:void 0,{applyLocally:!1})}send(e){if(this.closed)return;let t;try{t=JSON.parse(e)}catch{this.notice("\u6307\u4EE4\u683C\u5F0F\u7121\u6548");return}if(t.kind==="command"){if(!t.command||!["move","attack","stop"].includes(t.command.kind)||this.readyState!==1||!this.joined||this.resumePending||!this._hostAvailable())return;let i=this.room?.player(this.uid)?.life??this.personal?.life,s=this.room?.round??this.publicState?.round;if(!Number.isInteger(i)||!Number.isInteger(s))return;let r=this.operationSequence=Math.max((this.operationSequence||0)+1,Date.now()*1e3);this.outbox??=new _i({send:o=>this._sendBattleCommand(o),onError:o=>this.notice(o.message)}),this.outbox.offer({...t,round:s,id:"op:"+i+":"+r});return}t.kind==="question"&&this.outbox?.clear(),this.pending=this.pending.then(async()=>{if(this.readyState!==1)throw Error("\u96F2\u7AEF\u5C1A\u672A\u9023\u7DDA\uFF0C\u6307\u4EE4\u672A\u9001\u51FA");let i=JSON.parse(e);if(i.kind==="list"||i.kind==="rooms")await this._listRooms();else if(i.kind==="create")await this._create(i);else if(i.kind==="join")await this._join(i);else{if(!this.joined)throw Error("\u8ACB\u5148\u5EFA\u7ACB\u6216\u52A0\u5165\u623F\u9593");if(!n_.has(i.kind))throw Error("\u6307\u4EE4\u7121\u6548");if(this.resumePending)throw Error("\u8ACB\u5148\u9078\u64C7\u662F\u5426\u8FD4\u56DE\u539F\u6230\u5C40");if(!this._hostAvailable())throw Error("\u623F\u4E3B\u96E2\u7DDA\uFF0C\u6230\u5C40\u66AB\u505C\uFF0C\u6307\u4EE4\u672A\u9001\u51FA");if(this.room)await this._handleCommand(this.uid,i);else{let s=I(this.db,`sessions/${this.roomId}/commands/${this.uid}`);if((await Z(s)).size>=10)throw Error("\u6307\u4EE4\u4F47\u5217\u5DF2\u6EFF\uFF0C\u8ACB\u7A0D\u5019\u518D\u8A66");await At(Hs(s),{...i,at:this.now()})}}}).catch(i=>this.notice(i.message||"\u96F2\u7AEF\u6307\u4EE4\u5931\u6557"))}async _sendBattleCommand(e){if(this.closed||!this.joined||this.readyState!==1||!this._hostAvailable()||e.round!==(this.room?.round??this.publicState?.round))return;if((this.room?.simulationPaused||this.publicState?.simulationPaused)&&e.command.kind!=="stop"){this.outbox?.reject(e.id);return}let t=this.roomId,i=this.outbox?.generation;if(this.room)await this._handleCommand(this.uid,e);else{let s=I(this.db,`sessions/${this.roomId}/commands/${this.uid}`);if((await Z(s)).size>=10)throw Error("\u6307\u4EE4\u4F47\u5217\u5DF2\u6EFF\uFF0C\u8ACB\u7A0D\u5019\u518D\u8A66");if(this.closed||!this.joined||this.roomId!==t||i!==this.outbox?.generation||e.round!==this.publicState?.round)return;await At(Hs(s),{...e,at:this.now()})}}async _listRooms(){let e=(await Z(I(this.db,se))).val();if(!["active","paused"].includes(J(e,this.now()))){this.emit({kind:"rooms",rooms:[]});return}let t=(await Z(I(this.db,`sessions/${e.id}/members`))).val()||{},i=[];for(let s of oi)for(let[r,o]of Object.entries(t[s]||{}))i.push({id:r,name:o.name,team:s,unit:o.unit,connected:!!o.connected});this.emit({kind:"rooms",rooms:[{id:e.id,roomId:e.id,name:e.name,roomName:e.name,hostId:e.hostUid,hostName:e.hostName,running:e.status==="running",ended:e.status==="ended",counts:Object.fromEntries(oi.map(s=>[s,i.filter(r=>r.team===s).length])),players:i}]})}_details(e){let t=Md(e.name,"\u73A9\u5BB6\u540D\u5B57",20),i=e.team,s=i==="observer"?"tank":e.unit;if(!oi.includes(i)||!Object.hasOwn(R.units,s))throw Error("\u968A\u4F0D\u6216\u5175\u7A2E\u7121\u6548");return{name:t,team:i,unit:s}}async _create(e){if(this.roomId||this.pendingRoomId)throw Error("\u5DF2\u52A0\u5165\u6216\u6B63\u5728\u52A0\u5165\u623F\u9593");let t=Rt(this.allQuestions,e.questionBankId),i=this.sessionEpoch||0,s=Md(e.roomName,"\u6230\u5C40\u540D\u7A31",40),r=this._details(e),o=this.now(),a=globalThis.crypto.randomUUID(),l={id:a,name:s,hostUid:this.uid,hostName:r.name,createdAt:o,heartbeat:o,expiresAt:o+t_,status:"waiting"};if(!(await ue(I(this.db,se),h=>!this.closed&&!["active","paused"].includes(J(h,this.now()))?l:void 0,{applyLocally:!1})).committed)throw Error("\u514D\u8CBB\u65B9\u6848\u6700\u591A\u540C\u6642\u4E00\u5C40\uFF0C\u76EE\u524D\u5DF2\u6709\u6230\u5C40");this.pendingRoomId=a,this.bank=t;try{this._assertJoin(i,a),await it(I(this.db),{[`sessions/${a}/meta`]:{hostUid:this.uid,expiresAt:l.expiresAt},[`sessionExpiry/${a}`]:l.expiresAt}),this._assertJoin(i,a);let h=new at(this.obstacles,{incrementalPaths:!0});h.id=a,h.name=s,e.questionBankId&&(h.questionBankId=e.questionBankId);let d=h.join(r.name,r.team,r.unit);if(d.id=this.uid,d.token=this.uid,h.hostId=this.uid,this.room=h,r.seat=await this._claimSeat(a,r.team),this._assertJoin(i,a),await this._attach(l,r,i),await this._publish(),this.roomId!==a||this.room!==h||!this.connected)throw Error("\u623F\u9593\u5EFA\u7ACB\u6642\u9023\u7DDA\u4E2D\u65B7\uFF0C\u8ACB\u91CD\u65B0\u5617\u8A66");this._receive(this._identity())}catch(h){throw await this._releaseMembership(a,r).catch(()=>{}),(this.sessionEpoch||0)===i&&this._stopSession(),this.closeExpired||await it(I(this.db),{[`sessions/${a}`]:null,[`sessionExpiry/${a}`]:null}).catch(()=>{}),this.closeExpired||await ue(I(this.db,se),d=>!this.closeExpired&&(d===null||d.id===a)?null:void 0,{applyLocally:!1}).catch(()=>{}),h}}async _join(e){if(this.roomId){if(this.joined&&e.roomId===this.roomId){this._receive(this._identity());return}throw Error("\u5DF2\u52A0\u5165\u6216\u6B63\u5728\u52A0\u5165\u623F\u9593")}if(this.pendingRoomId)throw Error("\u6B63\u5728\u52A0\u5165\u623F\u9593");let t=this.sessionEpoch||0;this.pendingRoomId=e.roomId;let i,s,r;try{if(i=(await Z(I(this.db,se))).val(),this._assertJoin(t,e.roomId),!i||i.id!==e.roomId||J(i,this.now())!=="active")throw Error("\u623F\u9593\u4E0D\u5B58\u5728\u3001\u5DF2\u95DC\u9589\u6216\u958B\u5C40\u8005\u6B63\u5728\u6062\u5FA9\u9023\u7DDA");if(i.hostUid===this.uid)throw Error("\u958B\u5C40\u8005\u5DF2\u91CD\u65B0\u6574\u7406\u9801\u9762\uFF0C\u539F\u6230\u5C40\u5DF2\u95DC\u9589\u3002");let o=(await Z(I(this.db,`sessions/${i.id}/members`))).val()||{};this._assertJoin(t,i.id);for(let a of oi)o[a]?.[this.uid]&&(s={...o[a][this.uid],team:a});if(!Object.values(o).some(a=>a?.[i.hostUid]?.connected===!0))throw Error("\u958B\u5C40\u8005\u5DF2\u96E2\u7DDA\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u52A0\u5165");if(e.token!==void 0&&e.token!==null&&(e.token!==this.uid||!s))throw Error("\u6B64\u623F\u9593\u7684\u91CD\u9023\u8EAB\u5206\u7121\u6548");if(r=s?{name:s.name,team:s.team,unit:s.unit,joinedAt:s.joinedAt,seat:s.seat}:this._details(e),!s&&r.team!=="observer"&&i.status!=="waiting")throw Error("\u5DF2\u958B\u5C40\uFF0C\u50C5\u63A5\u53D7\u539F\u8EAB\u5206\u91CD\u9023\u6216\u65C1\u89C0");if(!s&&Object.keys(o[r.team]||{}).length>=(r.team==="observer"?8:36))throw Error("\u9078\u64C7\u7684\u968A\u4F0D\u5DF2\u6EFF");if(this.joiningExisting=!!s,r.seat=await this._claimSeat(i.id,r.team,r.seat),this._assertJoin(t,i.id),await this._attach(i,r,t),this._assertJoin(t,i.id),s&&!this.joined){let a=(await Z(I(this.db,`sessions/${i.id}/roster/${this.uid}`))).val();a?.name===r.name&&a.team===r.team&&a.unit===r.unit&&this.roomId===i.id&&this.connected&&this._receive(this._identity())}}catch(o){throw!s&&r&&await this._releaseMembership(i.id,r).catch(()=>{}),(this.sessionEpoch||0)===t&&this._stopSession(),o}this.joinTimeout=setTimeout(()=>this._run(async()=>{!this.joined&&this.roomId===i.id&&(s||await this._releaseMembership(i.id,r),this.notice("\u623F\u4E3B\u672A\u78BA\u8A8D\u52A0\u5165\uFF0C\u8ACB\u6AA2\u67E5\u9023\u7DDA\u5F8C\u91CD\u65B0\u52A0\u5165"),this._stopSession())}),15e3)}_assertJoin(e,t){if(this.closed||(this.sessionEpoch||0)!==e||this.pendingRoomId!==t||this.meta?.id===t&&!["active","paused"].includes(J(this.meta,this.now())))throw Error("\u539F\u6230\u5C40\u5DF2\u95DC\u9589\u6216\u52A0\u5165\u5DF2\u53D6\u6D88")}async _claimSeat(e,t,i){let s=t==="observer"?8:36,r=Array.from({length:s},(a,l)=>String(l)),o=i!==void 0?[String(i)]:r;if(o.some(a=>!r.includes(a)))throw Error("\u539F\u5E2D\u4F4D\u7121\u6548");for(let a of o)if((await ue(I(this.db,`sessions/${e}/seats/${t}/${a}`),c=>!this.closed&&(c===null||c===this.uid)?this.uid:void 0,{applyLocally:!1})).committed)return a;throw Error(t==="observer"?"\u89C0\u5BDF\u8005\u5DF2\u6EFF":"\u9078\u64C7\u7684\u968A\u4F0D\u5DF2\u6EFF")}async _releaseMembership(e,t){if(!t?.team||this.closeExpired)return;let i=I(this.db,`sessions/${e}/members/${t.team}/${this.uid}`);await en(i).cancel(),!this.closeExpired&&(await js(i),!this.closeExpired&&t.seat!==void 0&&await ue(I(this.db,`sessions/${e}/seats/${t.team}/${t.seat}`),s=>!this.closeExpired&&(s===null||s===this.uid)?null:void 0,{applyLocally:!1}))}async _attach(e,t,i=this.sessionEpoch||0){this._assertJoin(i,e.id),this.meta=e,this.roomId=e.id,this.roomName=e.name,this.team=t.team,this.member={...t,connected:!0,joinedAt:t.joinedAt??this.now()},delete this.member.team,this.memberRef=I(this.db,`sessions/${e.id}/members/${t.team}/${this.uid}`),this.lastEndedRoomId=null,this.resumePending=!1,this.returnIdentity=null;let s=`sessions/${e.id}`,r=o=>{this.roomId===e.id&&this.notice("\u623F\u9593\u540C\u6B65\u5931\u6557\uFF1A"+o.message)};this.room||(this.sessionUnsubscribers.push(Le(I(this.db,`${s}/roster`),o=>{this.roomId===e.id&&(this.roster=o.val()||{},this._emitState())},r)),this.sessionUnsubscribers.push(Le(I(this.db,`${s}/state`),o=>{this.roomId===e.id&&(this.publicState=o.val(),this.lastPublicReceivedAt=this.now(),this._emitState())},r)),this.sessionUnsubscribers.push(Le(I(this.db,`${s}/personal/${this.uid}`),o=>{this.roomId===e.id&&(this.personal=o.val(),this._emitState())},r))),this.sessionUnsubscribers.push(Wa(I(this.db,`${s}/responses/${this.uid}`),o=>this._run(async()=>{this.roomId===e.id&&this._receive(o.val()),await js(o.ref)}),r)),this.sessionUnsubscribers.push(Le(I(this.db,`${s}/members`),o=>{this.roomId===e.id&&(this.members=o.val()||{},this._refreshHostAvailability(),this.room&&(this.memberQueue=this.memberQueue.then(()=>this._syncMembers()).catch(a=>this.notice("\u540D\u55AE\u540C\u6B65\u5931\u6557\uFF1A"+a.message))))},r));try{await this._registerPresence(),this._assertJoin(i,e.id)}catch(o){throw(this.sessionEpoch||0)===i&&this._stopSession(),o}}async _registerPresence(){let e=this.sessionEpoch||0,t=this.roomId,i=this.memberRef,s={...this.member},r=this.meta?.hostUid===this.uid,o=()=>{if(this.closed||this.roomId!==t||(this.sessionEpoch||0)!==e)throw Error("\u539F\u6230\u5C40\u5DF2\u95DC\u9589\u6216\u52A0\u5165\u5DF2\u53D6\u6D88")};if(this.closed)throw Error("\u9023\u7DDA\u5DF2\u95DC\u9589\uFF0C\u52A0\u5165\u5DF2\u53D6\u6D88");if(i){if(await en(i).set({...s,connected:!1}),o(),r&&(this.hostDisconnectRef=I(this.db,se+"/hostOfflineAt"),await en(this.hostDisconnectRef).set(Sd()),o(),!(await ue(I(this.db,se),l=>!this.closed&&(this.sessionEpoch||0)===e&&this.roomId===t&&l?.id===t&&l.hostUid===this.uid&&["active","paused"].includes(J(l,this.now()))?{...l,hostOfflineAt:null,heartbeat:this.now()}:void 0,{applyLocally:!1})).committed))throw Error("\u539F\u6230\u5C40\u5DF2\u95DC\u9589\uFF0C\u4E0D\u80FD\u6062\u5FA9");o(),await At(i,{...s,connected:!0})}}_identity(){return{kind:"identity",id:this.uid,token:this.uid,host:this.meta?.hostUid===this.uid,questionBankId:this.room?.questionBankId||this.publicState?.questionBankId,roomId:this.roomId,roomName:this.roomName}}_receive(e){if(!(!e||this.closed)){if(e.kind==="operation-rejected"){this.outbox?.reject(e.id);return}if(e.kind==="notice"&&e.joinRejected&&!this.joined&&this.roomId){let t=this.roomId,i={...this.member,team:this.team};this._run(async()=>{this.joiningExisting||await this._releaseMembership(t,i),this.roomId===t&&this._stopSession()})}if(e.kind==="identity"){if(!this.roomId||this.resumePending||e.id!==this.uid||e.roomId!==this.roomId)return;this.joined=!0,this._remember(),clearTimeout(this.joinTimeout),this._refreshHostAvailability()}if(e.kind==="question"&&(this.currentQuestion=e),e.kind==="result"&&e.accepted&&this.currentQuestion?.id===e.id){let t=this.currentQuestion;this.currentQuestion=null,this._run(()=>Od(this.db,this.uid,{id:e.id,accepted:!0,studentName:this.member.name,type:t.typeId,difficulty:t.difficulty,correct:e.correct,practice:!!t.practice,at:Date.now()}))}this.emit(e),e.kind==="identity"&&this._emitState()}}async _syncMembers(){let e=this.room,t=this.roomId;if(this.closed||!e||!t)return;let i=new Set;for(let s of oi)for(let[r,o]of Object.entries(this.members[s]||{})){if(this.roomId!==t)return;if(i.has(r))continue;i.add(r);let a=e.player(r),l=!1;try{if(a){if(a.team!==s)throw Error("\u539F\u8EAB\u5206\u4E0D\u80FD\u66F4\u63DB\u968A\u4F0D");l=!a.connected&&o.connected}else{let c=this._details({...o,team:s});if(s==="observer"&&e.players.filter(h=>h.team==="observer").length>=8)throw Error("\u89C0\u5BDF\u8005\u5DF2\u6EFF");a=e.join(c.name,s,c.unit),a.id=r,a.token=r}o.connected?a.connected=!0:e.disconnect(r),this.commandUnsubscribers.has(r)?l&&r!==this.uid&&(await this._respond(r,{...this._identity(),id:r,token:r,host:!1},t),a.ticket&&await this._respond(r,{kind:"question",...e.question(r)},t)):(this._listenCommands(r),r!==this.uid&&o.connected&&(await this._respond(r,{...this._identity(),id:r,token:r,host:!1},t),a.ticket&&await this._respond(r,{kind:"question",...e.question(r)},t)))}catch(c){await this._respond(r,{kind:"notice",text:"\u52A0\u5165\u5931\u6557\uFF1A"+c.message,joinRejected:!0},t)}}for(let s of[...e.players])i.has(s.id)||(!e.running&&!e.ended&&s.id!==e.hostId?(e.players.splice(e.players.indexOf(s),1),this.commandUnsubscribers.get(s.id)?.(),this.commandUnsubscribers.delete(s.id),this.lastPersonal.delete(s.id)):e.disconnect(s.id));this._refreshHostAvailability()}_listenCommands(e){let t=this.roomId,i=`sessions/${t}/commands/${e}`,s=Wa(I(this.db,i),r=>{let o=`${e}/${r.key}`;if(this.seenCommands.has(o))return;this.seenCommands.add(o);let l=(this.commandQueues.get(e)||Promise.resolve()).then(async()=>{try{if(this.roomId!==t)return;let c=r.val();if(!Number.isFinite(c?.at)||this.now()-c.at>3e4||c.at>this.now()+5e3)throw Error("\u6307\u4EE4\u5DF2\u903E\u6642\uFF0C\u8ACB\u91CD\u65B0\u64CD\u4F5C");await this._handleCommand(e,c,t)}catch(c){await this._respond(e,{kind:"notice",text:c.message},t)}finally{try{await js(r.ref)}finally{this.seenCommands.delete(o)}}}).catch(c=>this.notice("\u6307\u4EE4\u8655\u7406\u5931\u6557\uFF1A"+c.message));this.commandQueues.set(e,l)},r=>this.notice("\u6307\u4EE4\u8A02\u95B1\u5931\u6557\uFF1A"+r.message));this.commandUnsubscribers.set(e,s)}async _respond(e,t,i=this.roomId){if(!(this.roomId!==i||this.closed)){if(e===this.uid){this._receive(t);return}await At(Hs(I(this.db,`sessions/${i}/responses/${e}`)),t)}}async _handleCommand(e,t,i=this.roomId){if(this.roomId!==i)throw Error("\u820A\u623F\u9593\u6307\u4EE4\u5DF2\u5931\u6548");let s=this.room,r=s?.player(e);if(!r?.connected||!this._hostAvailable()||!s.player(s.hostId)?.connected)throw Error("\u6230\u5C40\u66AB\u505C\uFF0C\u6307\u4EE4\u672A\u57F7\u884C");if(["developer","deploy"].includes(t.kind)&&t.round!==s.round)throw Error("\u820A\u56DE\u5408\u6307\u4EE4\u5DF2\u5931\u6548");if(s.simulationPaused&&["command","fire","deploy"].includes(t.kind)&&t.command?.kind!=="stop"){t.kind==="command"?await this._respond(e,{kind:"operation-rejected",id:t.id??""},i):t.kind==="deploy"?await this._respond(e,{kind:"deployment",id:t.id??null,accepted:!1},i):await this._respond(e,{kind:"notice",text:"\u6B63\u5728\u540C\u6B65\uFF0C\u8ACB\u6062\u5FA9\u5F8C\u518D\u767C\u5C04\u3002"},i);return}if(t.kind==="question-bank")s.selectQuestionBank(e,t.questionBankId),this.questionSource&&await this.questionSource.prepare(s.questionBankId);else if(t.kind==="start"){if(e!==s.hostId)throw Error("\u53EA\u6709\u958B\u5C40\u8005\u53EF\u958B\u59CB");if(this.questionSource&&await this.questionSource.prepare(s.questionBankId),this.roomId!==i||this.closed)return;s.start(e),await this._heartbeat()}else if(t.kind==="restart"){if(e!==s.hostId)throw Error("\u53EA\u6709\u958B\u5C40\u8005\u53EF\u91CD\u65B0\u958B\u5C40");await this._closeCloudRoom("restart",i)}else if(t.kind==="deploy"){let o=s.deploy(e);await this._respond(e,{kind:"deployment",id:t.id??null,accepted:o},i),await this._respond(e,{kind:"notice",text:o?"\u5DF2\u9032\u5165\u6230\u5834":"\u5C1A\u672A\u958B\u653E\u5165\u5834\u6216\u88DC\u7D66\u4E0D\u8DB3\uFF0C\u8ACB\u5148\u88DC\u5145\u751F\u547D\u503C\u6216\u5F48\u85E5\u3002"},i)}else if(t.kind==="developer")t.action==="blessing"?s.grantBlessing(e,t.password):s.setTime(e,t.seconds,t.password),await this._respond(e,{kind:"notice",text:t.action==="blessing"?"\u311A\u6770\u7684\u6069\u8CDC\u5DF2\u555F\u52D5":"\u5C0D\u5C40\u9032\u884C\u6642\u9593\u5DF2\u66F4\u65B0"},i);else if(t.kind==="watch"||t.kind==="screen"){this.observerRelay??=new ai(s);for(let o of this.observerRelay.handle(e,t))await this._respond(o.to,o.message,i)}else if(t.kind==="command"){if(t.round!==void 0&&t.round!==s.round)return;if(typeof t.id=="string"&&t.id.startsWith("op:")){let o=/^op:(\d+):(\d+)$/.exec(t.id);if(!o)return;let a=Number(o[1]),l=Number(o[2]);if(a!==r.life||!Number.isSafeInteger(l)||l<=(r.lastOperationSequence||0))return;r.lastOperationSequence=l}s.command(e,t.command||{})}else if(t.kind==="buy")await this._respond(e,{kind:"notice",text:s.buy(e,t.item)?"\u88DC\u7D66\u5B8C\u6210":"\u6676\u6838\u4E0D\u8DB3\u3001\u5BB9\u91CF\u5DF2\u6EFF\u6216\u76EE\u524D\u4E0D\u80FD\u8CFC\u8CB7"},i);else if(t.kind==="fire")await this._respond(e,{kind:"notice",text:s.fire(e,t.target,t.missile)?"\u98DB\u5F48\u5DF2\u767C\u5C04":s.fireProblem(e,t.target,t.missile)},i);else if(t.kind==="question"){if(this.questionSource){if(r.ticket){await this._respond(e,{kind:"question",...s.question(e)},i);return}if(!s.running||s.ended)throw Error("\u8ACB\u5148\u958B\u59CB\u904A\u6232");let h=s.round,d=s.questionBankId;await this._respond(e,{kind:"notice",text:"\u4E0B\u4E00\u984C\u6E96\u5099\u4E2D\u2026"},i);let{question:u,practice:p}=await this.questionSource.take(d,t.difficulty||"\u6613",r.solved);if(this.room!==s||this.roomId!==i||s.round!==h||s.ended||this.closed||!r.connected)return;let f=s.issue(e,u,p);f&&await this._respond(e,{kind:"question",...f},i);return}let o=Rt(this.allQuestions,s.questionBankId).filter(h=>!t.difficulty||h.difficulty===t.difficulty),a=o.filter(h=>(r.solved[h.typeId]||0)<2),l=!1;if(a.length||(a=o,l=!0),!a.length)throw Error("\u6B64\u96E3\u5EA6\u6C92\u6709\u984C\u76EE");let c=s.issue(e,a[Math.floor(Math.random()*a.length)],l);if(!c)throw Error("\u8ACB\u5148\u958B\u59CB\u904A\u6232");await this._respond(e,{kind:"question",...c},i)}else if(t.kind==="answer")await this._respond(e,{kind:"result",...s.answer(e,t.id,t.choiceId)},i);else throw Error("\u6307\u4EE4\u7121\u6548")}_tick(e){if(!(!this.room||!this.joined||this.closed)){if(this.simulationClock??=new gi,this.simulationClock.advance(this.room,e,this.connected&&this._hostAvailable()),this.room.navigation?.tick(),this.lastPublicReceivedAt=this.now(),(this.now()-(this.lastDiagnosticTick||0)>1e3||this.simulationClock.last.paused!==this.lastDiagnosticPause)&&(this.recordDiagnostic("tick",{...this.simulationClock.last,navigationMs:this.room.navigation?.last.ms||0,searches:this.room.navigation?.size||0,pending:this.outbox?.size||0,round:this.room.round,time:this.room.time}),this.lastDiagnosticTick=this.now(),this.lastDiagnosticPause=this.simulationClock.last.paused),this.observerRelay)for(let t of this.observerRelay.sync())this._run(()=>this._respond(t.to,t.message));this._emitState(),this.connected&&this._run(()=>this._publish()),this.room.events.length=0}}_emitState(){if(!(!this.joined||this.closed||this.resumePending))try{let e=this.room?this.room.snapshot(this.uid):xd(this.publicState,this.roster);if(!e)return;let t=e.players.find(s=>s.id===this.uid),i=e.roomId+":"+e.round+":"+(this.room?.player(this.uid)?.life??this.personal?.life);if((i!==this.operationContext||!t?.deployed||t.answering||t.hp<=0)&&(this.outbox?.clear(),this.operationContext=i),!this.room&&this.personal?.round===e.round){let{round:s,...r}=this.personal;e.me={...r,review:Array.isArray(r.review)?r.review:[]}}e.me&&!e.me.orderKind&&!this.outbox?.size&&this.outbox?.clear(),this.emit({kind:"state",...e,roomName:this.roomName,hostDisconnected:!this._hostAvailable(),hostGraceRemaining:Number.isFinite(this.meta?.hostOfflineAt)?Math.max(0,Math.ceil((3e4-this.now()+this.meta.hostOfflineAt)/1e3)):null})}catch(e){this.notice(e.message||"\u6230\u6CC1\u89E3\u78BC\u5931\u6557")}}async _publish(){if(!this.room||!this.connected||this.publishing||this.now()-this.lastPublish<200)return;let e={},t=this.room,i=this.roomId;this.publishing=e,this.lastPublish=this.now();try{let s={...t.snapshot(this.uid),roomName:this.roomName,hostDisconnected:!this._hostAvailable()},r=Rd(s),o=Nd(this.lastPublicState,r),a=Ad(s),l=er(a);l!==this.lastRoster&&(o.roster=a);let c=[];for(let h of t.players){let d={...t.snapshot(h.id).me,round:t.round},u=er(d);this.lastPersonal.get(h.id)!==u&&(o[`personal/${h.id}`]=d,c.push([h.id,u]))}if(!Object.keys(o).length)return;if(await this._writeChanges(i,o),this.roomId===i){this.lastPublicState=r,this.lastRoster=l;for(let[h,d]of c)this.lastPersonal.set(h,d)}}finally{this.publishing===e&&(this.publishing=!1)}}_writeChanges(e,t){return it(I(this.db,`sessions/${e}`),t)}async _heartbeat(){if(!this.room||!this.connected||!this.roomId||this.meta?.id!==this.roomId||this.meta.expiresAt<=this.now())return;let e=this.roomId,t=this.room.ended?"ended":this.room.running?"running":"waiting";await ue(I(this.db,se),i=>!this.closed&&i?.id===e&&i.hostUid===this.uid&&J(i,this.now())==="active"?{...i,heartbeat:this.now(),status:t}:void 0,{applyLocally:!1})}async _pruneExpiredSessions(){if(this.closed||!this.db||this.pruningSessions||globalThis.navigator?.onLine===!1)return 0;this.pruningSessions=!0;try{let e=this.now(),t=await Z(Gs(I(this.db,"sessionExpiry"),vd(),qs(e),$s(100))),i={},s=0;return t.forEach(r=>{let o=r.val();Number.isFinite(o)&&o<=e&&(i[`sessions/${r.key}`]=null,i[`sessionExpiry/${r.key}`]=null,s++)}),s&&!this.closed&&await it(I(this.db),i),s}finally{this.pruningSessions=!1}}_stopSession(){this.outbox?.clear(),this.operationContext=null,this.simulationClock=null,this.sessionEpoch=(this.sessionEpoch||0)+1,this.pendingRoomId=null,this.observerRelay=null,this.resumePending=!1,this.returnIdentity=null,this.hostAvailable=null,this.wasHostOffline=!1,this.lastGrace=null,clearTimeout(this.joinTimeout);for(let e of this.sessionUnsubscribers.splice(0))e();for(let e of this.commandUnsubscribers.values())e();this.commandUnsubscribers.clear(),this.commandQueues.clear(),this.seenCommands.clear(),this.room=null,this.roomId=null,this.joined=!1,this.joiningExisting=!1,this.member=null,this.memberRef=null,this.roster={},this.personal=null,this.publicState=null,this.members={},this.currentQuestion=null,this.lastRoster="",this.lastPersonal.clear(),this.lastPublicState=null,this.lastPublish=0,this.publishing=!1}close(){if(this.closing)return this.closing;let e=this.roomId,t=this.memberRef,i=this.hostDisconnectRef,s=this.member?{...this.member,team:this.team}:null,r=this.meta?.hostUid===this.uid;fi(this.storage,this.uid),this.closed=!0,this.readyState=2;for(let c of this.unsubscribers.splice(0))c();for(let c of this.sessionUnsubscribers.splice(0))c();for(let c of this.commandUnsubscribers.values())c();this.commandUnsubscribers.clear(),clearTimeout(this.joinTimeout),clearInterval(this.simulationTimer),clearInterval(this.heartbeatTimer),clearInterval(this.presenceTimer),clearInterval(this.sessionCleanupTimer),this.stopLearningCleanup?.();let o,a=Promise.resolve().then(async()=>(await this.pending,this.closeExpired||(await this.memberQueue,this.closeExpired)?!1:this.db?(t&&await en(t).cancel(),i&&await en(i).cancel(),this.closeExpired||(e&&s&&await this._releaseMembership(e,s),this.closeExpired)?!1:(e&&r&&await ue(I(this.db,se),c=>this.closeExpired?void 0:c===null?null:c.id===e&&c.hostUid===this.uid?c.expiresAt<=this.now()?null:{...c,status:"closed",reason:"host-left",heartbeat:this.now(),closedAt:this.now(),hostOfflineAt:null}:void 0,{applyLocally:!1}),!0)):!0)),l=new Promise((c,h)=>{o=setTimeout(()=>{this.closeExpired=!0,h(Error("\u7DB2\u8DEF\u6E05\u7406\u903E\u6642\uFF0C\u5DF2\u505C\u6B62\u6B64\u9023\u7DDA\uFF0C\u53EF\u7E7C\u7E8C\u4F7F\u7528\u55AE\u6A5F\u6A21\u5F0F"))},2e3)});return this.closing=Promise.race([a,l]).catch(c=>(this.onmessage?.({data:er({kind:"notice",text:"\u96E2\u958B\u623F\u9593\u6642\u96F2\u7AEF\u6E05\u7406\u5931\u6557\uFF0C\u820A\u6230\u5C40\u5C07\u96A8\u5230\u671F\u7D22\u5F15\u6E05\u9664\uFF1A"+c.message})}),!1)).finally(()=>{clearTimeout(o),this._stopSession(),this.db&&Ed(this.db),this.connected=!1,this.readyState=3,this.onclose?.()}),this.closing}};async function i_(n){let e=await n(t=>{if(t===null)return 1;if(!Number.isSafeInteger(t)||t<0)throw Error("\u5230\u8A2A\u6B21\u6578\u8CC7\u6599\u683C\u5F0F\u7121\u6548");return t+1});if(!e.committed)throw Error("\u5230\u8A2A\u6B21\u6578\u672A\u80FD\u5132\u5B58");return e.snapshot.val()}async function Ld(n,e){if(n){n.textContent="\u7E3D\u5230\u8A2A\u6B21\u6578\uFF1A\u8B80\u53D6\u4E2D\u2026";try{if(!e?.projectId||!e?.databaseURL)throw Error("\u7F3A\u5C11\u96F2\u7AEF\u8A2D\u5B9A");let t=`orbit-visits-${e.projectId}`,i=Si().find(o=>o.name===t)||fn(e,t),s=Ks(i,e.databaseURL),r=await i_(o=>ue(I(s,"siteStats/visits"),o,{applyLocally:!1}));n.textContent=`\u7E3D\u5230\u8A2A\u6B21\u6578\uFF1A${r.toLocaleString("zh-TW")}`}catch(t){console.warn("\u7E3D\u5230\u8A2A\u6B21\u6578\u7121\u6CD5\u66F4\u65B0\uFF1A",t),n.textContent="\u7E3D\u5230\u8A2A\u6B21\u6578\uFF1A\u66AB\u7121\u6CD5\u53D6\u5F97"}}}function Ud({base:n=document.baseURI,fetcher:e=fetch,cacheStorage:t=globalThis.caches,random:i=Math.random}={}){let s=new Map,r=new Map,o=new Map,a=new Set,l=new Map,c;async function h(v){let E=new URL(v,n).href,k;try{k=await t?.open("orbit-questions-v1");let _=await k?.match(E);if(_&&!v.endsWith("question-catalog.json"))return _.json()}catch{}let S;try{S=await e(E,{cache:"no-cache",signal:AbortSignal.timeout(15e3)})}catch(_){let A=await k?.match(E);if(A)return A.json();throw _}if(!S.ok)throw Error("\u984C\u76EE\u4E0B\u8F09\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u91CD\u8A66");let y=await S.clone().json();try{await k?.put(E,S);let _=await k?.keys();if(_?.length>64)for(let A of _.slice(0,_.length-64))await k.delete(A)}catch{}return y}async function d(v){c??=h("data/question-catalog.json").catch(S=>{throw c=null,S});let E=await c,k=E.banks.find(S=>S.id===v);if(!k)throw Error("\u9078\u64C7\u7684\u984C\u5EAB\u4E0D\u5B58\u5728");return s.has(v)||s.set(v,h(k.index).then(S=>{if(S.files)for(let y of Object.values(S.levels))for(let _ of y)_[2]=S.files[_[2]];return S}).catch(S=>{throw s.delete(v),S})),s.get(v)}async function u(v){let E;try{if(E=await t?.open("orbit-question-images-v1"),await E?.match(v))return}catch{}let k=await e(v,{signal:AbortSignal.timeout(15e3)});if(!k.ok)throw Error("\u984C\u76EE\u5716\u7247\u5C1A\u672A\u6E96\u5099\u597D\uFF0C\u8ACB\u91CD\u8A66");if((await k.clone().arrayBuffer()).byteLength>4*1024*1024)throw Error("\u984C\u76EE\u5716\u7247\u904E\u5927\uFF0C\u8ACB\u7E2E\u5C0F\u5716\u7247");try{await E?.put(v,k);let y=0,_=await E?.keys()||[];for(let A of _.reverse()){let M=await E.match(A);y+=(await M.arrayBuffer()).byteLength,y>32*1024*1024&&await E.delete(A)}}catch{}}async function p(v){let E=v[2];r.has(E)||r.set(E,h(E).catch(y=>{throw r.delete(E),y}));let k=await r.get(E);for(;r.size>12;)r.delete(r.keys().next().value);let S=k.questions.find(y=>y.id===v[0]);if(!S)throw Error("\u984C\u76EE\u7D22\u5F15\u8207\u5167\u5BB9\u4E0D\u4E00\u81F4");for(let y of S.images||[]){let _=new URL(typeof y=="string"?y:y.src,n);if(_.protocol!=="https:"&&_.protocol!=="http:")throw Error("\u984C\u76EE\u5716\u7247\u7DB2\u5740\u7121\u6548");await u(_.href)}return S}function f(v,E){let k=(l.get(v)||Promise.resolve()).catch(()=>{}).then(E);return l.set(v,k),k}async function w(v,E){let k=o.get(v)||[];for(o.set(v,k);k.length<Math.min(2,E.length);){let S=E.filter(A=>!k.some(M=>M.id===A[0])&&!a.has(v+":"+A[0]));if(!S.length){for(let A of E)a.delete(v+":"+A[0]);S=E.filter(A=>!k.some(M=>M.id===A[0]))}if(!S.length)break;let y=S[Math.floor(i()*S.length)],_=await p(y);k.push(_),a.add(v+":"+_.id)}}async function O(v){let E=await d(v);await Promise.all(Object.entries(E.levels).map(([k,S])=>{let y=v+":"+k;return f(y,()=>w(y,S))}))}async function B(v,E,k={}){let S=await d(v),y=S.levels[E];if(!y?.length)throw Error("\u6B64\u96E3\u5EA6\u6C92\u6709\u984C\u76EE");let _=v+":"+E;return f(_,async()=>{let A=y.filter(Ue=>(k[Ue[1]]||0)<2),M=!A.length,V=M?y:A,$=o.get(_)||[],ae=$.findIndex(Ue=>V.some(Bd=>Bd[0]===Ue.id)),be;return ae>=0?be=$.splice(ae,1)[0]:be=await p(V[Math.floor(i()*V.length)]),f(_,()=>w(_,y)).catch(()=>{}),{question:be,practice:M}})}return{prepare:O,take:B}}var Fd={schema:"plains-layout-v3-authored-models",size:48,symmetry:"reference-annotated asymmetric woods and scattered landmarks",seed:20261029,reference:"assets/references/plains-reference.png",colors:{forest:"#45d985",mountain:"#ffad56",river:"#32829a",bridge:"#d1c7ab",ruin:"#baa98a",watchtower:"#51aebb",meadow:"#82ba42"},castles:[[-16.17157287525381,16.17157287525381],[16.17157287525381,-16.17157287525381]],river:{axis:"x=z",halfWidth:1.45},bridges:[{polygon:[[.9899494936611664,-4.1012193308819755],[4.1012193308819755,-.9899494936611664],[-.9899494936611664,4.1012193308819755],[-4.1012193308819755,.9899494936611664]],uHalfWidth:2.2,vHalfLength:3.6}],obstacles:[{id:"river-diagonal",kind:"river",shape:"polygon",polygon:[[-25.86819157738998,-23.629283105668343],[-25.545045660523005,-23.24532224134877],[-25.226287112097364,-22.856974008587862],[-24.909052489130758,-22.46710185036792],[-24.590191287812814,-22.07885627049932],[-24.266554933072246,-21.69538584405334],[-23.935286926738506,-21.319547069200528],[-23.5940873762236,-20.95363983852889],[-23.241427478390364,-20.599192955175578],[-22.876694140691303,-20.256819511688096],[-22.500251358571806,-19.926155512621044],[-22.113412640475328,-19.605887449530975],[-21.718326971464755,-19.293866337354995],[-21.31778877670537,-18.987297750927834],[-20.914989351235402,-18.682990395211256],[-20.513232616050388,-18.377640349209724],[-20.115641344770403,-18.06812483930316],[-19.724880876966942,-17.751778525920074],[-19.34292571319601,-17.42662690850446],[-18.97089042260953,-17.09155541790439],[-18.608940352668856,-16.746398706658518],[-18.256290260429367,-16.391942017711457],[-17.911290866439014,-16.029834630515264],[-17.57159521490152,-15.662423500866211],[-17.234389356695434,-15.29252257788575],[-16.896665935142284,-14.923139218252352],[-16.5555152960679,-14.557183076140191],[-16.208407129063378,-14.197184461958162],[-15.853436524940859,-13.845048284894135],[-15.489511624104164,-13.501866404544282],[-15.116465428208096,-13.167805819253802],[-14.735081354770593,-12.84208311150476],[-14.347030084449841,-12.523027600638962],[-13.954723447747254,-12.208227456155003],[-13.561098765230216,-11.894745357485492],[-13.169353485157728,-11.579383856371434],[-12.782654561036326,-11.258975999306287],[-12.403849354553172,-10.930674424602893],[-12.035204720160351,-10.592212277809168],[-11.67819833813781,-10.242111878645161],[-11.333381552156624,-9.879821883439801],[-11.000326379157235,-9.505770275252642],[-10.677661601771765,-9.121328271451564],[-10.36319464251921,-8.728688449517573],[-10.05410801240576,-8.330668298444474],[-9.74721225409233,-7.930457275571357],[-9.439232095717207,-7.531330652759932],[-9.127099476055035,-7.136356491235557],[-8.808226476895005,-6.7481227092090394],[-8.480733061918642,-6.3685093429988555],[-8.14360870086939,-5.99852692286156],[-7.796793067566844,-5.638235774977558],[-7.4411684762970225,-5.286753585060832],[-7.078464873173871,-4.942350406997436],[-6.7110862746864,-4.60262222429836],[-6.341874799356056,-4.2647269184421575],[-5.973834200643432,-3.9256607359682323],[-5.609838548059379,-3.5825496073657384],[-5.2523530737326976,-3.2329283005058724],[-4.903193076983795,-2.874981516068227],[-4.563343263583464,-2.50772454828201],[-4.2328543139008294,-2.1311067167780977],[-3.910826340396741,-1.746027909095639],[-3.5954808684325004,-1.354266599873332],[-3.2843147960871204,-.9583258910321648],[-2.9743222135775595,-.5612116923551776],[-2.662263690254947,-.16616343449124332],[-2.344958246085871,.22363790252622828],[-2.019571120429278,.6053575580561832],[-1.6838708280992012,.9767640469126537],[-1.3364318164425746,1.3364318164425746],[-.9767640469126537,1.6838708280992012],[-.6053575580561832,2.019571120429278],[-.22363790252622828,2.344958246085871],[.16616343449124332,2.662263690254947],[.5612116923551776,2.9743222135775595],[.9583258910321648,3.2843147960871204],[1.354266599873332,3.5954808684325004],[1.746027909095639,3.910826340396741],[2.1311067167780977,4.2328543139008294],[2.50772454828201,4.563343263583464],[2.874981516068227,4.903193076983795],[3.2329283005058724,5.2523530737326976],[3.5825496073657384,5.609838548059379],[3.9256607359682323,5.973834200643432],[4.2647269184421575,6.341874799356056],[4.60262222429836,6.7110862746864],[4.942350406997436,7.078464873173871],[5.286753585060832,7.4411684762970225],[5.638235774977558,7.796793067566844],[5.99852692286156,8.14360870086939],[6.3685093429988555,8.480733061918642],[6.7481227092090394,8.808226476895005],[7.136356491235557,9.127099476055035],[7.531330652759932,9.439232095717207],[7.930457275571357,9.74721225409233],[8.330668298444474,10.05410801240576],[8.728688449517573,10.36319464251921],[9.121328271451564,10.677661601771765],[9.505770275252642,11.000326379157235],[9.879821883439801,11.333381552156624],[10.242111878645161,11.67819833813781],[10.592212277809168,12.035204720160351],[10.930674424602893,12.403849354553172],[11.258975999306287,12.782654561036326],[11.579383856371434,13.169353485157728],[11.894745357485492,13.561098765230216],[12.208227456155003,13.954723447747254],[12.523027600638962,14.347030084449841],[12.84208311150476,14.735081354770593],[13.167805819253802,15.116465428208096],[13.501866404544282,15.489511624104164],[13.845048284894135,15.853436524940859],[14.197184461958162,16.208407129063378],[14.557183076140191,16.5555152960679],[14.923139218252352,16.896665935142284],[15.29252257788575,17.234389356695434],[15.662423500866211,17.57159521490152],[16.029834630515264,17.911290866439014],[16.391942017711457,18.256290260429367],[16.746398706658518,18.608940352668856],[17.09155541790439,18.97089042260953],[17.42662690850446,19.34292571319601],[17.751778525920074,19.724880876966942],[18.06812483930316,20.115641344770403],[18.377640349209724,20.513232616050388],[18.682990395211256,20.914989351235402],[18.987297750927834,21.31778877670537],[19.293866337354995,21.718326971464755],[19.605887449530975,22.113412640475328],[19.926155512621044,22.500251358571806],[20.256819511688096,22.876694140691303],[20.599192955175578,23.241427478390364],[20.95363983852889,23.5940873762236],[21.319547069200528,23.935286926738506],[21.69538584405334,24.266554933072246],[22.07885627049932,24.590191287812814],[22.46710185036792,24.909052489130758],[22.856974008587862,25.226287112097364],[23.24532224134877,25.545045660523005],[23.629283105668343,25.86819157738998],[25.86819157738998,23.629283105668343],[25.545045660523005,23.24532224134877],[25.226287112097364,22.856974008587862],[24.909052489130758,22.46710185036792],[24.590191287812814,22.07885627049932],[24.266554933072246,21.69538584405334],[23.935286926738506,21.319547069200528],[23.5940873762236,20.95363983852889],[23.241427478390364,20.599192955175578],[22.876694140691303,20.256819511688096],[22.500251358571806,19.926155512621044],[22.113412640475328,19.605887449530975],[21.718326971464755,19.293866337354995],[21.31778877670537,18.987297750927834],[20.914989351235402,18.682990395211256],[20.513232616050388,18.377640349209724],[20.115641344770403,18.06812483930316],[19.724880876966942,17.751778525920074],[19.34292571319601,17.42662690850446],[18.97089042260953,17.09155541790439],[18.608940352668856,16.746398706658518],[18.256290260429367,16.391942017711457],[17.911290866439014,16.029834630515264],[17.57159521490152,15.662423500866211],[17.234389356695434,15.29252257788575],[16.896665935142284,14.923139218252352],[16.5555152960679,14.557183076140191],[16.208407129063378,14.197184461958162],[15.853436524940859,13.845048284894135],[15.489511624104164,13.501866404544282],[15.116465428208096,13.167805819253802],[14.735081354770593,12.84208311150476],[14.347030084449841,12.523027600638962],[13.954723447747254,12.208227456155003],[13.561098765230216,11.894745357485492],[13.169353485157728,11.579383856371434],[12.782654561036326,11.258975999306287],[12.403849354553172,10.930674424602893],[12.035204720160351,10.592212277809168],[11.67819833813781,10.242111878645161],[11.333381552156624,9.879821883439801],[11.000326379157235,9.505770275252642],[10.677661601771765,9.121328271451564],[10.36319464251921,8.728688449517573],[10.05410801240576,8.330668298444474],[9.74721225409233,7.930457275571357],[9.439232095717207,7.531330652759932],[9.127099476055035,7.136356491235557],[8.808226476895005,6.7481227092090394],[8.480733061918642,6.3685093429988555],[8.14360870086939,5.99852692286156],[7.796793067566844,5.638235774977558],[7.4411684762970225,5.286753585060832],[7.078464873173871,4.942350406997436],[6.7110862746864,4.60262222429836],[6.341874799356056,4.2647269184421575],[5.973834200643432,3.9256607359682323],[5.609838548059379,3.5825496073657384],[5.2523530737326976,3.2329283005058724],[4.903193076983795,2.874981516068227],[4.563343263583464,2.50772454828201],[4.2328543139008294,2.1311067167780977],[3.910826340396741,1.746027909095639],[3.5954808684325004,1.354266599873332],[3.2843147960871204,.9583258910321648],[2.9743222135775595,.5612116923551776],[2.662263690254947,.16616343449124332],[2.344958246085871,-.22363790252622828],[2.019571120429278,-.6053575580561832],[1.6838708280992012,-.9767640469126537],[1.3364318164425746,-1.3364318164425746],[.9767640469126537,-1.6838708280992012],[.6053575580561832,-2.019571120429278],[.22363790252622828,-2.344958246085871],[-.16616343449124332,-2.662263690254947],[-.5612116923551776,-2.9743222135775595],[-.9583258910321648,-3.2843147960871204],[-1.354266599873332,-3.5954808684325004],[-1.746027909095639,-3.910826340396741],[-2.1311067167780977,-4.2328543139008294],[-2.50772454828201,-4.563343263583464],[-2.874981516068227,-4.903193076983795],[-3.2329283005058724,-5.2523530737326976],[-3.5825496073657384,-5.609838548059379],[-3.9256607359682323,-5.973834200643432],[-4.2647269184421575,-6.341874799356056],[-4.60262222429836,-6.7110862746864],[-4.942350406997436,-7.078464873173871],[-5.286753585060832,-7.4411684762970225],[-5.638235774977558,-7.796793067566844],[-5.99852692286156,-8.14360870086939],[-6.3685093429988555,-8.480733061918642],[-6.7481227092090394,-8.808226476895005],[-7.136356491235557,-9.127099476055035],[-7.531330652759932,-9.439232095717207],[-7.930457275571357,-9.74721225409233],[-8.330668298444474,-10.05410801240576],[-8.728688449517573,-10.36319464251921],[-9.121328271451564,-10.677661601771765],[-9.505770275252642,-11.000326379157235],[-9.879821883439801,-11.333381552156624],[-10.242111878645161,-11.67819833813781],[-10.592212277809168,-12.035204720160351],[-10.930674424602893,-12.403849354553172],[-11.258975999306287,-12.782654561036326],[-11.579383856371434,-13.169353485157728],[-11.894745357485492,-13.561098765230216],[-12.208227456155003,-13.954723447747254],[-12.523027600638962,-14.347030084449841],[-12.84208311150476,-14.735081354770593],[-13.167805819253802,-15.116465428208096],[-13.501866404544282,-15.489511624104164],[-13.845048284894135,-15.853436524940859],[-14.197184461958162,-16.208407129063378],[-14.557183076140191,-16.5555152960679],[-14.923139218252352,-16.896665935142284],[-15.29252257788575,-17.234389356695434],[-15.662423500866211,-17.57159521490152],[-16.029834630515264,-17.911290866439014],[-16.391942017711457,-18.256290260429367],[-16.746398706658518,-18.608940352668856],[-17.09155541790439,-18.97089042260953],[-17.42662690850446,-19.34292571319601],[-17.751778525920074,-19.724880876966942],[-18.06812483930316,-20.115641344770403],[-18.377640349209724,-20.513232616050388],[-18.682990395211256,-20.914989351235402],[-18.987297750927834,-21.31778877670537],[-19.293866337354995,-21.718326971464755],[-19.605887449530975,-22.113412640475328],[-19.926155512621044,-22.500251358571806],[-20.256819511688096,-22.876694140691303],[-20.599192955175578,-23.241427478390364],[-20.95363983852889,-23.5940873762236],[-21.319547069200528,-23.935286926738506],[-21.69538584405334,-24.266554933072246],[-22.07885627049932,-24.590191287812814],[-22.46710185036792,-24.909052489130758],[-22.856974008587862,-25.226287112097364],[-23.24532224134877,-25.545045660523005],[-23.629283105668343,-25.86819157738998]],holes:[[[.9899494936611664,-4.1012193308819755],[4.1012193308819755,-.9899494936611664],[-.9899494936611664,4.1012193308819755],[-4.1012193308819755,.9899494936611664]]],blocksSight:!1},{id:"model-banyan-0",kind:"forest",shape:"polygon",x:8.081832,z:-11.3431,polygon:[[8.092533,-10.420893],[7.17199,-11.192207],[8.071131,-12.265307],[8.991674,-11.493993]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-0",patch:"reference-forest-upper-left"},{id:"model-mulberry-1",kind:"forest",shape:"polygon",x:9.854749,z:-14.302431,polygon:[[9.130826,-13.879177],[9.41433,-15.016042],[10.578672,-14.725685],[10.295168,-13.58882]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-1",patch:"reference-forest-upper-left"},{id:"model-paperbark-2",kind:"forest",shape:"polygon",x:8.807833,z:-15.916018,polygon:[[8.487721,-15.381978],[8.288637,-16.259683],[9.127945,-16.450058],[9.327029,-15.572353]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-2",patch:"reference-forest-upper-left"},{id:"model-banyan-3",kind:"forest",shape:"polygon",x:7.630053,z:-12.648302,polygon:[[8.501117,-12.189532],[7.180999,-11.77219],[6.758989,-13.107072],[8.079107,-13.524414]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-3",patch:"reference-forest-upper-left"},{id:"model-mulberry-4",kind:"forest",shape:"polygon",x:9.740498,z:-12.241452,polygon:[[10.220386,-12.89549],[10.436803,-11.825257],[9.26061,-11.587414],[9.044193,-12.657647]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-4",patch:"reference-forest-upper-left"},{id:"model-paperbark-5",kind:"forest",shape:"polygon",x:6.955415,z:-13.453379,polygon:[[7.389464,-13.088812],[6.598405,-13.013092],[6.521366,-13.817946],[7.312425,-13.893666]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-5",patch:"reference-forest-upper-left"},{id:"model-banyan-6",kind:"forest",shape:"polygon",x:7.556061,z:-13.181059,polygon:[[8.441661,-13.233132],[7.389363,-12.309732],[6.670461,-13.128986],[7.722759,-14.052386]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-6",patch:"reference-forest-upper-left"},{id:"model-mulberry-7",kind:"forest",shape:"polygon",x:8.343583,z:-10.755969,polygon:[[7.585825,-11.070587],[8.71014,-11.490011],[9.101341,-10.441351],[7.977026,-10.021927]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-7",patch:"reference-forest-upper-left"},{id:"model-paperbark-8",kind:"forest",shape:"polygon",x:10.823804,z:-14.752959,polygon:[[11.39221,-14.496443],[10.591061,-14.174412],[10.255398,-15.009475],[11.056547,-15.331506]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-8",patch:"reference-forest-upper-left"},{id:"model-banyan-9",kind:"forest",shape:"polygon",x:9.065816,z:-12.664879,polygon:[[9.681957,-11.901453],[8.291281,-12.062763],[8.449675,-13.428305],[9.840351,-13.266995]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-9",patch:"reference-forest-upper-left"},{id:"model-mulberry-10",kind:"forest",shape:"polygon",x:13.130250650286458,z:-11.22518325750083,polygon:[[13.955120650286457,-11.42132325750083],[13.327674650286458,-10.400620257500831],[12.305380650286457,-11.029043257500831],[12.932826650286456,-12.04974625750083]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-10",patch:"reference-forest-upper-left"},{id:"model-paperbark-11",kind:"forest",shape:"polygon",x:9.297455,z:-14.7095,polygon:[[8.937735,-15.201353],[9.81991,-15.023121],[9.657175,-14.217647],[8.775,-14.395879]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-11",patch:"reference-forest-upper-left"},{id:"model-banyan-12",kind:"forest",shape:"polygon",x:9.977676,z:-15.490606,polygon:[[10.094448,-16.405453],[10.899639,-15.51439],[9.860904,-14.575759],[9.055713,-15.466822]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-12",patch:"reference-forest-upper-left"},{id:"model-mulberry-13",kind:"forest",shape:"polygon",x:8.263428,z:-14.387413,polygon:[[9.020831,-14.027482],[7.921685,-13.621632],[7.506025,-14.747344],[8.605171,-15.153194]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-13",patch:"reference-forest-upper-left"},{id:"model-paperbark-14",kind:"forest",shape:"polygon",x:6.524817,z:-14.669155,polygon:[[5.902368,-14.654099],[6.537602,-15.291655],[7.147266,-14.684211],[6.512032,-14.046655]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-14",patch:"reference-forest-upper-left"},{id:"model-banyan-15",kind:"forest",shape:"polygon",x:7.00211,z:-15.487936,polygon:[[7.023537,-16.472193],[7.986545,-15.477456],[6.980683,-14.503679],[6.017675,-15.498416]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-15",patch:"reference-forest-upper-left"},{id:"model-mulberry-16",kind:"forest",shape:"polygon",x:7.546473,z:-15.959057,polygon:[[7.599588,-16.768524],[8.357346,-15.982371],[7.493358,-15.14959],[6.7356,-15.935743]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-16",patch:"reference-forest-upper-left"},{id:"model-paperbark-17",kind:"forest",shape:"polygon",x:7.654542,z:-14.221167,polygon:[[7.223329,-14.589085],[8.014951,-14.658675],[8.085755,-13.853249],[7.294133,-13.783659]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-17",patch:"reference-forest-upper-left"},{id:"model-banyan-18",kind:"forest",shape:"polygon",x:10.169625,z:-14.96622,polygon:[[10.293105,-15.844714],[10.991012,-14.631073],[10.046145,-14.087726],[9.348238,-15.301367]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-18",patch:"reference-forest-upper-left"},{id:"model-mulberry-19",kind:"forest",shape:"polygon",x:10.325982,z:-14.299636,polygon:[[10.719132,-15.019785],[11.017045,-13.857354],[9.932832,-13.579487],[9.634919,-14.741918]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-19",patch:"reference-forest-upper-left"},{id:"model-paperbark-20",kind:"forest",shape:"polygon",x:9.648162,z:-12.884868,polygon:[[10.005399,-12.373725],[9.15226,-12.506758],[9.290925,-13.396011],[10.144064,-13.262978]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-20",patch:"reference-forest-upper-left"},{id:"model-banyan-21",kind:"forest",shape:"polygon",x:8.340696,z:-12.653827,polygon:[[7.444612,-12.254475],[7.957752,-13.557045],[9.23678,-13.053179],[8.72364,-11.750609]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-21",patch:"reference-forest-upper-left"},{id:"model-mulberry-22",kind:"forest",shape:"polygon",x:8.736124,z:-14.741937,polygon:[[8.102823,-15.305684],[9.298884,-15.376115],[9.369425,-14.17819],[8.173364,-14.107759]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-22",patch:"reference-forest-upper-left"},{id:"model-paperbark-23",kind:"forest",shape:"polygon",x:7.686676,z:-12.06876,polygon:[[7.755947,-11.463351],[7.07748,-12.054691],[7.617405,-12.674169],[8.295872,-12.082829]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-23",patch:"reference-forest-upper-left"},{id:"model-banyan-24",kind:"forest",shape:"polygon",x:-3.865154,z:-9.265883,polygon:[[-4.20031,-10.125099],[-3.066937,-9.727869],[-3.529998,-8.406667],[-4.663371,-8.803897]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-24",patch:"reference-forest-left-bank"},{id:"model-mulberry-25",kind:"forest",shape:"polygon",x:-2.732399,z:-9.241401,polygon:[[-2.36569,-9.995545],[-1.969714,-8.892803],[-3.099108,-8.487257],[-3.495084,-9.589999]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-25",patch:"reference-forest-left-bank"},{id:"model-paperbark-26",kind:"forest",shape:"polygon",x:-2.989767,z:-11.275853,polygon:[[-3.60496,-11.371812],[-2.866403,-11.886141],[-2.374574,-11.179894],[-3.113131,-10.665565]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-26",patch:"reference-forest-left-bank"},{id:"model-banyan-27",kind:"forest",shape:"polygon",x:-3.174957,z:-12.558077,polygon:[[-3.01993,-13.530285],[-2.201085,-12.413871],[-3.329984,-11.585869],[-4.148829,-12.702283]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-27",patch:"reference-forest-left-bank"},{id:"model-mulberry-28",kind:"forest",shape:"polygon",x:-2.193147,z:-9.440182,polygon:[[-2.917484,-9.07495],[-2.624937,-10.126925],[-1.46881,-9.805414],[-1.761357,-8.753439]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-28",patch:"reference-forest-left-bank"},{id:"model-paperbark-29",kind:"forest",shape:"polygon",x:-4.972382,z:-12.482274,polygon:[[-5.207714,-12.997955],[-4.460846,-12.726485],[-4.73705,-11.966593],[-5.483918,-12.238063]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-29",patch:"reference-forest-left-bank"},{id:"model-banyan-30",kind:"forest",shape:"polygon",x:-1.267791,z:-8.825122,polygon:[[-1.633472,-9.633378],[-.394539,-8.981423],[-.90211,-8.016866],[-2.141043,-8.668821]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-30",patch:"reference-forest-left-bank"},{id:"model-mulberry-31",kind:"forest",shape:"polygon",x:-2.96783,z:-8.84294,polygon:[[-3.719825,-8.514785],[-3.242891,-9.615936],[-2.215835,-9.171095],[-2.692769,-8.069944]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-31",patch:"reference-forest-left-bank"},{id:"model-paperbark-32",kind:"forest",shape:"polygon",x:-.858817,z:-11.29805,polygon:[[-1.318064,-10.876176],[-1.299359,-11.739422],[-.39957,-11.719924],[-.418275,-10.856678]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-32",patch:"reference-forest-left-bank"},{id:"model-banyan-33",kind:"forest",shape:"polygon",x:-2.076394,z:-7.422643,polygon:[[-1.880172,-8.383864],[-1.118911,-7.208924],[-2.272616,-6.461422],[-3.033877,-7.636362]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-33",patch:"reference-forest-left-bank"},{id:"model-mulberry-34",kind:"forest",shape:"polygon",x:-5.212102,z:-11.480786,polygon:[[-5.992409,-11.81245],[-4.881653,-12.261609],[-4.431795,-11.149122],[-5.542551,-10.699963]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-34",patch:"reference-forest-left-bank"},{id:"model-paperbark-35",kind:"forest",shape:"polygon",x:-4.085621,z:-10.765005,polygon:[[-4.557561,-11.15048],[-3.658926,-11.200033],[-3.613681,-10.37953],[-4.512316,-10.329977]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-35",patch:"reference-forest-left-bank"},{id:"model-banyan-36",kind:"forest",shape:"polygon",x:-1.348443,z:-9.567852,polygon:[[-.938782,-10.394144],[-.46944,-9.288684],[-1.758104,-8.74156],[-2.227446,-9.84702]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-36",patch:"reference-forest-left-bank"},{id:"model-mulberry-37",kind:"forest",shape:"polygon",x:-6.060794,z:-10.712211,polygon:[[-6.078588,-11.550598],[-5.223071,-10.750018],[-6.043,-9.873824],[-6.898517,-10.674404]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-37",patch:"reference-forest-left-bank"},{id:"model-paperbark-38",kind:"forest",shape:"polygon",x:-2.762186,z:-10.139375,polygon:[[-2.695864,-9.520286],[-3.383621,-10.100795],[-2.828508,-10.758464],[-2.140751,-10.177955]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-38",patch:"reference-forest-left-bank"},{id:"model-banyan-39",kind:"forest",shape:"polygon",x:-4.046542,z:-8.306007,polygon:[[-3.941614,-9.28489],[-3.066553,-8.211972],[-4.15147,-7.327124],[-5.026531,-8.400042]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-39",patch:"reference-forest-left-bank"},{id:"model-mulberry-40",kind:"forest",shape:"polygon",x:-1.953319,z:-10.416064,polygon:[[-1.203761,-10.105869],[-2.191582,-9.640636],[-2.702877,-10.726259],[-1.715056,-11.191492]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-40",patch:"reference-forest-left-bank"},{id:"model-paperbark-41",kind:"forest",shape:"polygon",x:-5.636266,z:-11.610946,polygon:[[-5.767975,-11.059619],[-6.189787,-11.733105],[-5.504557,-12.162273],[-5.082745,-11.488787]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-41",patch:"reference-forest-left-bank"},{id:"model-banyan-42",kind:"forest",shape:"polygon",x:-4.81064,z:-10.844388,polygon:[[-4.336881,-10.094353],[-5.653954,-10.569031],[-5.284399,-11.594423],[-3.967326,-11.119745]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-42",patch:"reference-forest-left-bank"},{id:"model-mulberry-43",kind:"forest",shape:"polygon",x:-5.974669,z:-11.211292,polygon:[[-6.037381,-12.029369],[-5.154212,-11.216957],[-5.911957,-10.393215],[-6.795126,-11.205627]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-43",patch:"reference-forest-left-bank"},{id:"model-paperbark-44",kind:"forest",shape:"polygon",x:-5.918546,z:-9.95916,polygon:[[-5.936873,-10.582498],[-5.296503,-10.0033],[-5.900219,-9.335822],[-6.540589,-9.91502]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-44",patch:"reference-forest-left-bank"},{id:"model-banyan-45",kind:"forest",shape:"polygon",x:-3.902614,z:-11.88993,polygon:[[-3.114476,-11.305732],[-4.501088,-11.112577],[-4.690752,-12.474128],[-3.30414,-12.667283]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-45",patch:"reference-forest-left-bank"},{id:"model-mulberry-46",kind:"forest",shape:"polygon",x:-4.231304,z:-9.545622,polygon:[[-5.030451,-9.262348],[-4.515822,-10.344327],[-3.432157,-9.828896],[-3.946786,-8.746917]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-46",patch:"reference-forest-left-bank"},{id:"model-paperbark-47",kind:"forest",shape:"polygon",x:-1.708738,z:-12.753187,polygon:[[-1.605197,-13.353684],[-1.120108,-12.595602],[-1.812279,-12.15269],[-2.297368,-12.910772]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-47",patch:"reference-forest-left-bank"},{id:"model-banyan-48",kind:"forest",shape:"polygon",x:-10.664541,z:4.997522,polygon:[[-9.764519,5.198872],[-10.726605,5.917701],[-11.564563,4.796172],[-10.602477,4.077343]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-48",patch:"reference-forest-lower-bank"},{id:"model-mulberry-49",kind:"forest",shape:"polygon",x:-10.018271,z:-.189733,polygon:[[-10.084881,-1.025659],[-9.184174,-.276284],[-9.951661,.646193],[-10.852368,-.103182]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-49",patch:"reference-forest-lower-bank"},{id:"model-paperbark-50",kind:"forest",shape:"polygon",x:-10.203949,z:4.833524,polygon:[[-10.119317,4.216671],[-9.591496,4.945646],[-10.288581,5.450377],[-10.816402,4.721402]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-50",patch:"reference-forest-lower-bank"},{id:"model-banyan-51",kind:"forest",shape:"polygon",x:-11.878533,z:1.209823,polygon:[[-11.99447,.232183],[-10.902243,1.083022],[-11.762596,2.187463],[-12.854823,1.336624]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-51",patch:"reference-forest-lower-bank"},{id:"model-mulberry-52",kind:"forest",shape:"polygon",x:-8.945451,z:2.076576,polygon:[[-9.516347,2.652889],[-9.572942,1.562462],[-8.374555,1.500263],[-8.31796,2.59069]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-52",patch:"reference-forest-lower-bank"},{id:"model-paperbark-53",kind:"forest",shape:"polygon",x:-10.848345,z:6.478527,polygon:[[-10.367445,6.778599],[-11.140059,6.964542],[-11.329245,6.178455],[-10.556631,5.992512]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-53",patch:"reference-forest-lower-bank"},{id:"model-banyan-54",kind:"forest",shape:"polygon",x:-9.184743,z:4.918903,polygon:[[-9.127661,4.033611],[-8.340483,5.191347],[-9.241825,5.804195],[-10.029003,4.646459]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-54",patch:"reference-forest-lower-bank"},{id:"model-mulberry-55",kind:"forest",shape:"polygon",x:-10.788172,z:2.555184,polygon:[[-10.373657,1.847117],[-10.110648,3.01794],[-11.202687,3.263251],[-11.465696,2.092428]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-55",patch:"reference-forest-lower-bank"},{id:"model-paperbark-56",kind:"forest",shape:"polygon",x:-11.297591,z:3.067472,polygon:[[-11.200612,3.683492],[-11.909064,3.189893],[-11.39457,2.451452],[-10.686118,2.945051]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-56",patch:"reference-forest-lower-bank"},{id:"model-banyan-57",kind:"forest",shape:"polygon",x:-13.264115,z:5.036128,polygon:[[-13.40771,4.065649],[-12.291179,4.910255],[-13.12052,6.006607],[-14.237051,5.162001]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-57",patch:"reference-forest-lower-bank"},{id:"model-mulberry-58",kind:"forest",shape:"polygon",x:-11.731342,z:.09488,polygon:[[-12.56845,.22953],[-11.867295,-.742018],[-10.894234,-.03977],[-11.595389,.931778]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-58",patch:"reference-forest-lower-bank"},{id:"model-paperbark-59",kind:"forest",shape:"polygon",x:-12.021447,z:1.992062,polygon:[[-11.412952,1.959627],[-12.044342,2.60099],[-12.629942,2.024497],[-11.998552,1.383134]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-59",patch:"reference-forest-lower-bank"},{id:"model-banyan-60",kind:"forest",shape:"polygon",x:-13.737655,z:2.259879,polygon:[[-13.118913,1.575964],[-12.967559,2.767356],[-14.356397,2.943794],[-14.507751,1.752402]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-60",patch:"reference-forest-lower-bank"},{id:"model-mulberry-61",kind:"forest",shape:"polygon",x:-9.557197,z:2.986129,polygon:[[-8.75859,2.730325],[-9.282397,3.7784],[-10.355804,3.241933],[-9.831997,2.193858]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-61",patch:"reference-forest-lower-bank"},{id:"model-paperbark-62",kind:"forest",shape:"polygon",x:-12.587173,z:.512264,polygon:[[-13.148035,.241886],[-12.291993,-.03595],[-12.026311,.782642],[-12.882353,1.060478]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-62",patch:"reference-forest-lower-bank"},{id:"model-banyan-63",kind:"forest",shape:"polygon",x:-11.724527,z:4.759751,polygon:[[-10.901338,4.219768],[-11.175423,5.576884],[-12.547716,5.299734],[-12.273631,3.942618]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-63",patch:"reference-forest-lower-bank"},{id:"model-mulberry-64",kind:"forest",shape:"polygon",x:-10.788512,z:5.740355,polygon:[[-10.128425,5.268822],[-10.25694,6.353127],[-11.448599,6.211888],[-11.320084,5.127583]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-64",patch:"reference-forest-lower-bank"},{id:"model-paperbark-65",kind:"forest",shape:"polygon",x:-12.721983,z:2.882924,polygon:[[-12.251612,3.199245],[-13.030126,3.358693],[-13.192354,2.566603],[-12.41384,2.407155]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-65",patch:"reference-forest-lower-bank"},{id:"model-banyan-66",kind:"forest",shape:"polygon",x:-13.042822,z:.407929,polygon:[[-13.909264,.598395],[-13.01499,-.478764],[-12.17638,.217463],[-13.070654,1.294622]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-66",patch:"reference-forest-lower-bank"},{id:"model-mulberry-67",kind:"forest",shape:"polygon",x:-13.607085,z:2.816361,polygon:[[-14.404776,3.008381],[-13.743163,2.007247],[-12.809394,2.624341],[-13.471007,3.625475]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-67",patch:"reference-forest-lower-bank"},{id:"model-paperbark-68",kind:"forest",shape:"polygon",x:-10.062041,z:.346252,polygon:[[-10.637746,.585939],[-10.325377,-.219027],[-9.486336,.106565],[-9.798705,.911531]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-68",patch:"reference-forest-lower-bank"},{id:"model-banyan-69",kind:"forest",shape:"polygon",x:-9.744398,z:3.76528,polygon:[[-10.725414,3.772818],[-9.734045,2.78429],[-8.763382,3.757742],[-9.754751,4.74627]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-69",patch:"reference-forest-lower-bank"},{id:"model-mulberry-70",kind:"forest",shape:"polygon",x:-13.059054,z:3.748957,polygon:[[-13.021329,4.595986],[-13.906023,3.788001],[-13.096779,2.901928],[-12.212085,3.709913]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-70",patch:"reference-forest-lower-bank"},{id:"model-paperbark-71",kind:"forest",shape:"polygon",x:-11.303095,z:4.433184,polygon:[[-11.706853,4.88958],[-11.720985,3.989691],[-10.899337,3.976788],[-10.885205,4.876677]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-71",patch:"reference-forest-lower-bank"},{id:"model-banyan-72",kind:"forest",shape:"polygon",x:4.88695,z:19.868413,polygon:[[3.967636,19.942194],[4.674151,18.971029],[5.806264,19.794632],[5.099749,20.765797]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-72",patch:"reference-forest-upper-right"},{id:"model-mulberry-73",kind:"forest",shape:"polygon",x:3.002792,z:14.378315,polygon:[[3.408073,13.644179],[3.746396,14.765951],[2.597511,15.112451],[2.259188,13.990679]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-73",patch:"reference-forest-upper-right"},{id:"model-paperbark-74",kind:"forest",shape:"polygon",x:6.127696,z:19.63421,polygon:[[6.562466,20.079906],[5.66301,20.048621],[5.692926,19.188514],[6.592382,19.219799]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-74",patch:"reference-forest-upper-right"},{id:"model-banyan-75",kind:"forest",shape:"polygon",x:4.589727,z:17.150441,polygon:[[4.578354,16.166016],[5.573965,17.128122],[4.6011,18.134866],[3.605489,17.17276]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-75",patch:"reference-forest-upper-right"},{id:"model-mulberry-76",kind:"forest",shape:"polygon",x:3.721783,z:14.27936,polygon:[[4.139387,14.97482],[3.068719,14.760572],[3.304179,13.5839],[4.374847,13.798148]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-76",patch:"reference-forest-upper-right"},{id:"model-paperbark-77",kind:"forest",shape:"polygon",x:6.005452,z:16.025557,polygon:[[5.862114,16.573975],[5.454638,15.891721],[6.14879,15.477139],[6.556266,16.159393]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-77",patch:"reference-forest-upper-right"},{id:"model-banyan-78",kind:"forest",shape:"polygon",x:4.945898,z:17.449339,polygon:[[5.495578,18.145652],[4.136047,17.811473],[4.396218,16.753026],[5.755749,17.087205]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-78",patch:"reference-forest-upper-right"},{id:"model-mulberry-79",kind:"forest",shape:"polygon",x:3.963701,z:16.606669,polygon:[[4.632128,17.082471],[3.442563,17.240386],[3.295274,16.130867],[4.484839,15.972952]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-79",patch:"reference-forest-upper-right"},{id:"model-paperbark-80",kind:"forest",shape:"polygon",x:5.309384,z:15.207859,polygon:[[5.652218,15.728772],[4.803124,15.571984],[4.96655,14.686946],[5.815644,14.843734]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-80",patch:"reference-forest-upper-right"},{id:"model-banyan-81",kind:"forest",shape:"polygon",x:3.866628,z:15.241109,polygon:[[4.783924,14.893234],[4.197717,16.164596],[2.949332,15.588984],[3.535539,14.317622]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-81",patch:"reference-forest-upper-right"},{id:"model-mulberry-82",kind:"forest",shape:"polygon",x:4.150449,z:14.85668,polygon:[[3.366862,14.53284],[4.473068,14.07259],[4.934036,15.18052],[3.82783,15.64077]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-82",patch:"reference-forest-upper-right"},{id:"model-paperbark-83",kind:"forest",shape:"polygon",x:5.776359,z:17.803364,polygon:[[5.503495,18.348215],[5.258505,17.482202],[6.049223,17.258513],[6.294213,18.124526]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-83",patch:"reference-forest-upper-right"},{id:"model-banyan-84",kind:"forest",shape:"polygon",x:4.720737,z:21.308182,polygon:[[4.398304,20.444111],[5.525688,20.858032],[5.04317,22.172253],[3.915786,21.758332]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-84",patch:"reference-forest-upper-right"},{id:"model-mulberry-85",kind:"forest",shape:"polygon",x:4.079625,z:20.092772,polygon:[[4.854442,20.413502],[3.777487,20.875026],[3.304808,19.772042],[4.381763,19.310518]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-85",patch:"reference-forest-upper-right"},{id:"model-paperbark-86",kind:"forest",shape:"polygon",x:5.151639,z:20.789777,polygon:[[5.651078,20.417983],[5.500735,21.305337],[4.6522,21.161571],[4.802543,20.274217]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-86",patch:"reference-forest-upper-right"},{id:"model-banyan-87",kind:"forest",shape:"polygon",x:4.65825,z:18.259928,polygon:[[5.508329,18.756503],[4.171159,19.115477],[3.808171,17.763353],[5.145341,17.404379]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-87",patch:"reference-forest-upper-right"},{id:"model-mulberry-88",kind:"forest",shape:"polygon",x:.722468,z:15.686324,polygon:[[.04465,15.240654],[1.102358,14.969566],[1.400286,16.131994],[.342578,16.403082]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-88",patch:"reference-forest-upper-right"},{id:"model-paperbark-89",kind:"forest",shape:"polygon",x:4.719566,z:19.301056,polygon:[[4.614789,18.743983],[5.274744,19.186665],[4.824343,19.858129],[4.164388,19.415447]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-89",patch:"reference-forest-upper-right"},{id:"model-banyan-90",kind:"forest",shape:"polygon",x:4.071817,z:18.416212,polygon:[[4.957451,18.364721],[3.904547,19.28743],[3.186183,18.467703],[4.239087,17.544994]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-90",patch:"reference-forest-upper-right"},{id:"model-mulberry-91",kind:"forest",shape:"polygon",x:5.228036,z:19.448914,polygon:[[5.888641,19.935517],[4.696668,20.074078],[4.567431,18.962311],[5.759404,18.82375]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-91",patch:"reference-forest-upper-right"},{id:"model-paperbark-92",kind:"forest",shape:"polygon",x:5.885042,z:19.098691,polygon:[[6.498119,19.212809],[5.796426,19.71597],[5.271965,18.984573],[5.973658,18.481412]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-92",patch:"reference-forest-upper-right"},{id:"model-banyan-93",kind:"forest",shape:"polygon",x:5.473093,z:20.333612,polygon:[[6.449487,20.2382],[5.550684,21.311584],[4.496699,20.429024],[5.395502,19.35564]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-93",patch:"reference-forest-upper-right"},{id:"model-mulberry-94",kind:"forest",shape:"polygon",x:4.289993,z:19.132598,polygon:[[3.852563,18.406281],[5.015628,18.694038],[4.727423,19.858915],[3.564358,19.571158]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-94",patch:"reference-forest-upper-right"},{id:"model-paperbark-95",kind:"forest",shape:"polygon",x:5.968355,z:16.851942,polygon:[[6.177807,16.279711],[6.519227,17.112437],[5.758903,17.424173],[5.417483,16.591447]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-95",patch:"reference-forest-upper-right"},{id:"model-banyan-96",kind:"forest",shape:"polygon",x:-20.76593,z:11.688431,polygon:[[-20.787301,12.610453],[-21.680468,11.807598],[-20.744559,10.766409],[-19.851392,11.569264]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-96",patch:"reference-forest-foreground"},{id:"model-mulberry-97",kind:"forest",shape:"polygon",x:-22.113141,z:7.016795,polygon:[[-21.620148,7.695151],[-22.779532,7.525845],[-22.606134,6.338439],[-21.44675,6.507745]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-97",patch:"reference-forest-foreground"},{id:"model-paperbark-98",kind:"forest",shape:"polygon",x:-22.276345,z:12.225967,polygon:[[-22.714844,12.667995],[-22.698329,11.768146],[-21.837846,11.783939],[-21.854361,12.683788]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-98",patch:"reference-forest-foreground"},{id:"model-banyan-99",kind:"forest",shape:"polygon",x:-17.20606314628004,z:7.217056245092718,polygon:[[-17.636928146280038,6.331857245092718],[-16.325710146280038,6.776374245092717],[-16.77519814628004,8.102255245092717],[-18.08641614628004,7.657738245092717]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-99",patch:"reference-forest-foreground"},{id:"model-mulberry-100",kind:"forest",shape:"polygon",x:-20.008381,z:8.451194,polygon:[[-20.817594,8.394333],[-20.027942,7.640222],[-19.199168,8.508055],[-19.98882,9.262166]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-100",patch:"reference-forest-foreground"},{id:"model-paperbark-101",kind:"forest",shape:"polygon",x:-22.353865,z:11.691008,polygon:[[-21.902539,11.34806],[-22.003167,12.136338],[-22.805191,12.033956],[-22.704563,11.245678]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-101",patch:"reference-forest-foreground"},{id:"model-banyan-102",kind:"forest",shape:"polygon",x:-18.654248,z:8.646778,polygon:[[-17.802452,8.894656],[-19.103448,9.411774],[-19.506044,8.3989],[-18.205048,7.881782]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-102",patch:"reference-forest-foreground"},{id:"model-mulberry-103",kind:"forest",shape:"polygon",x:-19.335432,z:11.085543,polygon:[[-19.982851,10.581528],[-18.787611,10.474745],[-18.688013,11.589558],[-19.883253,11.696341]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-103",patch:"reference-forest-foreground"},{id:"model-paperbark-104",kind:"forest",shape:"polygon",x:-22.493547,z:6.795038,polygon:[[-21.927893,7.057567],[-22.732411,7.371085],[-23.059201,6.532509],[-22.254683,6.218991]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-104",patch:"reference-forest-foreground"},{id:"model-banyan-105",kind:"forest",shape:"polygon",x:-21.313115,z:7.947242,polygon:[[-20.782132,8.772169],[-22.147588,8.463094],[-21.844098,7.122315],[-20.478642,7.43139]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-105",patch:"reference-forest-foreground"},{id:"model-mulberry-106",kind:"forest",shape:"polygon",x:-20.903355,z:6.44759,polygon:[[-21.743382,6.332544],[-20.789617,5.607385],[-20.063328,6.562636],[-21.017093,7.287795]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-106",patch:"reference-forest-foreground"},{id:"model-paperbark-107",kind:"forest",shape:"polygon",x:-20.923871,z:10.835371,polygon:[[-20.498733,11.271921],[-21.397185,11.219157],[-21.349009,10.398821],[-20.450557,10.451585]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-107",patch:"reference-forest-foreground"},{id:"model-banyan-108",kind:"forest",shape:"polygon",x:-19.699768,z:7.840125,polygon:[[-20.558574,8.17633],[-20.162729,7.042473],[-18.840962,7.50392],[-19.236807,8.637777]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-108",patch:"reference-forest-foreground"},{id:"model-mulberry-109",kind:"forest",shape:"polygon",x:-19.364085,z:8.795155,polygon:[[-20.177127,8.589799],[-19.178201,7.977441],[-18.551043,9.000511],[-19.549969,9.612869]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-109",patch:"reference-forest-foreground"},{id:"model-paperbark-110",kind:"forest",shape:"polygon",x:-21.148112,z:8.435926,polygon:[[-21.770018,8.405886],[-21.090301,7.815984],[-20.526206,8.465966],[-21.205923,9.055868]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-110",patch:"reference-forest-foreground"},{id:"model-banyan-111",kind:"forest",shape:"polygon",x:-21.616935,z:9.914153,polygon:[[-20.63336,9.956596],[-21.648438,10.898139],[-22.60051,9.87171],[-21.585432,8.930167]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-111",patch:"reference-forest-foreground"},{id:"model-mulberry-112",kind:"forest",shape:"polygon",x:-19.509029,z:9.862279,polygon:[[-20.313287,9.968236],[-19.690219,9.071565],[-18.704771,9.756322],[-19.327839,10.652993]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-112",patch:"reference-forest-foreground"},{id:"model-paperbark-113",kind:"forest",shape:"polygon",x:-18.617754,z:9.686682,polygon:[[-18.747264,9.134835],[-18.068228,9.547652],[-18.488244,10.238529],[-19.16728,9.825712]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-113",patch:"reference-forest-foreground"},{id:"model-banyan-114",kind:"forest",shape:"polygon",x:-22.061819,z:9.91982,polygon:[[-21.454239,9.273409],[-21.584148,10.667369],[-22.669399,10.566231],[-22.53949,9.172271]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-114",patch:"reference-forest-foreground"},{id:"model-mulberry-115",kind:"forest",shape:"polygon",x:-22.74158,z:6.326048,polygon:[[-22.431986,5.566223],[-22.005126,6.687736],[-23.051174,7.085873],[-23.478034,5.96436]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-115",patch:"reference-forest-foreground"},{id:"model-paperbark-116",kind:"forest",shape:"polygon",x:-22.546627,z:8.150923,polygon:[[-22.155279,8.636446],[-23.015517,8.562053],[-22.937975,7.6654],[-22.077737,7.739793]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-116",patch:"reference-forest-foreground"},{id:"model-banyan-117",kind:"forest",shape:"polygon",x:-20.594098,z:8.62502,polygon:[[-19.900041,9.31837],[-21.299989,9.306317],[-21.288155,7.93167],[-19.888207,7.943723]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-117",patch:"reference-forest-foreground"},{id:"model-mulberry-118",kind:"forest",shape:"polygon",x:-21.146218,z:7.205311,polygon:[[-21.802865,7.741683],[-21.683612,6.5495],[-20.489571,6.668939],[-20.608824,7.861122]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-118",patch:"reference-forest-foreground"},{id:"model-paperbark-119",kind:"forest",shape:"polygon",x:-20.855171,z:9.241286,polygon:[[-20.736698,9.839017],[-21.461184,9.305051],[-20.973644,8.643555],[-20.249158,9.177521]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-119",patch:"reference-forest-foreground"},{id:"model-banyan-120",kind:"forest",shape:"polygon",x:10.904192,z:-7.035974,polygon:[[10.708464,-6.134713],[9.983644,-7.092293],[11.09992,-7.937235],[11.82474,-6.979655]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-120",patch:"reference-scattered"},{id:"model-mulberry-121",kind:"forest",shape:"polygon",x:10.25282,z:.299524,polygon:[[9.415809,.350731],[10.181641,-.536025],[11.089831,.248317],[10.323999,1.135073]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-121",patch:"reference-scattered"},{id:"model-paperbark-122",kind:"forest",shape:"polygon",x:11.365529,z:1.511793,polygon:[[11.475921,.899026],[11.972749,1.649467],[11.255137,2.12456],[10.758309,1.374119]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-122",patch:"reference-scattered"},{id:"model-banyan-123",kind:"forest",shape:"polygon",x:12.514126,z:9.264957,polygon:[[13.463893,9.005797],[12.783832,10.211784],[11.564359,9.524117],[12.24442,8.31813]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-123",patch:"reference-scattered"},{id:"model-mulberry-124",kind:"forest",shape:"polygon",x:7.943481,z:11.543066,polygon:[[8.734114,11.361525],[8.198637,12.313101],[7.152848,11.724607],[7.688325,10.773031]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-124",patch:"reference-scattered"},{id:"model-paperbark-125",kind:"forest",shape:"polygon",x:10.396976,z:13.165126,polygon:[[10.956353,13.073441],[10.498317,13.722834],[9.837599,13.256811],[10.295635,12.607418]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-125",patch:"reference-scattered"},{id:"model-banyan-126",kind:"forest",shape:"polygon",x:3.319277,z:-10.268377,polygon:[[2.625722,-9.715222],[2.953098,-11.076407],[4.012832,-10.821532],[3.685456,-9.460347]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-126",patch:"reference-scattered"},{id:"model-mulberry-127",kind:"forest",shape:"polygon",x:1.004461,z:-6.924104,polygon:[[1.021851,-6.103812],[.184945,-6.963806],[.987071,-7.744396],[1.823977,-6.884402]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-127",patch:"reference-scattered"},{id:"model-paperbark-128",kind:"forest",shape:"polygon",x:2.502696,z:-5.048876,polygon:[[1.901493,-5.21453],[2.643296,-5.656426],[3.103899,-4.883222],[2.362096,-4.441326]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-128",patch:"reference-scattered"},{id:"model-banyan-129",kind:"forest",shape:"polygon",x:9.941377,z:5.538748,polygon:[[10.727672,4.952072],[10.513616,6.335611],[9.155082,6.125424],[9.369138,4.741885]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-129",patch:"reference-scattered"},{id:"model-mulberry-130",kind:"forest",shape:"polygon",x:4.341,z:9.579669,polygon:[[3.590325,9.185501],[4.733998,8.828382],[5.091675,9.973837],[3.948002,10.330956]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-130",patch:"reference-scattered"},{id:"model-paperbark-131",kind:"forest",shape:"polygon",x:8.154684,z:22.516408,polygon:[[8.47518,21.998141],[8.641742,22.882594],[7.834188,23.034675],[7.667626,22.150222]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-131",patch:"reference-scattered"},{id:"model-banyan-132",kind:"forest",shape:"polygon",x:-7.787947,z:-12.523916,polygon:[[-7.422792,-13.370818],[-6.895346,-12.291872],[-8.153102,-11.677014],[-8.680548,-12.75596]],height:.817575,blocksSight:!0,modelPlacementId:"banyan-132",patch:"reference-scattered"},{id:"model-mulberry-133",kind:"forest",shape:"polygon",x:-10.216852,z:-6.316093,polygon:[[-10.244567,-5.477975],[-11.055392,-6.323788],[-10.189137,-7.154211],[-9.378312,-6.308398]],height:.976692,blocksSight:!0,modelPlacementId:"mulberry-133",patch:"reference-scattered"},{id:"model-paperbark-134",kind:"forest",shape:"polygon",x:-3.30665,z:6.422687,polygon:[[-3.717622,5.954957],[-2.821015,6.033035],[-2.895678,6.890417],[-3.792285,6.812339]],height:1.426002,blocksSight:!0,modelPlacementId:"paperbark-134",patch:"reference-scattered"},{id:"model-banyan-135",kind:"forest",shape:"polygon",x:-3.242824,z:12.418801,polygon:[[-2.265809,12.297706],[-3.110872,13.394409],[-4.219839,12.539896],[-3.374776,11.443193]],height:.832558,blocksSight:!0,modelPlacementId:"banyan-135",patch:"reference-scattered"},{id:"model-mulberry-136",kind:"forest",shape:"polygon",x:-6.399537,z:17.362225,polygon:[[-6.90658,17.995444],[-7.077671,16.917037],[-5.892494,16.729006],[-5.721403,17.807413]],height:.643675,blocksSight:!0,modelPlacementId:"mulberry-136",patch:"reference-scattered"},{id:"model-paperbark-137",kind:"forest",shape:"polygon",x:-5.295647,z:21.489139,polygon:[[-5.849172,21.61128],[-5.427338,20.937808],[-4.742122,21.366998],[-5.163956,22.04047]],height:2.25,blocksSight:!0,modelPlacementId:"paperbark-137",patch:"reference-scattered"},{id:"model-banyan-138",kind:"forest",shape:"polygon",x:-15.797667,z:-9.685715,polygon:[[-15.50549,-8.84808],[-16.681376,-9.607878],[-16.089844,-10.52335],[-14.913958,-9.763552]],height:.719043,blocksSight:!0,modelPlacementId:"banyan-138",patch:"reference-scattered"},{id:"model-mulberry-139",kind:"forest",shape:"polygon",x:-19.334725,z:-1.371306,polygon:[[-19.653391,-2.127371],[-18.558328,-1.636618],[-19.016059,-.615241],[-20.111122,-1.105994]],height:.682941,blocksSight:!0,modelPlacementId:"mulberry-139",patch:"reference-scattered"},{id:"model-paperbark-140",kind:"forest",shape:"polygon",x:-16.715413,z:.256175,polygon:[[-17.321597,.109795],[-16.594277,-.355554],[-16.109229,.402555],[-16.836549,.867904]],height:1.295141,blocksSight:!0,modelPlacementId:"paperbark-140",patch:"reference-scattered"},{id:"model-banyan-141",kind:"forest",shape:"polygon",x:-14.080349,z:10.649079,polygon:[[-15.00222,10.313516],[-13.72803,9.733481],[-13.158478,10.984642],[-14.432668,11.564677]],height:1.06954,blocksSight:!0,modelPlacementId:"banyan-141",patch:"reference-scattered"},{id:"model-mulberry-142",kind:"forest",shape:"polygon",x:-16.4259829523055,z:9.93759676866489,polygon:[[-15.5801009523055,9.995599768664889],[-16.482668952305502,10.783567768664888],[-17.271864952305503,9.879593768664888],[-16.3692969523055,9.091625768664889]],height:.780598,blocksSight:!0,modelPlacementId:"mulberry-142",patch:"reference-scattered"},{id:"model-paperbark-143",kind:"forest",shape:"polygon",x:-10.445558933420939,z:18.58623200310139,polygon:[[-10.568678933420939,17.989441003101387],[-9.840059933420939,18.517754003101388],[-10.32243893342094,19.18302300310139],[-11.051057933420939,18.65471000310139]],height:1.464666,blocksSight:!0,modelPlacementId:"paperbark-143",patch:"reference-scattered"},{id:"model-ruins-144",kind:"ruin",shape:"polygon",x:-19.173401,z:-13.721029,polygon:[[-20.685112,-13.797612],[-18.93881,-15.216389],[-17.66169,-13.644446],[-19.407992,-12.225669]],height:1.701394,blocksSight:!0,modelPlacementId:"ruins-144",patch:"ruins-scattered-0"},{id:"model-ruins-145",kind:"ruin",shape:"polygon",x:20.824802,z:15.557818,polygon:[[19.29994,15.798126],[20.490063,14.050867],[22.349664,15.31751],[21.159541,17.064769]],height:1.438545,blocksSight:!0,modelPlacementId:"ruins-145",patch:"ruins-scattered-1"},{id:"model-ruins-146",kind:"ruin",shape:"polygon",x:-5.581822,z:-.424844,polygon:[[-4.475108,.666054],[-6.618119,.733155],[-6.688536,-1.515742],[-4.545525,-1.582843]],height:1.012309,blocksSight:!0,modelPlacementId:"ruins-146",patch:"ruins-scattered-2"},{id:"model-ruins-147",kind:"ruin",shape:"polygon",x:20.252291,z:-6.102893,polygon:[[21.806477,-6.146747],[20.36928,-4.552496],[18.698105,-6.059039],[20.135302,-7.65329]],height:1.265436,blocksSight:!0,modelPlacementId:"ruins-147",patch:"ruins-scattered-3"},{id:"model-ruins-148",kind:"ruin",shape:"polygon",x:-9.611354,z:16.464054,polygon:[[-8.229233,15.846902],[-9.142449,17.903243],[-10.993475,17.081206],[-10.080259,15.024865]],height:1.701394,blocksSight:!0,modelPlacementId:"ruins-148",patch:"ruins-scattered-4"},{id:"model-ruins-149",kind:"ruin",shape:"polygon",x:-8.899593,z:-17.23791,polygon:[[-7.413259,-17.654759],[-8.391053,-15.780399],[-10.385927,-16.821061],[-9.408133,-18.695421]],height:1.438545,blocksSight:!0,modelPlacementId:"ruins-149",patch:"ruins-scattered-5"},{id:"model-ruins-150",kind:"ruin",shape:"polygon",x:11.894367,z:16.696116,polygon:[[13.444702,16.58964],[12.075431,18.239518],[10.344032,16.802592],[11.713303,15.152714]],height:1.012309,blocksSight:!0,modelPlacementId:"ruins-150",patch:"ruins-scattered-6"},{id:"model-ruins-151",kind:"ruin",shape:"polygon",x:9.625874661337441,z:-18.103489451125107,polygon:[[8.314995661337441,-18.93956145112511],[10.39929266133744,-19.45228345112511],[10.936753661337441,-17.26741745112511],[8.852456661337442,-16.75469545112511]],height:1.265436,blocksSight:!0,modelPlacementId:"ruins-151",patch:"ruins-scattered-7"},{id:"model-watchtower-152",kind:"watchtower",shape:"polygon",x:-6.822037,z:14.156998,polygon:[[-6.308145,14.935477],[-7.559405,14.728315],[-7.335929,13.378519],[-6.084669,13.585681]],height:2.6,blocksSight:!0,modelPlacementId:"watchtower-152",patch:"watchtower-scattered-0"},{id:"model-watchtower-153",kind:"watchtower",shape:"polygon",x:18.498181,z:-10.084908,polygon:[[17.688741,-9.666747],[17.879436,-10.753644],[19.307621,-10.503069],[19.116926,-9.416172]],height:1.914115,blocksSight:!0,modelPlacementId:"watchtower-153",patch:"watchtower-scattered-1"},{id:"model-watchtower-154",kind:"watchtower",shape:"polygon",x:-9.567351,z:13.007994,polygon:[[-8.654864,12.904101],[-9.241822,13.866748],[-10.479838,13.111887],[-9.89288,12.14924]],height:2.188448,blocksSight:!0,modelPlacementId:"watchtower-154",patch:"watchtower-scattered-2"},{id:"model-watchtower-155",kind:"watchtower",shape:"polygon",x:16.502964354570313,z:-9.727995722835887,polygon:[[17.377562354570312,-9.375150722835887],[16.31514135457031,-8.803796722835887],[15.628366354570312,-10.080840722835887],[16.69078735457031,-10.652194722835887]],height:2.29175,blocksSight:!0,modelPlacementId:"watchtower-155",patch:"watchtower-scattered-3"},{id:"model-watchtower-156",kind:"watchtower",shape:"polygon",x:2.770519,z:7.291422,polygon:[[1.864154,7.070929],[2.921806,6.370973],[3.676884,7.511915],[2.619232,8.211871]],height:2.6,blocksSight:!0,modelPlacementId:"watchtower-156",patch:"watchtower-scattered-4"},{id:"model-watchtower-157",kind:"watchtower",shape:"polygon",x:-9.054421,z:-20.841486,polygon:[[-9.049341,-19.930428],[-9.93118,-20.593805],[-9.059501,-21.752544],[-8.177662,-21.089167]],height:1.914115,blocksSight:!0,modelPlacementId:"watchtower-157",patch:"watchtower-scattered-5"},{id:"model-watchtower-158",kind:"watchtower",shape:"polygon",x:-20.022993,z:2.305017,polygon:[[-20.926152,2.138491],[-20.084142,1.388672],[-19.119834,2.471543],[-19.961844,3.221362]],height:2.188448,blocksSight:!0,modelPlacementId:"watchtower-158",patch:"watchtower-scattered-6"},{id:"model-watchtower-159",kind:"watchtower",shape:"polygon",x:17.398009,z:10.761669,polygon:[[17.176755,11.678439],[16.456285,10.710913],[17.619263,9.844899],[18.339733,10.812425]],height:2.29175,blocksSight:!0,modelPlacementId:"watchtower-159",patch:"watchtower-scattered-7"}],trees:[],rocks:[],castleFootprint:6.8,spawnRadius:4.7,modelLayout:"map-objects.json",meadows:[{id:"meadow-0",x:-16,z:-5,placements:["grass-160","grass-161","grass-162","grass-163","grass-164","grass-165","grass-166","grass-167","grass-168","grass-169","grass-170","grass-171"],polygon:[[-19.1,-7.45],[-12.9,-7.45],[-12.9,-2.55],[-19.1,-2.55]]},{id:"meadow-1",x:0,z:19,placements:["grass-172","grass-173","grass-174","grass-175","grass-176","grass-177","grass-178","grass-179","grass-180","grass-181","grass-182","grass-183"],polygon:[[-3.1,16.55],[3.1,16.55],[3.1,21.45],[-3.1,21.45]]},{id:"meadow-2",x:17,z:4,placements:["grass-184","grass-185","grass-186","grass-187","grass-188","grass-189","grass-190","grass-191","grass-192","grass-193","grass-194","grass-195"],polygon:[[13.9,1.5499999999999998],[20.1,1.5499999999999998],[20.1,6.45],[13.9,6.45]]},{id:"meadow-3",x:-1,z:-19,placements:["grass-196","grass-197","grass-198","grass-199","grass-200","grass-201","grass-202","grass-203","grass-204","grass-205","grass-206","grass-207"],polygon:[[-4.1,-21.45],[2.1,-21.45],[2.1,-16.55],[-4.1,-16.55]]}]};var r_=n=>new URL(n,document.baseURI).href;async function o_(n){let e=await fetch(r_(n));if(!e.ok)throw Error("\u904A\u6232\u8CC7\u6599\u8F09\u5165\u5931\u6557");return e.json()}var zd=await o_("./data/firebase.json"),a_={questions:[]},l_=Ud(),Wd=!1;function m2(){Wd||(Wd=!0,Ld(document.getElementById("visitCounter"),zd));let n=null;try{n=window.localStorage,n.getItem("orbit-storage-probe")}catch{n=null}let e={questionSource:l_,bank:a_.questions,obstacles:Fd.obstacles,storage:n};if(document.getElementById("mode").value==="cloud")return new tr({...e,config:zd});if(document.getElementById("mode").value==="offline")return new pi(e);throw Error("\u8ACB\u9078\u64C7\u7DB2\u8DEF\u5C0D\u6230\u6216\u55AE\u6A5F\u7DF4\u7FD2")}export{hi as a,ot as b,tn as c,Hd as d,m_ as e,nr as f,Ga as g,sr as h,Ya as i,rr as j,H_ as k,Fd as l,m2 as m};
