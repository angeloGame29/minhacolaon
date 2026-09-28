// ---- BASE DE CANDIDATOS (exemplos — substituir pelos dados oficiais) ----
let candidatos=[
{nome:"Candidato 2266",numero:"2266",partido:"—",cargo:"federal",foto:"fotos/federal-2266.jpg"},
{nome:"Maria de Fátima Souza",numero:"22111",partido:"EXEMPLO A",cargo:"estadual",foto:"fotos/estadual-22111.jpg"},
{nome:"João da Silva",numero:"12345",partido:"EXEMPLO B",cargo:"estadual",foto:"fotos/estadual-12345.jpg"},
{nome:"José Antônio Lima",numero:"45678",partido:"EXEMPLO C",cargo:"estadual",foto:"fotos/estadual-45678.jpg"},
{nome:"Ana Beatriz Cunha",numero:"123",partido:"EXEMPLO A",cargo:"senador",foto:"fotos/senador-123.jpg"},
{nome:"Carlos Eduardo Pires",numero:"456",partido:"EXEMPLO B",cargo:"senador",foto:"fotos/senador-456.jpg"},
{nome:"Helena Ribeiro",numero:"789",partido:"EXEMPLO C",cargo:"senador",foto:"fotos/senador-789.jpg"},
{nome:"Paulo Roberto Alves",numero:"22",partido:"EXEMPLO A",cargo:"governador",foto:"fotos/governador-22.jpg"},
{nome:"Luciana Barbosa",numero:"45",partido:"EXEMPLO B",cargo:"governador",foto:"fotos/governador-45.jpg"},
{nome:"Roberto Mendes",numero:"13",partido:"EXEMPLO C",cargo:"presidente",foto:"fotos/presidente-13.jpg"},
{nome:"Sandra Vieira",numero:"22",partido:"EXEMPLO A",cargo:"presidente",foto:"fotos/presidente-22.jpg"}
];
try{const st=JSON.parse(localStorage.getItem("cand2026")||"null");if(Array.isArray(st))candidatos=st}catch(_){}
const WHATS_DESTINO=""; // número que recebe os pedidos, com DDI+DDD, ex.: 5583999999999 (vazio = a pessoa escolhe o contato)
const SHEETS_URL="";   // URL do app da Planilha Google (termina em /exec). Vazio = não envia
const SHEETS_TOKEN="troque-este-codigo"; // igual ao TOKEN do google-apps-script.gs
let pendente=null,msgBase=null;
const cargos=[
{id:"federal",tipo:"federal",titulo:"Deputado Federal",fixo:"2266",ico:"🏛️"},
{id:"estadual",tipo:"estadual",titulo:"Deputado Estadual",ico:"📋"},
{id:"sen1",tipo:"senador",titulo:"Senador — 1ª vaga",ico:"⚖️"},
{id:"sen2",tipo:"senador",titulo:"Senador — 2ª vaga",ico:"⚖️"},
{id:"gov",tipo:"governador",titulo:"Governador",ico:"🏢"},
{id:"pres",tipo:"presidente",titulo:"Presidente",ico:"🇧🇷"}];
const short={federal:"Deputado Federal",estadual:"Deputado Estadual",sen1:"Senador 1",sen2:"Senador 2",gov:"Governador",pres:"Presidente"};
// Foto: coloque as imagens na pasta "fotos" (ao lado do index.html) e informe o caminho em "foto". Se o arquivo não existir, aparecem as iniciais.
const av=(x,c="")=>`<span class="av ${c}">${esc(x.nome.split(" ").filter(w=>w.length>2).slice(0,2).map(w=>w[0]).join("").toUpperCase()||x.numero.slice(0,2))}${x.foto?`<img src="${esc(x.foto)}" alt="" onerror="this.remove()">`:""}</span>`;
function pickPhoto(x,after,cb){const f=document.createElement("input");f.type="file";f.accept="image/*";
 f.onchange=()=>{const file=f.files[0];if(!file)return;const img=new Image();img.onload=()=>{const S=160,cv=document.createElement("canvas");cv.width=cv.height=S;
  const m=Math.min(img.width,img.height);cv.getContext("2d").drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,S,S);
  const d=cv.toDataURL("image/jpeg",.8);if(cb)cb(d);else{x.foto=d;after()}};img.src=URL.createObjectURL(file)};f.click()}
