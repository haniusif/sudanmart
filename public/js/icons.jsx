// Sudan Mart — icon set (stroke 1.8, 24px)
// Single source so all screens share the same vocabulary.

const Icon = ({ d, size = 22, stroke = 'currentColor', fill = 'none', sw = 1.8, children, vb = '0 0 24 24' }) => (
  <svg width={size} height={size} viewBox={vb} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);

const I = {
  home:    (p) => <Icon {...p}><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></Icon>,
  grid:    (p) => <Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/></Icon>,
  bag:     (p) => <Icon {...p}><path d="M5 8h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></Icon>,
  heart:   (p) => <Icon {...p}><path d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6a4.6 4.6 0 0 1 8.8-1.7 4.6 4.6 0 0 1 8.8 1.7z"/></Icon>,
  user:    (p) => <Icon {...p}><circle cx="12" cy="8" r="3.6"/><path d="M4 21a8 8 0 0 1 16 0"/></Icon>,
  search:  (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></Icon>,
  bell:    (p) => <Icon {...p}><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2H4.5z"/><path d="M10 21a2 2 0 0 0 4 0"/></Icon>,
  back:    (p) => <Icon {...p}><path d="M9 6l-6 6 6 6"/><path d="M3 12h18"/></Icon>,
  forward: (p) => <Icon {...p}><path d="M15 6l6 6-6 6"/><path d="M21 12H3"/></Icon>,
  chev:    (p) => <Icon {...p}><path d="M9 6l6 6-6 6"/></Icon>, // RTL: points "next"
  plus:    (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  minus:   (p) => <Icon {...p}><path d="M5 12h14"/></Icon>,
  trash:   (p) => <Icon {...p}><path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/></Icon>,
  truck:   (p) => <Icon {...p}><rect x="2" y="7" width="11" height="9" rx="1.5"/><path d="M13 10h5l3 3v3h-8z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></Icon>,
  pin:     (p) => <Icon {...p}><path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></Icon>,
  card:    (p) => <Icon {...p}><rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M2.5 10h19"/></Icon>,
  star:    (p) => <Icon size={p?.size||16} stroke="none" fill={p?.fill||'#D9B662'} vb="0 0 24 24"><path d="M12 2l3 6.5L22 9.5l-5 4.8 1.2 7-6.2-3.4L5.8 21.3 7 14.3l-5-4.8 7-1z"/></Icon>,
  heart_f: (p) => <Icon {...p} fill={p?.fill||'currentColor'} stroke={p?.stroke||'none'}><path d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6a4.6 4.6 0 0 1 8.8-1.7 4.6 4.6 0 0 1 8.8 1.7z"/></Icon>,
  share:   (p) => <Icon {...p}><circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M8 11l7-4M8 13l7 4"/></Icon>,
  filter:  (p) => <Icon {...p}><path d="M3 5h18M6 12h12M10 19h4"/></Icon>,
  check:   (p) => <Icon {...p}><path d="M5 12l4 4 10-10"/></Icon>,
  close:   (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>,
  flame:   (p) => <Icon {...p}><path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C9 9 9 7 9 7s-2 2-2 5a5 5 0 0 0 10 0c0-5-5-9-5-9z"/></Icon>,
  clock:   (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
  globe:   (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></Icon>,
  shield:  (p) => <Icon {...p}><path d="M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z"/></Icon>,
  receipt: (p) => <Icon {...p}><path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 7h6M9 11h6M9 15h4"/></Icon>,
  settings:(p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .4 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.4 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .4-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.4-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.4H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.4 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></Icon>,
  mic:     (p) => <Icon {...p}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></Icon>,
  cam:     (p) => <Icon {...p}><path d="M4 8h4l2-2h4l2 2h4v11H4z"/><circle cx="12" cy="13" r="3.5"/></Icon>,
  fire:    (p) => <Icon {...p} fill={p?.fill||'#C95A2F'} stroke="none"><path d="M12 2c1 3-1 4-1 6 0 1 1 2 2 2 0-2 2-3 2-5 0 0 4 3 4 8a7 7 0 1 1-14 0c0-3 2-5 3-6 0 2 1 3 2 3 1-3 2-5 2-8z"/></Icon>,
  gift:    (p) => <Icon {...p}><rect x="3" y="9" width="18" height="11" rx="1.5"/><path d="M3 13h18M12 9v11M8 9a3 3 0 0 1 0-6c2 0 4 6 4 6S10 9 8 9zM16 9a3 3 0 0 0 0-6c-2 0-4 6-4 6s2 0 4 0z"/></Icon>,
  copy:    (p) => <Icon {...p}><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></Icon>,
  whatsapp:(p) => <Icon {...p} stroke="none" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm5.6 14.2c-.2.6-1.3 1.2-1.8 1.2s-1.2.1-1.9-.1c-.4-.2-1-.4-1.7-.8-3-1.3-5-4.3-5.1-4.5s-1.3-1.7-1.3-3.2 .8-2.3 1-2.6.6-.4.8-.4h.6c.2 0 .5 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6s.7 1.2 1.5 1.9c1 .9 1.9 1.2 2.1 1.3s.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l1.8.9c.2.1.4.2.5.3 0 .1 0 .8-.2 1.5z"/></Icon>,
  apple:   (p) => <Icon {...p} stroke="none" fill="currentColor"><path d="M16.4 12.7c0-2.4 2-3.6 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.9 .9-3.7 .9s-1.9-.9-3.2-.8c-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.7c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.6s-2.6-1-2.6-3.9zM14 5.8c.7-.8 1.1-1.9 1-3.1-1 0-2.1 .7-2.8 1.5-.6 .7-1.2 1.8-1 2.9 1.1 .1 2.2-.5 2.8-1.3z"/></Icon>,
  google:  (p) => <Icon {...p} stroke="none" vb="0 0 24 24"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.3-1 2.4-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5z" fill="#4285F4"/><path d="M12 22c2.7 0 5-1 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3v2.6A10 10 0 0 0 12 22z" fill="#34A853"/><path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9z" fill="#FBBC05"/><path d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9C16.9 3 14.7 2 12 2A10 10 0 0 0 3 7.5l3.4 2.6c.8-2.4 3-4 5.6-4z" fill="#EA4335"/></Icon>,
  facebook:(p) => <Icon {...p} stroke="none" fill="#1877F2"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z"/></Icon>,
  qr:      (p) => <Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14h1M14 20h3v1h-3zM20 17h1v4"/></Icon>,
  scan:    (p) => <Icon {...p}><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16"/></Icon>,
  eye:     (p) => <Icon {...p}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></Icon>,
  trend_up:(p) => <Icon {...p}><path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/></Icon>,
  download:(p) => <Icon {...p}><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></Icon>,
  more:    (p) => <Icon {...p}><circle cx="12" cy="6" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="18" r="1.6"/></Icon>,
  edit:    (p) => <Icon {...p}><path d="M4 20h4l11-11-4-4L4 16zM14 6l4 4"/></Icon>,
  logout:  (p) => <Icon {...p}><path d="M15 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4"/><path d="M10 17l5-5-5-5M15 12H3"/></Icon>,
  lang:    (p) => <Icon {...p}><path d="M3 5h11M9 3v2c0 5-3 9-7 11M5 9c0 5 5 8 11 9M14 21l4-9 4 9M16 17h4"/></Icon>,
  basket:  (p) => <Icon {...p}><path d="M3 9h18l-2 11a2 2 0 0 1-2 1.7H7a2 2 0 0 1-2-1.7L3 9z"/><path d="M8 9l4-6 4 6M10 14v3M14 14v3"/></Icon>,
  fav:     (p) => <Icon {...p}><path d="M9 11l1.8 4 4.2-7 4.2 7L21 11M3 19h18"/></Icon>,
};

window.SMIcon = I;
window.Icon = Icon;
