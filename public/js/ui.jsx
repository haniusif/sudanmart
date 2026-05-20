// Sudan Mart — shared UI primitives + brand
// Logo, product card, bilingual heading, sheet, etc.

const I = window.SMIcon;

/* ───────────────── Logo ─────────────────
   Stylized "SM" mark: a wheat/coffee-bean drop in a circle.
   Inspired by Sudanese flag stripes (red/white/black/green). */
function SMLogo({ size = 56, mono = false, color }) {
  const c = color || 'var(--primary)';
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <defs>
        <linearGradient id={`sm-g-${size}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--green-700)"/>
          <stop offset="1" stopColor="var(--green-900)"/>
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill={mono ? 'none' : `url(#sm-g-${size})`} stroke={mono ? c : 'none'} strokeWidth="2.5"/>
      {/* Wheat/spice motif */}
      <g transform="translate(40 40)">
        {/* center stem */}
        <path d="M0 -22 L0 22" stroke={mono ? c : 'var(--gold-300)'} strokeWidth="2.5" strokeLinecap="round"/>
        {/* grains */}
        {[-16, -8, 0, 8, 16].map((y, i) => (
          <g key={i}>
            <ellipse cx="-7" cy={y} rx="6" ry="3.5" fill={mono ? c : 'var(--gold-500)'} transform={`rotate(-25 -7 ${y})`} opacity={0.92}/>
            <ellipse cx="7" cy={y} rx="6" ry="3.5" fill={mono ? c : 'var(--gold-500)'} transform={`rotate(25 7 ${y})`} opacity={0.92}/>
          </g>
        ))}
      </g>
    </svg>
  );
}

function SMWordmark({ light = false }) {
  const c = light ? '#fff' : 'var(--text)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <div style={{ fontFamily: 'Tajawal', fontWeight: 800, fontSize: 26, color: c, letterSpacing: -0.5 }}>سودان مارت</div>
      <div style={{ fontFamily: 'Tajawal', fontWeight: 600, fontSize: 11, color: light ? 'rgba(255,255,255,.7)' : 'var(--text-3)', letterSpacing: 4, textTransform: 'uppercase' }}>Sudan Mart</div>
    </div>
  );
}

/* ───────────────── Bilingual heading ───────────────── */
function BiHead({ ar, en, action, onAction }) {
  return (
    <div className="sec-title">
      <div>
        <h3 className="ar">{ar}</h3>
        <div className="en">{en}</div>
      </div>
      {action && <a onClick={onAction}>{action}</a>}
    </div>
  );
}

/* ───────────────── Product image placeholder ─────────────────
   Distinct per-category visual: solid warm color + glyph that hints
   at the product. No emoji. */
const CAT_COLORS = {
  coffee:   { bg: '#3D2418', ink: '#E5C97A', glyph: 'cup' },
  spice:    { bg: '#B0492C', ink: '#FAF6EE', glyph: 'spice' },
  perfume:  { bg: '#1F2A26', ink: '#D9B662', glyph: 'bottle' },
  food:     { bg: '#E5C97A', ink: '#5A3B16', glyph: 'jar' },
  textile:  { bg: '#0F4D3A', ink: '#E5C97A', glyph: 'fabric' },
  craft:    { bg: '#D6C5A4', ink: '#5A3B16', glyph: 'craft' },
  dates:    { bg: '#5A3B16', ink: '#E5C97A', glyph: 'jar' },
  tea:      { bg: '#8E3A22', ink: '#FAF6EE', glyph: 'cup' },
  beans:    { bg: '#2F4A36', ink: '#E5C97A', glyph: 'bag' },
  sweets:   { bg: '#F4D8C9', ink: '#8E3A22', glyph: 'box' },
};

