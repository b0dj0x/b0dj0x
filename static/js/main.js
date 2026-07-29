(function() {

/* ── CURSOR ── */
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
setInterval(()=>{rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.left=Math.round(rx)+'px';ring.style.top=Math.round(ry)+'px'},16);
document.querySelectorAll('a,button,input,textarea,.skill-cat,.project-card,.cert-card,.ach-card,.bounty-stat,.platform-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.classList.add('hover');ring.classList.add('hover')});
  el.addEventListener('mouseleave',()=>{cur.classList.remove('hover');ring.classList.remove('hover')});
});

/* ── CLICK PARTICLE BURST ── */
document.addEventListener('click',e=>{
  const colors=['#ff2244','#ff6600','#ffcc00','#00ff88','#00d4ff','#b000ff'];
  for(let i=0;i<12;i++){
    const p=document.createElement('div');
    p.className='click-particle';
    p.style.left=e.clientX+'px';
    p.style.top=e.clientY+'px';
    p.style.background=colors[Math.floor(Math.random()*colors.length)];
    const angle=Math.random()*Math.PI*2;
    const dist=40+Math.random()*60;
    p.style.setProperty('--tx',Math.cos(angle)*dist+'px');
    p.style.setProperty('--ty',Math.sin(angle)*dist+'px');
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),600);
  }
});

/* ── CSS FLOATING PARTICLES ── */
(()=>{
  const container=document.getElementById('css-particles');
  if(!container)return;
  for(let i=0;i<30;i++){
    const p=document.createElement('div');
    p.className='css-particle';
    p.style.left=Math.random()*100+'%';
    p.style.animationDuration=(8+Math.random()*12)+'s';
    p.style.animationDelay=Math.random()*10+'s';
    p.style.width=p.style.height=(1+Math.random()*3)+'px';
    container.appendChild(p);
  }
})();

/* ── LOADER ── */
const statuses=['[ LOADING KERNEL... ]','[ INIT RED TEAM MODULES... ]','[ ESTABLISHING C2 CHANNEL... ]','[ DECRYPTING PORTFOLIO... ]','[ LOADING 3D ENGINE... ]','[ DEPLOYING NEURAL INTERFACE... ]','[ SYNCHRONIZING PAYLOADS... ]','[ READY ]'];
let si=0;
const sint=setInterval(()=>{
  document.getElementById('loader-status').textContent=statuses[si++];
  if(si>=statuses.length)clearInterval(sint);
},380);
setTimeout(()=>document.getElementById('loader').classList.add('out'),3000);

/* ── NAV ── */
function toggleNav(){document.getElementById('nav-links').classList.toggle('open')}
window.addEventListener('scroll',()=>{
  const s=window.scrollY;
  document.querySelectorAll('section[id]').forEach(sec=>{
    if(s>=sec.offsetTop-80&&s<sec.offsetTop+sec.offsetHeight-80){
      document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
      const link=document.querySelector(`.nav-links a[href="#${sec.id}"]`);
      if(link)link.classList.add('active');
    }
  });
  const bt=document.getElementById('back-top');
  s>400?bt.classList.add('visible'):bt.classList.remove('visible');
});

/* ── TYPING EFFECT ── */
(()=>{
  const roles=['Red Team Operator','Bug Bounty Hunter','Ethical Hacker','Security Analyst','Threat Researcher','Web Developer','Penetration Tester','0-Day Hunter','CTF Champion'];
  const el=document.getElementById('typing-el');
  if(!el)return;
  let ri=0,ci=0,del=false;
  function type(){
    const r=roles[ri];
    if(!del){el.textContent=r.slice(0,++ci);if(ci===r.length){del=true;setTimeout(type,1800);return;}}
    else{el.textContent=r.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%roles.length;}}
    setTimeout(type,del?40:80);
  }
  type();
})();

