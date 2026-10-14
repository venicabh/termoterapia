const R = [
  {
    n: "Crioterapia superficial",
    c: "Frio superficial",
    d: "Frio terapêutico (gelo, cold pack/gel, compressa fria) para modular dor, edema e metabolismo local.",
    m: [
      "Reduz a circulação local (vasoconstrição)",
      "Diminui a condução nervosa (analgesia)",
      "Diminui a atividade metabólica (controle de edema)"
    ],
    p: "Temperatura: ~0 a 15 °C · Duração: 15–20 min · Frequência: diária/intermitente",
    pr: "Conferir sensibilidade térmica, circulação e integridade da pele. Evitar contato direto e prolongado com a pele.",
    ct: "Doença de Raynaud, crioglobulinemia.",
    ref: "Miranda JP et al. BJSM, 2026 (revisão/meta-análise de crioterapia em distúrbios musculoesqueléticos)."
  },
  {
    n: "Calor superficial",
    c: "Calor superficial",
    d: "Compressa quente, bolsa térmica ou manta/almofada térmica para aliviar sintomas e preparar tecidos para o movimento.",
    m: [
      "Aumenta a circulação local",
      "Favorece o relaxamento muscular",
      "Melhora a extensibilidade dos tecidos"
    ],
    p: "Temperatura: ~40 a 45 °C · Duração: 15–20 min · Frequência: diária/intermitente (intensidade e tempo individualizados)",
    pr: "Conferir sensibilidade e risco térmico.",
    ct: "A preencher pela revisão.",
    ref: "Revisões de termoterapia/calor — a preencher."
  },
  {
    n: "Criocompressão",
    c: "Frio + compressão",
    d: "Frio associado à compressão, relevante em cenários pós-operatórios e musculoesqueléticos.",
    m: [
      "Reduz a circulação local",
      "Compressão auxilia o controle de edema"
    ],
    p: "Temperatura: ~10 a 15 °C · Duração: 15–20 min · Frequência: diária/intermitente",
    pr: "Conferir circulação distal, sensibilidade e integridade da pele.",
    ct: "A preencher pela revisão.",
    ref: "Revisões de crioterapia pós-artroplastia — a preencher."
  },
  {
    n: "Imersão em água fria",
    c: "Frio por imersão",
    d: "Cold-water immersion/banho frio, usado na recuperação pós-exercício.",
    m: [
      "Vasoconstrição e redução do metabolismo",
      "Possível redução da dor muscular tardia"
    ],
    p: "Temperatura da água: ~10 a 15 °C · Duração: 10–15 min · Frequência: após o esforço",
    pr: "Atenção a respostas cardiovasculares e tolerância individual ao frio.",
    ct: "A preencher pela revisão.",
    ref: "A preencher."
  },
  {
    n: "Parafina",
    c: "Calor superficial",
    d: "Banho de parafina; exemplo de calor superficial para mão e articulações periféricas.",
    m: [
      "Aquecimento superficial uniforme",
      "Melhora da extensibilidade e do conforto"
    ],
    p: "Temperatura: ~52 a 54 °C · Duração: 15–20 min · Frequência: diária/intermitente",
    pr: "Conferir integridade da pele, feridas abertas e sensibilidade.",
    ct: "A preencher pela revisão.",
    ref: "A preencher."
  },
  {
    n: "Ultrassom terapêutico",
    c: "Ultrassom (térmico / não térmico)",
    d: "Ultrassom contínuo e pulsado. Separar efeito térmico de efeito predominantemente não térmico.",
    m: [
      "Modo contínuo: efeito térmico",
      "Modo pulsado: efeito predominantemente não térmico"
    ],
    p: "Modo: contínuo ou pulsado · Frequência: 1 ou 3 MHz · Intensidade: ~0,5 a 2,0 W/cm² · Duração: conforme a área tratada",
    pr: "Revisar precauções do equipamento e da região tratada.",
    ct: "A preencher pela revisão.",
    ref: "Guan H et al., 2024 (ultrassom para dor musculoesquelética)."
  },
  {
    n: "Diatermia por ondas curtas",
    c: "Aquecimento profundo",
    d: "Ondas curtas contínuas ou pulsadas para aquecimento profundo. Evidência específica por condição.",
    m: ["Aquecimento de tecidos profundos"],
    p: "Modo: contínuo ou pulsado · Dose térmica ou atérmica · Duração: ~15–20 min",
    pr: "Revisar precauções (implantes metálicos, sensibilidade).",
    ct: "A preencher pela revisão.",
    ref: "Pollet J et al. J Clin Med, 2023. DOI: 10.3390/jcm12123956."
  },
  {
    n: "Radiofrequência / TECAR",
    c: "Aquecimento profundo",
    d: "Modalidades capacitivas/resistivas de radiofrequência. Sem pressupor superioridade sobre outras modalidades.",
    m: ["Aquecimento tecidual por radiofrequência"],
    p: "Temperatura tecidual-alvo: ~40 a 45 °C · Modo: capacitivo ou resistivo · Duração: ~10–20 min",
    pr: "Revisar precauções do equipamento e implantes.",
    ct: "A preencher pela revisão.",
    ref: "A preencher."
  }
];