function ProductArt({ cat = 'coffee', label, size = 'md', tag }) {
  const c = CAT_COLORS[cat] || CAT_COLORS.coffee;
  const h = size === 'lg' ? 220 : size === 'sm' ? 110 : 150;
  return (
    <div style={{ position: 'relative', height: h, borderRadius: 18, background: c.bg, overflow: 'hidden' }}>
      {/* Backdrop texture */}
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, opacity: .12 }}>
        <defs>
          <pattern id={`dot-${cat}-${h}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r=".6" fill={c.ink}/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#dot-${cat}-${h})`}/>
      </svg>
      {/* Glyph */}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
        <Glyph kind={c.glyph} color={c.ink} size={h * 0.55} />
      </div>
      {/* Tag (e.g., -20%) */}
      {tag && (
        <div style={{ position: 'absolute', top: 10, insetInlineEnd: 10, background: 'var(--terra-600)', color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 8px', borderRadius: 8 }}>{tag}</div>
      )}
      {label && (
        <div style={{ position: 'absolute', bottom: 10, insetInlineStart: 12, color: c.ink, fontSize: 11, fontWeight: 700, opacity: .8, letterSpacing: 0.5, textTransform: 'uppercase' }}>{label}</div>
      )}
    </div>
  );
}

function Glyph({ kind, color, size = 80 }) {
  const stroke = color;
  const s = { width: size, height: size };
  switch (kind) {
    case 'cup': return (
      <svg viewBox="0 0 80 80" {...s}>
        <path d="M18 30h44v22a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14z" fill="none" stroke={stroke} strokeWidth="3"/>
        <path d="M62 34h6a6 6 0 0 1 0 12h-6" fill="none" stroke={stroke} strokeWidth="3"/>
        <path d="M30 18s-2 4 0 7M40 14s-2 4 0 7M50 18s-2 4 0 7" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    );
    case 'spice': return (
      <svg viewBox="0 0 80 80" {...s}>
        <path d="M14 50c8-6 14-6 26-6s18 0 26 6v8c0 4-4 8-26 8s-26-4-26-8z" fill={stroke} opacity=".4"/>
        <ellipse cx="40" cy="48" rx="26" ry="8" fill={stroke}/>
        <circle cx="30" cy="44" r="2.2" fill={stroke} opacity=".5"/>
        <circle cx="42" cy="46" r="2.2" fill={stroke} opacity=".5"/>
        <circle cx="50" cy="43" r="1.8" fill={stroke} opacity=".5"/>
      </svg>
    );
    case 'bottle': return (
      <svg viewBox="0 0 80 80" {...s}>
        <path d="M34 14h12v8c4 2 8 6 8 12v22a8 8 0 0 1-8 8H34a8 8 0 0 1-8-8V34c0-6 4-10 8-12z" fill="none" stroke={stroke} strokeWidth="3"/>
        <rect x="36" y="40" width="8" height="14" fill={stroke}/>
        <path d="M32 8h16" stroke={stroke} strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
    case 'jar': return (
      <svg viewBox="0 0 80 80" {...s}>
        <rect x="22" y="14" width="36" height="8" rx="2" fill={stroke}/>
        <path d="M18 28h44v32a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8z" fill="none" stroke={stroke} strokeWidth="3"/>
        <path d="M26 44h28" stroke={stroke} strokeWidth="3"/>
      </svg>
    );
    case 'fabric': return (
      <svg viewBox="0 0 80 80" {...s}>
        <path d="M12 20l12 6 12-6 12 6 12-6 8 4v40l-8 4-12-6-12 6-12-6-12 6z" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M12 36l12 6 12-6 12 6 12-6 8 4" fill="none" stroke={stroke} strokeWidth="2.5"/>
        <path d="M12 52l12 6 12-6 12 6 12-6 8 4" fill="none" stroke={stroke} strokeWidth="2.5"/>
      </svg>
    );
    case 'craft': return (
      <svg viewBox="0 0 80 80" {...s}>
        <path d="M16 56l24-32 24 32z" fill="none" stroke={stroke} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M28 56l12-16 12 16" fill="none" stroke={stroke} strokeWidth="2.5"/>
        <circle cx="40" cy="20" r="3" fill={stroke}/>
      </svg>
    );
    case 'bag': return (
      <svg viewBox="0 0 80 80" {...s}>
        <path d="M22 16l-4 8v44h44V24l-4-8z" fill="none" stroke={stroke} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M18 24h44M30 36c0 6 4 10 10 10s10-4 10-10" fill="none" stroke={stroke} strokeWidth="2.5"/>
      </svg>
    );
    case 'box': return (
      <svg viewBox="0 0 80 80" {...s}>
        <path d="M14 26l26-12 26 12-26 12z" fill="none" stroke={stroke} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M14 26v28l26 12V38M66 26v28L40 66" fill="none" stroke={stroke} strokeWidth="3" strokeLinejoin="round"/>
      </svg>
    );
    default: return null;
  }
}

/* ───────────────── Product card ───────────────── */
function ProductCard({ p, w = 168, onClick, onFav, fav = false }) {
  return (
    <div onClick={onClick} style={{ minWidth: w, width: w, background: 'var(--surface)', borderRadius: 22, padding: 10, border: '1px solid var(--border)', cursor: 'pointer' }}>
      <div style={{ position: 'relative' }}>
        <ProductArt cat={p.cat} tag={p.tag} size="sm" />
        <button onClick={(e) => { e.stopPropagation(); onFav && onFav(); }} style={{ position: 'absolute', top: 8, insetInlineStart: 8, width: 30, height: 30, borderRadius: 999, border: 0, background: 'rgba(255,255,255,.9)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          {fav ? <I.heart_f size={16} fill="#C2392C"/> : <I.heart size={16} stroke="#1A1410"/>}
        </button>
      </div>
      <div style={{ padding: '10px 4px 4px' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, marginBottom: 2, height: 34, overflow: 'hidden' }}>{p.ar}</div>
        <div style={{ fontSize: 10.5, color: 'var(--text-3)', marginBottom: 8 }}>{p.en}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--primary)' }}>{p.price} <span style={{ fontSize: 10, fontWeight: 600 }}>ر.س</span></div>
          {p.old && <div style={{ fontSize: 11, color: 'var(--text-4)', textDecoration: 'line-through' }}>{p.old}</div>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <I.star size={12} />
            <span style={{ fontSize: 11, fontWeight: 700 }}>{p.rating}</span>
            <span style={{ fontSize: 10.5, color: 'var(--text-3)' }}>({p.reviews})</span>
          </div>
          <button style={{ width: 28, height: 28, borderRadius: 10, border: 0, background: 'var(--primary)', color: 'var(--primary-ink)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
            <I.plus size={14}/>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Quick header for inner screens ───────────────── */
function ScreenHeader({ title, en, onBack, right, extra }) {
  return (
    <div style={{ paddingTop: 54, paddingInline: 16, paddingBottom: 8, position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: 14, border: '1px solid var(--border)', background: 'var(--surface)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <I.chev size={18} stroke="var(--text)"/>
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 800 }}>{title}</div>
          {en && <div style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 0.4, textTransform: 'uppercase' }}>{en}</div>}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>{right}</div>
      </div>
      {extra}
    </div>
  );
}

/* ───────────────── Bottom tab bar ───────────────── */
function TabBar({ active, onChange, badges = {} }) {
  const items = [
    { id: 'home', icon: I.home, label: 'الرئيسية' },
    { id: 'cats', icon: I.grid, label: 'الأقسام' },
    { id: 'cart', icon: I.bag,  label: 'السلة' },
    { id: 'orders', icon: I.receipt, label: 'الطلبات' },
    { id: 'profile', icon: I.user, label: 'حسابي' },
  ];
  return (
    <div className="tab-bar">
      {items.map(it => {
        const isActive = it.id === active;
        return (
          <div key={it.id} className={`tab-item ${isActive ? 'active' : ''}`} onClick={() => onChange(it.id)}>
            <div style={{ position: 'relative', height: 26, display: 'grid', placeItems: 'center' }}>
              <it.icon size={22} stroke={isActive ? 'var(--primary)' : 'var(--text-3)'} sw={isActive ? 2.1 : 1.7}/>
              {badges[it.id] > 0 && <span className="badge">{badges[it.id]}</span>}
            </div>
            <div style={{ marginTop: 2 }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { SMLogo, SMWordmark, BiHead, ProductArt, Glyph, ProductCard, ScreenHeader, TabBar, CAT_COLORS });