/* ── THREE.JS 3D HERO ── */
(()=>{
  const c=document.getElementById('three-canvas');
  if(!c||!window.THREE)return;
  const renderer=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,1000);
  camera.position.z=5;

  let mouseX=0,mouseY=0;
  document.addEventListener('mousemove',e=>{
    mouseX=(e.clientX/window.innerWidth-.5)*2;
    mouseY=(e.clientY/window.innerHeight-.5)*2;
  });

  // Main Globe
  const globeGeo=new THREE.IcosahedronGeometry(1.8,3);
  const globeMat=new THREE.MeshBasicMaterial({color:0xff2244,wireframe:true,transparent:true,opacity:0.12});
  const globe=new THREE.Mesh(globeGeo,globeMat);
  globe.position.set(2.5,0,-1);
  scene.add(globe);

  // Inner glow globe
  const innerGlobeGeo=new THREE.IcosahedronGeometry(1.4,2);
  const innerGlobeMat=new THREE.MeshBasicMaterial({color:0x00d4ff,wireframe:true,transparent:true,opacity:0.06});
  const innerGlobe=new THREE.Mesh(innerGlobeGeo,innerGlobeMat);
  innerGlobe.position.set(2.5,0,-1);
  scene.add(innerGlobe);

  // Core sphere
  const coreGeo=new THREE.SphereGeometry(0.6,16,16);
  const coreMat=new THREE.MeshBasicMaterial({color:0xff2244,transparent:true,opacity:0.08});
  const core=new THREE.Mesh(coreGeo,coreMat);
  core.position.set(2.5,0,-1);
  scene.add(core);

  // Particles
  const particleCount=500;
  const particleGeo=new THREE.BufferGeometry();
  const positions=new Float32Array(particleCount*3);
  const colors=new Float32Array(particleCount*3);
  const sizes=new Float32Array(particleCount);
  const pColors=[new THREE.Color(0xff2244),new THREE.Color(0xff6600),new THREE.Color(0x00d4ff),new THREE.Color(0x00ff88),new THREE.Color(0xb000ff)];
  for(let i=0;i<particleCount;i++){
    const theta=Math.random()*Math.PI*2;
    const phi=Math.acos(2*Math.random()-1);
    const r=4+Math.random()*6;
    positions[i*3]=r*Math.sin(phi)*Math.cos(theta);
    positions[i*3+1]=r*Math.sin(phi)*Math.sin(theta);
    positions[i*3+2]=r*Math.cos(phi);
    const pc=pColors[Math.floor(Math.random()*pColors.length)];
    colors[i*3]=pc.r;colors[i*3+1]=pc.g;colors[i*3+2]=pc.b;
    sizes[i]=0.02+Math.random()*0.06;
  }
  particleGeo.setAttribute('position',new THREE.BufferAttribute(positions,3));
  particleGeo.setAttribute('color',new THREE.BufferAttribute(colors,3));
  particleGeo.setAttribute('size',new THREE.BufferAttribute(sizes,1));
  const particleMat=new THREE.PointsMaterial({size:0.04,vertexColors:true,transparent:true,opacity:0.6,blending:THREE.AdditiveBlending});
  const particles=new THREE.Points(particleGeo,particleMat);
  scene.add(particles);

  // Data connection lines
  const lineGroup=new THREE.Group();
  scene.add(lineGroup);
  function spawnDataLine(){
    const pts=[];
    const start=new THREE.Vector3((Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*6-1);
    const end=new THREE.Vector3((Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*6-1);
    const mid=start.clone().lerp(end,.5);
    mid.y+=Math.random()*2-1;
    const curve=new THREE.QuadraticBezierCurve3(start,mid,end);
    pts.push(...curve.getPoints(24));
    const lineGeo=new THREE.BufferGeometry().setFromPoints(pts);
    const lineMat=new THREE.LineBasicMaterial({
      color:Math.random()>.6?0xff2244:Math.random()>.3?0x00d4ff:0x00ff88,
      transparent:true,opacity:0.3
    });
    const line=new THREE.Line(lineGeo,lineMat);
    lineGroup.add(line);
    setTimeout(()=>{lineGroup.remove(line);lineGeo.dispose();lineMat.dispose()},2500);
  }
  setInterval(spawnDataLine,600);

  // Floating cubes
  const cubes=[];
  for(let i=0;i<12;i++){
    const size=Math.random()*.25+.08;
    const geo=new THREE.BoxGeometry(size,size,size);
    const mat=new THREE.MeshBasicMaterial({
      color:pColors[Math.floor(Math.random()*pColors.length)],
      wireframe:true,transparent:true,opacity:0.15
    });
    const mesh=new THREE.Mesh(geo,mat);
    const theta=Math.random()*Math.PI*2;
    const phi=Math.acos(2*Math.random()-1);
    const dist=5+Math.random()*4;
    mesh.position.set(dist*Math.sin(phi)*Math.cos(theta),dist*Math.sin(phi)*Math.sin(theta),dist*Math.cos(phi)-1);
    mesh.userData={vx:(Math.random()-.5)*.003,vy:(Math.random()-.5)*.003,vz:(Math.random()-.5)*.003,rx:Math.random()*.02,ry:Math.random()*.02,theta:theta,phi:phi,dist:dist,phase:Math.random()*Math.PI*2};
    scene.add(mesh);
    cubes.push(mesh);
  }

  function animate(){
    requestAnimationFrame(animate);
    const t=Date.now()*.001;
    globe.rotation.y=t*.12;globe.rotation.x=t*.06;
    innerGlobe.rotation.y=-t*.08;innerGlobe.rotation.z=t*.04;
    core.rotation.y=t*.2;core.rotation.x=t*.1;
    globe.position.x=2.5+mouseX*.3;globe.position.y=-mouseY*.2;
    innerGlobe.position.x=2.5+mouseX*.3;innerGlobe.position.y=-mouseY*.2;
    core.position.x=2.5+mouseX*.3;core.position.y=-mouseY*.2;
    particles.rotation.y=t*.015;particles.rotation.x=t*.008;
    cubes.forEach((cube,i)=>{
      cube.rotation.x+=cube.userData.rx;cube.rotation.y+=cube.userData.ry;
      const offset=i*0.3+t*0.1;
      cube.position.x+=(cube.userData.theta+Math.sin(offset)*0.1)*0.001;
      cube.position.y+=Math.sin(offset)*0.003;
    });
    lineGroup.rotation.y=t*.01;
    renderer.render(scene,camera);
  }
  animate();

  window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    const w=window.innerWidth,h=window.innerHeight;
    if(w<768){c.style.display='none';return}
    c.style.display='block';
    renderer.setSize(w,h);
  });
})();

