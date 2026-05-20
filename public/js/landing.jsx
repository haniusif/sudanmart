// Sudan Mart — Marketing Landing Page (KSA)
const I = window.SMIcon;

function Landing() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <div className="landing" dir="rtl">
      <TopNav scrolled={scrolled}/>
      <Hero/>
      <TrustStrip/>
      <Features/>
      <Categories/>
      <HowItWorks/>
      <AppShowcase/>
      <Sellers/>
      <Testimonials/>
      <Stats/>
      <Faq/>
      <DownloadCta/>
      <Footer/>
    </div>
  );
}

/* ───────── Nav ───────── */
function TopNav({ scrolled }) {
  const links = [
    { ar: 'الرئيسية',     en: 'Home' },
    { ar: 'كيف نعمل',     en: 'How it works' },
    { ar: 'الأقسام',     en: 'Categories' },
    { ar: 'للبائعين',    en: 'Sellers' },
    { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  ];
  return (
    <header className={`l-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="l-container l-nav-inner">
        <div className="l-brand">
          <SMLogo size={40}/>
          <div className="l-brand-text">
            <div className="l-brand-ar">سودان مارت</div>
            <div className="l-brand-en">SUDAN MART · KSA</div>
          </div>
        </div>
        <nav className="l-nav-links">
          {links.map((l, i) => (
            <a key={i} href={`#${['hero','how','cats','sellers','faq'][i]}`}>{l.ar}</a>
          ))}
        </nav>
        <div className="l-nav-cta">
          <a className="l-link-en">EN</a>
          <a className="l-btn l-btn-ghost" href="#download">تسجيل دخول</a>
          <a className="l-btn l-btn-primary" href="#download">حمّل التطبيق <I.download size={16} stroke="currentColor"/></a>
        </div>
      </div>
    </header>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section id="hero" className="l-hero">
      {/* bg layers */}
      <div className="l-hero-bg" aria-hidden>
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="wheat-bg" width="80" height="80" patternUnits="userSpaceOnUse">
              <ellipse cx="40" cy="40" rx="4" ry="10" fill="#D9B662" transform="rotate(28 40 40)" opacity=".5"/>
            </pattern>
            <radialGradient id="hero-glow" cx="80%" cy="20%">
              <stop offset="0" stopColor="#C9A24B" stopOpacity=".25"/>
              <stop offset="1" stopColor="#C9A24B" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#wheat-bg)" opacity=".25"/>
          <rect width="100%" height="100%" fill="url(#hero-glow)"/>
        </svg>
      </div>

      <div className="l-container l-hero-inner">
        <div className="l-hero-copy">
          <div className="l-eyebrow">
            <span className="l-eyebrow-dot"></span>
            متوفر الآن في المملكة العربية السعودية
          </div>
          <h1 className="l-hero-title">
            أصالة سودانية،<br/>
            <span className="l-accent">إلى باب بيتك</span> في المملكة.
          </h1>
          <p className="l-hero-sub">
            تطبيق متكامل يجمع لك أفضل المنتجات السودانية من البن وبهارات أم درمان إلى العطور والتمور والأقمشة — مباشرة من المزارع والحرفيين، مع توصيل سريع لجميع مدن المملكة.
          </p>

          <div className="l-hero-cta">
            <a href="#download" className="l-store l-store-google">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M3 3l18 9-18 9zM3 3v18M3 3l13 9-13 9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              <div>
                <div className="l-store-small">احصل عليه من</div>
                <div className="l-store-big">Google Play</div>
              </div>
            </a>
            <a href="#download" className="l-store l-store-apple">
              <I.apple size={22} stroke="currentColor"/>
              <div>
                <div className="l-store-small">حمّله من</div>
                <div className="l-store-big">App Store</div>
              </div>
            </a>
          </div>

          {/* mini trust row */}
          <div className="l-hero-meta">
            <div className="l-stack">
              <div className="l-stack-avatars">
                {['أ','م','س','ن'].map((c, i) => <div key={i} className="l-avi" style={{ background: ['#0F4D3A','#A98232','#8E3A22','#14654C'][i] }}>{c}</div>)}
              </div>
              <div>
                <div className="l-stack-num">+٢٤٬٠٠٠</div>
                <div className="l-stack-lbl">مستخدم سعودي يثق بنا</div>
              </div>
            </div>
            <div className="l-stack">
              <div className="l-stars">
                {[1,2,3,4,5].map(i => <I.star key={i} size={16}/>)}
              </div>
              <div>
                <div className="l-stack-num">٤٫٩ <span className="l-stack-of">/ ٥</span></div>
                <div className="l-stack-lbl">تقييم على المتاجر</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone mockup cluster */}
        <div className="l-hero-phones">
          <PhoneMock screen="cat" tilt="-8" offset="20" z={2}/>
          <PhoneMock screen="home" tilt="0"  offset="0" z={3} primary/>
          <PhoneMock screen="prod" tilt="8"  offset="20" z={2}/>

          {/* Floating chips */}
          <div className="l-float l-float-1">
            <div className="l-float-ic" style={{ background: '#C95A2F' }}><I.truck size={18} stroke="#fff"/></div>
            <div>
              <div className="l-float-title">شُحنت اليوم</div>
              <div className="l-float-sub">يصل غداً قبل ٦ مساءً</div>
            </div>
          </div>
          <div className="l-float l-float-2">
            <I.shield size={18} stroke="var(--success)"/>
            <div>
              <div className="l-float-title">دفع آمن</div>
              <div className="l-float-sub">مدى · فيزا · أبل باي</div>
            </div>
          </div>
          <div className="l-float l-float-3">
            <div className="l-float-ic" style={{ background: 'var(--accent)' }}>
              <span style={{ fontWeight: 800, color: '#2a1f08' }}>%</span>
            </div>
            <div>
              <div className="l-float-title">عروض رمضان</div>
              <div className="l-float-sub">حتى ٤٠٪ خصم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Phone mock ───────── */