const C = [
  ["Osteoartrite de joelho", "Joelho", ["Analgesia", "Redução de rigidez", "Preparação para movimento"]],
  ["Lombalgia inespecífica", "Coluna lombar", ["Analgesia", "Conforto/relaxamento"]],
  ["Entorse de tornozelo", "Tornozelo", ["Analgesia", "Controle de edema"]],
  ["Lesão muscular/DOMS", "Músculo", ["Analgesia", "Recuperação pós-exercício"]],
  ["Pós-operatório de artroplastia de joelho", "Joelho", ["Analgesia", "Controle de edema", "Melhora de amplitude"]],
  ["Dor cervical inespecífica", "Coluna cervical", ["Analgesia", "Redução de rigidez"]],
  ["Osteoartrite de mão", "Mão", ["Analgesia", "Redução de rigidez"]],
  ["Capsulite adesiva de ombro", "Ombro", ["Analgesia", "Melhora de amplitude"]],
  ["Tendinopatia do manguito rotador", "Ombro", ["Analgesia", "Melhora de amplitude"]],
  ["Pós-operatório musculoesquelético geral", "Variável", ["Analgesia", "Controle de edema"]]
];

const G = {
  A: "A (Alto)",
  B: "B (Médio)",
  C: "C (Baixo)",
  I: "Insuficiente"
};


const L = [
  [0, 0, "Analgesia", "B", "Redução de dor em curto prazo."],
  [0, 1, "Analgesia", "B", "Alívio sintomático em contextos selecionados."],
  [0, 1, "Redução de rigidez", "B", "Alívio de rigidez como adjuvante."],
  [0, 1, "Preparação para movimento", "C", "Preparar tecidos para exercício; dados limitados."],
  [0, 5, "Analgesia", "C", "Mostrar apenas o que os estudos da condição sustentam."],
  [0, 6, "Analgesia", "I", "Resultados heterogêneos; evidência limitada."],
  [1, 1, "Analgesia", "B", "Adjuvante; não substitui exercício e educação."],
  [1, 1, "Conforto/relaxamento", "C", "Conforto e relaxamento muscular em curto prazo."],
  [1, 6, "Analgesia", "I", "Evidência insuficiente."],
  [2, 0, "Analgesia", "C", "Limites da evidência na fase inicial."],
  [2, 0, "Controle de edema", "C", "Efeito pequeno ou incerto."],
  [2, 2, "Controle de edema", "C", "Frio + compressão; certeza baixa."],
  [3, 3, "Recuperação pós-exercício", "B", "Alívio de dor muscular após esforço."],
  [3, 0, "Analgesia", "C", "Efeito pequeno em dor."],
  [4, 0, "Analgesia", "C", "Literatura específica pós-artroplastia."],
  [4, 2, "Controle de edema", "B", "Criocompressão em cenário pós-operatório."],
  [4, 2, "Analgesia", "B", "Alívio de dor em curto prazo."],
  [4, 0, "Controle de edema", "C", "Efeito variável conforme protocolo."],
  [5, 1, "Analgesia", "C", "Comparar com outras abordagens."],
  [5, 1, "Redução de rigidez", "C", "Objetivo sintomático."],
  [6, 4, "Analgesia", "C", "Parafina como exemplo para mão."],
  [6, 4, "Redução de rigidez", "C", "Calor superficial para rigidez."],
  [6, 1, "Redução de rigidez", "C", "Calor superficial como adjuvante."],
  [7, 1, "Melhora de amplitude", "C", "Adjuvante à mobilidade/exercício."],
  [7, 1, "Analgesia", "C", "Papel adjuvante."],
  [7, 5, "Analgesia", "I", "Evidência insuficiente."],
  [8, 0, "Analgesia", "I", "Disponibilidade do recurso não implica evidência forte."],
  [8, 5, "Analgesia", "I", "Evidência insuficiente."],
  [9, 0, "Controle de edema", "C", "Usar como consulta, não como autorização de tratamento."],
  [9, 2, "Controle de edema", "C", "Quando aplicável."]
];