/* ── REVEAL ON SCROLL ── */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-bar-fill').forEach(b=>{
        b.style.width=b.dataset.width+'%';
      });
      e.target.querySelectorAll('.counter-num').forEach(el=>{
        const target=parseInt(el.dataset.count)||0;
        const suf=el.dataset.suffix||'';
        const pre=el.textContent.replace(/[0-9]/g,'');
        if(target===0)return;
        let cur=0;
        const step=()=>{cur+=Math.ceil(target/40);if(cur>=target)cur=target;el.textContent=pre+cur+suf;if(cur<target)requestAnimationFrame(step)};
        step();
      });
    }
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ── CYBER LAB ── */
(()=>{
  const c=document.getElementById('lab-canvas');
  if(!c)return;
  const ctx=c.getContext('2d');
  const resize=()=>{
    const parent=c.parentElement;
    if(parent){c.width=parent.offsetWidth-280;c.height=400}
  };
  resize();
  const W=c.width||700,H=400;

  const labNodes=[
    {id:'FW',label:'Firewall',x:W*.5,y:60,color:'#ff2244',type:'security'},
    {id:'WEB',label:'Web Server',x:W*.25,y:160,color:'#00ff88',type:'server'},
    {id:'API',label:'API Gateway',x:W*.5,y:160,color:'#00ff88',type:'server'},
    {id:'DB',label:'Database',x:W*.75,y:160,color:'#00ff88',type:'server'},
    {id:'ATK',label:'Attacker',x:W*.1,y:300,color:'#ff2244',type:'threat'},
    {id:'BOT',label:'Bot Net',x:W*.35,y:300,color:'#ff6600',type:'threat'},
    {id:'INT',label:'Internal',x:W*.65,y:300,color:'#00d4ff',type:'internal'},
    {id:'ADM',label:'Admin',x:W*.9,y:300,color:'#b000ff',type:'admin'},
  ];
  const edges=[['FW','WEB'],['FW','API'],['FW','DB'],['ATK','WEB'],['BOT','API'],['INT','DB'],['ADM','FW']];
  const attacks=[];

  const nodeList=document.getElementById('lab-node-list');
  if(nodeList){
    labNodes.forEach(n=>{
      const clrs={security:'#ff2244',server:'#00ff88',threat:'#ff2244',internal:'#b0b0b0',admin:'#b000ff'};
      nodeList.innerHTML+=`<div class="lab-node-item"><div class="lab-node-dot" style="background:${clrs[n.type]||'#fff'}"></div>${n.id} — ${n.label}</div>`;
    });
  }

  const attackLog=document.getElementById('lab-attacks');
  const attackTypes=[
    ['SQLi Attempt','high'],['XSS Probe','med'],['Port Scan','low'],['Brute Force','high'],
    ['SSRF Test','med'],['RCE Attempt','high'],['IDOR Exploit','med'],['CSRF Attack','low'],
    ['LFI Probe','high'],['XXE Injection','med']
  ];
  function addAttack(){
    const [name,sev]=attackTypes[Math.floor(Math.random()*attackTypes.length)];
    const src=labNodes.filter(n=>n.type==='threat');
    const tgt=labNodes.filter(n=>n.type==='server');
    const s=src[Math.floor(Math.random()*src.length)];
    const t=tgt[Math.floor(Math.random()*tgt.length)];
    attacks.push({sx:s.x,sy:s.y,tx:t.x,ty:t.y,p:0,speed:.008+Math.random()*.006,color:sev==='high'?'#ff2244':sev==='med'?'#ffcc00':'#00ff88'});
    if(attackLog){
      const row=document.createElement('div');
      row.className='lab-attack-item';
      row.innerHTML=`<span>${s.id}→${t.id}: ${name}</span><span class="lab-attack-status ${sev}">${sev.toUpperCase()}</span>`;
      attackLog.appendChild(row);
      if(attackLog.children.length>10)attackLog.removeChild(attackLog.children[1]);
    }
  }
  setInterval(addAttack,2000);

  function drawLab(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(3,8,16,.98)';ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(255,34,68,.04)';ctx.lineWidth=1;
    for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    edges.forEach(([a,b])=>{
      const na=labNodes.find(n=>n.id===a),nb=labNodes.find(n=>n.id===b);
      if(!na||!nb)return;
      ctx.beginPath();ctx.moveTo(na.x,na.y);
      // Animated dash
      const dashOffset=-(Date.now()*0.05)%40;
      ctx.setLineDash([4,8]);
      ctx.lineDashOffset=dashOffset;
      ctx.strokeStyle='rgba(255,34,68,.15)';ctx.lineWidth=1;ctx.stroke();
      ctx.setLineDash([]);
    });
    attacks.forEach((atk,i)=>{
      atk.p+=atk.speed;
      if(atk.p>1){attacks.splice(i,1);return;}
      const x=atk.sx+(atk.tx-atk.sx)*atk.p;
      const y=atk.sy+(atk.ty-atk.sy)*atk.p;
      // Trail
      ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);
      ctx.fillStyle=atk.color;ctx.fill();
      ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);
      ctx.strokeStyle=atk.color+'40';ctx.lineWidth=1;ctx.stroke();
      // Glow
      const grad=ctx.createRadialGradient(x,y,0,x,y,12);
      grad.addColorStop(0,atk.color+'80');
      grad.addColorStop(1,atk.color+'00');
      ctx.beginPath();ctx.arc(x,y,12,0,Math.PI*2);
      ctx.fillStyle=grad;ctx.fill();
    });
    labNodes.forEach(n=>{
      ctx.beginPath();ctx.arc(n.x,n.y,18,0,Math.PI*2);
      ctx.fillStyle=n.color+'15';ctx.fill();
      ctx.strokeStyle=n.color;ctx.lineWidth=1.5;ctx.stroke();
      ctx.beginPath();ctx.arc(n.x,n.y,5,0,Math.PI*2);
      ctx.fillStyle=n.color;ctx.fill();
      // Glow ring
      ctx.beginPath();ctx.arc(n.x,n.y,24,0,Math.PI*2);
      ctx.strokeStyle=n.color+'10';ctx.lineWidth=1;ctx.stroke();
      ctx.fillStyle=n.color;ctx.font='10px Share Tech Mono';
      ctx.textAlign='center';ctx.fillText(n.id,n.x,n.y+32);
    });
    requestAnimationFrame(drawLab);
  }
  drawLab();
})();