const sel={};
const $=s=>document.querySelector(s);
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

cargos.forEach((c,i)=>{
 if(c.fixo) sel[c.id]=candidatos.find(x=>x.numero===c.fixo&&x.cargo===c.tipo);
 const d=document.createElement("div");d.className="card";d.id="c-"+c.id;
 d.innerHTML=`<div class="ch"><span class="n">${i+1}</span><span>${c.ico} ${c.titulo}</span></div>
 <div class="slot"></div>`;
 $("#cards").appendChild(d);draw(c);
});
function draw(c){
 const card=$("#c-"+c.id),slot=card.querySelector(".slot"),s=sel[c.id];
 card.classList.toggle("done",!!s);
 if(s){
  slot.innerHTML=`<div class="sel">${av(s,"lg")}<div class="i"><span class="ok">✓ Candidato selecionado</span><div><b>${esc(s.nome)}</b></div><small>${esc(s.partido)}</small></div><span class="num">${s.numero}</span>${c.fixo?"":'<button class="x" aria-label="Remover">×</button>'}</div>`;
  const x=slot.querySelector(".x");if(x)x.onclick=()=>{delete sel[c.id];draw(c);cart()};
 }else{
  slot.innerHTML=`<input type="text" placeholder="🔎 Digite nome ou número..." aria-label="Pesquisar ${c.titulo}" autocomplete="off"><div class="res"></div>`;
  const inp=slot.querySelector("input"),res=slot.querySelector(".res");
  inp.oninput=()=>{
   const q=norm(inp.value.trim());
   if(!q){res.classList.remove("open");return}
   const outro=c.id==="sen1"?"sen2":c.id==="sen2"?"sen1":null;
   const r=candidatos.filter(x=>x.cargo===c.tipo&&!(outro&&sel[outro]===x)&&norm(x.nome+" "+x.numero+" "+x.partido).includes(q));
   res.innerHTML=r.length?"":'<div class="none">Nenhum candidato encontrado.</div>';
   r.forEach(x=>{const b=document.createElement("button");b.type="button";
    b.innerHTML=`<span class="l">${av(x,"sm")}<span>${esc(x.nome)}<small>${esc(x.partido)}</small></span></span><span class="num">${x.numero}</span>`;
    b.onclick=()=>{sel[c.id]=x;draw(c);cart()};res.appendChild(b)});
   res.classList.add("open");
  };
 }
 cart();
}
function cart(){
 $("#cart").innerHTML=cargos.map(c=>{const s=sel[c.id];
  return s?`<div class="row"><span class="l">${av(s,"sm")}<span>${short[c.id]}<em>${esc(s.nome)}</em></span></span><b>${s.numero}</b></div>`
  :`<div class="row"><span>${short[c.id]}</span><span class="empty">a escolher</span></div>`}).join("");
 const all=cargos.every(c=>sel[c.id]);
 const st=[...document.querySelectorAll("#steps span")];
 st.forEach((e,i)=>e.classList.toggle("on",i===(all?1:0)));
}
// tipo de cola: baixar imagem (privado) x físico com entrega (envia dados)
document.querySelectorAll('[name=tipo]').forEach(r=>r.onchange=()=>{
 $("#baixarBox").style.display=r.value==="baixar"?"block":"none";
 $("#fisicaBox").style.display=r.value==="fisica"?"block":"none";
});

