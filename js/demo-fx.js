/* Shared #demo section effect (map reveal, pixel field, cursor). Used by pages that do not carry it in their own component. */
(function(){
function init(sel){
    const sec = document.querySelector(sel || '#demo');
    if (!sec || sec._fx) return;
    sec._fx = true;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sharp = sec.querySelector('.demo-map-sharp'), dim = sec.querySelector('.demo-dim'), cur = sec.querySelector('.demo-cursor');
    const cv = sec.querySelector('.demo-px'), ctx = cv && cv.getContext('2d');
    const PITCH = 10, SZ = 3, R = 130, PUSH = 18;
    let pts = [], W = 0, H = 0, mx = -9999, my = -9999, raf = 0, loop = 0, sampler = null, shock = null;
    const mapImg = new Image();
    mapImg.src = 'assets/demo-map-bg.png';
    const makeSampler = () => {
      try {
        const iw = mapImg.naturalWidth, ih = mapImg.naturalHeight;
        if (!iw) return;
        const k = Math.min(1, 900 / iw), oc = document.createElement('canvas');
        oc.width = Math.round(iw * k); oc.height = Math.round(ih * k);
        const oct = oc.getContext('2d', { willReadFrequently: true });
        oct.drawImage(mapImg, 0, 0, oc.width, oc.height);
        sampler = { w: oc.width, h: oc.height, iw: iw, ih: ih, d: oct.getImageData(0, 0, oc.width, oc.height).data };
      } catch (err) { sampler = null; }
    };
    // true where the map shows city/roads rather than water
    const isLand = (ix, iy) => {
      if (!sampler) return true;
      const px = Math.round(ix / sampler.iw * sampler.w), py = Math.round(iy / sampler.ih * sampler.h);
      if (px < 0 || py < 0 || px >= sampler.w || py >= sampler.h) return false;
      const i = (py * sampler.w + px) * 4, r = sampler.d[i], g = sampler.d[i + 1], b = sampler.d[i + 2];
      return !(b - r > 20 && r < 78);
    };
    const draw = () => {
      raf = 0;
      const t = performance.now() / 1000;
      ctx.clearRect(0, 0, W, H);
      const st = shock ? (performance.now() - shock.t0) / 900 : 2;
      if (st >= 1) shock = null;
      for (const p of pts) {
        let x = p.x, y = p.y, sz = SZ;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < R) {
          const k = 1 - d / R, dd = d || 1;
          x += (dx / dd) * PUSH * k; y += (dy / dd) * PUSH * k;
          sz = SZ + k * 1.5;
        }
        let blast = 0;
        if (shock) {
          const bx = p.x - shock.x, by = p.y - shock.y, bd = Math.hypot(bx, by) || 0.01;
          if (bd < 260) {
            const env = (1 - bd / 260) * Math.pow(1 - st, 2) * Math.sin(Math.min(st / .18, 1) * Math.PI / 2);
            blast = env;
            x += (bx / bd) * 42 * env; y += (by / bd) * 42 * env;
            sz = SZ + env * 2.4;
          }
        }
        if (p.s) {
          const pulse = p.p ? .38 + .42 * (0.5 + 0.5 * Math.sin(t * 1.6 + p.ph)) : .34;
          ctx.fillStyle = 'rgba(42,223,180,' + Math.min(1, pulse + blast * .6).toFixed(3) + ')';
        } else if (blast > .01) {
          ctx.fillStyle = 'rgba(42,223,180,' + Math.min(.9, .13 + blast * .8).toFixed(3) + ')';
        } else {
          ctx.fillStyle = 'rgba(170,196,190,.13)';
        }
        ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
      }
      if (loop) raf = requestAnimationFrame(draw);
    };
    const build = () => {
      const r = sec.getBoundingClientRect();
      W = Math.round(r.width); H = Math.round(r.height);
      if (!W || !H) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // map section coords onto the cover-sized background (inset -30px)
      const lw = W + 60, lh = H + 60, iw = (sampler && sampler.iw) || 1672, ih = (sampler && sampler.ih) || 941;
      const s = Math.max(lw / iw, lh / ih), dw = iw * s, dh = ih * s;
      const ox = -30 + (lw - dw) / 2, oy = -30 + (lh - dh) / 2;
      pts = [];
      for (let y = PITCH / 2; y < H; y += PITCH)
        for (let x = PITCH / 2; x < W; x += PITCH) {
          const land = isLand((x - ox) / s, (y - oy) / s);
          const spark = land && Math.random() < .1;
          pts.push({ x: x, y: y, s: spark, p: spark && Math.random() < .35, ph: Math.random() * 6.28 });
        }
      if (!raf) raf = requestAnimationFrame(draw);
    };
    if (ctx) {
      if (mapImg.complete) { makeSampler(); build(); }
      else mapImg.addEventListener('load', () => { makeSampler(); build(); });
      build();
      if (window.ResizeObserver) new ResizeObserver(build).observe(sec);
      else addEventListener('resize', build);
      if (!reduced && window.IntersectionObserver) {
        new IntersectionObserver(en => {
          loop = en[0].isIntersecting ? 1 : 0;
          if (loop && !raf) raf = requestAnimationFrame(draw);
        }, { threshold: 0 }).observe(sec);
      }
    }
    if (reduced) return;
    sec.addEventListener('mousemove', e => {
      if (window.innerWidth <= 880) return; 
      const sr = sec.getBoundingClientRect();
      const x = e.clientX - sr.left, y = e.clientY - sr.top;
      if (cur) {
        cur.style.transform = 'translate(' + x.toFixed(0) + 'px,' + y.toFixed(0) + 'px) translate(-50%,-100%)';
        cur.style.opacity = '1';
      }
      if (sharp) {
        const r = sharp.getBoundingClientRect();
        const m = 'radial-gradient(circle 450px at ' + (e.clientX - r.left).toFixed(0) + 'px ' + (e.clientY - r.top).toFixed(0) + 'px,#000 0%,rgba(0,0,0,.55) 55%,transparent 100%)';
        sharp.style.webkitMaskImage = m; sharp.style.maskImage = m;
        sharp.style.opacity = '1';
      }
      if (dim) {
        const rd = dim.getBoundingClientRect();
        const dm = 'radial-gradient(circle 450px at ' + (e.clientX - rd.left).toFixed(0) + 'px ' + (e.clientY - rd.top).toFixed(0) + 'px,rgba(0,0,0,.45) 0%,rgba(0,0,0,.75) 55%,#000 100%)';
        dim.style.webkitMaskImage = dm; dim.style.maskImage = dm;
      }
      if (ctx) { mx = x; my = y; if (!raf) raf = requestAnimationFrame(draw); }
    });
    sec.addEventListener('mouseleave', () => {
      if (cur) cur.style.opacity = '0';
      if (sharp) sharp.style.opacity = '0';
      if (dim) { dim.style.webkitMaskImage = ''; dim.style.maskImage = ''; }
      if (ctx) { mx = my = -9999; if (!raf) raf = requestAnimationFrame(draw); }
    });
    sec.addEventListener('pointerdown', e => {
      if (cur) { cur.classList.remove('hop'); void cur.offsetWidth; cur.classList.add('hop'); }
      if (ctx) {
        const sr = sec.getBoundingClientRect();
        shock = { x: e.clientX - sr.left, y: e.clientY - sr.top, t0: performance.now() };
        if (!raf) raf = requestAnimationFrame(draw);
      }
    });
}
var tries=0,t=setInterval(function(){
  var sec=document.querySelector('#demo');
  if(sec&&sec.querySelector('.demo-px')&&!sec._fx){init('#demo');clearInterval(t);}
  if(++tries>100)clearInterval(t);
},300);
})();