const S = {
  user: null,
  cond: null,
  obj: null,
  run: false,
  fav: [],
  hist: [],
  theme: "auto",
  big: 0
};

const $ = document.getElementById("app");



const ini = () =>
  ((S.user && S.user.name) || "Dr")
    .split(/[\s._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");

const badge = g => `<span class="badge g${g}">Evidência ${G[g]}</span>`;

const therm = `
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>
  </svg>
`;


function shell(page, body) {
  const navItems = [
    ["/", "Buscar"],
    ["/historico", "Histórico"],
    ["/pacientes", "Pacientes"],
    ["/config", "Configurações"]
  ];

  return `
    <header class="top">
      <div class="in">
        <a class="brand" href="#/">
          <span class="lg">${therm}</span>Termoterapia<small>Fisioterapeuta</small>
        </a>
        <nav aria-label="Principal">
          ${navItems.map(([h, l]) => `<a href="#${h}" ${page === h ? 'aria-current="page"' : ""}>${l}</a>`).join("")}
        </nav>
        <div class="usr">
          <span class="av" aria-hidden="true">${ini()}</span>
          <span class="un">${esc(S.user.name)}</span>
        </div>
      </div>
    </header>
    <main class="wrap">${body}</main>
    <footer class="wrap">
  <p>
    *Este site oferece informações de apoio e não substitui
    a avaliação clínica individualizada. Cabe ao fisioterapeuta
    avaliar as indicações, contraindicações e condições do paciente,
    definir o tratamento e assumir a responsabilidade técnica
    por sua aplicação.
  </p>
  <p>Protótipo acadêmico A3 · Termoterapia</p>
</footer>`;
}

function login() {
  return `
    <div class="lgw">
      <section class="lgl">
        <span class="lg" style="width:48px;height:48px;border-radius:14px">${therm}</span>
        <h1>Termoterapia na prática.</h1>
        <p>Consulte a literatura sobre calor e frio por condição clínica e objetivo terapêutico.</p>
        <ul>
          <li>8 recursos</li>
          <li>10 condições clínicas</li>
          <li>Fichas científicas</li>
        </ul>
      </section>
      <section class="lgr">
        <form onsubmit="doLogin();return false" novalidate>
          <h2>Entrar</h2>
          <p class="mut">Aba do fisioterapeuta</p>
          <label for="em">E-mail ou nome</label>
          <input id="em" class="inp" autocomplete="username">
          <label for="pw">Senha</label>
          <div class="pwr">
            <input id="pw" type="password" class="inp" autocomplete="current-password">
            <button class="ghost" type="button" id="tg" onclick="tp()">Mostrar</button>
          </div>
          <p class="err" id="er" role="alert"></p>
          <button class="cta" type="submit">Entrar</button>
          <button class="ghost" type="button" style="width:100%;margin-top:10px;padding:12px" onclick="demo()">Entrar como demonstração</button>
          <p class="mut c" style="margin-top:14px">
            <a href="#/login" onclick="return false">Esqueci minha senha</a> · 
            <a href="#/login" onclick="return false">Criar conta</a>
          </p>
        </form>
      </section>
    </div>
  `;
}

function resCard(i) {
  const x = L[i];
  const r = R[x[1]];

  return `
    <a class="card res" href="#/ficha/${i}">
      <div class="row">
        <b>${r.n}</b>${badge(x[3])}
      </div>
      <p class="mut" style="margin-top:6px">${C[x[0]][0]} · ${x[2]}</p>
      <p><span class="k">Resultado:</span> ${x[4]}</p>
      <p class="mut">Limitações: efeito e relevância clínica variam conforme protocolo e desfecho.</p>
      <p class="mut">Segurança: ${r.pr.split(".")[0]}.</p>
      <p class="go">Acessar ficha científica completa →</p>
    </a>
  `;
}

function home() {
  const c = S.cond !== null ? C[S.cond] : null;
  const rs = S.run ? L.map((x, i) => i).filter(i => L[i][0] === S.cond && L[i][2] === S.obj) : [];

  const out = !S.run
    ? `<div class="empty">
        <p class="k sans" style="font-size:1.1rem;color:var(--navy)">Os resultados aparecem aqui</p>
        Escolha a condição clínica e o objetivo terapêutico no painel e clique em “Filtrar recursos disponíveis”.
       </div>`
    : `<div class="note"><b>Alertas de segurança e precauções gerais:</b> confira sensibilidade, circulação e integridade da pele.</div>
       <h3 class="sans" style="margin:0 0 12px;color:var(--navy)">
         ${rs.length} recurso${rs.length === 1 ? "" : "s"} identificado${rs.length === 1 ? "" : "s"} · ${c[0]} → ${S.obj}
       </h3>
       ${
         rs.length
           ? `<div class="grid">${rs.map(resCard).join("")}</div>`
           : `<div class="empty">Nenhuma relação cadastrada para esta busca.</div>`
       }`;

  return shell(
    "/",
    `
    <section class="hero">
      <h2>Buscar recursos de termoterapia</h2>
      <p>Apoio à decisão clínica por condição e objetivo terapêutico, com ficha científica completa para cada recurso.</p>
      <div class="stats">
        <div class="stat"><b>8</b><span>recursos de calor e frio</span></div>
        <div class="stat"><b>10</b><span>condições clínicas</span></div>
        <div class="stat"><b>3</b><span>passos até a ficha</span></div>
      </div>
    </section>
    <div class="cols">
      <aside class="card sticky" aria-label="Filtros">
        <div class="step" style="margin-top:0"><i>1</i>Condição clínica</div>
        <select aria-label="Condição clínica" onchange="S.cond=this.value===''?null:+this.value;S.obj=null;S.run=false;render()">
          <option value="">Selecione a condição…</option>
          ${C.map((x, i) => `<option value="${i}" ${S.cond === i ? "selected" : ""}>${x[0]}</option>`).join("")}
        </select>
        ${c ? `<p class="mut" style="margin-top:8px">Região: ${c[1]}</p>` : ""}
        
        <div class="step ${c ? "" : "off"}"><i>2</i>Objetivo terapêutico</div>
        <div class="chips" role="group" aria-label="Objetivos">
          ${
            c
              ? c[2].map(o => `<button class="chip" aria-pressed="${S.obj === o}" onclick="S.obj='${o}';S.run=false;render()">${o}</button>`).join("")
              : `<span class="mut">Escolha uma condição primeiro.</span>`
          }
        </div>
        <button class="cta" ${c && S.obj ? "" : "disabled"} onclick="S.run=true;render();document.getElementById('out').scrollIntoView({behavior:'smooth',block:'start'})">
          Filtrar recursos disponíveis
        </button>
      </aside>
      <section id="out" aria-live="polite">${out}</section>
    </div>
    `
  );
}

function ficha(i) {
  const x = L[i];
  const r = R[x[1]];
  const c = C[x[0]];
  const f = S.fav.includes(i);

  const tocItems = [
    ["d", "Descrição"],
    ["m", "Mecanismo"],
    ["e", "Evidência"],
    ["p", "Parâmetros"],
    ["c", "Contraindicações"],
    ["r", "Referências"]
  ];

  return shell(
    "/",
    `
    <div class="crumb">
      <a href="#/">Buscar</a> › <a href="#/">Resultados</a> › ${r.n}
    </div>
    <div class="cols2">
      <article class="ft">
        <div class="card">
          <div class="row">
            <div>
              <h2>${r.n}</h2>
              <span class="mut">Categoria: ${r.c}</span>
            </div>
            ${badge(x[3])}
          </div>
        </div>
        <div class="card" id="d">
          <h3>Descrição curta</h3>
          <p>${r.d}</p>
        </div>
        <div class="card" id="m">
          <h3>Mecanismo fisiológico</h3>
          ${r.m.map(t => `<p>• ${t}</p>`).join("")}
        </div>
        <div class="card" id="e">
          <h3>O que a evidência mostra: ${c[0]}</h3>
          <p><span class="k">Objetivo:</span> ${x[2]}</p>
          <p><span class="k">Resultado:</span> ${x[4]}</p>
          <p><span class="k">Certeza:</span> ${G[x[3]]}</p>
          <p class="mut">Limitações: efeito de curto prazo; não substitui exercício e tratamento ativo.</p>
        </div>
        <div class="card" id="p">
          <h3>Parâmetros de aplicação estudados</h3>
          <p>${r.p}</p>
          <p class="mut">Faixas descritas na literatura; confira nas referências. Não é prescrição universal.</p>
        </div>
        <div class="card" id="c">
          <h3>Contraindicações e precauções</h3>
          <p><span class="k">Precauções:</span> ${r.pr}</p>
          <p><span class="k">Contraindicações:</span> ${r.ct}</p>
        </div>
        ${procedureForm(i)}
        <div class="card" id="r">
          <h3>Referências científicas</h3>
          <p>${r.ref}</p>
        </div>
        <p class="mut"><b>Uso como adjuvante:</b> não substitui avaliação nem tratamento ativo. Última revisão: MM/AAAA.</p>
      </article>

      <aside class="card side sticky">
        <p class="mut">Busca</p>
        <p class="k">${c[0]}</p>
        <p class="mut">${x[2]}</p>
        <button class="cta" onclick="tf(${i})" aria-pressed="${f}">${f ? "★ Favorito" : "☆ Favoritar"}</button>
        <a class="ghost" href="#/" style="width:100%;text-align:center;margin-top:10px">← Voltar aos resultados</a>
        <nav class="toc" aria-label="Nesta ficha">
          ${tocItems.map(([h, l]) => `<a href="#/ficha/${i}" onclick="document.getElementById('${h}').scrollIntoView({behavior:'smooth'});return false">${l}</a>`).join("")}
        </nav>
      </aside>
    </div>
    `
  );
}

function hist() {
  const li = i => resCard(i);

  return shell(
    "/historico",
    `
    <h2 class="sans" style="color:var(--navy);margin:0 0 16px">Histórico</h2>
    <h3 class="sans" style="color:var(--navy)">Favoritos</h3>
    ${S.fav.length ? `<div class="grid">${S.fav.map(li).join("")}</div>` : `<div class="empty">Nenhum favorito ainda. Abra uma ficha e clique em Favoritar.</div>`}

    <h3 class="sans" style="color:var(--navy);margin-top:28px">Consultados recentemente</h3>
    ${S.hist.length ? `<div class="grid">${S.hist.map(li).join("")}</div>` : `<div class="empty">Nenhuma ficha consultada.</div>`}
    `
  );
}

function cfg() {
  const seg = (arr, cur, fn) => `
    <div class="chips" style="margin:0">
      ${arr.map(([k, l]) => `<button class="chip" aria-pressed="${cur === k}" onclick="${fn}(${typeof k === "string" ? `'${k}'` : k})">${l}</button>`).join("")}
    </div>
  `;

  return shell(
    "/config",
    `
    <h2 class="sans" style="color:var(--navy);margin:0 0 16px">Configurações</h2>
    <div class="cfg">
      <div class="card">
        <h3>Aparência</h3>
        <div class="set">
          <span>Tema</span>
          ${seg([["auto", "Automático"], ["light", "Claro"], ["dark", "Escuro"]], S.theme, "th")}
        </div>
        <div class="set">
          <span>Tamanho do texto</span>
          ${seg([[0, "Normal"], [1, "Grande"]], S.big, "sz")}
        </div>
      </div>

      <div class="card">
        <h3>Conta</h3>
        <div class="set">
          <span>${esc(S.user.name)}</span>
          <button class="ghost" onclick="logout()">Sair</button>
        </div>
      </div>

      <div class="card">
        <h3>Meus dados</h3>
        <div class="set">
          <span>Favoritos (${S.fav.length})</span>
          <button class="ghost" onclick="S.fav=[];render()">Limpar</button>
        </div>
        <div class="set">
          <span>Histórico (${S.hist.length})</span>
          <button class="ghost" onclick="S.hist=[];render()">Limpar</button>
        </div>
      </div>

      <div class="card">
        <h3>Sobre</h3>
        <div class="set"><span>Módulo</span><span class="mut">Termoterapia</span></div>
        <div class="set"><span>Conteúdo</span><span class="mut">8 recursos · 10 condições</span></div>
        <div class="set"><span>Versão</span><span class="mut">Protótipo A3 (site)</span></div>
      </div>
    </div>
    `
  );
}


function tf(i) {
  S.fav = S.fav.includes(i) ? S.fav.filter(a => a !== i) : [...S.fav, i];
  render();
}

function th(t) {
  S.theme = t;
  if (t === "auto") {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = t;
  }
  render();
}

function sz(n) {
  S.big = n;
  document.documentElement.style.fontSize = n ? "18px" : "16px";
  render();
}

function tp() {
  const p = document.getElementById("pw");
  const h = p.type === "password";
  p.type = h ? "text" : "password";
  document.getElementById("tg").textContent = h ? "Ocultar" : "Mostrar";
}

function doLogin() {
  const e = document.getElementById("em").value.trim();
  const p = document.getElementById("pw").value;

  if (!e || p.length < 4) {
    document.getElementById("er").textContent = "Informe e-mail ou nome e uma senha com 4 ou mais caracteres.";
    return;
  }

  const n = e.includes("@") ? e.split("@")[0] : e;
  S.user = { name: n.replace(/\b\w/g, c => c.toUpperCase()) };
  location.hash = "#/";
}

function demo() {
  S.user = { name: "Dr. Placeholder" };
  location.hash = "#/";
}

function logout() {
  Object.assign(S, { user: null, fav: [], hist: [], cond: null, obj: null, run: false });
  location.hash = "#/login";
}



let path = "/";

function render() {
  const y = window.scrollY;
  let h = path;
  let m = h.match(/^\/ficha\/(\d+)$/);

  if (!S.user && h !== "/login") {
    location.hash = "#/login";
    return;
  }

  let html;
  if (h === "/login") html = login();
  else if (m && L[+m[1]]) html = ficha(+m[1]);
  else if (h === "/historico") html = hist();
  else if (h === "/config") html = cfg();
  else if (h === "/pacientes") html = patientsPage();
  else html = home();

  $.innerHTML = html;
  window.scrollTo(0, y);
}

function route() {
  path = location.hash.slice(1) || "/";
  const m = path.match(/^\/ficha\/(\d+)$/);

  if (S.user && path === "/login") {
    location.hash = "#/";
    return;
  }

  if (m && S.user && L[+m[1]]) {
    const i = +m[1];
    S.hist = [i, ...S.hist.filter(a => a !== i)];
  }

  render();

  if (!(m && !S.user)) {
    window.scrollTo(0, 0);
  }
}

const RECORD_KEY = "termoterapia-pacientes-v1";
let patients = [];
let storageError = "";
try {
  const saved = JSON.parse(localStorage.getItem(RECORD_KEY) || "[]");
  if (!Array.isArray(saved) || saved.some(p => typeof p.name !== "string" || !/^\d{11}$/.test(p.cpf) || !Array.isArray(p.sessions))) throw Error();
  patients = saved;
} catch (e) { storageError = "Não foi possível ler os registros locais. O salvamento está bloqueado para preservar os dados existentes."; }
let selectedCPF = "";
const drafts = {};
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cpfFormat = v => v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
function validCPF(cpf) {
  if (!/^\d{11}$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) return false;
  for (let length = 9; length <= 10; length++) {
    let sum = 0;
    for (let j = 0; j < length; j++) sum += Number(cpf[j]) * (length + 1 - j);
    const digit = (sum * 10 % 11) % 10;
    if (digit !== Number(cpf[length])) return false;
  }
  return true;
}
function persistPatients(next) {
  if (storageError) throw Error(storageError);
  localStorage.setItem(RECORD_KEY, JSON.stringify(next));
  patients = next;
}
function registerPatient() {
  const name = document.getElementById("patient-name").value.trim();
  const cpf = document.getElementById("patient-cpf").value.replace(/\D/g, "");
  const msg = document.getElementById("patient-message");
  if (name.length < 2 || !validCPF(cpf)) { msg.textContent = "Informe o nome e um CPF válido."; return; }
  if (patients.some(p => p.cpf === cpf)) { msg.textContent = "Este CPF já está cadastrado. Selecione o paciente na lista."; return; }
  try { persistPatients([...patients, {name, cpf, sessions: []}]); selectedCPF = cpf; render(); }
  catch (e) { msg.textContent = "Não foi possível salvar o cadastro. " + e.message; }
}
function stepsFor(i) {
  const r = R[L[i][1]];
  return [
    "Conferir a identificação do paciente e registrar a avaliação inicial.",
    ...r.pr.split(/\.\s*/).filter(Boolean),
    "Revisar contraindicações do recurso e da região antes de iniciar.",
    "Definir e registrar os parâmetros individualizados da aplicação.",
    "Aplicar o recurso conforme a avaliação e as orientações do equipamento.",
    "Monitorar a pele, o conforto e a resposta do paciente durante a aplicação.",
    "Reavaliar após a aplicação e registrar a resposta e eventuais intercorrências."
  ];
}
function draftFor(i) {
  const key = selectedCPF + ":" + i;
  return drafts[key] ||= {checked: stepsFor(i).map(() => false), parameters: "", notes: ""};
}
function setCheck(i, j, checked) {
  draftFor(i).checked[j] = checked;
  const counter = document.getElementById("check-progress");
  counter.textContent = `${draftFor(i).checked.filter(Boolean).length} de ${stepsFor(i).length} ações realizadas`;
}
function procedureForm(i) {
  const d = draftFor(i), steps = stepsFor(i);
  return `<section class="card" id="procedure"><h3>Checklist do procedimento</h3>
    <p class="mut">Modelo de registro a ser revisado pelo fisioterapeuta. Marque apenas as ações realizadas; itens desmarcados serão registrados como não realizados.</p>
    <label for="session-patient">Paciente</label>
    <select id="session-patient" onchange="selectedCPF=this.value;render()"><option value="">Selecione um paciente…</option>${patients.map(p => `<option value="${p.cpf}" ${selectedCPF === p.cpf ? "selected" : ""}>${esc(p.name)} · ${cpfFormat(p.cpf)}</option>`).join("")}</select>
    <a href="#/pacientes">Cadastrar paciente / consultar prontuário</a>
    <p id="check-progress" class="mut" aria-live="polite">${d.checked.filter(Boolean).length} de ${steps.length} ações realizadas</p>
    <div class="checklist">${steps.map((t,j) => `<label class="check-item"><input type="checkbox" ${d.checked[j] ? "checked" : ""} onchange="setCheck(${i},${j},this.checked)"><span>${esc(t)}</span></label>`).join("")}</div>
    <label for="session-parameters">Parâmetros efetivamente utilizados</label><textarea class="inp" id="session-parameters" rows="2" oninput="draftFor(${i}).parameters=this.value" placeholder="Registre os parâmetros definidos na avaliação">${esc(d.parameters)}</textarea>
    <label for="session-notes">Evolução e observações</label><textarea class="inp" id="session-notes" rows="3" oninput="draftFor(${i}).notes=this.value" placeholder="Resposta do paciente, ações não realizadas e intercorrências">${esc(d.notes)}</textarea>
    <p id="session-message" role="status"></p><button class="cta" onclick="saveSession(${i})">Salvar sessão no prontuário</button>
    <p class="mut">Protótipo: use dados fictícios. Registros salvos apenas neste navegador, sem sincronização ou autenticação real.</p></section>`;
}
function saveSession(i) {
  const msg = document.getElementById("session-message"), p = patients.find(p => p.cpf === selectedCPF), d = draftFor(i);
  if (!p) { msg.textContent = "Selecione um paciente antes de salvar."; return; }
  if (!d.checked.some(Boolean)) { msg.textContent = "Marque pelo menos uma ação realizada."; return; }
  const x = L[i];
  const session = {id: Date.now() + "-" + Math.random().toString(36).slice(2), date: new Date().toISOString(), professional: S.user.name, resource: R[x[1]].n, condition: C[x[0]][0], objective: x[2], steps: stepsFor(i).map((text,j) => ({text, done:d.checked[j]})), parameters:d.parameters.trim(), notes:d.notes.trim()};
  try {
    persistPatients(patients.map(a => a.cpf === p.cpf ? {...a, sessions:[session, ...a.sessions]} : a));
    delete drafts[selectedCPF + ":" + i];
    render(); document.getElementById("session-message").textContent = "Sessão salva no prontuário. Checklist limpo para um novo atendimento.";
  } catch (e) { msg.textContent = "Não foi possível salvar a sessão. " + e.message; }
}
function patientsPage() {
  const p = patients.find(p => p.cpf === selectedCPF);
  return shell("/pacientes", `<h2>Pacientes e prontuários</h2><div class="note">Demonstração: use dados fictícios. Os registros permanecem apenas neste navegador e podem ser perdidos ao limpar seus dados. O login do protótipo não restringe o acesso aos prontuários.</div>
    ${storageError ? `<p class="err" role="alert">${esc(storageError)}</p>` : ""}
    <div class="cols"><aside><form class="card" onsubmit="registerPatient();return false"><h3>Cadastrar paciente</h3><label for="patient-name">Nome completo</label><input class="inp" id="patient-name" required maxlength="150" autocomplete="off"><label for="patient-cpf">CPF</label><input class="inp" id="patient-cpf" required inputmode="numeric" maxlength="14" placeholder="000.000.000-00" autocomplete="off"><p id="patient-message" role="status"></p><button class="cta">Salvar cadastro</button></form>
    <div class="card"><h3>Pacientes cadastrados (${patients.length})</h3><label for="record-patient">Consultar prontuário</label><select id="record-patient" onchange="selectedCPF=this.value;render()"><option value="">Selecione…</option>${patients.map(a => `<option value="${a.cpf}" ${a.cpf === selectedCPF ? "selected" : ""}>${esc(a.name)} · ${cpfFormat(a.cpf)}</option>`).join("")}</select></div></aside>
    <section>${p ? `<div class="card"><h3>${esc(p.name)}</h3><p>CPF: ${cpfFormat(p.cpf)}</p><p>${p.sessions.length} sessão(ões) registrada(s)</p><a href="#/">Buscar recurso para novo atendimento →</a></div>${p.sessions.length ? p.sessions.map(session => `<article class="card"><h3>${esc(session.resource)}</h3><p class="mut">${esc(new Date(session.date).toLocaleString("pt-BR"))} · ${esc(session.professional)}</p><p>${esc(session.condition)} · ${esc(session.objective)}</p><p class="mut">${session.steps.filter(t => t.done).length} de ${session.steps.length} ações realizadas</p><div class="checklist">${session.steps.map(t => `<label class="check-item"><input type="checkbox" disabled ${t.done ? "checked" : ""}><span>${esc(t.text)} <small>(${t.done ? "realizada" : "não realizada"})</small></span></label>`).join("")}</div><p><b>Parâmetros:</b> <span class="preserve">${esc(session.parameters || "Não informados")}</span></p><p><b>Evolução:</b> <span class="preserve">${esc(session.notes || "Não informada")}</span></p></article>`).join("") : `<div class="empty">Nenhuma sessão registrada. Abra uma ficha, marque as ações e salve a sessão.</div>`}` : `<div class="empty">Cadastre ou selecione um paciente para consultar seu prontuário.</div>`}</section></div>`);
}
window.addEventListener("hashchange", route);
route();