function initials(x){return x.nome.split(" ").filter(w=>w.length>2).slice(0,2).map(w=>w[0]).join("").toUpperCase()||x.numero.slice(0,2)}
function loadImage(src){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src})}
function rr(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
async function gerarImagemCola(){
 const cv=$("#colaCanvas"),ctx=cv.getContext("2d");
 const W=720,H=970,ESCALA=2; // ESCALA 2 = imagem com o dobro de nitidez (aumente para 3 se quiser ainda mais)
 cv.width=W*ESCALA;cv.height=H*ESCALA;ctx.setTransform(ESCALA,0,0,ESCALA,0,0);
 ctx.fillStyle="#F5F7F6";ctx.fillRect(0,0,W,H);
 const g=ctx.createLinearGradient(0,0,W,190);g.addColorStop(0,"#00BF63");g.addColorStop(1,"#008F4A");
 ctx.fillStyle=g;ctx.fillRect(0,0,W,190);
 ctx.fillStyle="#FFD600";rr(ctx,24,24,180,32,16);ctx.fill();ctx.fillStyle="#111";ctx.font="bold 15px sans-serif";ctx.fillText("ELEIÇÕES 2026",38,46);
 ctx.fillStyle="#fff";ctx.font="bold 42px sans-serif";ctx.fillText("Minha cola",24,112);
 ctx.font="16px sans-serif";ctx.fillText("Paraíba · escolhida por você",24,142);
 let y=210;const rh=126;
 for(const c of cargos){
  const s=sel[c.id];
  ctx.fillStyle="#fff";rr(ctx,24,y,W-48,rh-16,16);ctx.fill();
  const cx=76,cy=y+(rh-16)/2,r=36;
  let drew=false;
  if(s.foto){try{const img=await loadImage(s.foto);ctx.save();ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.clip();ctx.drawImage(img,cx-r,cy-r,r*2,r*2);ctx.restore();drew=true}catch(_){}}
  if(!drew){ctx.fillStyle="#00BF63";ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.fill();ctx.fillStyle="#fff";ctx.font="bold 22px sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(initials(s),cx,cy);ctx.textAlign="left";ctx.textBaseline="alphabetic"}
  ctx.fillStyle="#5b6660";ctx.font="13px sans-serif";ctx.fillText(short[c.id].toUpperCase(),128,y+36);
  ctx.fillStyle="#111";ctx.font="bold 21px sans-serif";ctx.fillText(s.nome,128,y+64);
  ctx.fillStyle="#5b6660";ctx.font="14px sans-serif";ctx.fillText(s.partido||"",128,y+88);
  ctx.fillStyle="#111";rr(ctx,W-158,y+(rh-16)/2-22,118,44,12);ctx.fill();
  ctx.fillStyle="#FFD600";ctx.font="bold 22px sans-serif";ctx.textAlign="center";ctx.fillText(s.numero,W-99,y+(rh-16)/2+8);ctx.textAlign="left";
  y+=rh;
 }
 ctx.fillStyle="#9aa8a1";ctx.font="12px sans-serif";ctx.fillText("Gerada em "+new Date().toLocaleDateString("pt-BR")+" · uso pessoal",24,y+16);
}
$("#goBaixar").onclick=async()=>{
 $("#errB").style.display="none";
 for(const c of cargos) if(!sel[c.id]){$("#errB").textContent="Ainda falta escolher o candidato para "+short[c.id]+".";$("#errB").style.display="block";return}
 await gerarImagemCola();
 $("#colaCanvas").style.display="block";
 const a=document.createElement("a");a.download="minha-cola-2026.png";a.href=$("#colaCanvas").toDataURL("image/png");a.click();
};

// material
$("#tel").oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,11);
 e.target.value=v.length>6?`(${v.slice(0,2)}) ${v.slice(2,v.length-4)}-${v.slice(-4)}`:v.length>2?`(${v.slice(0,2)}) ${v.slice(2)}`:v};
$("#cep").oninput=async e=>{let v=e.target.value.replace(/\D/g,"").slice(0,8);
 e.target.value=v.length>5?v.slice(0,5)+"-"+v.slice(5):v;
 if(v.length===8){try{const r=await fetch("https://viacep.com.br/ws/"+v+"/json/");const j=await r.json();
  if(!j.erro){$("#rua").value=j.logradouro||"";$("#bairro").value=j.bairro||"";$("#cidade").value=j.localidade||""}}catch(_){}}};
