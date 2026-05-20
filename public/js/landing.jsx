// Sudan Mart — Marketing Landing Page (KSA)
const I = window.SMIcon;

const LangContext = React.createContext('ar');
const useLang = () => React.useContext(LangContext);
const tr = (lang, ar, en) => lang === 'ar' ? ar : en;

function Landing() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('sm.lang') || 'ar'; } catch { return 'ar'; }
  });

  React.useEffect(() => {
    try { localStorage.setItem('sm.lang', lang); } catch {}
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LangContext.Provider value={lang}>
    <div className={`landing landing-${lang}`} dir={dir}>
      <TopNav scrolled={scrolled} lang={lang} setLang={setLang}/>
      <Hero/>
      <TrustStrip/>
      <Story/>
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
    </LangContext.Provider>
  );
}

/* ───────── Nav ───────── */
function TopNav({ scrolled, lang, setLang }) {
  const links = [
    { ar: 'الرئيسية',     en: 'Home' },
    { ar: 'كيف نعمل',     en: 'How it works' },
    { ar: 'الأقسام',     en: 'Categories' },
    { ar: 'للبائعين',    en: 'For sellers' },
    { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  ];
  const getApp = tr(lang, 'حمّل التطبيق', 'Get the app');
  const toggleLabel = lang === 'ar' ? 'EN' : 'AR';
  const brandAr = tr(lang, 'سودان مارت', 'Sudan Mart');
  return (
    <header className={`l-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="l-container l-nav-inner">
        <div className="l-brand">
          <SMLogo size={40}/>
          <div className="l-brand-text">
            <div className="l-brand-ar">{brandAr}</div>
            <div className="l-brand-en">S U D A N · M A R T</div>
          </div>
        </div>
        <nav className="l-nav-links">
          {links.map((l, i) => (
            <a key={i} href={`#${['hero','how','cats','sellers','faq'][i]}`}>{lang === 'ar' ? l.ar : l.en}</a>
          ))}
        </nav>
        <div className="l-nav-cta">
          <a className="l-link-en" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} style={{ cursor: 'pointer' }}>{toggleLabel}</a>
          <a className="l-btn l-btn-primary" href="#download">{getApp} <I.download size={16} stroke="currentColor"/></a>
        </div>
      </div>
    </header>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  const lang = useLang();
  const t = lang === 'ar' ? {
    eyebrow: 'متوفر الآن في المملكة العربية السعودية',
    title: <>أصالة <span className="l-script">سودانية</span>،<br/>إلى باب بيتك في <span className="l-script">المملكة</span>.</>,
    sub: 'الأصالة وعد، والجودة قسم، والسرعة احترام. نحن لسنا متجراً، نحن جسرٌ بين مزارع كردفان وسوق أم درمان، وبين بيتك في الرياض، جدة، الدمام.',
    getOn: 'احصل عليه من', downloadOn: 'حمّله من',
    users: '+٢٤٬٠٠٠', usersLbl: 'مستخدم سعودي يثق بنا',
    rating: '٤٫٩', ratingOf: '/ ٥', ratingLbl: 'تقييم على المتاجر',
    float1T: 'شُحنت اليوم',    float1S: 'يصل غداً قبل ٦ مساءً',
    float2T: 'دفع آمن',         float2S: 'مدى · فيزا · أبل باي',
    float3T: 'عروض رمضان',     float3S: 'حتى ٤٠٪ خصم',
  } : {
    eyebrow: 'Now available across Saudi Arabia',
    title: <><span className="l-script">Sudanese</span> authenticity,<br/>at your <span className="l-script">doorstep</span> in KSA.</>,
    sub: 'Authenticity is a promise, quality an oath, speed a sign of respect. We are not a store — we are a bridge between Kordofan farms, Omdurman markets, and your home in Riyadh, Jeddah, Dammam.',
    getOn: 'Get it on', downloadOn: 'Download on the',
    users: '+24,000', usersLbl: 'Saudi users trust us',
    rating: '4.9', ratingOf: '/ 5', ratingLbl: 'App store rating',
    float1T: 'Shipped today',    float1S: 'Arrives tomorrow before 6 PM',
    float2T: 'Secure checkout',  float2S: 'mada · Visa · Apple Pay',
    float3T: 'Ramadan deals',    float3S: 'Up to 40% off',
  };
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
            {t.eyebrow}
          </div>
          <h1 className="l-hero-title">{t.title}</h1>
          <p className="l-hero-sub">{t.sub}</p>

          <div className="l-hero-cta">
            <a href="#download" className="l-store l-store-google">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M3 3l18 9-18 9zM3 3v18M3 3l13 9-13 9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              <div>
                <div className="l-store-small">{t.getOn}</div>
                <div className="l-store-big">Google Play</div>
              </div>
            </a>
            <a href="#download" className="l-store l-store-apple">
              <I.apple size={22} stroke="currentColor"/>
              <div>
                <div className="l-store-small">{t.downloadOn}</div>
                <div className="l-store-big">App Store</div>
              </div>
            </a>
          </div>

          {/* mini trust row */}
          <div className="l-hero-meta">
            <div className="l-stack">
              <div className="l-stack-avatars">
                {(lang === 'ar' ? ['أ','م','س','ن'] : ['A','M','S','N']).map((c, i) => <div key={i} className="l-avi" style={{ background: ['#0F4D3A','#A98232','#8E3A22','#14654C'][i] }}>{c}</div>)}
              </div>
              <div>
                <div className="l-stack-num">{t.users}</div>
                <div className="l-stack-lbl">{t.usersLbl}</div>
              </div>
            </div>
            <div className="l-stack">
              <div className="l-stars">
                {[1,2,3,4,5].map(i => <I.star key={i} size={16}/>)}
              </div>
              <div>
                <div className="l-stack-num">{t.rating} <span className="l-stack-of">{t.ratingOf}</span></div>
                <div className="l-stack-lbl">{t.ratingLbl}</div>
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
              <div className="l-float-title">{t.float1T}</div>
              <div className="l-float-sub">{t.float1S}</div>
            </div>
          </div>
          <div className="l-float l-float-2">
            <I.shield size={18} stroke="var(--success)"/>
            <div>
              <div className="l-float-title">{t.float2T}</div>
              <div className="l-float-sub">{t.float2S}</div>
            </div>
          </div>
          <div className="l-float l-float-3">
            <div className="l-float-ic" style={{ background: 'var(--accent)' }}>
              <span style={{ fontWeight: 800, color: '#2a1f08' }}>%</span>
            </div>
            <div>
              <div className="l-float-title">{t.float3T}</div>
              <div className="l-float-sub">{t.float3S}</div>
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
  const lang = useLang();
  const label = tr(lang, 'شركاء الشحن والدفع في المملكة', 'Shipping & payment partners in KSA');
  const items = lang === 'ar' ? [
    'سمسا · SMSA', 'البريد السعودي', 'مدى',
    'فيزا · Visa', 'ماستركارد · Mastercard', 'Apple Pay', 'tabby', 'tamara',
  ] : [
    'SMSA', 'Saudi Post', 'mada', 'Visa', 'Mastercard', 'Apple Pay', 'tabby', 'tamara',
  ];
  return (
    <section className="l-trust">
      <div className="l-container">
        <div className="l-trust-label">{label}</div>
        <div className="l-trust-row">
          {items.map(it => <div key={it} className="l-trust-item">{it}</div>)}
        </div>
      </div>
    </section>
  );
}

