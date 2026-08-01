(function () {
  'use strict';

  var CONFIG = {
    messenger : '#',             // link Messenger page — điền sau
    zalo      : '#',             // link Zalo OA hoặc số — điền sau
    phone     : '#',             // số điện thoại — điền sau
    email     : '#'              // địa chỉ email — điền sau
  };

  /* ── SVG icons ── */
  var SVG = {
    chat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',

    /* Messenger */
    messenger: '<svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0084FF"/><path d="M18 6C11.373 6 6 11.02 6 17.2c0 3.48 1.743 6.593 4.474 8.64V30l4.094-2.25C15.557 28.24 16.763 28.4 18 28.4c6.627 0 12-5.02 12-11.2S24.627 6 18 6zm1.2 15.08l-3.054-3.26-5.964 3.26 6.56-6.96 3.128 3.26 5.888-3.26-6.558 6.96z" fill="#fff"/></svg>',

    /* Zalo */
    zalo: '<svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0068FF"/><text x="18" y="22.5" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="11" fill="#fff">Zalo</text></svg>',

    /* Phone */
    phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>',

    /* Email */
    email: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
  };

  /* ── Build HTML ── */
  var html = [
    '<div id="cw-root">',

      /* Items (shown when open) */
      '<div id="cw-items">',

        '<a class="cw-item" href="' + CONFIG.messenger + '" target="_blank" rel="noopener" aria-label="Chat Messenger">',
          '<span class="cw-label">Messenger</span>',
          '<span class="cw-btn cw-btn--messenger">' + SVG.messenger + '</span>',
        '</a>',

        '<a class="cw-item" href="' + CONFIG.zalo + '" target="_blank" rel="noopener" aria-label="Chat Zalo">',
          '<span class="cw-label">Zalo</span>',
          '<span class="cw-btn cw-btn--zalo">' + SVG.zalo + '</span>',
        '</a>',

        '<a class="cw-item" href="' + CONFIG.phone + '" aria-label="Gọi điện">',
          '<span class="cw-label">Gọi ngay</span>',
          '<span class="cw-btn cw-btn--phone">' + SVG.phone + '</span>',
        '</a>',

        '<a class="cw-item" href="' + CONFIG.email + '" aria-label="Gửi email">',
          '<span class="cw-label">Email</span>',
          '<span class="cw-btn cw-btn--email">' + SVG.email + '</span>',
        '</a>',

      '</div>',

      /* Toggle button */
      '<button id="cw-toggle" aria-label="Liên hệ" aria-expanded="false">',
        '<span class="cw-icon-chat">'  + SVG.chat  + '</span>',
        '<span class="cw-icon-close">' + SVG.close + '</span>',
      '</button>',

    '</div>'
  ].join('');

  /* ── Inject vào body ── */
  document.body.insertAdjacentHTML('beforeend', html);

  /* ── Toggle logic ── */
  var root   = document.getElementById('cw-root');
  var toggle = document.getElementById('cw-toggle');

  toggle.addEventListener('click', function () {
    var isOpen = root.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', function (e) {
    if (root.classList.contains('open') && !root.contains(e.target)) {
      root.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

})();
