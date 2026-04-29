/* TatvaPractice — shared partials (nav, footer, helpers) */
(function(){
  // Auto-load icons.js if not already on the page
  if (!window.TPIcon && !document.querySelector('script[src*="icons.js"]')) {
    const s = document.createElement('script');
    s.src = 'styles/icons.js';
    document.head.appendChild(s);
  }
  const NAV = `
    <nav class="nav">
      <div class="tp-wrap nav-inner">
        <a href="index.html" class="logo"><span class="logo-mark">T</span> TatvaPractice</a>
        <ul class="nav-list">
          <li class="nav-item">
            <span class="nav-link" data-link="product.html">Product <span class="chev">▾</span></span>
            <div class="dropdown" style="min-width:560px;display:grid;grid-template-columns:1fr 1fr;gap:4px">
              <a href="voicerx.html"><span class="dd-ico"><i data-icon="mic" data-size="18"></i></span><span class="dd-text"><span class="dd-title">VoiceRx</span><span class="dd-desc">Speak. We'll write the prescription.</span></span></a>
              <a href="smartsync.html"><span class="dd-ico"><i data-icon="pen-line" data-size="18"></i></span><span class="dd-text"><span class="dd-title">SmartSync</span><span class="dd-desc">Write naturally. Save digitally.</span></span></a>
              <a href="snaprx.html"><span class="dd-ico"><i data-icon="camera" data-size="18"></i></span><span class="dd-text"><span class="dd-title">SnapRx</span><span class="dd-desc">Photograph any Rx. We digitise it.</span></span></a>
              <a href="ai-agents.html"><span class="dd-ico"><i data-icon="brain" data-size="18"></i></span><span class="dd-text"><span class="dd-title">AI Agents</span><span class="dd-desc">DoctorAgent, Amaya, Receptionist.</span></span></a>
              <a href="emr.html"><span class="dd-ico"><i data-icon="file-pen" data-size="18"></i></span><span class="dd-text"><span class="dd-title">Core EMR</span><span class="dd-desc">Records, queue, billing, telehealth.</span></span></a>
              <a href="product.html"><span class="dd-ico"><i data-icon="grid" data-size="18"></i></span><span class="dd-text"><span class="dd-title">Full overview</span><span class="dd-desc">Every module, one workflow.</span></span></a>
            </div>
          </li>
          <li class="nav-item">
            <span class="nav-link" data-link="solutions-clinics.html">Solutions <span class="chev">▾</span></span>
            <div class="dropdown">
              <a href="solutions-clinics.html"><span class="dd-ico"><i data-icon="stethoscope" data-size="18"></i></span><span class="dd-text"><span class="dd-title">For Clinics</span><span class="dd-desc">Solo & multi-doctor clinics.</span></span></a>
              <a href="solutions-hospitals.html"><span class="dd-ico"><i data-icon="building-2" data-size="18"></i></span><span class="dd-text"><span class="dd-title">For Hospitals</span><span class="dd-desc">Multi-location & enterprise.</span></span></a>
              <a href="specialty-template.html"><span class="dd-ico"><i data-icon="circle-plus" data-size="18"></i></span><span class="dd-text"><span class="dd-title">By specialty</span><span class="dd-desc">25+ specialties supported.</span></span></a>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
          <li class="nav-item"><a class="nav-link" href="security.html">Security</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">Company</a></li>
        </ul>
        <div class="nav-cta">
          <a class="btn btn-ghost btn-m" href="contact.html">Sign in</a>
          <a class="btn btn-outline btn-m" href="contact.html">Book a Demo</a>
          <a class="btn btn-solid btn-m" href="contact.html">Start Free Trial</a>
        </div>
      </div>
    </nav>
    <a href="contact.html" class="btn btn-solid btn-l mobile-cta">Book Demo</a>
  `;

  const FOOTER = `
    <footer class="footer">
      <div class="tp-wrap">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="logo"><span class="logo-mark">T</span> TatvaPractice</a>
            <p style="margin-top:14px;color:#9CA3AF;font-size:14px;line-height:22px;max-width:320px">The AI-first EMR built for Indian OPD reality. Less typing. More treating.</p>
            <div class="footer-compliance">
              <span class="compliance compliance-sm"><i data-icon="shield-check" data-size="14"></i>NHA-Approved</span>
              <span class="compliance compliance-sm"><i data-icon="badge-check" data-size="14"></i>ABDM-Certified</span>
              <span class="compliance compliance-sm"><i data-icon="user-check" data-size="14"></i>ABHA-Compliant</span>
              <span class="compliance compliance-sm"><i data-icon="lock" data-size="14"></i>ISO 27001</span>
              <span class="compliance compliance-sm"><i data-icon="file-check-2" data-size="14"></i>DPDPA-Compliant</span>
              <span class="compliance compliance-sm"><i data-icon="globe" data-size="14"></i>HIPAA-Aligned</span>
            </div>
          </div>
          <div><h5>Product</h5><ul>
            <li><a href="voicerx.html">VoiceRx</a></li>
            <li><a href="smartsync.html">SmartSync</a></li>
            <li><a href="snaprx.html">SnapRx</a></li>
            <li><a href="ai-agents.html">AI Agents</a></li>
            <li><a href="emr.html">Core EMR</a></li>
            <li><a href="product.html">Overview</a></li>
          </ul></div>
          <div><h5>Solutions</h5><ul>
            <li><a href="solutions-clinics.html">For Clinics</a></li>
            <li><a href="solutions-hospitals.html">For Hospitals</a></li>
          </ul></div>
          <div><h5>Company</h5><ul>
            <li><a href="about.html">About</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="security.html">Security</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul></div>
          <div><h5>Resources</h5><ul>
            <li><a href="resources-dhis.html">DHIS scheme</a></li>
            <li><a href="resources-abdm.html">ABDM &amp; ABHA</a></li>
            <li><a href="#" data-replace-with="Brochure PDF download link">Brochure (PDF)</a></li>
          </ul></div>
        </div>
        <div class="footer-foot">
          <span>© 2026 TatvaPractice. A TatvaCare company.</span>
          <span>hello@tatvapractice.com · +91 99740 42363</span>
          <span>Terms · Privacy · DPA</span>
        </div>
      </div>
    </footer>
  `;

  const TRUST_BAR = `
    <section style="background:#fff;border-bottom:1px solid var(--tp-slate-200)">
      <div class="tp-wrap" style="padding:28px 24px">
        <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center">
          <span class="compliance"><i data-icon="shield-check" data-size="16"></i>NHA-Approved</span>
          <span class="compliance"><i data-icon="badge-check" data-size="16"></i>ABDM-Certified</span>
          <span class="compliance"><i data-icon="user-check" data-size="16"></i>ABHA-Compliant</span>
          <span class="compliance"><i data-icon="lock" data-size="16"></i>ISO 27001</span>
          <span class="compliance"><i data-icon="file-check-2" data-size="16"></i>DPDPA-Compliant</span>
          <span class="compliance"><i data-icon="globe" data-size="16"></i>HIPAA-Aligned</span>
        </div>
        <div class="partner-row">
          <span class="partner-ph" data-replace-with="ZYDUS logo">ZYDUS</span>
          <span class="partner-ph" data-replace-with="CLIANTHA RESEARCH logo">CLIANTHA RESEARCH</span>
          <span class="partner-ph" data-replace-with="GUARDIAN HEALTH logo">GUARDIAN HEALTH</span>
          <span class="partner-ph" data-replace-with="ZYDUS WELLNESS logo">ZYDUS WELLNESS</span>
          <span class="partner-ph" data-replace-with="SENTISS PHARMA logo">SENTISS PHARMA</span>
          <span class="partner-ph" data-replace-with="ALIVECOR logo">ALIVECOR</span>
        </div>
      </div>
    </section>
  `;

  const STATEMENT_BAND_HOME = `
    <section style="position:relative;overflow:hidden;background:linear-gradient(135deg,#3C3BB5 0%,#703A9E 100%);padding:96px 24px">
      <span aria-hidden="true" style="position:absolute;top:-160px;left:-120px;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <span aria-hidden="true" style="position:absolute;bottom:-180px;right:-140px;width:560px;height:560px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <div style="position:relative;max-width:900px;margin:0 auto;text-align:center;color:#fff">
        <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,56px);line-height:1.15;margin:0;color:#fff">
          <span style="display:block;font-weight:800;font-size:clamp(48px,6vw,76px);letter-spacing:-.01em">10,000+ doctors. 12 lakh+ digital prescriptions. 200+ Indian cities.</span>
          <span style="display:block;margin-top:18px">We didn't get here by accident.</span>
        </p>
      </div>
    </section>
  `;

  const STATEMENT_BAND_PRODUCT = `
    <section style="position:relative;overflow:hidden;background:linear-gradient(135deg,#3C3BB5 0%,#703A9E 100%);padding:96px 24px">
      <span aria-hidden="true" style="position:absolute;top:-160px;left:-120px;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <span aria-hidden="true" style="position:absolute;bottom:-180px;right:-140px;width:560px;height:560px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <div style="position:relative;max-width:900px;margin:0 auto;text-align:center;color:#fff">
        <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,56px);line-height:1.15;margin:0;color:#fff">One connected workflow. Every consult, every Rx, every record — in one place.</p>
      </div>
    </section>
  `;

  const STATEMENT_BAND_VOICERX = `
    <section style="position:relative;overflow:hidden;background:linear-gradient(135deg,#3C3BB5 0%,#703A9E 100%);padding:96px 24px">
      <span aria-hidden="true" style="position:absolute;top:-160px;left:-120px;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <span aria-hidden="true" style="position:absolute;bottom:-180px;right:-140px;width:560px;height:560px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <div style="position:relative;max-width:900px;margin:0 auto;text-align:center;color:#fff">
        <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,56px);line-height:1.15;margin:0;color:#fff">Speak in your language. The Rx writes itself.</p>
      </div>
    </section>
  `;

  const STATEMENT_BAND_SMARTSYNC = `
    <section style="position:relative;overflow:hidden;background:linear-gradient(135deg,#3C3BB5 0%,#703A9E 100%);padding:96px 24px">
      <span aria-hidden="true" style="position:absolute;top:-160px;left:-120px;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <span aria-hidden="true" style="position:absolute;bottom:-180px;right:-140px;width:560px;height:560px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <div style="position:relative;max-width:900px;margin:0 auto;text-align:center;color:#fff">
        <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,56px);line-height:1.15;margin:0;color:#fff">Write the way you always have. Save the way the world expects.</p>
      </div>
    </section>
  `;

  const STATEMENT_BAND_HOSPITALS = `
    <section style="position:relative;overflow:hidden;background:linear-gradient(135deg,#3C3BB5 0%,#703A9E 100%);padding:96px 24px">
      <span aria-hidden="true" style="position:absolute;top:-160px;left:-120px;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <span aria-hidden="true" style="position:absolute;bottom:-180px;right:-140px;width:560px;height:560px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <div style="position:relative;max-width:900px;margin:0 auto;text-align:center;color:#fff">
        <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,56px);line-height:1.15;margin:0;color:#fff">
          <span style="display:block;font-weight:800;font-size:clamp(44px,5.4vw,68px);letter-spacing:-.01em">From OPD to IPD to discharge — in one connected system.</span>
          <span style="display:block;margin-top:18px">India-ready. ABDM-certified. Enterprise-grade.</span>
        </p>
      </div>
    </section>
  `;

  const STATEMENT_BAND_SNAPRX = `
    <section style="position:relative;overflow:hidden;background:linear-gradient(135deg,#3C3BB5 0%,#703A9E 100%);padding:96px 24px">
      <span aria-hidden="true" style="position:absolute;top:-160px;left:-120px;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <span aria-hidden="true" style="position:absolute;bottom:-180px;right:-140px;width:560px;height:560px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <div style="position:relative;max-width:900px;margin:0 auto;text-align:center;color:#fff">
        <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,56px);line-height:1.15;margin:0;color:#fff">
          <span style="display:block;font-weight:800;font-size:clamp(44px,5.4vw,68px);letter-spacing:-.01em">Photograph any prescription.</span>
          <span style="display:block;margin-top:18px">We turn it into a structured digital record.</span>
        </p>
      </div>
    </section>
  `;

  const STATEMENT_BAND_AGENTS = `
    <section style="position:relative;overflow:hidden;background:linear-gradient(135deg,#3C3BB5 0%,#703A9E 100%);padding:96px 24px">
      <span aria-hidden="true" style="position:absolute;top:-160px;left:-120px;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <span aria-hidden="true" style="position:absolute;bottom:-180px;right:-140px;width:560px;height:560px;border-radius:50%;background:rgba(255,255,255,.08);filter:blur(60px);pointer-events:none"></span>
      <div style="position:relative;max-width:900px;margin:0 auto;text-align:center;color:#fff">
        <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,56px);line-height:1.15;margin:0;color:#fff">
          <span style="display:block;font-weight:800;font-size:clamp(44px,5.4vw,68px);letter-spacing:-.01em">Three agents. One patient context.</span>
          <span style="display:block;margin-top:18px">Zero context-switching.</span>
        </p>
      </div>
    </section>
  `;

  const CTA_BAND = `
    <section class="tp-section">
      <div class="tp-wrap">
        <div class="cta-band">
          <h2 class="tp-display" style="max-width:680px;margin:0 auto">Start your free 7-day trial.</h2>
          <p class="tp-body-xl" style="color:rgba(255,255,255,.85);max-width:520px;margin:14px auto 28px">No credit card required. Get started in under 2 minutes.</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <a class="btn btn-on-dark-solid btn-l" href="contact.html">Start Free Trial <span class="arr">→</span></a>
            <a class="btn btn-on-dark-outline btn-l" href="contact.html">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Compose helpers exposed globally
  window.TP = { NAV, FOOTER, TRUST_BAR, CTA_BAND, STATEMENT_BAND_HOME, STATEMENT_BAND_PRODUCT, STATEMENT_BAND_VOICERX, STATEMENT_BAND_SMARTSYNC, STATEMENT_BAND_HOSPITALS, STATEMENT_BAND_SNAPRX, STATEMENT_BAND_AGENTS };

  // Auto-mount: any element with data-tp="nav" / "footer" / "trust" / "cta" / "statement-*" gets replaced
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tp]').forEach(el => {
      const k = el.getAttribute('data-tp');
      const map = {
        nav: NAV, footer: FOOTER, trust: TRUST_BAR, cta: CTA_BAND,
        'statement-home': STATEMENT_BAND_HOME,
        'statement-product': STATEMENT_BAND_PRODUCT,
        'statement-voicerx': STATEMENT_BAND_VOICERX,
        'statement-smartsync': STATEMENT_BAND_SMARTSYNC,
        'statement-hospitals': STATEMENT_BAND_HOSPITALS,
        'statement-snaprx': STATEMENT_BAND_SNAPRX,
        'statement-agents': STATEMENT_BAND_AGENTS
      };
      if (map[k]) el.outerHTML = map[k];
    });
    // Re-mount icons in newly-injected partials
    const remount = () => window.TPIcon && window.TPIcon.mount && window.TPIcon.mount(document);
    if (window.TPIcon) remount(); else setTimeout(remount, 100);
    // Mark active nav link
    const path = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(l => {
      const href = l.getAttribute('href') || l.getAttribute('data-link');
      if (href && path === href) l.classList.add('active');
    });
  });
})();