/* ── TERMINAL ── */
(()=>{
  const body=document.getElementById('terminal-body');
  const input=document.getElementById('terminal-input');
  if(!body||!input)return;
  const cmds={
    whoami:()=>[
      {t:'info',v:'B0dj0x — Red Team Operator & Bug Bounty Hunter'},
      {t:'',v:'Location: 127.0.0.1'},
      {t:'',v:'Email: b0dj0x@proton.me'},
      {t:'success',v:'Status: Available for engagements'},
      {t:'',v:'Platforms: HackerOne | YesWeHack | Bugcrowd'},
    ],
    skills:()=>[
      {t:'info',v:'Technical Skills:'},
      {t:'',v:'  Security: Web App Pentesting, Network Security, Bug Bounty, Red Team'},
      {t:'',v:'  Languages: Python, Bash, Go, C, C#, JS, PHP'},
      {t:'',v:'  Tools: Caido, n8n, AWS, MySQL, GitHub, Metasploit'},
      {t:'success',v:'  Platform: TryHackMe Top 1% Global'},
    ],
    projects:()=>[
      {t:'info',v:'Open Source Projects:'},
      {t:'',v:'  b0d0rk      — Google Dorking Automation'},
      {t:'',v:'  b0dj0xscn   — Python Port Scanner'},
      {t:'',v:'  b0g0x       — Domain Vulnerability Scanner'},
      {t:'',v:'  black-book  — Cybersecurity Arsenal'},
      {t:'info',v:'Platforms:'},
      {t:'',v:'  w0lfr00t.com    — Cybersecurity Community'},
      {t:'',v:'  w0lfr00tlabs    — CTF Challenge Platform'},
      {t:'success',v:'GitHub: github.com/b0dj0x'},
    ],
    bounties:()=>[
      {t:'info',v:'Bug Bounty Platforms:'},
      {t:'',v:'  HackerOne:  https://hackerone.com/b0dj0x'},
      {t:'',v:'  YesWeHack:  https://yeswehack.com/hunters/b0dj0x'},
      {t:'',v:'  Bugcrowd:   https://bugcrowd.com/h/B0dj0x'},
      {t:'success',v:'CVE Found: CVE-2025-0133 (Microsoft)'},
    ],
    contact:()=>[
      {t:'info',v:'Contact & Social:'},
      {t:'',v:'  Email:    b0dj0x@proton.me'},
      {t:'',v:'  Telegram: t.me/b0dj0'},
      {t:'',v:'  GitHub:   github.com/b0dj0x'},
      {t:'',v:'  THM:      tryhackme.com/p/b0dj0x'},
      {t:'',v:'  HTB:      profile.hackthebox.com'},
      {t:'',v:'  Medium:   medium.com/@b0dj0x'},
      {t:'',v:'  YouTube:  youtube.com/@b0dj0x'},
    ],
    certs:()=>[
      {t:'info',v:'Certifications:'},
      {t:'success',v:'  ✓ TryHackMe: Jr Penetration Tester Path'},
      {t:'warn',v:'  ● INE eJPT: In Progress'},
      {t:'success',v:'  ✓ AWS Educate: Getting Started with Security'},
      {t:'success',v:'  ✓ Harvard CS50'},
      {t:'success',v:'  ✓ Microsoft SC-200: Sentinel'},
      {t:'success',v:'  ✓ CCNA Networking (Course)'},
    ],
    help:()=>[
      {t:'info',v:'Available Commands:'},
      {t:'',v:'  whoami    — About me'},
      {t:'',v:'  skills    — Technical skills'},
      {t:'',v:'  projects  — My projects'},
      {t:'',v:'  bounties  — Bug bounty platforms'},
      {t:'',v:'  contact   — Contact info'},
      {t:'',v:'  certs     — Certifications'},
      {t:'',v:'  clear     — Clear terminal'},
      {t:'warn',v:'  [EASTER EGG] Try: nmap localhost, matrix, hack'},
    ],
    clear:()=>'CLEAR',
    nmap:()=>[
      {t:'info',v:'Starting Nmap 7.94 ( https://nmap.org )'},
      {t:'',v:'Nmap scan report for localhost (127.0.0.1)'},
      {t:'success',v:'Host is up (0.000012s latency).'},
      {t:'',v:'PORT     STATE  SERVICE'},
      {t:'success',v:'22/tcp   open   ssh'},
      {t:'success',v:'80/tcp   open   http'},
      {t:'success',v:'443/tcp  open   https'},
      {t:'warn',v:'1337/tcp open   ???   [b0dj0x easter egg port]'},
      {t:'',v:'Nmap done: 1 IP address (1 host up)'},
    ],
    matrix:()=>[
      {t:'success',v:'Wake up, Neo...'},
      {t:'info',v:'The Matrix has you...'},
      {t:'success',v:'Follow the white rabbit.'},
      {t:'',v:'Knock, knock, Neo.'},
    ],
    hack:()=>[
      {t:'warn',v:'ACCESS DENIED'},
      {t:'err',v:'You need higher privileges for that command.'},
      {t:'info',v:'Try: sudo hack'},
    ],
    'sudo hack':()=>[
      {t:'info',v:'[sudo] password for b0dj0x:'},
      {t:'success',v:'Access granted.'},
      {t:'',v:'Initiating cyberdeck connection...'},
      {t:'',v:'ICE breaker deployed...'},
      {t:'',v:'Root access acquired.'},
      {t:'warn',v:'This is a simulation. Stay legal.'},
    ],
  };

  function addLines(lines){
    lines.forEach(l=>{
      const d=document.createElement('div');
      d.className='t-line';
      const s=document.createElement('span');
      s.className=`t-out${l.t?' '+l.t:''}`;
      s.textContent=l.v;
      d.appendChild(s);body.appendChild(d);
    });
    body.scrollTop=body.scrollHeight;
  }

  input.addEventListener('keydown',e=>{
    if(e.key!=='Enter')return;
    const val=input.value.trim();
    if(!val){return;}
    const pd=document.createElement('div');pd.className='t-line';
    pd.innerHTML=`<span class="t-prompt">b0dj0x@kali:~$</span><span class="t-cmd"> ${val}</span>`;
    body.appendChild(pd);
    input.value='';
    const base=val.toLowerCase();
    if(cmds[base]){
      const res=cmds[base]();
      if(res==='CLEAR'){body.innerHTML='';return;}
      addLines(res);
    } else if(val.startsWith('echo ')){
      addLines([{t:'',v:val.slice(5)}]);
    } else {
      addLines([{t:'err',v:`bash: ${val}: command not found. Type 'help' for commands.`}]);
    }
    body.scrollTop=body.scrollHeight;
  });
})();

/* ── 3D TILT EFFECT ON CARDS ── */
(()=>{
  document.querySelectorAll('.tilt-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const rect=card.getBoundingClientRect();
      const x=e.clientX-rect.left;
      const y=e.clientY-rect.top;
      const centerX=rect.width/2;
      const centerY=rect.height/2;
      const rotateX=(y-centerY)/centerY*-8;
      const rotateY=(x-centerX)/centerX*8;
      card.style.transform=`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transform='perspective(800px) rotateX(0) rotateY(0) scale(1)';
    });
  });
})();

})();
