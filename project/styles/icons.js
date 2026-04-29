/* TatvaPractice — inline Lucide icons (subset, stroke 1.5) */
(function(){
  const I = (paths, vb='0 0 24 24') =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

  const ICONS = {
    mic:        I('<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>'),
    'pen-line': I('<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z"/>'),
    camera:     I('<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.5"/>'),
    brain:      I('<path d="M12 5a3 3 0 0 0-6 0 3 3 0 0 0-3 3 3 3 0 0 0 1.5 2.6A3 3 0 0 0 5 14a3 3 0 0 0 3 3 3 3 0 0 0 4 2 3 3 0 0 0 4-2 3 3 0 0 0 3-3 3 3 0 0 0 .5-3.4A3 3 0 0 0 21 8a3 3 0 0 0-3-3 3 3 0 0 0-6 0Z"/><path d="M12 5v14"/>'),
    users:      I('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    smartphone: I('<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M11 18h2"/>'),
    stethoscope:I('<path d="M4 3h2a2 2 0 0 1 2 2v5a4 4 0 0 0 8 0V5a2 2 0 0 1 2-2h2"/><path d="M12 14v3a4 4 0 0 0 8 0v-1"/><circle cx="20" cy="13" r="2"/>'),
    'building-2':I('<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M2 22h20"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>'),
    hospital:   I('<path d="M12 6v4M10 8h4M3 22V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14"/><path d="M3 22h18"/><path d="M7 22v-4h4v4M13 22v-4h4v4"/>'),
    languages:  I('<path d="M5 8h14"/><path d="M5 8l4 8 4-8"/><path d="M14 14h7"/><path d="M14 21l3-7 3 7"/><path d="M15 19h4"/>'),
    grid:       I('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'),
    'shield-check':I('<path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6Z"/><path d="m9 12 2 2 4-4"/>'),
    'badge-check':I('<path d="m12 2 2.4 1.7 2.9-.4 1.4 2.5 2.4 1.7-.6 2.9.6 2.9-2.4 1.7-1.4 2.5-2.9-.4L12 22l-2.4-1.7-2.9.4-1.4-2.5L3 16.5l.6-2.9L3 10.7 5.4 9 6.8 6.5l2.9.4Z"/><path d="m9 12 2 2 4-4"/>'),
    'file-pen': I('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M10 18l1.5-1.5 3-3 2.5 2.5-3 3L12.5 19Z"/>'),
    syringe:    I('<path d="m18 2 4 4M17 3l4 4M11 9l4 4M14 6l4 4M5 21l5-5M2.5 16.5 8 22"/>'),
    flask:      I('<path d="M9 2h6M10 2v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19L14 8V2"/><path d="M6.5 13h11"/>'),
    calendar:   I('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>'),
    'message-square':I('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>'),
    'bar-chart':I('<path d="M12 20V10M18 20V4M6 20v-6"/>'),
    'indian-rupee':I('<path d="M6 3h12M6 8h12M9 13h6a4 4 0 0 1 0 8h-3l-6-9"/>'),
    phone:      I('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>'),
    keyboard:   I('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M7 17h10"/>'),
    'pen-tool': I('<path d="m12 19 7-7 3 3-7 7-3-3Z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>'),
    'wifi-off': I('<path d="M2 2 22 22"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.17-2.65"/><path d="M10.66 5.51A15 15 0 0 1 22 8.82"/><path d="M5.4 12.4a10 10 0 0 1 4.13-2.4"/><path d="M14.35 10A10 10 0 0 1 18.6 12.4"/><path d="M12 20h.01"/>'),
    refresh:    I('<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>'),
    list:       I('<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>'),
    'alert-triangle':I('<path d="m10.29 3.86-8.18 14a2 2 0 0 0 1.72 3h16.34a2 2 0 0 0 1.72-3l-8.18-14a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/>'),
    check:      I('<path d="m20 6-11 11L4 12"/>'),
    sparkles:   I('<path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z"/><path d="M19 14v4M17 16h4M5 17v3M3.5 18.5h3"/>'),
    lock:       I('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    map:        I('<path d="M3 6v15l6-3 6 3 6-3V3l-6 3-6-3-6 3Z"/><path d="M9 3v15M15 6v15"/>'),
    'india':    I('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'),
    star:       I('<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z"/>'),
    'calendar-check': I('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/><path d="m9 16 2 2 4-4"/>'),
    pill:       I('<rect x="2" y="9" width="20" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="m9.5 9.5 5 5"/>'),
    receipt:    I('<path d="M5 3v18l3-2 3 2 3-2 3 2 3-2V3Z"/><path d="M8 7h8M8 11h8M8 15h5"/>'),
    'bar-chart-3':I('<path d="M3 3v18h18"/><path d="M8 17V9M13 17V5M18 17v-7"/>'),
    'folder-heart':I('<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M12 18s-3-1.7-3-4a2 2 0 0 1 3-1.7A2 2 0 0 1 15 14c0 2.3-3 4-3 4Z"/>'),
    'bell-ring':I('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8M22 8c0-2.3-.8-4.3-2-6"/>'),
    'notebook-pen':I('<path d="M2 6h4M2 10h4M2 14h4M2 18h4"/><path d="M8 3h11a2 2 0 0 1 2 2v9.5"/><path d="M8 21h7"/><path d="M8 3v18"/><path d="M14 18.5 18.5 14a1.4 1.4 0 0 1 2 2L16 20.5l-3 .5.5-3Z"/>'),
    microscope: I('<path d="M6 18h8M3 22h18"/><path d="M14 18a4 4 0 0 0 0-8"/><path d="m9 14 .5-1.5L8 11l1.5-.5L11 12l-1 1Z"/><path d="m11 14 4-4 3 3-4 4Z"/><path d="M16 9 13 6"/>'),
    video:      I('<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4Z"/>'),
    'building-2-alt':I('<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M2 22h20"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>'),
    'shield-alert':I('<path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6Z"/><path d="M12 8v4M12 16h.01"/>'),
    'audio-lines':I('<path d="M2 12h2M6 8v8M10 4v16M14 8v8M18 10v4M22 12h-2"/>'),
    'cloud-off': I('<path d="M2 2 22 22"/><path d="M5.78 5.78A6 6 0 0 0 8 17h7"/><path d="M10.94 6.08A6.93 6.93 0 0 1 12 6a6 6 0 0 1 6 6 5.93 5.93 0 0 1-1.5 4"/>'),
    'layout-template':I('<rect x="3" y="3" width="18" height="7" rx="1"/><rect x="3" y="14" width="9" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'),
    landmark:   I('<path d="M3 22h18"/><path d="M5 22V11"/><path d="M19 22V11"/><path d="M9 22V11"/><path d="M15 22V11"/><path d="m12 2 9 6H3Z"/>'),
    globe:      I('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/>'),
    linkedin:   I('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    'map-pin':  I('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    'arrow-up-right': I('<path d="M7 17 17 7"/><path d="M7 7h10v10"/>'),
    'file-text':I('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>'),
    history:    I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>'),
    'rupee':    I('<path d="M6 4h12M6 9h12M9 14h6a4 4 0 0 0 0-8h-3l-6 14"/>'),
    'message-circle':I('<path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 4.4A9 9 0 0 1 21 12Z"/>'),
    refresh2:   I('<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>'),
    'arrows-up-down':I('<path d="m17 3 4 4-4 4"/><path d="M21 7H8"/><path d="m7 21-4-4 4-4"/><path d="M3 17h13"/>'),
    'plug-zap':I('<path d="M6 14h.01M10 14h.01M6 18h.01M10 18h.01"/><path d="M22 2 12 14"/><path d="M14 5h7l-3 5h3"/>'),
    'list-checks':I('<path d="M3 6h.01M3 12h.01M3 18h.01"/><path d="M8 6h13M8 12h13M8 18h13"/><path d="m5 4 1 1 2-2"/>'),
    'phone-call':I('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>'),
    workflow:   I('<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/>'),
    'circle-plus':I('<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>'),
    keyboard2:  I('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M7 17h10"/>'),
    triangle:   I('<path d="m10.29 3.86-8.18 14a2 2 0 0 0 1.72 3h16.34a2 2 0 0 0 1.72-3l-8.18-14a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/>'),
    'clipboard-list':I('<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/>'),
    activity:   I('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'),
    smartphone2:I('<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M11 18h2"/>'),
    pen:        I('<path d="M12 19l7-7 3 3-7 7-3-3Z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="M2 2 9.5 9.5"/><circle cx="11" cy="11" r="2"/>'),
    power:      I('<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.7 0"/>'),
    layers:     I('<path d="m12 2 10 6-10 6L2 8Z"/><path d="m2 14 10 6 10-6"/><path d="m2 11 10 6 10-6"/>'),
  };

  function render(name, opts={}) {
    const svg = ICONS[name];
    if (!svg) return '';
    const size = opts.size || 20;
    const color = opts.color || 'currentColor';
    const wrap = opts.wrap; // 'blue' | 'violet' | undefined
    const wrapStyles = {
      blue:   `width:${(opts.box||40)}px;height:${(opts.box||40)}px;border-radius:10px;background:var(--tp-blue-50);color:var(--tp-blue-700);display:grid;place-items:center;`,
      violet: `width:${(opts.box||40)}px;height:${(opts.box||40)}px;border-radius:10px;background:var(--tp-violet-50);color:var(--tp-violet-700);display:grid;place-items:center;`,
    };
    const sized = svg.replace('<svg ', `<svg style="width:${size}px;height:${size}px;color:${color};display:block" `);
    return wrap ? `<span style="${wrapStyles[wrap]||''}${opts.style||''}">${sized}</span>` : sized;
  }

  // Auto-mount: <i data-icon="mic" data-size="24" data-wrap="blue" data-box="40"></i>
  function mount(root=document) {
    root.querySelectorAll('[data-icon]').forEach(el => {
      if (el.dataset.iconMounted) return;
      const name = el.dataset.icon;
      const opts = {
        size: parseInt(el.dataset.size||'20',10),
        wrap: el.dataset.wrap || undefined,
        box:  parseInt(el.dataset.box||'40',10),
        color: el.dataset.color || undefined,
      };
      el.innerHTML = render(name, opts);
      el.dataset.iconMounted = '1';
    });
  }
  document.addEventListener('DOMContentLoaded', () => mount());
  // Re-mount after partials inject (they run on DOMContentLoaded too)
  setTimeout(() => mount(), 50);

  window.TPIcon = { render, mount, ICONS };
})();