/* ───────── Features ───────── */
function Story() {
  const lang = useLang();
  const t = lang === 'ar' ? {
    eyebrow: 'حكايتنا · OUR STORY',
    title: <>من الأرض السودانية،<br/>إلى البيت <span className="l-script">السعودي</span>.</>,
    p1: 'وُلِدت سودان مارت من حنين بسيط: أن يجد ابن السودان في الغربة طعم بيته، عطر بلاده، ولمسة من يدِ حرفي يعرفه.',
    p2: 'نحن لسنا متجراً إلكترونياً، نحن جسرٌ بين مزارع كردفان وحوش بيت في الرياض، بين سوق أم درمان وعطر دلكة في جدة. نختار. نحفظ. نوصل.',
    pledge: 'الأصالة وعد، والجودة قسم، والسرعة احترام.',
    pillars: [
      { num: '٠١', name: 'الأصالة', en: 'AUTHENTICITY', sub: 'كل منتج له منشأ موثق وقصة حقيقية.', color: 'var(--primary)' },
      { num: '٠٢', name: 'الحرفية', en: 'CRAFT',        sub: 'نكرّم الأيدي التي صنعت وعشقت ما صنعت.', color: 'var(--gold-700)' },
      { num: '٠٣', name: 'السرعة',  en: 'SPEED',        sub: 'وقتك أمانة — توصيل خلال ٢٤–٤٨ ساعة.', color: 'var(--terra-600)' },
    ],
    mvv: [
      { lbl: 'الرسالة · MISSION', body: 'أن نوصل أصالة السودان إلى كل بيت سعودي بسرعة، وأمان، وكرامة للحرفي.' },
      { lbl: 'الرؤية · VISION',   body: 'أن نكون الجسر الرقمي الأول للمنتجات السودانية في الخليج العربي بحلول ٢٠٢٨.' },
      { lbl: 'القيم · VALUES',    body: 'الأصالة · الحرفية · السرعة · الشفافية · الكرامة. خمس قيم نمتحن بها كل قرار.' },
    ],
  } : {
    eyebrow: 'OUR STORY · حكايتنا',
    title: <>From Sudanese soil,<br/>to your <span className="l-script">Saudi</span> home.</>,
    p1: 'Sudan Mart was born from a simple longing: that a Sudanese expat finds the taste of home, the scent of their land, and the touch of a familiar craftsman.',
    p2: 'We are not an online store — we are a bridge between Kordofan farms and a courtyard in Riyadh, between Omdurman markets and dilka perfume in Jeddah. We curate. We preserve. We deliver.',
    pledge: 'Authenticity is a promise. Quality is an oath. Speed is respect.',
    pillars: [
      { num: '01', name: 'Authenticity', en: 'AUTHENTICITY', sub: 'Every product has documented origin and a real story.', color: 'var(--primary)' },
      { num: '02', name: 'Craft',        en: 'CRAFT',        sub: 'We honour the hands that made — and loved what they made.', color: 'var(--gold-700)' },
      { num: '03', name: 'Speed',        en: 'SPEED',        sub: 'Your time is a trust — delivered within 24–48 hours.', color: 'var(--terra-600)' },
    ],
    mvv: [
      { lbl: 'MISSION · الرسالة', body: 'To bring Sudanese authenticity to every Saudi home — quickly, safely, and with dignity for the craftsman.' },
      { lbl: 'VISION · الرؤية',   body: 'To be the leading digital bridge for Sudanese products across the Gulf by 2028.' },
      { lbl: 'VALUES · القيم',    body: 'Authenticity · Craft · Speed · Transparency · Dignity. Five values we measure every decision against.' },
    ],
  };
  return (
    <section id="story" className="l-section">
      <div className="l-container l-story-grid">
        <div>
          <div className="l-eyebrow"><span className="l-eyebrow-dot"></span>{t.eyebrow}</div>
          <h2 className="l-h2">{t.title}</h2>
        </div>
        <div className="l-story-body">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p className="l-story-pledge">{t.pledge}</p>
        </div>
      </div>

      <div className="l-container l-pillars">
        {t.pillars.map(p => (
          <div key={p.en} className="l-pillar">
            <div className="l-pillar-num" style={{ color: p.color }}>{p.num}</div>
            <div className="l-pillar-en">{p.en}</div>
            <div className="l-pillar-ar">{p.name}</div>
            <div className="l-pillar-sub">{p.sub}</div>
          </div>
        ))}
      </div>

      <div className="l-container l-mvv">
        {t.mvv.map(x => (
          <div key={x.lbl} className="l-mvv-card">
            <div className="l-mvv-l">{x.lbl}</div>
            <div className="l-mvv-b">{x.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Categories preview ───────── */
function Categories() {
  const lang = useLang();
  const head = lang === 'ar'
    ? { title: 'أقسام تروي حكاية السودان', sub: 'من البن المُحمَّص في حلة الجبنة إلى عطور وبخور التلقاي، اختر ما تشتاق إليه.', link: 'تصفح القسم', count: (n) => `${n} منتج` }
    : { title: "Categories that tell Sudan's story", sub: 'From coffee roasted in a jebena to talqai incense and oud — choose what you long for.', link: 'Browse category', count: (n) => `${n} products` };
  return (
    <section id="cats" className="l-section l-section-tinted">
      <div className="l-container">
        <SectionHead eyebrow="CATEGORIES" ar={head.title} sub={head.sub}/>
        <div className="l-cat-grid">
          {CATEGORIES.slice(0, 6).map((c, i) => (
            <a key={c.id} className="l-cat" style={{ background: CAT_COLORS[c.cat].bg, color: CAT_COLORS[c.cat].ink, gridArea: ['a','b','c','d','e','f'][i] }}>
              <div className="l-cat-en">{c.en}</div>
              <div className="l-cat-ar">{lang === 'ar' ? c.ar : c.en}</div>
              <div className="l-cat-count">{head.count(c.count)}</div>
              <div className="l-cat-glyph">
                <Glyph kind={CAT_COLORS[c.cat].glyph} color={CAT_COLORS[c.cat].ink} size={180}/>
              </div>
              <div className="l-cat-link">{head.link} <I.forward size={14} stroke="currentColor"/></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── How it works ───────── */
function HowItWorks() {
  const lang = useLang();
  const t = lang === 'ar' ? {
    title: '٣ خطوات لطلبك', sub: 'من التصفح إلى باب البيت، تجربة سلسة بدون تعقيد.',
    steps: [
      { n: '٠١', title: 'اختر منتجاتك', sub: 'تصفّح آلاف المنتجات السودانية في أكثر من ١٢ قسم.', ic: I.search },
      { n: '٠٢', title: 'ادفع بأمان', sub: 'مدى، فيزا، أبل باي، أو tabby/tamara — اقسّط أو ادفع كاملاً.', ic: I.card },
      { n: '٠٣', title: 'استلم بسرعة', sub: 'توصيل خلال ٢٤–٤٨ ساعة لجميع مدن المملكة الرئيسية.', ic: I.truck },
    ],
  } : {
    title: '3 steps to your order', sub: 'From browsing to your doorstep — smooth, no friction.',
    steps: [
      { n: '01', title: 'Pick your items', sub: 'Browse thousands of Sudanese products across 12+ categories.', ic: I.search },
      { n: '02', title: 'Pay securely',    sub: 'mada, Visa, Apple Pay, tabby or tamara — pay in full or in installments.', ic: I.card },
      { n: '03', title: 'Receive fast',    sub: 'Delivered in 24–48 hours to all major Saudi cities.', ic: I.truck },
    ],
  };
  return (
    <section id="how" className="l-section">
      <div className="l-container">
        <SectionHead eyebrow="HOW IT WORKS" ar={t.title} sub={t.sub}/>
        <div className="l-how-grid">
          {t.steps.map((s, i) => (
            <div key={i} className="l-how">
              <div className="l-how-num">{s.n}</div>
              <div className="l-how-icon"><s.ic size={26} stroke="var(--primary)"/></div>
              <div className="l-how-title">{s.title}</div>
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
  const lang = useLang();
  const t = lang === 'ar' ? {
    title: 'تجربة تسوّق على راحتك',
    sub: 'واجهة عربية أولاً، تصميم نظيف، وأداء فائق — مصمم خصيصاً لعملاء المملكة.',
    cards: [
      { title: 'سلة ذكية', sub: 'إضافة سريعة، خصومات تلقائية، وكوبونات مستحقة.' },
      { title: 'تتبع لحظي', sub: 'تابع طلبك من التجهيز إلى التسليم على الخريطة.' },
      { title: 'مفضّلات', sub: 'احفظ ما يعجبك ورجّع له لاحقاً، أو شاركه مع العائلة.' },
    ],
  } : {
    title: 'Shopping built around you',
    sub: 'Arabic-first interface, clean design, fast performance — built for Saudi customers.',
    cards: [
      { title: 'Smart cart',    sub: 'Quick add, automatic discounts, and earned coupons.' },
      { title: 'Live tracking', sub: 'Watch your order from packing to handoff, live on a map.' },
      { title: 'Favorites',     sub: 'Save what you love, come back later, or share with family.' },
    ],
  };
  const screens = [<MiniHome/>, <MiniCategories/>, <MiniProduct/>];
  return (
    <section className="l-section l-showcase">
      <div className="l-container">
        <SectionHead eyebrow="THE APP" ar={t.title} sub={t.sub}/>
        <div className="l-showcase-row">
          {t.cards.map((s, i) => (
            <div key={i} className="l-showcase-card">
              <div className="l-showcase-phone">
                <div className="l-mini-frame">
                  <div className="l-mini-notch"></div>
                  <div className="l-mini-screen">{screens[i]}</div>
                </div>
              </div>
              <div className="l-showcase-title">{s.title}</div>
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
  const lang = useLang();
  const t = lang === 'ar' ? {
    eyebrow: 'للبائعين والحرفيين',
    title: <>بضاعتك السودانية،<br/><span className="l-accent">سوق سعودي يقدّرها.</span></>,
    sub: 'افتح متجرك الإلكتروني في دقائق، أوصل منتجاتك لآلاف العملاء في كل مدن المملكة، ودع سودان مارت يتكفّل بالشحن والدفع والدعم.',
    list: ['عمولة منخفضة وشفافة', 'أدوات إدارة كاملة من جوالك', 'دعم تسويقي وحملات إعلانية', 'دفعات أسبوعية إلى حسابك البنكي'],
    cta1: 'سجّل بائعاً', cta2: 'تعرّف أكثر',
    sideLinks: ['الرئيسية','الطلبات','المنتجات','العملاء'],
    kpis: [
      { l: 'مبيعات اليوم', v: '٤٢٬٣٨٠', u: 'ر.س', c: '#0F4D3A' },
      { l: 'طلبات',       v: '٢٤٧',    c: '#A98232' },
      { l: 'عملاء جدد',   v: '٤٢',     c: '#B0492C' },
    ],
    chartTitle: 'إيرادات الأسبوع',
  } : {
    eyebrow: 'For sellers & artisans',
    title: <>Your Sudanese goods,<br/><span className="l-accent">a Saudi market that values them.</span></>,
    sub: 'Open your online store in minutes, reach thousands of customers across the Kingdom, and let Sudan Mart handle shipping, payments, and support.',
    list: ['Low, transparent commission', 'Full management tools from your phone', 'Marketing & ad campaign support', 'Weekly payouts to your bank account'],
    cta1: 'Register as a seller', cta2: 'Learn more',
    sideLinks: ['Home','Orders','Products','Customers'],
    kpis: [
      { l: 'Today\'s sales',  v: '42,380', u: 'SAR', c: '#0F4D3A' },
      { l: 'Orders',          v: '247',    c: '#A98232' },
      { l: 'New customers',   v: '42',     c: '#B0492C' },
    ],
    chartTitle: 'Weekly revenue',
  };
  return (
    <section id="sellers" className="l-sellers">
      <div className="l-container l-sellers-inner">
        <div className="l-sellers-copy">
          <div className="l-eyebrow l-eyebrow-light">
            <span className="l-eyebrow-dot l-eyebrow-dot-light"></span>
            {t.eyebrow}
          </div>
          <h2 className="l-sellers-title">{t.title}</h2>
          <p className="l-sellers-sub">{t.sub}</p>
          <ul className="l-sellers-list">
            {t.list.map(li => <li key={li}><I.check size={18} stroke="var(--accent)"/> {li}</li>)}
          </ul>
          <div className="l-sellers-cta">
            <a className="l-btn l-btn-gold">{t.cta1} <I.forward size={16}/></a>
            <a className="l-btn l-btn-outline-light">{t.cta2}</a>
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
                {t.sideLinks.map((x, i) => (
                  <div key={x} className={`l-dash-link ${i === 0 ? 'active' : ''}`}>
                    <span style={{ width: 6, height: 6, background: i === 0 ? '#fff' : '#8B7D6E', borderRadius: 2 }}></span>
                    {x}
                  </div>
                ))}
              </div>
              <div className="l-dash-main">
                <div className="l-dash-kpis">
                  {t.kpis.map(k => (
                    <div key={k.l} className="l-dash-kpi">
                      <div className="l-dash-kpi-l">{k.l}</div>
                      <div className="l-dash-kpi-v">{k.v} {k.u && <span>{k.u}</span>}</div>
                      <svg viewBox="0 0 80 20" width="100%" height="20"><path d="M0 16 L12 12 L24 14 L36 8 L48 10 L60 4 L80 6" fill="none" stroke={k.c} strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  ))}
                </div>
                <div className="l-dash-chart">
                  <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 10 }}>{t.chartTitle}</div>
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
  const lang = useLang();
  const reviews = lang === 'ar' ? [
    { user: 'سارة الزهراني', city: 'الرياض', text: 'البن السوداني كان فوق التوقعات، رائحته ملأت البيت! توصيل سريع جداً للرياض.', rating: 5 },
    { user: 'عبد الله القحطاني', city: 'جدة', text: 'وجدت كل احتياجات شهر رمضان من السودان في تطبيق واحد. التجربة سهلة جداً.', rating: 5 },
    { user: 'هند الشمري', city: 'الدمام', text: 'العطور والبخور أصلية ١٠٠٪. هذا التطبيق ملأ فراغاً كبيراً في السوق السعودي.', rating: 5 },
    { user: 'ناصر العتيبي', city: 'مكة', text: 'الدفع بـ tabby خلاني أطلب بمرونة. الجودة ممتازة والمنتجات سودانية أصلية.', rating: 5 },
  ] : [
    { user: 'Sarah Al-Zahrani',  city: 'Riyadh', text: 'The Sudanese coffee was beyond expectations — its aroma filled the house! Super fast delivery to Riyadh.', rating: 5 },
    { user: 'Abdullah Al-Qahtani', city: 'Jeddah', text: 'Found all my Ramadan essentials from Sudan in one app. The whole experience is so easy.', rating: 5 },
    { user: 'Hind Al-Shammari', city: 'Dammam',   text: 'The perfumes and incense are 100% authentic. This app fills a real gap in the Saudi market.', rating: 5 },
    { user: 'Nasser Al-Otaibi', city: 'Makkah',   text: 'Paying with tabby gives me real flexibility. Excellent quality and truly Sudanese products.', rating: 5 },
  ];
  const head = lang === 'ar'
    ? { title: 'ماذا يقول عملاؤنا', sub: 'آراء حقيقية من عملاء سعوديين جرّبوا التطبيق.' }
    : { title: 'What our customers say', sub: 'Real reviews from Saudi customers who use the app.' };
  return (
    <section className="l-section">
      <div className="l-container">
        <SectionHead eyebrow="TESTIMONIALS" ar={head.title} sub={head.sub}/>
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
  const lang = useLang();
  const stats = lang === 'ar' ? [
    { v: '+٢٤٬٠٠٠', l: 'مستخدم نشط' },
    { v: '+٢٥٠',    l: 'بائع وحرفي' },
    { v: '+٥٬٠٠٠',  l: 'منتج سوداني' },
    { v: '٤.٩',     l: 'تقييم المتاجر' },
  ] : [
    { v: '+24,000', l: 'Active users' },
    { v: '+250',    l: 'Sellers & artisans' },
    { v: '+5,000',  l: 'Sudanese products' },
    { v: '4.9',     l: 'Store rating' },
  ];
  return (
    <section className="l-stats">
      <div className="l-container l-stats-grid">
        {stats.map(s => (
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
  const lang = useLang();
  const t = lang === 'ar' ? {
    eyebrow: 'الأسئلة الشائعة',
    title: <>إجابات سريعة<br/>لأهم استفساراتك.</>,
    sub: 'لم تجد ما تبحث عنه؟ تواصل معنا عبر واتساب وسنرد خلال دقائق.',
    waBtn: 'تواصل واتساب',
    items: [
      { q: 'هل التطبيق متوفر في كل مدن المملكة؟', a: 'نعم، التوصيل متاح في جميع المدن الرئيسية والثانوية بالمملكة بما فيها الرياض، جدة، الدمام، الخبر، مكة، المدينة، الطائف، تبوك، وأبها.' },
      { q: 'كم تستغرق مدة التوصيل؟', a: '٢٤ ساعة للرياض والمدن الرئيسية، و٤٨ ساعة لباقي المدن. التوصيل السريع متاح أيضاً ليوم العمل التالي.' },
      { q: 'هل المنتجات سودانية أصلية؟', a: 'كل المنتجات تأتي مباشرة من مزارعين وحرفيين سودانيين معتمدين، مع شهادات منشأ وضمان استرداد ١٤ يوم.' },
      { q: 'ما طرق الدفع المتاحة؟', a: 'مدى، فيزا، ماستركارد، أبل باي، tabby، tamara، والدفع عند الاستلام (في مدن مختارة).' },
      { q: 'كيف أصبح بائعاً في التطبيق؟', a: 'سجّل في تبويب "للبائعين" — ستحتاج سجل تجاري سعودي وحساب بنكي، والباقي علينا.' },
    ],
  } : {
    eyebrow: 'Frequently asked',
    title: <>Quick answers<br/>to your top questions.</>,
    sub: "Didn't find what you need? Reach us on WhatsApp — we reply within minutes.",
    waBtn: 'WhatsApp us',
    items: [
      { q: 'Is the app available across all Saudi cities?', a: 'Yes. Delivery covers all major and secondary Saudi cities including Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, Taif, Tabuk, and Abha.' },
      { q: 'How long does delivery take?', a: '24 hours to Riyadh and main cities, 48 hours to other cities. Same-business-day express delivery is also available.' },
      { q: 'Are the products genuinely Sudanese?', a: 'Every product comes directly from verified Sudanese farmers and artisans, with origin certificates and a 14-day refund guarantee.' },
      { q: 'What payment methods are supported?', a: 'mada, Visa, Mastercard, Apple Pay, tabby, tamara, and cash on delivery (in selected cities).' },
      { q: 'How do I become a seller on the app?', a: 'Register from the "For sellers" tab — you\'ll need a Saudi commercial registration and a bank account. We handle the rest.' },
    ],
  };
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="l-section l-section-tinted">
      <div className="l-container l-faq-wrap">
        <div>
          <div className="l-eyebrow"><span className="l-eyebrow-dot"></span>{t.eyebrow}</div>
          <h2 className="l-sec-title">{t.title}</h2>
          <p className="l-sec-sub">{t.sub}</p>
          <a className="l-btn l-btn-outline" style={{ marginTop: 14 }}><I.whatsapp size={18}/> {t.waBtn}</a>
        </div>
        <div className="l-faq-list">
          {t.items.map((it, i) => (
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
  const lang = useLang();
  const t = lang === 'ar' ? {
    eyebrow: 'متاح الآن',
    title: <>حمّل سودان مارت اليوم،<br/><span className="l-accent">واحصل على خصم ١٥٪</span> على أول طلب.</>,
    sub: <>استخدم كود <span className="l-code">KSA2026</span> عند الدفع.</>,
    getOn: 'احصل عليه من', downloadOn: 'حمّله من',
    qrTitle: 'امسح الكود', qrSub: 'للتحميل المباشر من جوالك',
  } : {
    eyebrow: 'Available now',
    title: <>Download Sudan Mart today,<br/><span className="l-accent">get 15% off</span> your first order.</>,
    sub: <>Use code <span className="l-code">KSA2026</span> at checkout.</>,
    getOn: 'Get it on', downloadOn: 'Download on the',
    qrTitle: 'Scan the code', qrSub: 'To download straight to your phone',
  };
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
          <div className="l-eyebrow l-eyebrow-light"><span className="l-eyebrow-dot l-eyebrow-dot-light"></span>{t.eyebrow}</div>
          <h2 className="l-download-title">{t.title}</h2>
          <p className="l-download-sub">{t.sub}</p>
          <div className="l-download-cta">
            <a className="l-store l-store-dark l-store-google">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M3 3l18 9-18 9zM3 3v18M3 3l13 9-13 9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              <div>
                <div className="l-store-small">{t.getOn}</div>
                <div className="l-store-big">Google Play</div>
              </div>
            </a>
            <a className="l-store l-store-dark l-store-apple">
              <I.apple size={22} stroke="currentColor"/>
              <div>
                <div className="l-store-small">{t.downloadOn}</div>
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
              <div className="l-qr-title">{t.qrTitle}</div>
              <div className="l-qr-sub">{t.qrSub}</div>
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
  const lang = useLang();
  const cols = lang === 'ar' ? [
    { t: 'التطبيق', items: ['الرئيسية', 'الأقسام', 'العروض', 'الأكثر مبيعاً'] },
    { t: 'الشركة',  items: ['من نحن', 'الوظائف', 'المدونة', 'الصحافة'] },
    { t: 'الدعم',   items: ['مركز المساعدة', 'الشحن والإرجاع', 'تواصل معنا', 'تتبع الطلب'] },
    { t: 'قانوني',  items: ['شروط الاستخدام', 'سياسة الخصوصية', 'سياسة الإرجاع', 'الزكاة والضريبة'] },
  ] : [
    { t: 'App',     items: ['Home', 'Categories', 'Deals', 'Best sellers'] },
    { t: 'Company', items: ['About us', 'Careers', 'Blog', 'Press'] },
    { t: 'Support', items: ['Help center', 'Shipping & returns', 'Contact us', 'Track order'] },
    { t: 'Legal',   items: ['Terms of service', 'Privacy policy', 'Return policy', 'Zakat & VAT'] },
  ];
  const tag = tr(lang,
    'منصة سعودية لتوصيل أصالة المنتجات السودانية إلى كل بيت في المملكة.',
    'A Saudi platform delivering authentic Sudanese products to every home in the Kingdom.');
  const brandAr = tr(lang, 'سودان مارت', 'Sudan Mart');
  const copyright = tr(lang, '© ٢٠٢٦ سودان مارت · جميع الحقوق محفوظة', '© 2026 Sudan Mart · All rights reserved');
  return (
    <footer className="l-footer">
      <div className="l-container l-footer-grid">
        <div className="l-footer-brand">
          <div className="l-brand">
            <SMLogo size={44}/>
            <div className="l-brand-text">
              <div className="l-brand-ar" style={{ color: '#fff' }}>{brandAr}</div>
              <div className="l-brand-en">S U D A N · M A R T</div>
            </div>
          </div>
          <p className="l-footer-tag">{tag}</p>
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
          <div>{copyright}</div>
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