function PhoneMock({ screen, tilt, offset, z, primary }) {
  return (
    <div className="l-phone" style={{ '--tilt': `${tilt}deg`, '--y': `${offset}px`, '--z': z, '--scale': primary ? 1 : 0.86 }}>
      <div className="l-phone-frame">
        <div className="l-phone-notch"></div>
        <div className="l-phone-screen">
          {screen === 'home' && <MiniHome/>}
          {screen === 'cat'  && <MiniCategories/>}
          {screen === 'prod' && <MiniProduct/>}
        </div>
        <div className="l-phone-bar"></div>
      </div>
    </div>
  );
}

function MiniHome() {
  return (
    <div className="mini-screen" dir="rtl">
      <div className="mini-top">
        <div style={{ width: 28, height: 28, borderRadius: 10, background: '#0F4D3A', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800 }}>م</div>
        <div style={{ flex: 1, paddingInlineStart: 8 }}>
          <div style={{ fontSize: 8, color: '#8B7D6E', fontWeight: 600 }}>توصيل إلى</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#1A1410' }}>الرياض — العليا</div>
        </div>
        <I.bell size={14} stroke="#1A1410"/>
      </div>
      <div className="mini-search">
        <I.search size={12} stroke="#8B7D6E"/>
        <span>ابحث عن بن، بهارات…</span>
      </div>
      <div className="mini-banner">
        <div className="mini-banner-tag">حصري</div>
        <div className="mini-banner-title">عروض رمضان</div>
        <div className="mini-banner-sub">حتى ٤٠٪ خصم</div>
        <div style={{ position: 'absolute', bottom: -8, insetInlineEnd: -10, opacity: .25 }}>
          <Glyph kind="cup" color="#fff" size={70}/>
        </div>
      </div>
      <div className="mini-section-title">تصفح الأقسام</div>
      <div className="mini-cats">
        {['coffee','spice','perfume','dates','textile'].map(c => (
          <div key={c} className="mini-cat">
            <div style={{ width: 36, height: 36, borderRadius: 11, background: CAT_COLORS[c].bg, display: 'grid', placeItems: 'center' }}>
              <Glyph kind={CAT_COLORS[c].glyph} color={CAT_COLORS[c].ink} size={22}/>
            </div>
          </div>
        ))}
      </div>
      <div className="mini-section-title">الأكثر مبيعاً</div>
      <div className="mini-prods">
        {PRODUCTS.slice(0, 2).map(p => (
          <div key={p.id} className="mini-prod">
            <div style={{ height: 50, borderRadius: 8, background: CAT_COLORS[p.cat].bg, display: 'grid', placeItems: 'center' }}>
              <Glyph kind={CAT_COLORS[p.cat].glyph} color={CAT_COLORS[p.cat].ink} size={30}/>
            </div>
            <div className="mini-prod-name">{p.ar.split('—')[0]}</div>
            <div className="mini-prod-price">{p.price} <span>ر.س</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniCategories() {
  return (
    <div className="mini-screen" dir="rtl" style={{ padding: 0 }}>
      <div style={{ padding: '10px 10px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <I.chev size={14} stroke="#1A1410"/>
        <div style={{ fontSize: 11, fontWeight: 800 }}>الأقسام</div>
        <I.search size={14} stroke="#1A1410"/>
      </div>
      <div style={{ display: 'flex', height: 'calc(100% - 32px)' }}>
        <div style={{ width: 60, background: '#F2EADA', padding: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {CATEGORIES.slice(0, 6).map((c, i) => (
            <div key={c.id} style={{ padding: 5, borderRadius: 6, background: i === 0 ? '#fff' : 'transparent', textAlign: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: CAT_COLORS[c.cat].bg, display: 'grid', placeItems: 'center', margin: '0 auto 2px' }}>
                <Glyph kind={CAT_COLORS[c.cat].glyph} color={CAT_COLORS[c.cat].ink} size={16}/>
              </div>
              <div style={{ fontSize: 7, fontWeight: 700, color: '#1A1410' }}>{c.ar}</div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 6 }}>
          <div style={{ height: 60, borderRadius: 10, background: '#3D2418', color: '#E5C97A', padding: 8, position: 'relative', overflow: 'hidden', marginBottom: 6 }}>
            <div style={{ fontSize: 7, opacity: .8 }}>COFFEE</div>
            <div style={{ fontSize: 11, fontWeight: 800 }}>بن وقهوة</div>
            <div style={{ position: 'absolute', insetInlineEnd: -6, bottom: -6, opacity: .3 }}>
              <Glyph kind="cup" color="#E5C97A" size={50}/>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
            {PRODUCTS.filter(p => p.cat === 'coffee').slice(0, 4).map(p => (
              <div key={p.id} style={{ background: '#fff', borderRadius: 6, padding: 3, border: '1px solid rgba(0,0,0,.05)' }}>
                <div style={{ height: 36, borderRadius: 5, background: '#3D2418', display: 'grid', placeItems: 'center' }}>
                  <Glyph kind="cup" color="#E5C97A" size={22}/>
                </div>
                <div style={{ fontSize: 7, fontWeight: 700, padding: 3, lineHeight: 1.2 }}>{p.ar.slice(0, 12)}…</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniProduct() {
  return (
    <div className="mini-screen" dir="rtl" style={{ padding: 0 }}>
      <div style={{ height: 110, background: '#3D2418', display: 'grid', placeItems: 'center', position: 'relative' }}>
        <Glyph kind="cup" color="#E5C97A" size={70}/>
        <div style={{ position: 'absolute', top: 8, insetInlineStart: 8, width: 24, height: 24, borderRadius: 8, background: '#fff', display: 'grid', placeItems: 'center' }}>
          <I.chev size={12} stroke="#1A1410"/>
        </div>
      </div>
      <div style={{ padding: 10, background: '#fff' }}>
        <div style={{ display: 'inline-block', fontSize: 7, background: '#ECF4EF', color: '#0F4D3A', padding: '2px 6px', borderRadius: 999, fontWeight: 700 }}>بيت البن ✓</div>
        <div style={{ fontSize: 11, fontWeight: 800, marginTop: 5, lineHeight: 1.3 }}>بن سوداني محمص</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 5 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#0F4D3A' }}>٣٨ <span style={{ fontSize: 8 }}>ر.س</span></div>
          <div style={{ fontSize: 9, color: '#B8AC9C', textDecoration: 'line-through' }}>٤٨</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4, fontSize: 8 }}>
          <I.star size={9}/> ٤٫٩ <span style={{ color: '#8B7D6E' }}>(٣١٢)</span>
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
          {['١٢٥','٢٥٠','٥٠٠'].map((s, i) => (
            <div key={s} style={{ flex: 1, fontSize: 7.5, fontWeight: 700, textAlign: 'center', padding: '5px 0', borderRadius: 5, background: i === 1 ? '#0F4D3A' : '#F2EADA', color: i === 1 ? '#fff' : '#4A3F35' }}>{s} جم</div>
          ))}
        </div>
        <button style={{ width: '100%', marginTop: 8, padding: 8, background: '#0F4D3A', color: '#fff', border: 0, borderRadius: 8, fontWeight: 700, fontSize: 9, fontFamily: 'inherit' }}>
          أضف للسلة · ٣٨ ر.س
        </button>
      </div>
    </div>
  );
}

/* ───────── Trust strip ───────── */
function TrustStrip() {
  const items = [
    'سمسا · SMSA',
    'البريد السعودي',
    'مدى',
    'فيزا · Visa',
    'ماستركارد · Mastercard',
    'Apple Pay',
    'tabby',
    'tamara',
  ];
  return (
    <section className="l-trust">
      <div className="l-container">
        <div className="l-trust-label">شركاء الشحن والدفع في المملكة</div>
        <div className="l-trust-row">
          {items.map(t => <div key={t} className="l-trust-item">{t}</div>)}
        </div>
      </div>
    </section>
  );
}

/* ───────── Features ───────── */
function Features() {
  const items = [
    { ic: I.shield, ar: 'أصلية ١٠٠٪', sub: 'كل المنتجات معتمدة، مع ضمان استرداد كامل خلال ١٤ يوم.', accent: 'var(--primary)' },
    { ic: I.truck,  ar: 'توصيل لكل المملكة', sub: 'الرياض، جدة، الدمام، مكة، المدينة وأكثر — خلال ٢٤ — ٤٨ ساعة.', accent: 'var(--terra-600)' },
    { ic: I.basket, ar: 'مباشر من المصدر', sub: 'من مزارع كردفان وحرفيي أم درمان بدون وسطاء، بأفضل سعر.', accent: 'var(--gold-700)' },
    { ic: I.card,   ar: 'دفع مرن وآمن', sub: 'مدى، فيزا، أبل باي، tabby وtamara — اشتر الآن وادفع لاحقاً.', accent: 'var(--green-500)' },
  ];
  return (
    <section className="l-section">
      <div className="l-container">
        <SectionHead eyebrow="WHY SUDAN MART" ar="لماذا سودان مارت؟" sub="منصة واحدة، آلاف المنتجات السودانية الأصيلة، تجربة مصممة خصيصاً للعميل السعودي."/>
        <div className="l-feat-grid">
          {items.map((it, i) => (
            <div key={i} className="l-feat">
              <div className="l-feat-icon" style={{ background: `color-mix(in oklab, ${it.accent} 14%, transparent)`, color: it.accent }}>
                <it.ic size={26} stroke={it.accent}/>
              </div>
              <div className="l-feat-title">{it.ar}</div>
              <div className="l-feat-sub">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Categories preview ───────── */
function Categories() {
  return (
    <section id="cats" className="l-section l-section-tinted">
      <div className="l-container">
        <SectionHead eyebrow="CATEGORIES" ar="أقسام تروي حكاية السودان" sub="من البن المُحمَّص في حلة الجبنة إلى عطور وبخور التلقاي، اختر ما تشتاق إليه."/>
        <div className="l-cat-grid">
          {CATEGORIES.slice(0, 6).map((c, i) => (
            <a key={c.id} className="l-cat" style={{ background: CAT_COLORS[c.cat].bg, color: CAT_COLORS[c.cat].ink, gridArea: ['a','b','c','d','e','f'][i] }}>
              <div className="l-cat-en">{c.en}</div>
              <div className="l-cat-ar">{c.ar}</div>
              <div className="l-cat-count">{c.count} منتج</div>
              <div className="l-cat-glyph">
                <Glyph kind={CAT_COLORS[c.cat].glyph} color={CAT_COLORS[c.cat].ink} size={180}/>
              </div>
              <div className="l-cat-link">تصفح القسم <I.forward size={14} stroke="currentColor"/></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── How it works ───────── */
function HowItWorks() {
  const steps = [
    { n: '٠١', ar: 'اختر منتجاتك', sub: 'تصفّح آلاف المنتجات السودانية في أكثر من ١٢ قسم.', ic: I.search },
    { n: '٠٢', ar: 'ادفع بأمان', sub: 'مدى، فيزا، أبل باي، أو tabby/tamara — اقسّط أو ادفع كاملاً.', ic: I.card },
    { n: '٠٣', ar: 'استلم بسرعة', sub: 'توصيل خلال ٢٤–٤٨ ساعة لجميع مدن المملكة الرئيسية.', ic: I.truck },
  ];
  return (
    <section id="how" className="l-section">
      <div className="l-container">
        <SectionHead eyebrow="HOW IT WORKS" ar="٣ خطوات لطلبك" sub="من التصفح إلى باب البيت، تجربة سلسة بدون تعقيد."/>
        <div className="l-how-grid">
          {steps.map((s, i) => (
            <div key={i} className="l-how">
              <div className="l-how-num">{s.n}</div>
              <div className="l-how-icon"><s.ic size={26} stroke="var(--primary)"/></div>
              <div className="l-how-title">{s.ar}</div>
              <div className="l-how-sub">{s.sub}</div>
              {i < 2 && <div className="l-how-arrow">
                <svg viewBox="0 0 60 12" width="60" height="12"><path d="M0 6h54M48 1l6 5-6 5" fill="none" stroke="var(--text-4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── App showcase ───────── */
function AppShowcase() {
  return (
    <section className="l-section l-showcase">
      <div className="l-container">
        <SectionHead eyebrow="THE APP" ar="تجربة تسوّق على راحتك" sub="واجهة عربية أولاً، تصميم نظيف، وأداء فائق — مصمم خصيصاً لعملاء المملكة."/>
        <div className="l-showcase-row">
          {[
            { ar: 'سلة ذكية', sub: 'إضافة سريعة، خصومات تلقائية، وكوبونات مستحقة.', screen: <MiniHome/> },
            { ar: 'تتبع لحظي', sub: 'تابع طلبك من التجهيز إلى التسليم على الخريطة.', screen: <MiniCategories/> },
            { ar: 'مفضّلات', sub: 'احفظ ما يعجبك ورجّع له لاحقاً، أو شاركه مع العائلة.', screen: <MiniProduct/> },
          ].map((s, i) => (
            <div key={i} className="l-showcase-card">
              <div className="l-showcase-phone">
                <div className="l-mini-frame">
                  <div className="l-mini-notch"></div>
                  <div className="l-mini-screen">{s.screen}</div>
                </div>
              </div>
              <div className="l-showcase-title">{s.ar}</div>
              <div className="l-showcase-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Sellers ───────── */
function Sellers() {
  return (
    <section id="sellers" className="l-sellers">
      <div className="l-container l-sellers-inner">
        <div className="l-sellers-copy">
          <div className="l-eyebrow l-eyebrow-light">
            <span className="l-eyebrow-dot l-eyebrow-dot-light"></span>
            للبائعين والحرفيين
          </div>
          <h2 className="l-sellers-title">
            بضاعتك السودانية،<br/>
            <span className="l-accent">سوق سعودي يقدّرها.</span>
          </h2>
          <p className="l-sellers-sub">
            افتح متجرك الإلكتروني في دقائق، أوصل منتجاتك لآلاف العملاء في كل مدن المملكة، ودع سودان مارت يتكفّل بالشحن والدفع والدعم.
          </p>
          <ul className="l-sellers-list">
            <li><I.check size={18} stroke="var(--accent)"/> عمولة منخفضة وشفافة</li>
            <li><I.check size={18} stroke="var(--accent)"/> أدوات إدارة كاملة من جوالك</li>
            <li><I.check size={18} stroke="var(--accent)"/> دعم تسويقي وحملات إعلانية</li>
            <li><I.check size={18} stroke="var(--accent)"/> دفعات أسبوعية إلى حسابك البنكي</li>
          </ul>
          <div className="l-sellers-cta">
            <a className="l-btn l-btn-gold">سجّل بائعاً <I.forward size={16}/></a>
            <a className="l-btn l-btn-outline-light">تعرّف أكثر</a>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="l-sellers-mock">
          <div className="l-dash">
            <div className="l-dash-bar">
              <div className="l-dash-dots">
                <span style={{ background: '#FF5F57' }}></span>
                <span style={{ background: '#FEBC2E' }}></span>
                <span style={{ background: '#28C840' }}></span>
              </div>
              <div className="l-dash-url">admin.sudanmart.sa</div>
            </div>
            <div className="l-dash-body">
              <div className="l-dash-side">
                {['الرئيسية','الطلبات','المنتجات','العملاء'].map((x, i) => (
                  <div key={x} className={`l-dash-link ${i === 0 ? 'active' : ''}`}>
                    <span style={{ width: 6, height: 6, background: i === 0 ? '#fff' : '#8B7D6E', borderRadius: 2 }}></span>
                    {x}
                  </div>
                ))}
              </div>
              <div className="l-dash-main">
                <div className="l-dash-kpis">
                  {[
                    { l: 'مبيعات اليوم', v: '٤٢٬٣٨٠', u: 'ر.س', c: '#0F4D3A' },
                    { l: 'طلبات', v: '٢٤٧', c: '#A98232' },
                    { l: 'عملاء جدد', v: '٤٢', c: '#B0492C' },
                  ].map(k => (
                    <div key={k.l} className="l-dash-kpi">
                      <div className="l-dash-kpi-l">{k.l}</div>
                      <div className="l-dash-kpi-v">{k.v} {k.u && <span>{k.u}</span>}</div>
                      <svg viewBox="0 0 80 20" width="100%" height="20"><path d="M0 16 L12 12 L24 14 L36 8 L48 10 L60 4 L80 6" fill="none" stroke={k.c} strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  ))}
                </div>
                <div className="l-dash-chart">
                  <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 10 }}>إيرادات الأسبوع</div>
                  <div className="l-dash-bars">
                    {[42, 60, 38, 72, 55, 88, 70].map((h, i) => (
                      <div key={i} className="l-dash-bar-item">
                        <div style={{ height: `${h}%`, background: i === 5 ? '#C9A24B' : '#0F4D3A', borderRadius: '4px 4px 0 0' }}/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials() {
  const reviews = [
    { user: 'سارة الزهراني', city: 'الرياض', text: 'البن السوداني كان فوق التوقعات، رائحته ملأت البيت! توصيل سريع جداً للرياض.', rating: 5 },
    { user: 'عبد الله القحطاني', city: 'جدة', text: 'وجدت كل احتياجات شهر رمضان من السودان في تطبيق واحد. التجربة سهلة جداً.', rating: 5 },
    { user: 'هند الشمري', city: 'الدمام', text: 'العطور والبخور أصلية ١٠٠٪. هذا التطبيق ملأ فراغاً كبيراً في السوق السعودي.', rating: 5 },
    { user: 'ناصر العتيبي', city: 'مكة', text: 'الدفع بـ tabby خلاني أطلب بمرونة. الجودة ممتازة والمنتجات سودانية أصلية.', rating: 5 },
  ];
  return (
    <section className="l-section">
      <div className="l-container">
        <SectionHead eyebrow="TESTIMONIALS" ar="ماذا يقول عملاؤنا" sub="آراء حقيقية من عملاء سعوديين جرّبوا التطبيق."/>
        <div className="l-rev-grid">
          {reviews.map((r, i) => (
            <div key={i} className="l-rev">
              <div className="l-rev-stars">
                {[1,2,3,4,5].map(j => <I.star key={j} size={14}/>)}
              </div>
              <p className="l-rev-text">"{r.text}"</p>
              <div className="l-rev-user">
                <div className="l-rev-avi" style={{ background: ['#0F4D3A','#A98232','#8E3A22','#14654C'][i] }}>{r.user[0]}</div>
                <div>
                  <div className="l-rev-name">{r.user}</div>
                  <div className="l-rev-city">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Stats banner ───────── */
function Stats() {
  return (
    <section className="l-stats">
      <div className="l-container l-stats-grid">
        {[
          { v: '+٢٤٬٠٠٠', l: 'مستخدم نشط' },
          { v: '+٢٥٠', l: 'بائع وحرفي' },
          { v: '+٥٬٠٠٠', l: 'منتج سوداني' },
          { v: '٤.٩', l: 'تقييم المتاجر' },
        ].map(s => (
          <div key={s.l} className="l-stat">
            <div className="l-stat-v">{s.v}</div>
            <div className="l-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function Faq() {
  const items = [
    { q: 'هل التطبيق متوفر في كل مدن المملكة؟', a: 'نعم، التوصيل متاح في جميع المدن الرئيسية والثانوية بالمملكة بما فيها الرياض، جدة، الدمام، الخبر، مكة، المدينة، الطائف، تبوك، وأبها.' },
    { q: 'كم تستغرق مدة التوصيل؟', a: '٢٤ ساعة للرياض والمدن الرئيسية، و٤٨ ساعة لباقي المدن. التوصيل السريع متاح أيضاً ليوم العمل التالي.' },
    { q: 'هل المنتجات سودانية أصلية؟', a: 'كل المنتجات تأتي مباشرة من مزارعين وحرفيين سودانيين معتمدين، مع شهادات منشأ وضمان استرداد ١٤ يوم.' },
    { q: 'ما طرق الدفع المتاحة؟', a: 'مدى، فيزا، ماستركارد، أبل باي، tabby، tamara، والدفع عند الاستلام (في مدن مختارة).' },
    { q: 'كيف أصبح بائعاً في التطبيق؟', a: 'سجّل في تبويب "للبائعين" — ستحتاج سجل تجاري سعودي وحساب بنكي، والباقي علينا.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="l-section l-section-tinted">
      <div className="l-container l-faq-wrap">
        <div>
          <div className="l-eyebrow"><span className="l-eyebrow-dot"></span>الأسئلة الشائعة</div>
          <h2 className="l-sec-title">إجابات سريعة<br/>لأهم استفساراتك.</h2>
          <p className="l-sec-sub">لم تجد ما تبحث عنه؟ تواصل معنا عبر واتساب وسنرد خلال دقائق.</p>
          <a className="l-btn l-btn-outline" style={{ marginTop: 14 }}><I.whatsapp size={18}/> تواصل واتساب</a>
        </div>
        <div className="l-faq-list">
          {items.map((it, i) => (
            <div key={i} className={`l-faq ${i === open ? 'open' : ''}`} onClick={() => setOpen(i === open ? -1 : i)}>
              <div className="l-faq-q">
                <span>{it.q}</span>
                <div className="l-faq-toggle">{i === open ? <I.minus size={18}/> : <I.plus size={18}/>}</div>
              </div>
              {i === open && <div className="l-faq-a">{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Download CTA ───────── */
function DownloadCta() {
  return (
    <section id="download" className="l-download">
      <svg className="l-download-bg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <defs>
          <pattern id="dl-pat" width="100" height="100" patternUnits="userSpaceOnUse">
            <ellipse cx="50" cy="50" rx="5" ry="14" fill="#E5C97A" transform="rotate(28 50 50)" opacity=".4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dl-pat)" opacity=".25"/>
      </svg>
      <div className="l-container l-download-inner">
        <div className="l-download-copy">
          <div className="l-eyebrow l-eyebrow-light"><span className="l-eyebrow-dot l-eyebrow-dot-light"></span>متاح الآن</div>
          <h2 className="l-download-title">
            حمّل سودان مارت اليوم،<br/>
            <span className="l-accent">واحصل على خصم ١٥٪</span> على أول طلب.
          </h2>
          <p className="l-download-sub">استخدم كود <span className="l-code">KSA2026</span> عند الدفع.</p>
          <div className="l-download-cta">
            <a className="l-store l-store-dark l-store-google">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M3 3l18 9-18 9zM3 3v18M3 3l13 9-13 9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              <div>
                <div className="l-store-small">احصل عليه من</div>
                <div className="l-store-big">Google Play</div>
              </div>
            </a>
            <a className="l-store l-store-dark l-store-apple">
              <I.apple size={22} stroke="currentColor"/>
              <div>
                <div className="l-store-small">حمّله من</div>
                <div className="l-store-big">App Store</div>
              </div>
            </a>
          </div>
          {/* QR */}
          <div className="l-qr-row">
            <div className="l-qr">
              <QRTile/>
            </div>
            <div>
              <div className="l-qr-title">امسح الكود</div>
              <div className="l-qr-sub">للتحميل المباشر من جوالك</div>
            </div>
          </div>
        </div>
        <div className="l-download-phone">
          <div className="l-phone l-phone-static">
            <div className="l-phone-frame">
              <div className="l-phone-notch"></div>
              <div className="l-phone-screen"><MiniHome/></div>
              <div className="l-phone-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QRTile() {
  // Fake but realistic-looking QR
  const cells = [];
  // 25x25 grid, deterministic pseudo-random
  const N = 21;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const inFinder = (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);
      const val = ((r * 7 + c * 13 + r * c) % 5) > 2;
      cells.push({ r, c, on: inFinder ? finderPixel(r, c, N) : val });
    }
  }
  function finderPixel(r, c, N) {
    const rr = r < 7 ? r : N - 1 - r;
    const cc = c < 7 ? c : N - 1 - c;
    if (rr === 0 || rr === 6) return true;
    if (cc === 0 || cc === 6) return true;
    if (rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4) return true;
    return false;
  }
  return (
    <svg viewBox={`0 0 ${N} ${N}`} width="100%" height="100%">
      {cells.map((x, i) => x.on && <rect key={i} x={x.c} y={x.r} width="1" height="1" fill="#1A1410"/>)}
      <g transform="translate(7 7)">
        <rect x="-1" y="-1" width="9" height="9" fill="#FAF6EE"/>
        <circle cx="3.5" cy="3.5" r="3" fill="#0F4D3A"/>
        <text x="3.5" y="5.2" textAnchor="middle" fontSize="4" fontWeight="800" fill="#E5C97A" fontFamily="Tajawal">SM</text>
      </g>
    </svg>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  const cols = [
    { t: 'التطبيق', items: ['الرئيسية', 'الأقسام', 'العروض', 'الأكثر مبيعاً'] },
    { t: 'الشركة', items: ['من نحن', 'الوظائف', 'المدونة', 'الصحافة'] },
    { t: 'الدعم', items: ['مركز المساعدة', 'الشحن والإرجاع', 'تواصل معنا', 'تتبع الطلب'] },
    { t: 'قانوني', items: ['شروط الاستخدام', 'سياسة الخصوصية', 'سياسة الإرجاع', 'الزكاة والضريبة'] },
  ];
  return (
    <footer className="l-footer">
      <div className="l-container l-footer-grid">
        <div className="l-footer-brand">
          <div className="l-brand">
            <SMLogo size={44}/>
            <div className="l-brand-text">
              <div className="l-brand-ar" style={{ color: '#fff' }}>سودان مارت</div>
              <div className="l-brand-en">SUDAN MART · KSA</div>
            </div>
          </div>
          <p className="l-footer-tag">منصة سعودية لتوصيل أصالة المنتجات السودانية إلى كل بيت في المملكة.</p>
          <div className="l-socials">
            {['x','instagram','tiktok','snapchat','youtube'].map(s => (
              <a key={s} className="l-social">
                <SocialIcon kind={s}/>
              </a>
            ))}
          </div>
        </div>
        {cols.map(c => (
          <div key={c.t} className="l-footer-col">
            <div className="l-footer-col-title">{c.t}</div>
            <ul>
              {c.items.map(i => <li key={i}><a>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="l-footer-bottom">
        <div className="l-container l-footer-bottom-inner">
          <div>© ٢٠٢٦ سودان مارت · جميع الحقوق محفوظة</div>
          <div className="l-footer-meta">
            <span>سجل تجاري: ١٠١٠٤٥٦٧٨٩</span>
            <span>·</span>
            <span>الرقم الضريبي: ٣٠٠١٢٣٤٥٦٧٨٠٠٠٣</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ kind }) {
  const p = { width: 18, height: 18, fill: 'currentColor' };
  if (kind === 'x') return <svg viewBox="0 0 24 24" {...p}><path d="M18 3h3l-7 8 8 10h-7l-5-7-6 7H1l8-9L1 3h7l4 6 6-6z"/></svg>;
  if (kind === 'instagram') return <svg viewBox="0 0 24 24" {...p}><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5-3a1 1 0 110 2 1 1 0 010-2z"/></svg>;
  if (kind === 'tiktok') return <svg viewBox="0 0 24 24" {...p}><path d="M14 3h3a5 5 0 005 5v3a8 8 0 01-5-2v6a6 6 0 11-6-6v3a3 3 0 103 3V3z"/></svg>;
  if (kind === 'snapchat') return <svg viewBox="0 0 24 24" {...p}><path d="M12 2c4 0 5 3 5 6v3l3 1-1 2-3 1c0 1 1 2 3 3-1 1-2 2-4 2l-1 2-2-1-2 1-1-2c-2 0-3-1-4-2 2-1 3-2 3-3l-3-1-1-2 3-1V8c0-3 1-6 5-6z"/></svg>;
  if (kind === 'youtube') return <svg viewBox="0 0 24 24" {...p}><path d="M22 7a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7zm-12 9V8l6 4-6 4z"/></svg>;
  return null;
}

/* ───────── Helpers ───────── */
function SectionHead({ eyebrow, ar, sub, light }) {
  return (
    <div className={`l-sec-head ${light ? 'light' : ''}`}>
      <div className={`l-eyebrow ${light ? 'l-eyebrow-light' : ''}`}>
        <span className={`l-eyebrow-dot ${light ? 'l-eyebrow-dot-light' : ''}`}></span>{eyebrow}
      </div>
      <h2 className="l-sec-title">{ar}</h2>
      {sub && <p className="l-sec-sub">{sub}</p>}
    </div>
  );
}

window.Landing = Landing;
ReactDOM.createRoot(document.getElementById('root')).render(<Landing/>);
