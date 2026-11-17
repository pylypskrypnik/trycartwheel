(function () {
  'use strict';

  var root = document.getElementById('root');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== Theme toggle ===== */
  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-cw-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-cw-theme', next);
    });
  }

  /* ===== Mobile menu ===== */
  var navToggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      mobileMenu.hidden = !isOpen;
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        mobileMenu.hidden = true;
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ===== Live order counter ===== */
  var orders = 1284;
  var orderEls = document.querySelectorAll('.order-count');
  function paintOrders() {
    var formatted = orders.toLocaleString('en-US');
    orderEls.forEach(function (el) { el.textContent = formatted; });
  }
  paintOrders();
  setInterval(function () {
    orders += Math.floor(Math.random() * 3);
    paintOrders();
  }, 2600);

  /* ===== Case studies marquee (auto-scrolling, pauses on hover) ===== */
  var caseMarquee = document.getElementById('js-case-marquee');
  var caseTrack = document.getElementById('js-case-track');
  if (caseMarquee && caseTrack && !prefersReducedMotion) {
    var ccUniq = Array.prototype.slice.call(caseTrack.children);
    if (ccUniq.length >= 2 && window.innerWidth > 640) {
      var ccClones = ccUniq.map(function (n) { return n.cloneNode(true); });
      ccClones.forEach(function (n) { caseTrack.appendChild(n); });
      var ccQi = 0, ccX = 0, ccLast = performance.now(), ccPaused = false;
      caseMarquee.addEventListener('mouseenter', function () { ccPaused = true; });
      caseMarquee.addEventListener('mouseleave', function () { ccPaused = false; });
      var CC_SPEED = 42;
      var ccGapOf = function (el) { return parseFloat(getComputedStyle(el).marginRight) || 0; };
      var ccStep = function (now) {
        if (!caseTrack.isConnected) return;
        var dt = Math.min((now - ccLast) / 1000, 0.1); ccLast = now;
        if (window.innerWidth <= 640) { caseTrack.style.transform = ''; requestAnimationFrame(ccStep); return; }
        if (!ccPaused) {
          ccX -= CC_SPEED * dt;
          var first = caseTrack.firstElementChild;
          while (first && ccX + first.offsetWidth + ccGapOf(first) < 0) {
            ccX += first.offsetWidth + ccGapOf(first);
            caseTrack.removeChild(first);
            first = caseTrack.firstElementChild;
          }
          while (caseTrack.scrollWidth + ccX < caseMarquee.offsetWidth + 230) {
            caseTrack.appendChild(ccUniq[ccQi % ccUniq.length].cloneNode(true));
            ccQi++;
          }
          caseTrack.style.transform = 'translateX(' + ccX + 'px)';
        }
        requestAnimationFrame(ccStep);
      };
      requestAnimationFrame(ccStep);
    }
  }
  /* mobile: dot nav + drag-scroll for the case marquee */
  var caseDotsEl = document.getElementById('js-case-dots');
  if (caseMarquee && caseTrack && caseDotsEl && matchMedia('(max-width:640px)').matches) {
    var ccCards = Array.prototype.slice.call(caseTrack.querySelectorAll('.case-card'));
    if (ccCards.length) {
      ccCards.forEach(function (c, i) {
        var b = document.createElement('button');
        b.className = 'cd-dot';
        b.setAttribute('aria-label', 'Case study ' + (i + 1));
        b.addEventListener('click', function () { caseMarquee.scrollTo({ left: c.offsetLeft - 18, behavior: 'smooth' }); });
        caseDotsEl.appendChild(b);
      });
      var ccDots = Array.prototype.slice.call(caseDotsEl.querySelectorAll('.cd-dot'));
      var ccUpd = function () {
        var w = ccCards[0].offsetWidth + 12;
        var i = Math.max(0, Math.min(ccCards.length - 1, Math.round(caseMarquee.scrollLeft / w)));
        ccDots.forEach(function (b, j) { b.classList.toggle('on', j === i); });
      };
      caseMarquee.addEventListener('scroll', function () { requestAnimationFrame(ccUpd); }, { passive: true });
      ccUpd();
    }
  }

  /* ===== Homepage testimonials carousel ===== */
  var tCarousel = document.getElementById('js-testimonials');
  var tDotsEl = document.getElementById('js-t-dots');
  if (tCarousel && tDotsEl) {
    var tSlides = Array.prototype.slice.call(tCarousel.querySelectorAll('.t-slide'));
    var tIdx = 0, tHover = false;
    var tDots = tSlides.map(function (_, n) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 't-dot' + (n === 0 ? ' on' : '');
      dot.setAttribute('aria-label', 'Testimonial ' + (n + 1));
      dot.addEventListener('click', function () { tIdx = n; renderT(); });
      tDotsEl.appendChild(dot);
      return dot;
    });
    function renderT() {
      tSlides.forEach(function (s, i) { s.classList.toggle('active', i === tIdx); });
      tDots.forEach(function (d, i) { d.classList.toggle('on', i === tIdx); });
    }
    var tPrevBtn = tCarousel.querySelector('.t-prev');
    var tNextBtn = tCarousel.querySelector('.t-next');
    if (tPrevBtn) tPrevBtn.addEventListener('click', function () { tIdx = (tIdx - 1 + tSlides.length) % tSlides.length; renderT(); });
    if (tNextBtn) tNextBtn.addEventListener('click', function () { tIdx = (tIdx + 1) % tSlides.length; renderT(); });
    tCarousel.addEventListener('mouseenter', function () { tHover = true; });
    tCarousel.addEventListener('mouseleave', function () { tHover = false; });
    setInterval(function () {
      if (tHover) return;
      tIdx = (tIdx + 1) % tSlides.length;
      renderT();
    }, 5500);
  }

  /* ===== Homepage catering spotlight: hover rows swap image, ticks auto-progress ===== */
  var catRowsEl = document.getElementById('js-cat-rows');
  if (catRowsEl) {
    var catRows = Array.prototype.slice.call(catRowsEl.querySelectorAll('.cat-row'));
    var catLayers = Array.prototype.slice.call(document.querySelectorAll('.cat-img-layer'));
    catRows.forEach(function (row) {
      row.addEventListener('mouseenter', function () {
        var i = row.getAttribute('data-i');
        catRows.forEach(function (r) { r.classList.toggle('active', r === row); });
        catLayers.forEach(function (l) { l.classList.toggle('active', l.getAttribute('data-i') === i); });
      });
    });
    var catTicks = Array.prototype.slice.call(document.querySelectorAll('#js-cat-ticks .cat-tick'));
    if (catTicks.length && !prefersReducedMotion) {
      var catStep = 0;
      setInterval(function () {
        catStep = (catStep + 1) % 6;
        catTicks.forEach(function (t, i) { t.classList.toggle('done', catStep > i); });
      }, 1400);
    } else {
      catTicks.forEach(function (t) { t.classList.add('done'); });
    }
  }

  /* ===== Scroll-reveal: how it works ===== */
  var stepsGrid = document.getElementById('js-steps-grid');
  if (stepsGrid) {
    if (prefersReducedMotion) {
      stepsGrid.querySelectorAll('.step-card').forEach(function (el) { el.classList.add('in'); });
    } else {
      var stepsIO = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          stepsGrid.querySelectorAll('.step-card').forEach(function (el) { el.classList.add('in'); });
          stepsIO.disconnect();
        }
      }, { threshold: 0.25 });
      stepsIO.observe(stepsGrid);
    }
  }

  /* ===== Scroll-reveal: thought leadership ===== */
  var tlGrid = document.getElementById('js-tl-grid');
  if (tlGrid) {
    if (prefersReducedMotion) {
      tlGrid.classList.add('in');
    } else {
      var tlIO = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          tlGrid.classList.add('in');
          tlIO.disconnect();
        }
      }, { threshold: 0.2 });
      tlIO.observe(tlGrid);
    }
  }

  /* ===== Catering page: testimonial carousel ===== */
  var testimonials = [
    { logo: 'assets/logo-pfchangs.svg', photo: 'assets/testi-barnett.jpg', quote: '“Cartwheel allows us to handle the highest priority orders with self-delivery, ensuring the experience is seamless, delivered with P.F. Chang’s hospitality and encouraging the customer to return for repeat deliveries through our native ordering platforms.”', name: 'Candice Barnett', role: 'VP Off-Premises Dining, P.F. Chang’s' },
    { logo: 'assets/logo-jasons-deli.svg', photo: 'assets/testi-schuster2.png', quote: '“By implementing Cartwheel’s unified delivery management platform, we’ve streamlined our operations, reduced the load on team members, and enhanced our ability to ensure the best, most efficient customer service across all ordering channels.”', name: 'Amy Schuster', role: 'Vice President of IT, Jason’s Deli' },
    { logo: 'assets/logo-giordanos.png', photo: 'assets/testi-scarpino-giordanos.png', quote: '“Chicago’s love for pizza and football runs deep, and peak demand periods like Super Bowl weekend put real pressure on our operations. Cartwheel gives our store teams the control they need to make smart delivery decisions in real time while ensuring that every delivery feels like Giordano’s, not a generic transaction.”', name: 'Nick Scarpino', role: 'CEO, Giordano’s' },
    { logo: 'assets/logo-portillos.svg', photo: 'assets/testi-osanloo.jpg', quote: '“With more than 60 Portillo’s locations nationwide and the highest average unit sales volumes in the fast-casual industry, we have a lot of deliveries to manage. It’s important that our brand is well-represented. Our experience with Cartwheel has been so positive that we invested in the company so they can further develop services with brands in mind.”', name: 'Michael Osanloo', role: 'CEO, Portillo’s' },
    { logo: 'assets/logo-hungry-howies.png', quote: '“We continue to see real value in maintaining a direct relationship with our guests and investing in our in-house delivery capabilities. Third-party delivery provides important additional reach and flexibility, and Cartwheel helps us bring these approaches together while maintaining a consistent guest experience as we modernize our delivery operations.”', name: 'Moe Shrikian', role: 'Executive Vice President and General Counsel, Hungry Howie’s' },
    { logo: 'assets/logo-potbelly.png', quote: '“With Cartwheel, our delivery program is as customizable as our menu. Since implementing Cartwheel’s tools, Potbelly has been able to offer faster, more efficient delivery to our customers from more than 400 locations nationwide.”', name: 'Sam Martinez', role: 'Business Systems Manager, Potbelly' },
    { logo: 'assets/logo-portillos.svg', photo: 'assets/testi-northway.jpg', quote: '“Cartwheel allowed us to adjust our order volume to driver availability, eliminating the worry of having enough drivers to maintain delivery quality.”', name: 'Dino Northway', role: 'Senior Manager Off-Premise Dining, Portillo’s' }
  ];

  var tcard = document.getElementById('js-tcard');
  var tdotsEl = document.getElementById('js-tdots');
  if (tcard && tdotsEl) {
    var ti = 0;
    var tdots = testimonials.map(function (_, n) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'case-dot';
      dot.setAttribute('aria-label', 'Testimonial ' + (n + 1));
      dot.addEventListener('click', function () { ti = n; renderT(); });
      tdotsEl.appendChild(dot);
      return dot;
    });
    function renderT() {
      var t = testimonials[ti];
      tcard.innerHTML =
        (t.logo ? '<img src="' + t.logo + '" alt="" class="cat-tcard-logo">' : '') +
        '<i class="ti ti-quote cat-tcard-mark" aria-hidden="true"></i>' +
        '<p class="cat-tcard-quote">' + t.quote + '</p>' +
        '<div class="cat-tcard-attr">' +
          '<div class="cat-tcard-avatar">' + (t.photo ? '<img src="' + t.photo + '" alt="">' : '<i class="ti ti-building-store" aria-hidden="true"></i>') + '</div>' +
          '<div><div class="cat-tcard-name">' + t.name + '</div><div class="cat-tcard-role">' + t.role + '</div></div>' +
        '</div>';
      tdots.forEach(function (d, n) { d.classList.toggle('active', n === ti); });
    }
    var tprev = document.querySelector('.cat-tprev');
    var tnext = document.querySelector('.cat-tnext');
    if (tprev) tprev.addEventListener('click', function () { ti = (ti - 1 + testimonials.length) % testimonials.length; renderT(); });
    if (tnext) tnext.addEventListener('click', function () { ti = (ti + 1) % testimonials.length; renderT(); });
    renderT();
  }

  /* ===== FAQ accordion (smooth height animation) ===== */
  var faqRoot = document.getElementById('js-faq');
  if (faqRoot) {
    var faqItems = Array.prototype.slice.call(faqRoot.querySelectorAll('.cat-faq-item'));
    var faqReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function faqOpen(item) {
      var body = item.querySelector('.cat-faq-a');
      item.classList.add('is-open');
      if (faqReduced || item._busy) { body.style.display = 'block'; return; }
      item._busy = true;
      body.style.display = 'block';
      body.style.overflow = 'hidden';
      body.style.height = '0px';
      body.style.opacity = '0';
      var full = body.scrollHeight;
      requestAnimationFrame(function () {
        body.style.transition = 'height .42s cubic-bezier(.22,.7,.2,1),opacity .3s ease';
        body.style.height = full + 'px';
        body.style.opacity = '1';
        setTimeout(function () {
          body.style.transition = ''; body.style.height = ''; body.style.opacity = ''; body.style.overflow = '';
          item._busy = false;
        }, 440);
      });
    }

    function faqClose(item) {
      var body = item.querySelector('.cat-faq-a');
      item.classList.remove('is-open');
      if (faqReduced || item._busy) { body.style.display = 'none'; return; }
      item._busy = true;
      body.style.overflow = 'hidden';
      body.style.height = body.scrollHeight + 'px';
      body.style.opacity = '1';
      requestAnimationFrame(function () {
        body.style.transition = 'height .38s cubic-bezier(.32,.06,.24,1),opacity .3s ease';
        body.style.height = '0px';
        body.style.opacity = '0';
        setTimeout(function () {
          body.style.display = 'none';
          body.style.transition = ''; body.style.height = ''; body.style.opacity = ''; body.style.overflow = '';
          item._busy = false;
        }, 390);
      });
    }

    faqItems.forEach(function (item) {
      item.querySelector('.cat-faq-q').addEventListener('click', function () {
        var wasOpen = item.classList.contains('is-open');
        faqItems.forEach(function (el) { if (el !== item && el.classList.contains('is-open')) faqClose(el); });
        if (wasOpen) faqClose(item); else faqOpen(item);
      });
    });
  }

  /* ===== Hybrid Delivery engine (ecd): mouse-lens map reveal ===== */
  (function () {
    var sec = document.querySelector('.ecd-sec');
    var sharp = sec && sec.querySelector('.ecd-sharp');
    var dim = sec && sec.querySelector('.ecd-dim');
    if (!sec || !sharp || prefersReducedMotion) return;
    sec.addEventListener('mousemove', function (e) {
      if (window.innerWidth <= 880) return;
      var r = sharp.getBoundingClientRect();
      var m = 'radial-gradient(circle 250px at ' + (e.clientX - r.left).toFixed(0) + 'px ' + (e.clientY - r.top).toFixed(0) + 'px,rgba(0,0,0,.5) 0%,rgba(0,0,0,.32) 55%,rgba(0,0,0,0) 100%)';
      sharp.style.webkitMaskImage = m; sharp.style.maskImage = m;
      sharp.style.opacity = '1';
      if (dim) {
        var rd = dim.getBoundingClientRect();
        var md = 'radial-gradient(circle 250px at ' + (e.clientX - rd.left).toFixed(0) + 'px ' + (e.clientY - rd.top).toFixed(0) + 'px,rgba(0,0,0,.5) 0%,rgba(0,0,0,.68) 55%,#000 100%)';
        dim.style.webkitMaskImage = md; dim.style.maskImage = md;
      }
    });
    sec.addEventListener('mouseleave', function () {
      sharp.style.opacity = '0';
      if (dim) { dim.style.webkitMaskImage = ''; dim.style.maskImage = ''; }
    });
  })();

  /* ===== Hybrid Delivery engine (ecd): animated connector lines + traveling dots ===== */
  (function () {
    var stage = document.querySelector('.ecd-stage');
    var svg = stage && stage.querySelector('.ecd-net');
    var gear = stage && stage.querySelector('.ecd-gear');
    if (!svg || !gear) return;
    var raf = null, t = null;
    var paint = function () {
      svg.innerHTML = '';
      svg.removeAttribute('viewBox');
      var SB = stage.getBoundingClientRect();
      var rel = function (el) { var r = el.getBoundingClientRect(); return { x: r.left - SB.left, y: r.top - SB.top, w: r.width, h: r.height }; };
      var g = rel(gear);
      var core = { x: g.x + g.w / 2, y: g.y + g.h / 2, r: g.w / 2 + 10 };
      var EL = 9;
      var mkPath = function (d, stroke) {
        var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('d', d);
        p.setAttribute('fill', 'none');
        p.setAttribute('stroke', stroke || 'rgba(42,223,180,.4)');
        p.setAttribute('stroke-width', '1.4');
        p.setAttribute('stroke-linecap', 'round');
        svg.appendChild(p);
        return p;
      };
      var plates = Array.prototype.map.call(stage.querySelectorAll('.ecd-src > div'), function (el) {
        var z = rel(el);
        return { cx: z.x + z.w / 2, bottom: z.y + z.h, el: el };
      });
      var busTop = Math.max.apply(null, plates.map(function (p) { return p.bottom; })) + 14;
      var busBottom = core.y - core.r - 12;
      var order = plates.map(function (p, i) { return i; }).sort(function (a, b) { return Math.abs(plates[a].cx - core.x) - Math.abs(plates[b].cx - core.x); });
      var step = order.length > 1 ? (busBottom - busTop) / (order.length - 1) : 0;
      order.forEach(function (idx, rank) { plates[idx].bus = busTop + rank * step; });
      ['l', 'r'].forEach(function (k) {
        var dir = k === 'l' ? -1 : 1;
        plates.filter(function (p) { return (p.cx < core.x ? 'l' : 'r') === k && Math.abs(p.cx - core.x) > 6; })
          .sort(function (a, b) { return Math.abs(a.cx - core.x) - Math.abs(b.cx - core.x); })
          .forEach(function (p, i) { p.off = dir * (core.r * 0.28 + i * core.r * 0.3); });
      });
      var inPaths = plates.map(function (p) {
        if (Math.abs(p.cx - core.x) <= 6) return mkPath('M' + p.cx + ',' + p.bottom + ' V' + (core.y - core.r));
        var dir = p.cx < core.x ? 1 : -1;
        var tx = core.x + p.off;
        var ey = core.y - Math.sqrt(Math.max(1, core.r * core.r - p.off * p.off));
        return mkPath('M' + p.cx + ',' + p.bottom + ' V' + (p.bus - EL) +
          ' Q' + p.cx + ',' + p.bus + ' ' + (p.cx + dir * EL) + ',' + p.bus +
          ' H' + (tx - dir * EL) +
          ' Q' + tx + ',' + p.bus + ' ' + tx + ',' + (p.bus + EL) +
          ' V' + ey);
      });
      var cardEls = Array.prototype.slice.call(stage.querySelectorAll('.ecd-out > div'));
      var cards = cardEls.map(function (el) {
        var z = rel(el);
        return { cx: z.x + z.w / 2, top: z.y, el: el };
      });
      var mkHalo = function (el, i) {
        Array.prototype.forEach.call(el.querySelectorAll('.ecd-halo'), function (n) { n.remove(); });
        var b = el.getBoundingClientRect(), R = 9, w = b.width, h = b.height;
        var sv = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        sv.setAttribute('class', 'ecd-halo');
        sv.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
        sv.setAttribute('preserveAspectRatio', 'none');
        sv.setAttribute('aria-hidden', 'true');
        var col = i === 0 ? '#2ADFB4' : '#FFFFFF';
        var half = function (dir) {
          var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          var d = dir > 0
            ? 'M' + (w / 2) + ',0 H' + (w - R) + ' Q' + w + ',0 ' + w + ',' + R + ' V' + (h - R) + ' Q' + w + ',' + h + ' ' + (w - R) + ',' + h + ' H' + (w / 2)
            : 'M' + (w / 2) + ',0 H' + R + ' Q0,0 0,' + R + ' V' + (h - R) + ' Q0,' + h + ' ' + R + ',' + h + ' H' + (w / 2);
          p.setAttribute('d', d);
          p.setAttribute('fill', 'none');
          p.setAttribute('stroke', col);
          p.setAttribute('stroke-width', '2');
          p.setAttribute('stroke-linecap', 'round');
          p.style.opacity = '0';
          p.style.filter = 'drop-shadow(0 0 6px ' + (i === 0 ? 'rgba(42,223,180,.8)' : 'rgba(255,255,255,.6)') + ')';
          sv.appendChild(p);
          return p;
        };
        el.appendChild(sv);
        var a = half(1), b2 = half(-1);
        var L = a.getTotalLength();
        [a, b2].forEach(function (p) { p.setAttribute('stroke-dasharray', '46 ' + L); p.setAttribute('stroke-dashoffset', '0'); });
        return function () {
          [a, b2].forEach(function (p) {
            p.getAnimations().forEach(function (an) { an.cancel(); });
            p.animate(
              [{ strokeDashoffset: 46, opacity: 0 }, { opacity: 1, offset: 0.15 }, { strokeDashoffset: -L, opacity: 0 }],
              { duration: 1100, easing: 'cubic-bezier(.3,.6,.3,1)' }
            );
          });
        };
      };
      var halo = cardEls.map(function (el, i) { try { return mkHalo(el, i); } catch (e) { return null; } });
      var lvl = core.y + core.r + Math.max(18, (Math.min.apply(null, cards.map(function (c) { return c.top; })) - (core.y + core.r)) / 2);
      var outPaths = cards.map(function (c, ci) {
        var wcol = ci === 0 ? null : 'rgba(255,255,255,.2)';
        var side = Math.abs(c.cx - core.x) <= 6 ? 0 : (c.cx > core.x ? 1 : -1);
        var off = side * core.r * 0.3;
        var sx = core.x + off;
        var sy = core.y + Math.sqrt(Math.max(1, core.r * core.r - off * off));
        if (!side || Math.abs(c.cx - sx) < 2 * EL) {
          return mkPath('M' + sx + ',' + sy + ' V' + lvl + ' H' + c.cx + ' V' + c.top, wcol);
        }
        var dir = c.cx > sx ? 1 : -1;
        return mkPath('M' + sx + ',' + sy + ' V' + (lvl - EL) +
          ' Q' + sx + ',' + lvl + ' ' + (sx + dir * EL) + ',' + lvl +
          ' H' + (c.cx - dir * EL) +
          ' Q' + c.cx + ',' + lvl + ' ' + c.cx + ',' + (lvl + EL) +
          ' V' + c.top, wcol);
      });
      if (raf) cancelAnimationFrame(raf);
      if (prefersReducedMotion) return;
      var dot = function (path, white) {
        var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('r', '5');
        c.setAttribute('opacity', '0');
        try { var p0 = path.getPointAtLength(0); c.setAttribute('cx', p0.x); c.setAttribute('cy', p0.y); } catch (e) {}
        c.setAttribute('fill', white ? '#FFFFFF' : '#2ADFB4');
        c.setAttribute('stroke', '#11161C');
        c.setAttribute('stroke-width', '1.6');
        svg.appendChild(c);
        return c;
      };
      var SPEED = 0.19;
      if (!inPaths.length || !outPaths.length) return;
      var runners = plates.map(function (p, i) {
        var inPath = inPaths[i], outPath = outPaths.length ? outPaths[i % outPaths.length] : null;
        var inLen = inPath.getTotalLength(), outLen = outPath ? outPath.getTotalLength() : 0;
        return {
          inPath: inPath, inLen: inLen, outPath: outPath, outLen: outLen,
          card: outPaths.length ? i % outPaths.length : 0,
          inT: inLen / SPEED,
          outT: outPath ? outLen / SPEED : 260,
          plateEl: p.el,
          inDot: dot(inPath),
          outDot: outPath ? dot(outPath, (i % outPaths.length) !== 0) : null,
          phase: 0
        };
      });
      var CYCLE = Math.max.apply(null, runners.map(function (r) { return r.inT + r.outT; })) + 700;
      var jit = [0, 0.42, 0.17, 0.71, 0.28, 0.58, 0.86, 0.09];
      runners.forEach(function (r, i) {
        var slot = ((i / runners.length) + (jit[i % jit.length] / runners.length)) * CYCLE;
        var ph = ((slot - r.inT) / CYCLE) % 1;
        if (ph < 0) ph += 1;
        r.phase = ph;
      });
      var t0 = performance.now();
      var place = function (el, path, len, f) {
        var pt = path.getPointAtLength(len * f);
        el.setAttribute('cx', pt.x.toFixed(2));
        el.setAttribute('cy', pt.y.toFixed(2));
        el.setAttribute('opacity', '1');
      };
      var tick = function (now) {
        if (!svg.isConnected) { clearTimeout(t); t = setTimeout(paint, 200); return; }
        runners.forEach(function (r) {
          var tt = (now - t0 - r.phase * CYCLE) % CYCLE;
          if (tt < 0) tt += CYCLE;
          if (tt < r.inT) {
            place(r.inDot, r.inPath, r.inLen, tt / r.inT);
            if (r.outDot) r.outDot.setAttribute('opacity', '0');
          } else if (tt < r.inT + r.outT) {
            r.inDot.setAttribute('opacity', '0');
            if (r.outDot) place(r.outDot, r.outPath, r.outLen, (tt - r.inT) / r.outT);
          } else {
            r.inDot.setAttribute('opacity', '0');
            if (r.outDot) r.outDot.setAttribute('opacity', '0');
            if (!r.fired) { r.fired = true; var f = halo[r.card]; if (f) f(); }
          }
          if (tt < r.inT + r.outT) r.fired = false;
          var hot = tt < Math.min(420, r.inT * 0.45);
          if (hot !== r.hot) { r.hot = hot; if (r.plateEl) r.plateEl.classList.toggle('ecd-hot', hot); }
        });
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    paint();
    setTimeout(paint, 300);
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(paint, 100); });
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () { clearTimeout(t); t = setTimeout(paint, 80); });
      ro.observe(stage);
    }
  })();

  /* ===== Ask AI strips: interactive dot-grid background (any number of .ai-sec) ===== */
  Array.prototype.forEach.call(document.querySelectorAll('.ai-sec'), function (sec) {
    var cv = sec.querySelector('.ai-px');
    if (!cv || prefersReducedMotion) return;
    var ctx = cv.getContext('2d');
    var PITCH = 12, SZ = 3, R = 110, PUSH = 18;
    var pts = [], W = 0, H = 0, dpr = 1, mx = -9999, my = -9999, raf = null, live = false;
    var draw = function () {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      var th = cv.closest('[data-cw-theme]');
      var dark = th && th.getAttribute('data-cw-theme') === 'dark';
      ctx.fillStyle = sec.classList.contains('eb-strip-dark') ? 'rgba(255,255,255,.10)' : dark ? 'rgba(42,223,180,.18)' : 'rgba(0,153,125,.22)';
      for (var i = 0; i < pts.length; i++) { var p = pts[i]; ctx.fillRect(p.hx + p.x - SZ / 2, p.hy + p.y - SZ / 2, SZ, SZ); }
    };
    var build = function () {
      if (!cv.isConnected) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = sec.clientWidth; H = sec.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      pts = [];
      var cols = Math.ceil(W / PITCH), rows = Math.ceil(H / PITCH);
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
        pts.push({ hx: c * PITCH + PITCH / 2, hy: r * PITCH + PITCH / 2, x: 0, y: 0 });
      }
      draw();
    };
    var tick = function () {
      if (!cv.isConnected) { live = false; return; }
      var moving = false;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i], tx = 0, ty = 0;
        var dx = p.hx - mx, dy = p.hy - my, d = Math.hypot(dx, dy);
        if (d < R && d > 0.01) { var f = 1 - d / R; tx = dx / d * PUSH * f; ty = dy / d * PUSH * f; }
        p.x += (tx - p.x) * 0.14; p.y += (ty - p.y) * 0.14;
        if (Math.abs(p.x - tx) > 0.08 || Math.abs(p.y - ty) > 0.08) moving = true;
      }
      draw();
      if (moving || mx > -9000) raf = requestAnimationFrame(tick); else live = false;
    };
    var wake = function () { if (!live) { live = true; raf = requestAnimationFrame(tick); } };
    sec.addEventListener('pointermove', function (e) {
      if (window.innerWidth <= 880) return;
      var b = sec.getBoundingClientRect();
      mx = e.clientX - b.left; my = e.clientY - b.top;
      wake();
    });
    sec.addEventListener('pointerleave', function () { mx = -9999; my = -9999; wake(); });
    build();
    var bt;
    window.addEventListener('resize', function () { clearTimeout(bt); bt = setTimeout(build, 120); });
    if (window.ResizeObserver) {
      var ro2 = new ResizeObserver(function () { clearTimeout(bt); bt = setTimeout(build, 100); });
      ro2.observe(sec);
    }
  });

  /* ===== Catering parallax ===== */
  var catering = document.getElementById('js-catering');
  if (catering && !prefersReducedMotion) {
    var raf = null;
    var onScroll = function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var r = catering.getBoundingClientRect();
        var y = (window.innerHeight - r.top) * -0.16;
        catering.style.backgroundPosition = 'center ' + y.toFixed(1) + 'px, center 0';
        var prog = Math.max(0, Math.min(1, (window.innerHeight - r.top) / (window.innerHeight + r.height)));
        var pos = (160 - prog * 320).toFixed(1) + '%';
        catering.querySelectorAll('.stat-num').forEach(function (el) { el.style.backgroundPositionX = pos; });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== Restaurants page: model tabs ===== */
  var restTabs = document.getElementById('js-rest-tabs');
  if (restTabs) {
    var tabBtns = restTabs.querySelectorAll('.rest-tab');
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        tabBtns.forEach(function (b) { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-selected', String(b === btn)); });
        document.querySelectorAll('.rest-model-panel').forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-tab') === target); });
        document.querySelectorAll('.rest-diagram').forEach(function (d) {
          var match = d.getAttribute('data-tab') === target;
          d.classList.toggle('is-active', match);
          if (match && !prefersReducedMotion) { d.classList.remove('rest-diagram-fade'); void d.offsetWidth; d.classList.add('rest-diagram-fade'); }
        });
        document.querySelectorAll('.toast-model-case').forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-tab') === target); });
      });
    });
  }

  /* ===== Restaurants page: economics accordion ===== */
  var ecoRoot = document.getElementById('js-rest-eco');
  if (ecoRoot) {
    var ecoRows = ecoRoot.querySelectorAll('.rest-eco-row');
    ecoRows.forEach(function (row) {
      row.addEventListener('click', function () {
        var wasOpen = row.classList.contains('is-open');
        ecoRows.forEach(function (r) { r.classList.remove('is-open'); });
        if (!wasOpen) row.classList.add('is-open');
      });
    });
  }

  /* ===== Restaurants page: testimonial carousel ===== */
  var restTestimonials = [
    { logo: 'assets/logo-portillos.svg', photo: 'assets/testi-osanloo.jpg', quote: '“With more than 60 Portillo’s locations nationwide and the highest average unit sales volumes in the fast-casual industry, we have a lot of deliveries to manage. It’s important that our brand is well-represented. Our experience with Cartwheel has been so positive that we invested in the company so they can further develop services with brands in mind.”', name: 'Michael Osanloo', role: 'CEO, Portillo’s' },
    { logo: 'assets/logo-pfchangs.svg', photo: 'assets/testi-barnett.jpg', quote: '“Cartwheel allows us to handle the highest priority orders with self-delivery, ensuring the experience is seamless, delivered with P.F. Chang’s hospitality and encouraging the customer to return for repeat deliveries through our native ordering platforms.”', name: 'Candice Barnett', role: 'VP, Off-Premise Dining, P.F. Chang’s' },
    { logo: 'assets/logo-jasons-deli.svg', photo: 'assets/testi-schuster2.png', quote: '“By implementing Cartwheel’s unified delivery management platform, we’ve streamlined our operations, reduced the load on team members, and enhanced our ability to ensure the best, most efficient customer service across all ordering channels.”', name: 'Amy Schuster', role: 'VP of IT, Jason’s Deli' },
    { logo: 'assets/logo-portillos.svg', quote: '“With Cartwheel we were able to use our team members to deliver our highest-value orders. Instead of relying exclusively on third-party delivery companies for fulfilment, we have been able to cross-train our staff so that they can become drivers for our own fleet.”', name: 'Nick Scarpino', role: 'SVP of Marketing, Portillo’s' }
  ];
  var restTcard = document.getElementById('js-tcard-rest');
  var restTdotsEl = document.getElementById('js-tdots-rest');
  if (restTcard && restTdotsEl) {
    var rti = 0;
    var restTdots = restTestimonials.map(function (_, n) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'case-dot';
      dot.setAttribute('aria-label', 'Testimonial ' + (n + 1));
      dot.addEventListener('click', function () { rti = n; renderRestT(); });
      restTdotsEl.appendChild(dot);
      return dot;
    });
    function renderRestT() {
      var t = restTestimonials[rti];
      restTcard.innerHTML =
        (t.logo ? '<img src="' + t.logo + '" alt="" class="cat-tcard-logo">' : '') +
        '<i class="ti ti-quote cat-tcard-mark" aria-hidden="true"></i>' +
        '<p class="cat-tcard-quote">' + t.quote + '</p>' +
        '<div class="cat-tcard-attr">' +
          '<div class="cat-tcard-avatar">' + (t.photo ? '<img src="' + t.photo + '" alt="">' : '<i class="ti ti-building-store" aria-hidden="true"></i>') + '</div>' +
          '<div><div class="cat-tcard-name">' + t.name + '</div><div class="cat-tcard-role">' + t.role + '</div></div>' +
        '</div>';
      restTdots.forEach(function (d, n) { d.classList.toggle('active', n === rti); });
    }
    var restTprev = document.querySelector('.rest-tprev');
    var restTnext = document.querySelector('.rest-tnext');
    if (restTprev) restTprev.addEventListener('click', function () { rti = (rti - 1 + restTestimonials.length) % restTestimonials.length; renderRestT(); });
    if (restTnext) restTnext.addEventListener('click', function () { rti = (rti + 1) % restTestimonials.length; renderRestT(); });
    renderRestT();
  }

  /* ===== Pizza page: testimonial carousel ===== */
  var pizzaTestimonials = [
    { logo: 'assets/logo-giordanos.png', photo: 'assets/testi-scarpino-giordanos.png', quote: '“Chicago’s love for pizza and football runs deep, and peak demand periods like Super Bowl weekend put real pressure on our operations. Cartwheel gives our store teams the control they need to make smart delivery decisions in real time while ensuring that every delivery feels like Giordano’s, not a generic transaction.”', name: 'Nick Scarpino', role: 'CEO, Giordano’s' },
    { logo: 'assets/logo-hungry-howies.png', quote: '“We continue to see real value in maintaining a direct relationship with our guests and investing in our in-house delivery capabilities. Third-party delivery provides important additional reach and flexibility, and Cartwheel helps us bring these approaches together while maintaining a consistent guest experience as we modernize our delivery operations.”', name: 'Moe Shrikian', role: 'Executive Vice President and General Counsel, Hungry Howie’s' },
    { logo: 'assets/logo-mr-jims.png', photo: 'assets/cs/bryce-hamm.png', quote: '“Using Cartwheel and Uber Direct has significantly reduced our delivery times, increased customer satisfaction, and boosted sales. The integration is seamless. Our drivers handle local orders, and Uber Direct takes care of overflow. With real-time tracking for both, we have complete visibility, which has elevated our service across the board.”', name: 'Bryce Hamm', role: 'Franchisee, MrJim’s Pizza' }
  ];
  var pizzaTcard = document.getElementById('js-tcard-pizza');
  var pizzaTdotsEl = document.getElementById('js-tdots-pizza');
  if (pizzaTcard && pizzaTdotsEl) {
    var pzi = 0;
    var pizzaTdots = pizzaTestimonials.map(function (_, n) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'case-dot';
      dot.setAttribute('aria-label', 'Testimonial ' + (n + 1));
      dot.addEventListener('click', function () { pzi = n; renderPizzaT(); });
      pizzaTdotsEl.appendChild(dot);
      return dot;
    });
    function renderPizzaT() {
      var t = pizzaTestimonials[pzi];
      pizzaTcard.innerHTML =
        (t.logo ? '<img src="' + t.logo + '" alt="" class="cat-tcard-logo">' : '') +
        '<i class="ti ti-quote cat-tcard-mark" aria-hidden="true"></i>' +
        '<p class="cat-tcard-quote">' + t.quote + '</p>' +
        '<div class="cat-tcard-attr">' +
          '<div class="cat-tcard-avatar">' + (t.photo ? '<img src="' + t.photo + '" alt="">' : '<i class="ti ti-building-store" aria-hidden="true"></i>') + '</div>' +
          '<div><div class="cat-tcard-name">' + t.name + '</div><div class="cat-tcard-role">' + t.role + '</div></div>' +
        '</div>';
      pizzaTdots.forEach(function (d, n) { d.classList.toggle('active', n === pzi); });
    }
    var pizzaTprev = document.querySelector('.pizza-tprev');
    var pizzaTnext = document.querySelector('.pizza-tnext');
    if (pizzaTprev) pizzaTprev.addEventListener('click', function () { pzi = (pzi - 1 + pizzaTestimonials.length) % pizzaTestimonials.length; renderPizzaT(); });
    if (pizzaTnext) pizzaTnext.addEventListener('click', function () { pzi = (pzi + 1) % pizzaTestimonials.length; renderPizzaT(); });
    renderPizzaT();
  }

  /* ===== Toast page: testimonial carousel ===== */
  var toastTestimonials = [
    { logo: 'assets/logo-portillos.svg', photo: 'assets/testi-osanloo.jpg', quote: '“With more than 60 Portillo’s locations nationwide and the highest average unit sales volumes in the fast-casual industry, we have a lot of deliveries to manage. It’s important that our brand is well-represented. Our experience with Cartwheel has been so positive that we invested in the company so they can further develop services with brands in mind.”', name: 'Michael Osanloo', role: 'CEO, Portillo’s' },
    { logo: 'assets/logo-pfchangs.svg', photo: 'assets/testi-barnett.jpg', quote: '“Cartwheel allows us to handle the highest priority orders with self-delivery, ensuring the experience is seamless, delivered with P.F. Chang’s hospitality and encouraging the customer to return for repeat deliveries through our native ordering platforms.”', name: 'Candice Barnett', role: 'VP, Off-Premise Dining, P.F. Chang’s' },
    { logo: 'assets/logo-jasons-deli.svg', photo: 'assets/testi-schuster2.png', quote: '“By implementing Cartwheel’s unified delivery management platform, we’ve streamlined our operations, reduced the load on team members, and enhanced our ability to ensure the best, most efficient customer service across all ordering channels.”', name: 'Amy Schuster', role: 'VP of IT, Jason’s Deli' },
    { logo: 'assets/logo-portillos.svg', quote: '“With Cartwheel we were able to use our team members to deliver our highest-value orders. Instead of relying exclusively on third-party delivery companies for fulfilment, we have been able to cross-train our staff so that they can become drivers for our own fleet.”', name: 'Nick Scarpino', role: 'SVP of Marketing, Portillo’s' }
  ];
  var toastTcard = document.getElementById('js-tcard-toast');
  var toastTdotsEl = document.getElementById('js-tdots-toast');
  if (toastTcard && toastTdotsEl) {
    var tti = 0;
    var toastTdots = toastTestimonials.map(function (_, n) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'case-dot';
      dot.setAttribute('aria-label', 'Testimonial ' + (n + 1));
      dot.addEventListener('click', function () { tti = n; renderToastT(); });
      toastTdotsEl.appendChild(dot);
      return dot;
    });
    function renderToastT() {
      var t = toastTestimonials[tti];
      toastTcard.innerHTML =
        (t.logo ? '<img src="' + t.logo + '" alt="" class="cat-tcard-logo">' : '') +
        '<i class="ti ti-quote cat-tcard-mark" aria-hidden="true"></i>' +
        '<p class="cat-tcard-quote">' + t.quote + '</p>' +
        '<div class="cat-tcard-attr">' +
          '<div class="cat-tcard-avatar">' + (t.photo ? '<img src="' + t.photo + '" alt="">' : '<i class="ti ti-building-store" aria-hidden="true"></i>') + '</div>' +
          '<div><div class="cat-tcard-name">' + t.name + '</div><div class="cat-tcard-role">' + t.role + '</div></div>' +
        '</div>';
      toastTdots.forEach(function (d, n) { d.classList.toggle('active', n === tti); });
    }
    var toastTprev = document.querySelector('.toast-tprev');
    var toastTnext = document.querySelector('.toast-tnext');
    if (toastTprev) toastTprev.addEventListener('click', function () { tti = (tti - 1 + toastTestimonials.length) % toastTestimonials.length; renderToastT(); });
    if (toastTnext) toastTnext.addEventListener('click', function () { tti = (tti + 1) % toastTestimonials.length; renderToastT(); });
    renderToastT();
  }

  /* ===== Platform Overview page: testimonial carousel ===== */
  var platTestimonials = [
    { photo: 'assets/people/osanloo.jpg', logo: 'assets/logo-portillos.svg', quote: '“With more than 60 Portillo’s locations nationwide and the highest average unit sales volumes in the fast-casual industry, we have a lot of deliveries to manage. Our experience with Cartwheel has been so positive that we invested in the company so they can further develop services with brands in mind.”', name: 'Michael Osanloo', role: 'CEO, Portillo’s' },
    { photo: 'assets/people/barnett.jpg', logo: 'assets/logo-pfchangs.svg', quote: '“Cartwheel allows us to handle the highest priority orders with self-delivery, ensuring the experience is seamless, delivered with P.F. Chang’s hospitality and encouraging the customer to return for repeat deliveries through our native ordering platforms.”', name: 'Candice Barnett', role: 'VP Off-Premises Dining, P.F. Chang’s' },
    { logo: 'assets/logo-potbelly.png', quote: '“With Cartwheel, our delivery program is as customizable as our menu. Since implementing Cartwheel’s tools, Potbelly has been able to offer faster, more efficient delivery to our customers from more than 400 locations nationwide.”', name: 'Sam Martinez', role: 'Business Systems Manager, Potbelly' },
    { photo: 'assets/people/northway.jpg', logo: 'assets/logo-portillos.svg', quote: '“Cartwheel allowed us to adjust our order volume to driver availability, eliminating the worry of having enough drivers to maintain delivery quality.”', name: 'Dino Northway', role: 'Senior Manager Off-Premise Dining, Portillo’s' },
    { photo: 'assets/people/schuster.png', logo: 'assets/logo-jasons-deli.svg', quote: '“By implementing Cartwheel’s unified delivery management platform, we’ve streamlined our operations, reduced the load on team members, and enhanced our ability to ensure the best, most efficient customer service across all ordering channels.”', name: 'Amy Schuster', role: 'Vice President of IT, Jason’s Deli' },
    { photo: 'assets/people/polk.png', logo: 'assets/logo-jackrabbit.png', quote: '“Together, Cartwheel and Omnicart technologies offer the optimal end-to-end delivery management solution for local delivery operators. Local providers can now access via open APIs the sophisticated tech and customizable offerings typically only available within expensive enterprise platforms.”', name: 'Kevin Polk', role: 'Owner, JackRabbit Deliveries' },
    { logo: 'assets/logo-hungry-howies.png', quote: '“We continue to see real value in maintaining a direct relationship with our guests and investing in our in-house delivery capabilities. Cartwheel helps us bring in-house and third-party delivery together while maintaining a consistent guest experience.”', name: 'Moe Shrikian', role: 'EVP and General Counsel, Hungry Howie’s' }
  ];
  var platTcard = document.getElementById('js-tcard-plat');
  var platTdotsEl = document.getElementById('js-tdots-plat');
  if (platTcard && platTdotsEl) {
    var pti = 0;
    var platTdots = platTestimonials.map(function (_, n) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'case-dot';
      dot.setAttribute('aria-label', 'Testimonial ' + (n + 1));
      dot.addEventListener('click', function () { pti = n; renderPlatT(); });
      platTdotsEl.appendChild(dot);
      return dot;
    });
    function renderPlatT() {
      var t = platTestimonials[pti];
      platTcard.innerHTML =
        (t.logo ? '<img src="' + t.logo + '" alt="" class="cat-tcard-logo">' : '') +
        '<i class="ti ti-quote cat-tcard-mark" aria-hidden="true"></i>' +
        '<p class="cat-tcard-quote">' + t.quote + '</p>' +
        '<div class="cat-tcard-attr">' +
          '<div class="cat-tcard-avatar">' + (t.photo ? '<img src="' + t.photo + '" alt="">' : '<i class="ti ti-building-store" aria-hidden="true"></i>') + '</div>' +
          '<div><div class="cat-tcard-name">' + t.name + '</div><div class="cat-tcard-role">' + t.role + '</div></div>' +
        '</div>';
      platTdots.forEach(function (d, n) { d.classList.toggle('active', n === pti); });
    }
    var platTprev = document.querySelector('.plat-tprev');
    var platTnext = document.querySelector('.plat-tnext');
    if (platTprev) platTprev.addEventListener('click', function () { pti = (pti - 1 + platTestimonials.length) % platTestimonials.length; renderPlatT(); });
    if (platTnext) platTnext.addEventListener('click', function () { pti = (pti + 1) % platTestimonials.length; renderPlatT(); });
    renderPlatT();
  }

  /* ===== Delivery Types page: third-party tabs ===== */
  var dtThird = document.getElementById('js-dt-third');
  if (dtThird) {
    var dtSaveWords = ['costs', 'reputation', 'time', 'customers'];
    var dtSaveEl = document.getElementById('js-dt-save-word');
    var dtTabs = dtThird.querySelectorAll('.dt-third-tab');
    dtTabs.forEach(function (tab) {
      var btn = tab.querySelector('.dt-third-tab-btn');
      btn.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');
        dtTabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('is-active', active);
          var chev = t.querySelector('.dt-third-tab-btn i');
          chev.className = 'ti ' + (active ? 'ti-chevron-down' : 'ti-chevron-right');
        });
        dtThird.querySelectorAll('.dt-third-panel').forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
        });
        if (dtSaveEl) dtSaveEl.textContent = dtSaveWords[+target] || dtSaveWords[0];
      });
    });
  }

  /* ===== Pizza page: Hybrid Delivery model tabs (same pattern as #js-dt-third) ===== */
  var pizzaThird = document.getElementById('js-pizza-third');
  if (pizzaThird) {
    var pizzaTabs = pizzaThird.querySelectorAll('.dt-third-tab');
    pizzaTabs.forEach(function (tab) {
      var btn = tab.querySelector('.dt-third-tab-btn');
      btn.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');
        pizzaTabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('is-active', active);
          var chev = t.querySelector('.dt-third-tab-btn i');
          chev.className = 'ti ' + (active ? 'ti-chevron-down' : 'ti-chevron-right');
        });
        pizzaThird.querySelectorAll('.dt-third-panel').forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
        });
      });
    });
  }

  /* ===== Delivery Types page: hero map riders (motion-path) ===== */
  var dtMapOuter = document.getElementById('js-dt-map-outer');
  var dtMapStage = document.getElementById('js-dt-map-stage');
  if (dtMapOuter && dtMapStage) {
    function dtApplyMapScale() {
      dtMapStage.style.transform = 'scale(' + (dtMapOuter.clientWidth / 976) + ')';
    }
    if (window.ResizeObserver) {
      new ResizeObserver(dtApplyMapScale).observe(dtMapOuter);
    } else {
      window.addEventListener('resize', dtApplyMapScale);
    }
    dtApplyMapScale();

    var dtRiderPaths = [
      "M345.701 212.739C312.586 198.188 252.477 172.8 222.774 161.561C195.539 151.256 162.568 142.132 146.06 137.979C143.421 137.316 140.65 137.599 138.182 138.745L118.393 147.933C115.512 149.27 112.22 149.416 109.232 148.337L95.833 143.498L60.7107 131.457L44.1533 131.457L26.5923 110.885L-40 32",
      "M376.307 214.244L478.793 195.211C480.685 194.859 482.634 194.966 484.476 195.523L543.509 213.371C545.405 213.944 547.413 214.04 549.356 213.652L575.945 208.334C577.955 207.932 580.035 208.05 581.987 208.677L618.725 220.469C619.342 220.667 619.973 220.815 620.614 220.911L676.348 229.296L680.864 213.742L741.575 217.756L777.7 217.756L873.031 230.3L960 242",
      "M374.3 224.279L413.14 240.786C414.003 241.153 414.906 241.417 415.83 241.575L460.177 249.123C460.867 249.241 461.228 250.011 460.877 250.616L427.699 307.755C426.265 310.225 423.999 312.105 421.306 313.059L404.909 318.866C403.942 319.209 404.051 320.61 405.059 320.799L424.626 324.467C425.193 324.574 425.751 324.72 426.297 324.907L485 344.94C487.403 345.76 490.004 345.8 492.43 345.053L501.742 342.188L503.248 341.686L528.836 332.153L553.924 328.641L610.119 332.153L635.707 353.226L755.624 402.899L830 434"
    ];
    function dtSpawnRider(el) {
      var all = dtRiderPaths.map(function (_, i) { return i; });
      var pool = el._dtPathIdx == null ? all : all.filter(function (i) { return i !== el._dtPathIdx; });
      var idx = pool[Math.floor(Math.random() * pool.length)];
      el._dtPathIdx = idx;
      el.style.offsetPath = "path('" + dtRiderPaths[idx] + "')";
    }
    ['js-dt-rider-1', 'js-dt-rider-2', 'js-dt-rider-3'].forEach(function (id, i) {
      var el = document.getElementById(id);
      if (!el) return;
      dtSpawnRider(el);
      el.style.animation = 'rideOut 13s linear ' + (i * 4.4) + 's infinite';
      el.addEventListener('animationiteration', function () { dtSpawnRider(el); });
    });
  }

  /* ===== Book a demo: interactive pixel map + pin cursor ===== */
  var demoSec = document.getElementById('demo');
  if (demoSec && !prefersReducedMotion) {
    var demoSharp = demoSec.querySelector('.demo-map-sharp');
    var demoDim = demoSec.querySelector('.demo-dim');
    var demoCursor = demoSec.querySelector('.demo-cursor');
    var demoCv = demoSec.querySelector('.demo-px');
    var demoCtx = demoCv && demoCv.getContext('2d');
    var DEMO_PITCH = 10, DEMO_SZ = 3, DEMO_R = 130, DEMO_PUSH = 18;
    var demoPts = [], demoW = 0, demoH = 0, demoMx = -9999, demoMy = -9999, demoRaf = 0, demoLoop = 0, demoSampler = null, demoShock = null;
    var demoMapImg = new Image();
    demoMapImg.src = 'assets/demo-map-bg.png';

    var demoMakeSampler = function () {
      try {
        var iw = demoMapImg.naturalWidth, ih = demoMapImg.naturalHeight;
        if (!iw) return;
        var k = Math.min(1, 900 / iw), oc = document.createElement('canvas');
        oc.width = Math.round(iw * k); oc.height = Math.round(ih * k);
        var oct = oc.getContext('2d', { willReadFrequently: true });
        oct.drawImage(demoMapImg, 0, 0, oc.width, oc.height);
        demoSampler = { w: oc.width, h: oc.height, iw: iw, ih: ih, d: oct.getImageData(0, 0, oc.width, oc.height).data };
      } catch (err) { demoSampler = null; }
    };
    var demoIsLand = function (ix, iy) {
      if (!demoSampler) return true;
      var px = Math.round(ix / demoSampler.iw * demoSampler.w), py = Math.round(iy / demoSampler.ih * demoSampler.h);
      if (px < 0 || py < 0 || px >= demoSampler.w || py >= demoSampler.h) return false;
      var i = (py * demoSampler.w + px) * 4, r = demoSampler.d[i], b = demoSampler.d[i + 2];
      return !(b - r > 20 && r < 78);
    };
    var demoDraw = function () {
      demoRaf = 0;
      var t = performance.now() / 1000;
      demoCtx.clearRect(0, 0, demoW, demoH);
      var st = demoShock ? (performance.now() - demoShock.t0) / 900 : 2;
      if (st >= 1) demoShock = null;
      for (var n = 0; n < demoPts.length; n++) {
        var p = demoPts[n];
        var x = p.x, y = p.y, sz = DEMO_SZ;
        var dx = p.x - demoMx, dy = p.y - demoMy, d = Math.hypot(dx, dy);
        if (d < DEMO_R) {
          var k = 1 - d / DEMO_R, dd = d || 1;
          x += (dx / dd) * DEMO_PUSH * k; y += (dy / dd) * DEMO_PUSH * k;
          sz = DEMO_SZ + k * 1.5;
        }
        var blast = 0;
        if (demoShock) {
          var bx = p.x - demoShock.x, by = p.y - demoShock.y, bd = Math.hypot(bx, by) || 0.01;
          if (bd < 260) {
            var env = (1 - bd / 260) * Math.pow(1 - st, 2) * Math.sin(Math.min(st / .18, 1) * Math.PI / 2);
            blast = env;
            x += (bx / bd) * 42 * env; y += (by / bd) * 42 * env;
            sz = DEMO_SZ + env * 2.4;
          }
        }
        if (p.s) {
          var pulse = p.p ? .38 + .42 * (0.5 + 0.5 * Math.sin(t * 1.6 + p.ph)) : .34;
          demoCtx.fillStyle = 'rgba(42,223,180,' + Math.min(1, pulse + blast * .6).toFixed(3) + ')';
        } else if (blast > .01) {
          demoCtx.fillStyle = 'rgba(42,223,180,' + Math.min(.9, .13 + blast * .8).toFixed(3) + ')';
        } else {
          demoCtx.fillStyle = 'rgba(170,196,190,.13)';
        }
        demoCtx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
      }
      if (demoLoop) demoRaf = requestAnimationFrame(demoDraw);
    };
    var demoBuild = function () {
      var r = demoSec.getBoundingClientRect();
      demoW = Math.round(r.width); demoH = Math.round(r.height);
      if (!demoW || !demoH || !demoCv) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      demoCv.width = demoW * dpr; demoCv.height = demoH * dpr;
      demoCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var lw = demoW + 40, lh = demoH + 40, iw = (demoSampler && demoSampler.iw) || 1672, ih = (demoSampler && demoSampler.ih) || 941;
      var s = Math.max(lw / iw, lh / ih), dw = iw * s, dh = ih * s;
      var ox = -20 + (lw - dw) / 2, oy = -20 + (lh - dh) / 2;
      demoPts = [];
      for (var y = DEMO_PITCH / 2; y < demoH; y += DEMO_PITCH) {
        for (var x = DEMO_PITCH / 2; x < demoW; x += DEMO_PITCH) {
          var land = demoIsLand((x - ox) / s, (y - oy) / s);
          var spark = land && Math.random() < .1;
          demoPts.push({ x: x, y: y, s: spark, p: spark && Math.random() < .35, ph: Math.random() * 6.28 });
        }
      }
      if (!demoRaf) demoRaf = requestAnimationFrame(demoDraw);
    };
    if (demoCtx) {
      if (demoMapImg.complete) { demoMakeSampler(); demoBuild(); }
      else demoMapImg.addEventListener('load', function () { demoMakeSampler(); demoBuild(); });
      demoBuild();
      if (window.ResizeObserver) new ResizeObserver(demoBuild).observe(demoSec);
      else window.addEventListener('resize', demoBuild);
      if (window.IntersectionObserver) {
        new IntersectionObserver(function (entries) {
          demoLoop = entries[0].isIntersecting ? 1 : 0;
          if (demoLoop && !demoRaf) demoRaf = requestAnimationFrame(demoDraw);
        }, { threshold: 0 }).observe(demoSec);
      }
    }
    demoSec.addEventListener('mousemove', function (e) {
      if (window.innerWidth <= 880) return;
      var sr = demoSec.getBoundingClientRect();
      var x = e.clientX - sr.left, y = e.clientY - sr.top;
      if (demoCursor) {
        demoCursor.style.transform = 'translate(' + x.toFixed(0) + 'px,' + y.toFixed(0) + 'px) translate(-50%,-100%)';
        demoCursor.style.opacity = '1';
      }
      if (demoSharp) {
        var rs = demoSharp.getBoundingClientRect();
        var m = 'radial-gradient(circle 450px at ' + (e.clientX - rs.left).toFixed(0) + 'px ' + (e.clientY - rs.top).toFixed(0) + 'px,#000 0%,rgba(0,0,0,.55) 55%,transparent 100%)';
        demoSharp.style.webkitMaskImage = m; demoSharp.style.maskImage = m;
        demoSharp.style.opacity = '1';
      }
      if (demoDim) {
        var rd = demoDim.getBoundingClientRect();
        var dm = 'radial-gradient(circle 450px at ' + (e.clientX - rd.left).toFixed(0) + 'px ' + (e.clientY - rd.top).toFixed(0) + 'px,rgba(0,0,0,.45) 0%,rgba(0,0,0,.75) 55%,#000 100%)';
        demoDim.style.webkitMaskImage = dm; demoDim.style.maskImage = dm;
      }
      if (demoCtx) { demoMx = x; demoMy = y; if (!demoRaf) demoRaf = requestAnimationFrame(demoDraw); }
    });
    demoSec.addEventListener('mouseleave', function () {
      if (demoCursor) demoCursor.style.opacity = '0';
      if (demoSharp) demoSharp.style.opacity = '0';
      if (demoDim) { demoDim.style.webkitMaskImage = ''; demoDim.style.maskImage = ''; }
      if (demoCtx) { demoMx = demoMy = -9999; if (!demoRaf) demoRaf = requestAnimationFrame(demoDraw); }
    });
    demoSec.addEventListener('pointerdown', function (e) {
      if (demoCursor) { demoCursor.classList.remove('hop'); void demoCursor.offsetWidth; demoCursor.classList.add('hop'); }
      if (demoCtx) {
        var sr2 = demoSec.getBoundingClientRect();
        demoShock = { x: e.clientX - sr2.left, y: e.clientY - sr2.top, t0: performance.now() };
        if (!demoRaf) demoRaf = requestAnimationFrame(demoDraw);
      }
    });
  }
})();