// validar
function erro(m){const e=$("#err");e.textContent=m;e.style.display="block";e.scrollIntoView({behavior:"smooth",block:"center"});return false}
$("#go").onclick=()=>{try{confirmar()}catch(e){console.error(e);erro("Erro: "+e.message+". Substitua os 3 arquivos (index.html, style.css e script.js) juntos e recarregue a página.")}};
function confirmar(){
 $("#err").style.display="none";
 for(const c of cargos) if(!sel[c.id]) return erro("Ainda falta escolher o candidato para "+short[c.id]+".");
 const m=document.querySelector('[name=mat]:checked');
 if(!m) return erro("Escolha se deseja receber material da campanha.");
 const D={};
 ["nome","tel","rua","num","bairro","cidade","comp","cep"].forEach(id=>D[id]=$("#"+id).value.trim());
 const req=[["nome","seu nome completo"],["tel","o telefone"],["cep","o CEP"],["rua","a rua ou avenida"],["num","o número"],["bairro","o bairro"],["cidade","a cidade"]];
 for(const [id,t] of req) if(!D[id]) return erro("Ainda falta informar "+t+".");
 if(D.tel.replace(/\D/g,"").length<10) return erro("O telefone parece incompleto.");
 if(D.cep.replace(/\D/g,"").length!==8) return erro("O CEP precisa ter 8 números.");
 const nº=String(Math.floor(Math.random()*900000)+100000);
 let h=`<dt>PEDIDO</dt><dd>#${nº}</dd>`;
 h+=`<dt>NOME</dt><dd>${esc(D.nome)}</dd>`;if(D.tel)h+=`<dt>TELEFONE</dt><dd>${esc(D.tel)}</dd>`;
 cargos.forEach(c=>h+=`<dt>${short[c.id].toUpperCase()}</dt><dd class="l" style="display:flex;align-items:center;gap:10px">${av(sel[c.id],"sm")}<span>${esc(sel[c.id].nome)} — ${sel[c.id].numero}</span></dd>`);
 h+=`<dt>MATERIAL</dt><dd>${m.value==="sim"?"Sim":"Não"}</dd>`;
 if(D.rua||D.bairro||D.cidade)h+=`<dt>ENDEREÇO</dt><dd>${esc(D.rua)}${D.num?", "+esc(D.num):""}${D.comp?" — "+esc(D.comp):""}<br>${esc(D.bairro)} ${D.cidade?"· "+esc(D.cidade):""}${D.cep?"<br>CEP "+esc(D.cep):""}</dd>`;
 h+=`<dt>STATUS</dt><dd><span class="st">🟡 Pedido recebido</span></dd>`;
 const L="━━━━━━━━━━━━━━━━━━━━",nm={federal:"Federal",estadual:"Estadual",sen1:"Senador 1",sen2:"Senador 2",gov:"Governador",pres:"Presidente"};
 msgBase=[L,"🛵 *PEDIDO #"+nº+"*",L,"","👤 *"+D.nome+"*","📞 "+D.tel,"","🗳️ *SELEÇÕES*",
  ...cargos.map(c=>"• "+nm[c.id]+": "+sel[c.id].nome+" — *"+sel[c.id].numero+"*"),"",
  "📦 *MATERIAL:* "+(m.value==="sim"?"Sim":"Não"),"","📍 *ENTREGA*",
  D.rua+", "+D.num+(D.comp?" — "+D.comp:""),D.bairro+" — "+D.cidade+"/PB","CEP "+D.cep].join("\n");
 pendente={token:SHEETS_TOKEN,pedido:nº,nome:D.nome,telefone:D.tel,federal:sel.federal.nome+" — "+sel.federal.numero,estadual:sel.estadual.nome+" — "+sel.estadual.numero,senador1:sel.sen1.nome+" — "+sel.sen1.numero,senador2:sel.sen2.nome+" — "+sel.sen2.numero,governador:sel.gov.nome+" — "+sel.gov.numero,presidente:sel.pres.nome+" — "+sel.pres.numero,material:m.value==="sim"?"Sim":"Não",cep:D.cep,rua:D.rua,numero:D.num,complemento:D.comp,bairro:D.bairro,cidade:D.cidade};
 $("#sum").innerHTML=h;openConsent();
 document.querySelectorAll("#steps span").forEach((e,i)=>e.classList.toggle("on",i===2));
};

