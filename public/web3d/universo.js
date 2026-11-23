/* universo.js — Fondo "universo" para emeste.cl
   Cielo profundo con nebulosas, tres capas de estrellas con parallax (scroll y mouse),
   un resplandor de luz en el centro y estrellas fugaces ocasionales.
   Va detrás del canvas 3D (que es transparente). Sin dependencias. */
(() => {
  const lienzo = document.createElement('canvas');
  lienzo.id = 'universo';
  lienzo.setAttribute('aria-hidden', 'true');
  Object.assign(lienzo.style, { position: 'fixed', inset: '0', width: '100%', height: '100%', zIndex: '-2', pointerEvents: 'none' });
  document.body.prepend(lienzo);
  const ctx = lienzo.getContext('2d');
  const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const claro = document.documentElement.getAttribute('data-tema') === 'claro';

  let W = 0, H = 0, dpr = 1;
  let estrellas = [], nebulosas = [], fugaces = [];
  let scrollY = 0, mx = 0, my = 0, mxS = 0, myS = 0;

  const rnd = (a, b) => a + Math.random() * (b - a);

  // Capas: profundidad 0 = lejana (casi quieta), 1 = cercana (se mueve más)
  const CAPAS = [
    { prof: 0.15, tam: [0.4, 0.9], brillo: [0.25, 0.55], dens: 0.00022 },
    { prof: 0.45, tam: [0.7, 1.4], brillo: [0.4, 0.8], dens: 0.00009 },
    { prof: 0.9,  tam: [1.1, 2.1], brillo: [0.6, 1.0], dens: 0.00003 },
  ];
  const TONOS = claro
    ? ['176,125,34', '196,146,62', '160,112,30', '214,170,90', '205,110,95']   // dorados cálidos: se ven sobre blanco
    : ['255,246,224', '255,246,224', '243,208,137', '255,236,200', '203,116,79'];
  // Nebulosas del modo claro: auroras suaves (oro, durazno, lavanda, celeste) sobre el blanco
  const AURORAS = ['243,208,137', '248,200,170', '214,198,242', '190,218,244', '243,208,137'];

  function crear() {
    estrellas = [];
    for (const capa of CAPAS) {
      const n = Math.round(W * H * capa.dens);
      for (let i = 0; i < n; i++) {
        estrellas.push({
          x: Math.random() * W, y: Math.random() * H,
          r: rnd(...capa.tam), b: rnd(...capa.brillo), prof: capa.prof,
          fase: Math.random() * Math.PI * 2, vel: rnd(0.4, 1.6),
          tono: Math.random() < 0.08 ? TONOS[4] : TONOS[(Math.random() * 4) | 0],
        });
      }
    }
    // Nebulosas: manchas grandes y suaves (azul profundo, violeta, magenta de la marca)
    nebulosas = []; // modo oscuro: fondo negro puro, sin nebulosas
    if (claro) {
      for (let i = 0; i < 6; i++) {
        nebulosas.push({ x: rnd(0.05, 0.95), y: rnd(0.05, 0.95), r: rnd(0.35, 0.6), c: AURORAS[i % AURORAS.length], a: rnd(0.22, 0.34), prof: rnd(0.2, 0.7) });
      }
    }
  }

  function medir() {
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    lienzo.width = Math.round(W * dpr); lienzo.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    crear();
  }

  function fugaz() {
    fugaces.push({
      x: rnd(0.1, 0.9) * W, y: rnd(0, 0.45) * H,
      vx: rnd(5, 8) * (Math.random() < 0.5 ? 1 : -1), vy: rnd(2, 4), vida: 1,
    });
  }

  function dibujar(t) {
    const tt = t / 1000;
    mxS += (mx - mxS) * 0.04; myS += (my - myS) * 0.04;

    // Fondo: del azul casi negro arriba al violeta oscuro abajo
    const g = ctx.createLinearGradient(0, 0, 0, H);
    if (claro) { g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#fbf8f1'); }
    else { g.addColorStop(0, '#000000'); g.addColorStop(1, '#000000'); }
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // Nebulosas (con deriva lenta y parallax)
    ctx.globalCompositeOperation = claro ? 'source-over' : 'lighter';
    for (const n of nebulosas) {
      const px = n.x * W + mxS * 40 * n.prof * 4 + Math.sin(tt * 0.05 + n.x * 9) * 30;
      const py = n.y * H - scrollY * n.prof * 0.6 + myS * 30 * n.prof * 4 + Math.cos(tt * 0.04 + n.y * 7) * 30;
      const r = n.r * Math.max(W, H);
      const rg = ctx.createRadialGradient(px, py, 0, px, py, r);
      rg.addColorStop(0, `rgba(${n.c},${n.a})`);
      rg.addColorStop(0.5, `rgba(${n.c},${n.a * 0.35})`);
      rg.addColorStop(1, `rgba(${n.c},0)`);
      ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
    }

    // Luz central: el "todo" detrás del logo, respira muy despacio
    const resp = 0.5 + 0.5 * Math.sin(tt * 0.35);
    const cx = W * 0.5 + mxS * 18, cy = H * 0.22 - scrollY * 0.05 + myS * 12;
    const rl = Math.min(W, H) * (0.42 + resp * 0.06);
    const lg = ctx.createRadialGradient(cx, cy, 0, cx, cy, rl);
    lg.addColorStop(0, `rgba(243,208,137,${0.06 + resp * 0.02})`);
    lg.addColorStop(0.25, `rgba(211,165,95,${0.06 + resp * 0.02})`);
    lg.addColorStop(1, 'rgba(211,165,95,0)');
    if (claro) { ctx.fillStyle = lg; ctx.fillRect(0, 0, W, H); } // modo oscuro: luz central desactivada (fondo negro puro)

    // Estrellas
    for (const s of estrellas) {
      const y0 = s.y - scrollY * s.prof * 0.35;
      const y = ((y0 % H) + H) % H;
      const x = s.x + mxS * 30 * s.prof;
      const parp = reducido ? 1 : 0.65 + 0.35 * Math.sin(tt * s.vel + s.fase);
      const a = claro ? Math.min(1, s.b * parp * 0.9) : s.b * parp;
      ctx.fillStyle = `rgba(${s.tono},${a})`;
      ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.2832); ctx.fill();
      if (s.r > 1.6) { // las más cercanas llevan un halo suave
        ctx.fillStyle = `rgba(${s.tono},${a * 0.12})`;
        ctx.beginPath(); ctx.arc(x, y, s.r * 4, 0, 6.2832); ctx.fill();
      }
    }

    // Estrellas fugaces
    for (let i = fugaces.length - 1; i >= 0; i--) {
      const f = fugaces[i];
      f.x += f.vx; f.y += f.vy; f.vida -= 0.014;
      if (f.vida <= 0) { fugaces.splice(i, 1); continue; }
      const lg2 = ctx.createLinearGradient(f.x, f.y, f.x - f.vx * 9, f.y - f.vy * 9);
      lg2.addColorStop(0, claro ? `rgba(196,146,62,${f.vida})` : `rgba(255,240,205,${f.vida})`); lg2.addColorStop(1, claro ? 'rgba(196,146,62,0)' : 'rgba(255,255,255,0)');
      ctx.strokeStyle = lg2; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(f.x - f.vx * 9, f.y - f.vy * 9); ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';

    if (!reducido) requestAnimationFrame(dibujar);
  }

  addEventListener('resize', medir);
  addEventListener('scroll', () => { scrollY = window.scrollY; if (reducido) dibujar(0); }, { passive: true });
  addEventListener('pointermove', (e) => { mx = e.clientX / W - 0.5; my = e.clientY / H - 0.5; }, { passive: true });

  medir();
  if (reducido) dibujar(0);
  else {
    requestAnimationFrame(dibujar);
    setInterval(() => { if (!document.hidden && Math.random() < 0.55) fugaz(); }, 5200);
  }
})();