// ---- CONSENTIMENTO ----
function openConsent(){
 if(!$("#consent")){$("#modal").classList.add("open");return}
 $("#c1").checked=$("#c2").checked=$("#c3").checked=false;$("#cok").disabled=true;$("#consent").classList.add("open")}
if($("#consent")){
 const chk=()=>$("#cok").disabled=!($("#c1").checked&&$("#c2").checked&&$("#c3").checked);
 $("#c1").onchange=$("#c2").onchange=$("#c3").onchange=chk;
 $("#cback").onclick=()=>$("#consent").classList.remove("open");
 $("#cok").onclick=()=>{
  const L="━━━━━━━━━━━━━━━━━━━━",ag=new Date().toLocaleString("pt-BR");
  const msg=msgBase+"\n\n"+L+"\n✅ *CONFIRMAÇÕES DO ELEITOR*\n"+L+
   "\n✔️ Confirmou que os dados são dele(a) e estão corretos"+
   "\n✔️ Sabe que a escolha de candidatos é informação sensível e decidiu enviar por vontade própria"+
   "\n✔️ Consentiu com o uso dos dados pela campanha (LGPD) só para o envio do material"+
   "\n🕒 "+ag+"\n"+L+"\n🟡 *STATUS: PEDIDO RECEBIDO*\n"+L;
  $("#wa").href="https://wa.me/"+WHATS_DESTINO+"?text="+encodeURIComponent(msg);
  if(pendente&&SHEETS_URL){try{fetch(SHEETS_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(pendente)}).catch(()=>{})}catch(_){}}pendente=null;$("#consent").classList.remove("open");$("#modal").classList.add("open")};
}
// ---- ADMIN (#admin) ----
let aFoto="";
const save=()=>{try{localStorage.setItem("cand2026",JSON.stringify(candidatos))}catch(_){}};
const cNome={federal:"Dep. Federal",estadual:"Dep. Estadual",senador:"Senador",governador:"Governador",presidente:"Presidente"};
function aList(){$("#alist").innerHTML=candidatos.map((x,i)=>`<div class="li">${av(x)}<div class="i"><b>${esc(x.nome)}</b> · ${x.numero}<br><small>${cNome[x.cargo]} — ${esc(x.partido)}</small></div><button class="x" data-i="${i}" aria-label="Excluir">×</button></div>`).join("")||'<div class="none">Nenhum candidato.</div>';
 $("#alist").querySelectorAll(".x").forEach(b=>b.onclick=()=>{candidatos.splice(+b.dataset.i,1);save();aList()})}
$("#afoto").onclick=()=>pickPhoto({},null,d=>{aFoto=d;$("#aprev").innerHTML=av({nome:"",numero:"",foto:d},"lg")});
$("#asave").onclick=()=>{const n=$("#anome").value.trim(),u=$("#anum").value.trim().replace(/\D/g,""),pt=$("#apart").value.trim(),cg=$("#acargo").value;
 if(!n||!u||!pt){$("#aerr").textContent="Preencha nome, número e partido.";return}
 $("#aerr").textContent="";const i=candidatos.findIndex(x=>x.cargo===cg&&x.numero===u),o={nome:n,numero:u,partido:pt,cargo:cg,foto:aFoto||(i>=0?candidatos[i].foto:"")};
 if(i>=0)candidatos[i]=o;else candidatos.push(o);save();aList();aFoto="";$("#aprev").innerHTML="";["anome","anum","apart"].forEach(k=>$("#"+k).value="")};
$("#aexp").onclick=()=>{$("#ajson").value=JSON.stringify(candidatos,null,1)};
function route(){const on=location.hash==="#admin";document.body.classList.toggle("adm",on);
 if(on)aList();else cargos.forEach(c=>{if(c.fixo)sel[c.id]=candidatos.find(x=>x.numero===c.fixo&&x.cargo===c.tipo);if(sel[c.id]&&!candidatos.includes(sel[c.id]))delete sel[c.id];draw(c)})}
addEventListener("hashchange",route);route();
