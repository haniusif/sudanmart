// Sudan Mart — Brand Guidelines page
const I = window.SMIcon;

function Brand() {
  return (
    <div className="brand">
      <BrandNav/>
      <BrandHero/>
      <BrandStory/>
      <LogoSystem/>
      <ColorSystem/>
      <Typography/>
      <Iconography/>
      <PatternSystem/>
      <VoiceTone/>
      <Applications/>
      <BrandFooter/>
    </div>
  );
}

/* ───────────────── Nav ───────────────── */
function BrandNav() {
  const sections = [
    { id: 'story',    ar: 'القصة' },
    { id: 'logo',     ar: 'الشعار' },
    { id: 'color',    ar: 'الألوان' },
    { id: 'type',     ar: 'الخطوط' },
    { id: 'icons',    ar: 'الأيقونات' },
    { id: 'pattern',  ar: 'الأنماط' },
    { id: 'voice',    ar: 'الصوت' },
    { id: 'apps',     ar: 'التطبيقات' },
  ];
  return (
    <header className="b-nav">
      <div className="b-container b-nav-inner">
        <div className="b-brand">
          <SMLogo size={36}/>
          <div>
            <div className="b-brand-ar">سودان مارت</div>
            <div className="b-brand-en">BRAND GUIDELINES · v1.0</div>
          </div>
        </div>
        <nav className="b-nav-links">
          {sections.map(s => <a key={s.id} href={`#${s.id}`}>{s.ar}</a>)}
        </nav>
        <a className="b-btn">تحميل الدليل · PDF</a>
      </div>
    </header>
  );
}

/* ───────────────── Hero ───────────────── */
function BrandHero() {
  return (
    <section className="b-hero">
      <div className="b-hero-bg" aria-hidden>
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="b-wheat" width="100" height="100" patternUnits="userSpaceOnUse">
              <ellipse cx="50" cy="50" rx="5" ry="14" fill="#D9B662" transform="rotate(28 50 50)" opacity=".7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#b-wheat)" opacity=".15"/>
        </svg>
      </div>
      <div className="b-container b-hero-inner">
        <div className="b-eyebrow">
          <span className="b-eyebrow-dot"/>
          الإصدار ١٫٠ · مايو ٢٠٢٦
        </div>
        <h1 className="b-hero-title">
          هوية<br/>
          <span className="b-script">سودان مارت</span>
        </h1>
        <p className="b-hero-sub">
          دليل العلامة التجارية الكامل — من الشعار إلى الصوت، من اللون إلى السلوك. مرجعنا الموحَّد لكل من يصمم، يكتب، أو يتحدث باسمنا.
        </p>
        <div className="b-hero-meta">
          <div><div className="b-meta-l">المالك</div><div className="b-meta-v">سودان مارت · KSA</div></div>
          <div><div className="b-meta-l">المصممون</div><div className="b-meta-v">فريق التصميم الداخلي</div></div>
          <div><div className="b-meta-l">آخر تحديث</div><div className="b-meta-v">٢٠ مايو ٢٠٢٦</div></div>
        </div>

        {/* Big logo plate */}
        <div className="b-hero-logo-plate">
          <SMLogo size={220}/>
          <div className="b-hero-logo-caption">
            <div className="b-hero-logo-ar">سودان مارت</div>
            <div className="b-hero-logo-en">S U D A N · M A R T</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Story ───────────────── */
function BrandStory() {
  return (
    <section id="story" className="b-section">
      <div className="b-container b-2col">
        <div>
          <Eyebrow>القصة · OUR STORY</Eyebrow>
          <h2 className="b-h2">من الأرض السودانية،<br/>إلى البيت السعودي.</h2>
        </div>
        <div className="b-story-body">
          <p>وُلِدت سودان مارت من حنين بسيط: أن يجد ابن السودان في الغربة طعم بيته، عطر بلاده، ولمسة من يدِ حرفي يعرفه.</p>
          <p>نحن لسنا متجراً إلكترونياً، نحن جسرٌ بين مزارع كردفان وحوش بيت في الرياض، بين سوق أم درمان وعطر دلكة في جدة. نختار. نحفظ. نوصل.</p>
          <p>الأصالة وعد، والجودة قسم، والسرعة احترام.</p>
        </div>
      </div>

      {/* Three pillars */}
      <div className="b-container b-pillars">
        {[
          { num: '٠١', ar: 'الأصالة', en: 'AUTHENTICITY', sub: 'كل منتج له منشأ موثق وقصة حقيقية.', color: 'var(--primary)' },
          { num: '٠٢', ar: 'الحرفية', en: 'CRAFT',        sub: 'نكرّم الأيدي التي صنعت وعشقت ما صنعت.', color: 'var(--gold-700)' },
          { num: '٠٣', ar: 'السرعة',  en: 'SPEED',        sub: 'وقتك أمانة — توصيل خلال ٢٤ — ٤٨ ساعة.', color: 'var(--terra-600)' },
        ].map(p => (
          <div key={p.en} className="b-pillar">
            <div className="b-pillar-num" style={{ color: p.color }}>{p.num}</div>
            <div className="b-pillar-en">{p.en}</div>
            <div className="b-pillar-ar">{p.ar}</div>
            <div className="b-pillar-sub">{p.sub}</div>
          </div>
        ))}
      </div>

      {/* Mission / Vision / Values */}
      <div className="b-container b-mvv">
        {[
          { lbl: 'الرسالة · MISSION', body: 'أن نوصل أصالة السودان إلى كل بيت سعودي بسرعة، وأمان، وكرامة للحرفي.' },
          { lbl: 'الرؤية · VISION',  body: 'أن نكون الجسر الرقمي الأول للمنتجات السودانية في الخليج العربي بحلول ٢٠٢٨.' },
          { lbl: 'القيم · VALUES',   body: 'الأصالة · الحرفية · السرعة · الشفافية · الكرامة. خمس قيم نمتحن بها كل قرار.' },
        ].map(x => (
          <div key={x.lbl} className="b-mvv-card">
            <div className="b-mvv-l">{x.lbl}</div>
            <div className="b-mvv-b">{x.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Logo system ───────────────── */
function LogoSystem() {
  return (
    <section id="logo" className="b-section b-section-tinted">
      <div className="b-container">
        <Eyebrow>الشعار · LOGO</Eyebrow>
        <h2 className="b-h2">شعار يحمل قصته في حبوبه.</h2>
        <p className="b-lede">الشعار مستوحى من سُنبلة الذرة السودانية — رمز الأرض، الحصاد، والكرم — داخل دائرة ترمز للوحدة وحُسن الضيافة.</p>

        {/* Anatomy */}
        <div className="b-card b-anatomy">
          <div className="b-anatomy-svg">
            <svg viewBox="0 0 400 400" width="100%" height="auto">
              <circle cx="200" cy="200" r="160" fill="none" stroke="var(--primary)" strokeWidth="0.8" strokeDasharray="3 5"/>
              {/* Logo */}
              <g>
                <circle cx="200" cy="200" r="150" fill="url(#bsm-g)"/>
                <defs>
                  <linearGradient id="bsm-g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--green-700)"/>
                    <stop offset="1" stopColor="var(--green-900)"/>
                  </linearGradient>
                </defs>
                <g transform="translate(200 200)">
                  <path d="M0 -90 L0 90" stroke="var(--gold-300)" strokeWidth="9" strokeLinecap="round"/>
                  {[-66, -33, 0, 33, 66].map((y, i) => (
                    <g key={i}>
                      <ellipse cx="-26" cy={y} rx="22" ry="13" fill="var(--gold-500)" transform={`rotate(-25 -26 ${y})`}/>
                      <ellipse cx="26"  cy={y} rx="22" ry="13" fill="var(--gold-500)" transform={`rotate(25 26 ${y})`}/>
                    </g>
                  ))}
                </g>
              </g>
              {/* Anatomy labels */}
              <g fontFamily="Tajawal, system-ui" fontSize="11" fill="var(--text-2)" fontWeight="700">
                <line x1="380" y1="60" x2="280" y2="170" stroke="var(--text-3)" strokeWidth=".6"/>
                <text x="385" y="64" textAnchor="start">الدائرة · الوحدة</text>
                <text x="385" y="80" textAnchor="start" fontSize="9" fill="var(--text-3)" fontWeight="500">حسن الضيافة السودانية</text>

                <line x1="380" y1="200" x2="246" y2="200" stroke="var(--text-3)" strokeWidth=".6"/>
                <text x="385" y="204" textAnchor="start">الحَب · الكرم</text>
                <text x="385" y="220" textAnchor="start" fontSize="9" fill="var(--text-3)" fontWeight="500">عشر حبات لعشر مواسم</text>

                <line x1="20" y1="200" x2="195" y2="200" stroke="var(--text-3)" strokeWidth=".6"/>
                <text x="15" y="204" textAnchor="end">الساق الذهبي · النَّسَل</text>
                <text x="15" y="220" textAnchor="end" fontSize="9" fill="var(--text-3)" fontWeight="500">حصاد متواصل عبر الأجيال</text>
              </g>
            </svg>
          </div>
          <div className="b-anatomy-side">
            <div className="b-anatomy-title">تشريح الشعار</div>
            <ul className="b-anatomy-list">
              <li><span>الدائرة</span> الوحدة وحسن الضيافة</li>
              <li><span>الساق الذهبي</span> النسل والاستمرار</li>
              <li><span>الحبوب العشر</span> العطاء والكرم</li>
              <li><span>الميلان ٢٥°</span> ريح الشمال السوداني</li>
            </ul>
          </div>
        </div>

        {/* Lockups */}
        <h3 className="b-h3" style={{ marginTop: 56 }}>التركيبات الرسمية · Logo Lockups</h3>
        <div className="b-lockups">
          {[
            { bg: '#FAF6EE', label: 'الأساسي · Primary' },
            { bg: '#FFFFFF', label: 'الفاتح · Light' },
            { bg: '#0F4D3A', label: 'العكسي · Reverse', light: true },
            { bg: '#1A1410', label: 'الداكن · Dark', light: true },
          ].map((v, i) => (
            <div key={i} className="b-lockup" style={{ background: v.bg, color: v.light ? '#fff' : 'var(--text)' }}>
              <SMLogo size={84} mono={i === 3} color={i === 3 ? '#E5C97A' : undefined}/>
              <div className="b-lockup-text">
                <div className="b-lockup-ar">سودان مارت</div>
                <div className="b-lockup-en">SUDAN MART</div>
              </div>
              <div className="b-lockup-label">{v.label}</div>
            </div>
          ))}
        </div>

        {/* Sizes + clear space */}
        <div className="b-row-2col" style={{ marginTop: 32 }}>
          <div className="b-card">
            <div className="b-card-title">المقاسات الدنيا · Minimum Sizes</div>
            <div className="b-sizes">
              {[ {s: 88, w: 'web'}, {s: 56, w: 'app'}, {s: 32, w: 'favicon'}, {s: 24, w: 'min'} ].map(x => (
                <div key={x.s} className="b-size">
                  <SMLogo size={x.s}/>
                  <div className="b-size-lbl">{x.s}px<br/><span>{x.w}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="b-card">
            <div className="b-card-title">المساحة الآمنة · Clear Space</div>
            <div className="b-clearspace">
              <div className="b-clearspace-mark">
                {/* margin guides */}
                <div className="b-cs-h b-cs-h-top"/>
                <div className="b-cs-h b-cs-h-bot"/>
                <div className="b-cs-v b-cs-v-l"/>
                <div className="b-cs-v b-cs-v-r"/>
                <SMLogo size={120}/>
                <span className="b-cs-x">x</span>
              </div>
            </div>
            <div className="b-cs-cap">المسافة الفارغة حول الشعار يجب ألا تقل عن <b>X</b>، حيث X يساوي نصف عرض الشعار.</div>
          </div>
        </div>

        {/* Do / Don't */}
        <h3 className="b-h3" style={{ marginTop: 56 }}>افعل / لا تفعل · Do & Don't</h3>
        <div className="b-dodont">
          {[
            { ok: true,  ar: 'استخدم الشعار على خلفية متباينة', kind: 'good', logo: 'default' },
            { ok: false, ar: 'لا تستخدم الشعار على خلفية متضاربة بصرياً', kind: 'busy', logo: 'default' },
            { ok: false, ar: 'لا تقم بتمديد أو تشويه نسب الشعار', kind: 'stretch', logo: 'stretched' },
            { ok: false, ar: 'لا تستبدل ألوان الشعار بألوان عشوائية', kind: 'wrong-color', logo: 'pink' },
          ].map((c, i) => (
            <div key={i} className={`b-dd ${c.ok ? 'ok' : 'no'}`}>
              <div className="b-dd-canvas" style={{
                background: c.kind === 'busy' ? 'repeating-linear-gradient(45deg, #C9A24B 0, #C9A24B 14px, #B0492C 14px, #B0492C 28px)' : '#FAF6EE',
              }}>
                {c.logo === 'stretched' ? (
                  <div style={{ transform: 'scaleX(1.5)' }}><SMLogo size={80}/></div>
                ) : c.logo === 'pink' ? (
                  <svg viewBox="0 0 80 80" width="80" height="80">
                    <circle cx="40" cy="40" r="38" fill="#E91E63"/>
                    <g transform="translate(40 40)">
                      <path d="M0 -22 L0 22" stroke="#fff" strokeWidth="2.5"/>
                      {[-16, -8, 0, 8, 16].map((y, i) => (
                        <g key={i}>
                          <ellipse cx="-7" cy={y} rx="6" ry="3.5" fill="#fff" transform={`rotate(-25 -7 ${y})`}/>
                          <ellipse cx="7" cy={y} rx="6" ry="3.5" fill="#fff" transform={`rotate(25 7 ${y})`}/>
                        </g>
                      ))}
                    </g>
                  </svg>
                ) : <SMLogo size={80}/>}
              </div>
              <div className="b-dd-row">
                <div className={`b-dd-icon ${c.ok ? 'ok' : 'no'}`}>
                  {c.ok ? <I.check size={16} stroke="#fff" sw={3}/> : <I.close size={16} stroke="#fff" sw={3}/>}
                </div>
                <div className="b-dd-text">{c.ar}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Color system ───────────────── */
function ColorSystem() {
  const primary = [
    { name: 'الأخضر الأساسي', en: 'Primary Green',   hex: '#0F4D3A', text: '#fff', usage: 'الأزرار، العناصر الرئيسية' },
    { name: 'أخضر داكن',       en: 'Deep Green',       hex: '#0A3527', text: '#fff', usage: 'الخلفيات الداكنة' },
    { name: 'أخضر فاتح',       en: 'Light Green',      hex: '#14654C', text: '#fff', usage: 'تأكيد وتنشيط' },
    { name: 'الذهبي الأساسي',  en: 'Primary Gold',     hex: '#C9A24B', text: '#2a1f08', usage: 'التميز، CTA الثانوي' },
    { name: 'الذهبي الفاتح',   en: 'Light Gold',       hex: '#E5C97A', text: '#2a1f08', usage: 'العناصر التزيينية' },
  ];
  const accent = [
    { name: 'الطين',     en: 'Terracotta', hex: '#B0492C', text: '#fff', usage: 'العروض والتنبيهات' },
    { name: 'طين داكن', en: 'Deep Clay',  hex: '#8E3A22', text: '#fff', usage: 'التحذيرات الحادة' },
    { name: 'الكركديه',  en: 'Hibiscus',   hex: '#C95A2F', text: '#fff', usage: 'الحرارة والشهية' },
  ];
  const neutral = [
    { name: 'الفحم',    en: 'Charcoal', hex: '#1A1410', text: '#fff', usage: 'النص الأساسي' },
    { name: 'الرمل',    en: 'Sand',     hex: '#FAF6EE', text: '#1A1410', usage: 'الخلفية الأساسية' },
    { name: 'الرمل ٢',  en: 'Sand 2',   hex: '#F2EADA', text: '#1A1410', usage: 'الخلفيات الثانوية' },
    { name: 'الأبيض',   en: 'White',    hex: '#FFFFFF', text: '#1A1410', usage: 'البطاقات والأسطح' },
  ];

  return (
    <section id="color" className="b-section">
      <div className="b-container">
        <Eyebrow>الألوان · COLOR</Eyebrow>
        <h2 className="b-h2">ألوان تحكي حكاية الأرض.</h2>
        <p className="b-lede">من خضرة النيل، إلى ذهب القمح، إلى طين القرى — لوحة ألواننا مستوحاة من المشهد السوداني.</p>

        {/* Featured palette */}
        <div className="b-palette-hero">
          <div className="b-palette-strip">
            {['#0A3527','#0F4D3A','#14654C','#C9A24B','#E5C97A','#FAF6EE','#B0492C','#1A1410'].map(c => (
              <div key={c} className="b-palette-strip-c" style={{ background: c }}/>
            ))}
          </div>
          <div className="b-palette-strip-caption">٨ ألوان · لوحة كاملة</div>
        </div>

        {/* Sections */}
        <h3 className="b-h3" style={{ marginTop: 56 }}>الأساسية · Primary</h3>
        <div className="b-palette">
          {primary.map(c => <Swatch key={c.hex} {...c}/>)}
        </div>

        <h3 className="b-h3" style={{ marginTop: 32 }}>التميز · Accent</h3>
        <div className="b-palette">
          {accent.map(c => <Swatch key={c.hex} {...c}/>)}
        </div>

        <h3 className="b-h3" style={{ marginTop: 32 }}>الحيادية · Neutral</h3>
        <div className="b-palette">
          {neutral.map(c => <Swatch key={c.hex} {...c}/>)}
        </div>

        {/* Functional + tints */}
        <div className="b-row-2col" style={{ marginTop: 40 }}>
          <div className="b-card">
            <div className="b-card-title">الألوان الوظيفية · Functional</div>
            <div className="b-func">
              {[
                { hex: '#2E8A5D', ar: 'نجاح', en: 'Success' },
                { hex: '#D69824', ar: 'تنبيه', en: 'Warning' },
                { hex: '#C2392C', ar: 'خطأ', en: 'Error' },
                { hex: '#1976D2', ar: 'معلومة', en: 'Info' },
              ].map(f => (
                <div key={f.hex} className="b-func-row">
                  <div className="b-func-sw" style={{ background: f.hex }}/>
                  <div className="b-func-info">
                    <div className="b-func-name">{f.ar} <span>{f.en}</span></div>
                    <div className="b-func-hex">{f.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="b-card">
            <div className="b-card-title">درجات الأخضر · Green Tints</div>
            <div className="b-tints">
              {[100,200,300,400,500,600,700,800,900].map(t => {
                const colors = { 100: '#D7E8E0', 200: '#B0D1C1', 300: '#82B89E', 400: '#519F7B', 500: '#2B7A5D', 600: '#14654C', 700: '#0F4D3A', 800: '#0A3527', 900: '#051C16' };
                return (
                  <div key={t} className="b-tint-row">
                    <div className="b-tint-sw" style={{ background: colors[t], color: t < 400 ? '#0A3527' : '#fff' }}>
                      <span>{t}</span>
                    </div>
                    <span className="b-tint-hex">{colors[t]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Usage rules */}
        <h3 className="b-h3" style={{ marginTop: 44 }}>قواعد الاستخدام · Usage</h3>
        <div className="b-color-rules">
          {[
            { color: '#0F4D3A', ar: '٦٠٪', sub: 'الأخضر الأساسي', body: 'العناصر الهيكلية، الأزرار الرئيسية، الشعار.' },
            { color: '#C9A24B', ar: '٣٠٪', sub: 'الذهبي + الرمل', body: 'التميز، الخلفيات الدافئة، التزيين.' },
            { color: '#B0492C', ar: '١٠٪', sub: 'الطين والكركديه', body: 'العروض، التنبيهات، اللحظات الحارة.' },
          ].map(r => (
            <div key={r.ar} className="b-color-rule">
              <div className="b-color-rule-bar" style={{ background: r.color, color: '#fff' }}>
                <span className="b-color-rule-pct">{r.ar}</span>
              </div>
              <div className="b-color-rule-sub">{r.sub}</div>
              <div className="b-color-rule-body">{r.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Swatch({ name, en, hex, text, usage }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <div className="b-swatch">
      <div className="b-swatch-chip" style={{ background: hex, color: text }} onClick={() => { navigator.clipboard?.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); }}>
        <div className="b-swatch-name">{name}</div>
        <div className="b-swatch-en">{en}</div>
        <div className="b-swatch-hex">{copied ? '✓ تم النسخ' : hex}</div>
      </div>
      <div className="b-swatch-usage">{usage}</div>
    </div>
  );
}

/* ───────────────── Typography ───────────────── */
function Typography() {
  return (
    <section id="type" className="b-section b-section-tinted">
      <div className="b-container">
        <Eyebrow>الخطوط · TYPOGRAPHY</Eyebrow>
        <h2 className="b-h2">خط واحد، شخصية واحدة.</h2>
        <p className="b-lede">تجوال (Tajawal) خطنا الرسمي — عربي حديث، أنيق، يقرأ بسهولة من الشاشة الصغيرة إلى اللوحة الكبيرة.</p>

        {/* Hero font card */}
        <div className="b-type-hero">
          <div className="b-type-hero-large">تَجَوُّل</div>
          <div className="b-type-hero-sub">
            <div className="b-type-hero-en">Tajawal · Google Fonts</div>
            <div className="b-type-hero-meta">عربي + لاتيني · ٧ أوزان · مصمم في تركيا للعربية الحديثة</div>
          </div>
          <div className="b-type-weights">
            {[200, 300, 400, 500, 700, 800, 900].map(w => (
              <div key={w} className="b-type-weight">
                <div style={{ fontWeight: w }}>سودان مارت</div>
                <div className="b-type-w-num">{w}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scale */}
        <h3 className="b-h3" style={{ marginTop: 56 }}>السلّم الطباعي · Type Scale</h3>
        <div className="b-scale">
          {[
            { name: 'Display',  ar: 'سودان مارت',  size: 72, weight: 900, lh: 1.05, use: 'العناوين الرئيسية، الحملات' },
            { name: 'H1',       ar: 'أصالة سودانية', size: 48, weight: 800, lh: 1.1,  use: 'عناوين الصفحات' },
            { name: 'H2',       ar: 'تصفّح المنتجات', size: 36, weight: 800, lh: 1.15, use: 'عناوين الأقسام' },
            { name: 'H3',       ar: 'الأكثر مبيعاً',  size: 24, weight: 800, lh: 1.25, use: 'عناوين فرعية' },
            { name: 'Body L',   ar: 'بن سوداني فاخر محمص بطريقة تقليدية في حلة الجبنة.', size: 18, weight: 500, lh: 1.65, use: 'نص رئيسي طويل' },
            { name: 'Body',     ar: 'منصة سعودية لتوصيل أصالة المنتجات السودانية إلى كل بيت في المملكة.', size: 15, weight: 400, lh: 1.7,  use: 'النص الافتراضي' },
            { name: 'Caption',  ar: 'يصل غداً قبل الساعة ٦ مساءً', size: 12, weight: 600, lh: 1.5, use: 'تعليقات، أوصاف' },
          ].map(s => (
            <div key={s.name} className="b-scale-row">
              <div className="b-scale-meta">
                <div className="b-scale-name">{s.name}</div>
                <div className="b-scale-spec">{s.size} / {s.weight} / {s.lh}</div>
                <div className="b-scale-use">{s.use}</div>
              </div>
              <div className="b-scale-sample" style={{ fontSize: s.size, fontWeight: s.weight, lineHeight: s.lh }}>{s.ar}</div>
            </div>
          ))}
        </div>

        {/* Pairing card */}
        <div className="b-row-2col" style={{ marginTop: 40 }}>
          <div className="b-card">
            <div className="b-card-title">للنصوص اللاتينية · Latin Pairing</div>
            <div style={{ padding: 18 }}>
              <div style={{ fontSize: 36, fontWeight: 800, fontFamily: 'Tajawal', letterSpacing: -1 }}>Sudan Mart</div>
              <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4 }}>تجوال يدعم اللاتيني — استخدمه للعناوين الإنجليزية أيضاً.</div>
              <div style={{ marginTop: 22 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 2, marginBottom: 6 }}>SECONDARY</div>
                <div style={{ fontSize: 20, fontWeight: 600, fontFamily: 'system-ui' }}>SF Pro · System UI</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>للأرقام، الأكواد، التفاصيل التقنية.</div>
              </div>
            </div>
          </div>
          <div className="b-card">
            <div className="b-card-title">الأرقام · Numerals</div>
            <div style={{ padding: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 2 }}>الأرقام العربية</div>
                <div style={{ fontSize: 36, fontWeight: 800, fontFamily: 'Tajawal' }}>٠١٢٣٤٥٦٧٨٩</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>للسياق العربي والقيم الثقافية</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 2 }}>الأرقام الإنجليزية</div>
                <div style={{ fontSize: 36, fontWeight: 800, fontFamily: 'system-ui' }}>0123456789</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>للأكواد، الأسعار، SKUs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Iconography ───────────────── */
function Iconography() {
  const iconList = [
    ['home','الرئيسية'], ['grid','شبكة'], ['bag','حقيبة'], ['heart','قلب'], ['user','مستخدم'],
    ['search','بحث'], ['bell','جرس'], ['chev','سهم'], ['plus','إضافة'], ['minus','إنقاص'],
    ['trash','حذف'], ['truck','توصيل'], ['pin','موقع'], ['card','بطاقة'], ['star','نجمة'],
    ['heart_f','مفضل'], ['share','مشاركة'], ['filter','تصفية'], ['check','تأكيد'], ['close','إغلاق'],
    ['flame','حار'], ['clock','وقت'], ['globe','منطقة'], ['shield','حماية'], ['receipt','إيصال'],
    ['settings','إعدادات'], ['gift','هدية'], ['cam','كاميرا'], ['eye','مشاهدة'], ['edit','تعديل'],
    ['logout','خروج'], ['lang','لغة'], ['basket','سلة'], ['fav','مفضلة'],
  ];

  const glyphList = ['cup','spice','bottle','jar','fabric','craft','bag','box'];

  return (
    <section id="icons" className="b-section">
      <div className="b-container">
        <Eyebrow>الأيقونات · ICONOGRAPHY</Eyebrow>
        <h2 className="b-h2">أيقونات بسيطة، شخصية موحَّدة.</h2>
        <p className="b-lede">طاقم أيقونات مرسوم يدوياً بسماكة خطية موحَّدة (١٫٨px) ودرجة استدارة لطيفة — نظام واضح وقابل للتوسع.</p>

        {/* Icon spec */}
        <div className="b-icon-spec">
          <div className="b-icon-spec-l">
            <div className="b-icon-big">
              <div className="b-icon-grid">
                <I.bag size={120} stroke="var(--primary)" sw={2}/>
                {/* Grid lines */}
                <div className="b-icon-rule b-icon-rule-h" style={{ top: '50%' }}/>
                <div className="b-icon-rule b-icon-rule-v" style={{ left: '50%' }}/>
                <div className="b-icon-rule-circle"/>
              </div>
            </div>
          </div>
          <div className="b-icon-spec-r">
            <div className="b-icon-spec-row"><span>المقاس</span><strong>٢٤ × ٢٤ px</strong></div>
            <div className="b-icon-spec-row"><span>السماكة</span><strong>١٫٨ px</strong></div>
            <div className="b-icon-spec-row"><span>نهاية الخط</span><strong>دائرية</strong></div>
            <div className="b-icon-spec-row"><span>وصلة الخط</span><strong>دائرية</strong></div>
            <div className="b-icon-spec-row"><span>الشبكة</span><strong>٢٤ مربع</strong></div>
            <div className="b-icon-spec-row"><span>التعبئة</span><strong>none افتراضياً</strong></div>
          </div>
        </div>

        {/* Icon library */}
        <h3 className="b-h3" style={{ marginTop: 56 }}>المكتبة الكاملة · Library</h3>
        <div className="b-icon-grid-display">
          {iconList.map(([k, ar]) => {
            const Comp = I[k];
            if (!Comp) return null;
            return (
              <div key={k} className="b-icon-cell">
                <Comp size={26} stroke="var(--text)" sw={1.8}/>
                <div className="b-icon-name">{ar}</div>
                <div className="b-icon-key">{k}</div>
              </div>
            );
          })}
        </div>

        {/* Custom glyphs */}
        <h3 className="b-h3" style={{ marginTop: 56 }}>رموز المنتجات · Product Glyphs</h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', maxWidth: 600, marginBottom: 24 }}>أيقونات تجريدية مرسومة خصيصاً لكل قسم منتج — بديل عن صور المخزون، تحافظ على الهوية البصرية.</p>
        <div className="b-glyph-grid">
          {glyphList.map(g => {
            // Find matching category color
            const cat = Object.entries(CAT_COLORS).find(([_, v]) => v.glyph === g);
            const c = cat ? cat[1] : { bg: '#0F4D3A', ink: '#E5C97A' };
            return (
              <div key={g} className="b-glyph">
                <div className="b-glyph-tile" style={{ background: c.bg }}>
                  <Glyph kind={g} color={c.ink} size={80}/>
                </div>
                <div className="b-glyph-name">{g}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Patterns ───────────────── */
function PatternSystem() {
  return (
    <section id="pattern" className="b-section b-section-tinted">
      <div className="b-container">
        <Eyebrow>الأنماط · PATTERNS</Eyebrow>
        <h2 className="b-h2">حبوب الذرة، نسيجنا.</h2>
        <p className="b-lede">نمطنا الرسمي مستوحى من الشعار — حبات الذرة المُمَالة بزاوية ٢٨°. يُستخدم في الخلفيات، التغليف، والإعلانات.</p>

        <div className="b-pattern-row">
          {[
            { name: 'الأخضر', bg: '#0F4D3A', dot: '#E5C97A' },
            { name: 'الرمل', bg: '#FAF6EE', dot: '#A98232' },
            { name: 'الطين', bg: '#B0492C', dot: '#FAF6EE' },
          ].map(p => (
            <div key={p.name} className="b-pat-card" style={{ background: p.bg }}>
              <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: .4 }}>
                <defs>
                  <pattern id={`p-${p.name}`} width="60" height="60" patternUnits="userSpaceOnUse">
                    <ellipse cx="30" cy="30" rx="3.5" ry="9" fill={p.dot} transform="rotate(28 30 30)"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#p-${p.name})`}/>
              </svg>
              <div className="b-pat-name" style={{ color: p.bg === '#FAF6EE' ? '#1A1410' : '#fff' }}>{p.name}</div>
            </div>
          ))}
        </div>

        {/* Variations */}
        <h3 className="b-h3" style={{ marginTop: 44 }}>التنويعات · Variations</h3>
        <div className="b-pat-vars">
          {[
            { name: 'كثيف', size: 30 },
            { name: 'متوسط', size: 50 },
            { name: 'مفتوح', size: 80 },
          ].map(v => (
            <div key={v.name} className="b-pat-var">
              <div className="b-pat-var-tile">
                <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id={`pv-${v.name}`} width={v.size} height={v.size} patternUnits="userSpaceOnUse">
                      <ellipse cx={v.size/2} cy={v.size/2} rx="3.5" ry="9" fill="#0F4D3A" transform={`rotate(28 ${v.size/2} ${v.size/2})`}/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="#FAF6EE"/>
                  <rect width="100%" height="100%" fill={`url(#pv-${v.name})`} opacity=".6"/>
                </svg>
              </div>
              <div className="b-pat-var-name">{v.name}</div>
              <div className="b-pat-var-spec">{v.size}px شبكة</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Voice & tone ───────────────── */
function VoiceTone() {
  return (
    <section id="voice" className="b-section">
      <div className="b-container">
        <Eyebrow>الصوت والنبرة · VOICE & TONE</Eyebrow>
        <h2 className="b-h2">نتكلم كالجار، لا كالشركة.</h2>
        <p className="b-lede">صوتنا دافئ، صادق، مباشر — يحمل لهجة سودانية في الروح، وفصاحة عربية في الكلمة.</p>

        <div className="b-voice-attrs">
          {[
            { ar: 'دافئ', en: 'Warm', sub: 'كالاستقبال السوداني، لا كنشرة إعلانية.' },
            { ar: 'صادق', en: 'Honest', sub: 'لا نزخرف، لا نبالغ، لا نخفي.' },
            { ar: 'مباشر', en: 'Direct', sub: 'كلمة لمعنى — بدون حشو.' },
            { ar: 'مقدّر', en: 'Respectful', sub: 'نحترم وقت العميل وذكاءه.' },
          ].map(a => (
            <div key={a.en} className="b-voice-attr">
              <div className="b-voice-attr-ar">{a.ar}</div>
              <div className="b-voice-attr-en">{a.en}</div>
              <div className="b-voice-attr-sub">{a.sub}</div>
            </div>
          ))}
        </div>

        {/* Do say / Don't say */}
        <h3 className="b-h3" style={{ marginTop: 48 }}>قل / لا تقل · Do Say / Don't Say</h3>
        <div className="b-voice-rows">
          {[
            { yes: 'بنّك السوداني، طازج عند بابك', no: 'احصل على بنّك السوداني عبر منصتنا الإلكترونية الرائدة' },
            { yes: 'يصل غداً قبل ٦ مساءً', no: 'سيتم توصيل طلبك خلال فترة زمنية قياسية' },
            { yes: 'دفعنا آمن — مدى، فيزا، أبل باي', no: 'نوفر حلول دفع متطورة ومتعددة الخيارات الإلكترونية' },
            { yes: 'منتجك ما عجبك؟ رجّعه — ما في مشاكل', no: 'في حالة عدم الرضا يرجى مراجعة سياسة الإرجاع' },
          ].map((r, i) => (
            <div key={i} className="b-voice-row">
              <div className="b-voice-cell yes">
                <div className="b-voice-cell-lbl"><I.check size={14} stroke="#fff" sw={3}/> قل</div>
                <div className="b-voice-cell-text">{r.yes}</div>
              </div>
              <div className="b-voice-cell no">
                <div className="b-voice-cell-lbl"><I.close size={14} stroke="#fff" sw={3}/> لا تقل</div>
                <div className="b-voice-cell-text">{r.no}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline bank */}
        <h3 className="b-h3" style={{ marginTop: 48 }}>بنك الشعارات · Tagline Bank</h3>
        <div className="b-tag-grid">
          {[
            'أصالة سودانية، توصيل سعودي.',
            'من الأرض إلى البيت.',
            'بنّ، بهار، عطر، وأهل.',
            'كل ما تشتاق له — في تطبيق واحد.',
            'سوداني بطعم بيتك.',
            'وعدنا: الأصل، الأصل، الأصل.',
          ].map((t, i) => (
            <div key={i} className="b-tag-card">"{t}"</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Applications ───────────────── */
function Applications() {
  return (
    <section id="apps" className="b-section b-section-tinted">
      <div className="b-container">
        <Eyebrow>التطبيقات · IN USE</Eyebrow>
        <h2 className="b-h2">الهوية في الحياة الحقيقية.</h2>
        <p className="b-lede">من الجوال إلى علبة المنتج، من اللوحة الإعلانية إلى منشور إنستجرام — هكذا نطبّق هويتنا.</p>

        {/* Grid of applications */}
        <div className="b-apps-grid">
          {/* Mobile app */}
          <div className="b-app-tile b-app-mobile">
            <div className="b-app-mobile-frame">
              <div className="b-app-mobile-screen">
                <MobilePreview/>
              </div>
            </div>
            <div className="b-app-tile-cap">
              <div className="b-app-tile-name">تطبيق الجوال</div>
              <div className="b-app-tile-en">Mobile App</div>
            </div>
          </div>

          {/* Packaging */}
          <div className="b-app-tile b-app-pack">
            <PackagingMock/>
            <div className="b-app-tile-cap">
              <div className="b-app-tile-name">عبوة المنتج</div>
              <div className="b-app-tile-en">Product Packaging</div>
            </div>
          </div>

          {/* Business card */}
          <div className="b-app-tile b-app-card">
            <BusinessCard/>
            <div className="b-app-tile-cap">
              <div className="b-app-tile-name">البطاقة التعريفية</div>
              <div className="b-app-tile-en">Business Card</div>
            </div>
          </div>

          {/* Social */}
          <div className="b-app-tile b-app-social">
            <SocialPost/>
            <div className="b-app-tile-cap">
              <div className="b-app-tile-name">منشور اجتماعي</div>
              <div className="b-app-tile-en">Social Post</div>
            </div>
          </div>

          {/* Billboard */}
          <div className="b-app-tile b-app-billboard">
            <Billboard/>
            <div className="b-app-tile-cap">
              <div className="b-app-tile-name">لوحة طريق</div>
              <div className="b-app-tile-en">Billboard</div>
            </div>
          </div>

          {/* Tote */}
          <div className="b-app-tile b-app-tote">
            <ToteBag/>
            <div className="b-app-tile-cap">
              <div className="b-app-tile-name">حقيبة قماشية</div>
              <div className="b-app-tile-en">Tote Bag</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobilePreview() {
  return (
    <div style={{ padding: 14, height: '100%', background: 'var(--bg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 18 }}>
        <SMLogo size={28}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, color: 'var(--text-3)' }}>أهلاً،</div>
          <div style={{ fontSize: 13, fontWeight: 800 }}>محمد</div>
        </div>
      </div>
      <div style={{ marginTop: 14, padding: 14, borderRadius: 12, background: 'var(--primary)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: 9, opacity: .75, fontWeight: 700, letterSpacing: 1 }}>عروض رمضان</div>
        <div style={{ fontSize: 16, fontWeight: 800, marginTop: 4 }}>حتى ٤٠٪</div>
        <div style={{ fontSize: 10, opacity: .85 }}>تسوّق المختارات</div>
        <div style={{ position: 'absolute', bottom: -8, insetInlineEnd: -8, opacity: .25 }}>
          <Glyph kind="cup" color="#E5C97A" size={70}/>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
        {[['coffee','بن'], ['spice','بهار']].map(([k, n]) => (
          <div key={k} style={{ background: '#fff', borderRadius: 12, padding: 8, border: '1px solid var(--border)' }}>
            <div style={{ height: 60, borderRadius: 8, background: CAT_COLORS[k].bg, display: 'grid', placeItems: 'center' }}>
              <Glyph kind={CAT_COLORS[k].glyph} color={CAT_COLORS[k].ink} size={36}/>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, marginTop: 6 }}>{n}</div>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--primary)' }}>٣٨ <span style={{ fontSize: 8 }}>ر.س</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PackagingMock() {
  return (
    <div className="b-pack-wrap">
      <div className="b-pack-bag" style={{ background: 'linear-gradient(160deg, #0A3527 0%, #0F4D3A 60%, #14654C 100%)' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: .15 }}>
          <defs><pattern id="pack-p" width="40" height="40" patternUnits="userSpaceOnUse"><ellipse cx="20" cy="20" rx="3" ry="8" fill="#E5C97A" transform="rotate(28 20 20)"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#pack-p)"/>
        </svg>
        <div className="b-pack-top">
          <SMLogo size={44}/>
        </div>
        <div className="b-pack-mid">
          <div className="b-pack-en">PREMIUM</div>
          <div className="b-pack-name">بن سوداني</div>
          <div className="b-pack-sub">محمص حرفياً · ٢٥٠ جم</div>
        </div>
        <div className="b-pack-bot">
          <div className="b-pack-tag">منشأ: كردفان، السودان</div>
        </div>
      </div>
    </div>
  );
}

function BusinessCard() {
  return (
    <div className="b-bc-stack">
      {/* Front */}
      <div className="b-bc b-bc-front" style={{ background: '#FAF6EE' }}>
        <div className="b-bc-grain">
          <svg width="100%" height="100%"><defs><pattern id="bc-p" width="30" height="30" patternUnits="userSpaceOnUse"><ellipse cx="15" cy="15" rx="2" ry="6" fill="#0F4D3A" transform="rotate(28 15 15)" opacity=".4"/></pattern></defs><rect width="100%" height="100%" fill="url(#bc-p)" opacity=".5"/></svg>
        </div>
        <SMLogo size={64}/>
        <div className="b-bc-mark">
          <div className="b-bc-ar">سودان مارت</div>
          <div className="b-bc-en">SUDAN MART · KSA</div>
        </div>
      </div>
      {/* Back */}
      <div className="b-bc b-bc-back" style={{ background: '#0F4D3A', color: '#fff' }}>
        <div className="b-bc-name">أحمد محمد</div>
        <div className="b-bc-role">مدير العمليات</div>
        <div className="b-bc-info">
          <div>+966 55 421 4421</div>
          <div>ahmed@sudanmart.sa</div>
          <div>الرياض · العليا</div>
        </div>
        <div className="b-bc-corner">
          <Glyph kind="cup" color="#E5C97A" size={50}/>
        </div>
      </div>
    </div>
  );
}

function SocialPost() {
  return (
    <div className="b-social-wrap">
      <div className="b-social" style={{ background: 'linear-gradient(135deg, #8E3A22 0%, #C95A2F 100%)' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: .2 }}>
          <defs><pattern id="soc-p" width="50" height="50" patternUnits="userSpaceOnUse"><ellipse cx="25" cy="25" rx="3" ry="8" fill="#E5C97A" transform="rotate(28 25 25)"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#soc-p)"/>
        </svg>
        <div className="b-social-tag">عروض رمضان</div>
        <div className="b-social-headline">
          <span>حتى</span>
          <div className="b-social-big">٤٠٪</div>
          <span>خصم</span>
        </div>
        <div className="b-social-sub">على المنتجات السودانية</div>
        <div className="b-social-footer">
          <SMLogo size={32} mono color="#fff"/>
          <div>sudanmart.sa</div>
        </div>
        <div style={{ position: 'absolute', bottom: -15, insetInlineEnd: -15, opacity: .3 }}>
          <Glyph kind="jar" color="#E5C97A" size={120}/>
        </div>
      </div>
    </div>
  );
}

function Billboard() {
  return (
    <div className="b-bb-wrap">
      <div className="b-bb-frame">
        <div className="b-bb" style={{ background: '#0F4D3A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '28px 30px', height: '100%' }}>
            <div>
              <SMLogo size={70}/>
            </div>
            <div style={{ flex: 1, color: '#fff' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: 2 }}>وصلنا الرياض</div>
              <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.1, marginTop: 6 }}>
                أصالة سودانية،<br/>
                <span style={{ color: 'var(--accent)' }}>إلى باب بيتك.</span>
              </div>
              <div style={{ fontSize: 11, opacity: .7, marginTop: 8 }}>حمّل التطبيق · sudanmart.sa</div>
            </div>
          </div>
        </div>
      </div>
      <div className="b-bb-pole"/>
    </div>
  );
}

function ToteBag() {
  return (
    <div className="b-tote-wrap">
      <svg viewBox="0 0 280 320" width="100%" height="auto">
        {/* Handles */}
        <path d="M80 30 Q80 -10 140 -10 Q200 -10 200 30" fill="none" stroke="#0F4D3A" strokeWidth="10" strokeLinecap="round"/>
        {/* Bag body */}
        <rect x="30" y="30" width="220" height="270" rx="4" fill="#FAF6EE"/>
        {/* Pattern */}
        <defs><pattern id="tote-p" width="40" height="40" patternUnits="userSpaceOnUse"><ellipse cx="20" cy="20" rx="3" ry="8" fill="#0F4D3A" transform="rotate(28 20 20)" opacity=".15"/></pattern></defs>
        <rect x="30" y="30" width="220" height="270" rx="4" fill="url(#tote-p)"/>
        {/* Print: logo + text */}
        <g transform="translate(140 150)">
          <g transform="translate(-44 -50) scale(0.55)">
            <circle cx="80" cy="80" r="76" fill="#0F4D3A"/>
            <g transform="translate(80 80)">
              <path d="M0 -44 L0 44" stroke="#E5C97A" strokeWidth="5" strokeLinecap="round"/>
              {[-32, -16, 0, 16, 32].map((y, i) => (
                <g key={i}>
                  <ellipse cx="-14" cy={y} rx="12" ry="7" fill="#D9B662" transform={`rotate(-25 -14 ${y})`}/>
                  <ellipse cx="14" cy={y} rx="12" ry="7" fill="#D9B662" transform={`rotate(25 14 ${y})`}/>
                </g>
              ))}
            </g>
          </g>
          <text x="0" y="20" textAnchor="middle" fontFamily="Tajawal" fontWeight="800" fontSize="22" fill="#0F4D3A">سودان مارت</text>
          <text x="0" y="40" textAnchor="middle" fontFamily="Tajawal" fontWeight="600" fontSize="9" fill="#A98232" letterSpacing="3">SUDAN MART</text>
        </g>
      </svg>
    </div>
  );
}

/* ───────────────── Footer ───────────────── */
function BrandFooter() {
  return (
    <footer className="b-footer">
      <div className="b-container">
        <div className="b-footer-grid">
          <div>
            <SMLogo size={48}/>
            <div className="b-footer-tag">دليل الهوية البصرية · v1.0 · مايو ٢٠٢٦</div>
          </div>
          <div>
            <div className="b-footer-h">للأسئلة</div>
            <div className="b-footer-link">brand@sudanmart.sa</div>
            <div className="b-footer-link">+966 11 421 1421</div>
          </div>
          <div>
            <div className="b-footer-h">للتحميل</div>
            <div className="b-footer-link">دليل كامل (PDF)</div>
            <div className="b-footer-link">حزمة الشعارات (ZIP)</div>
            <div className="b-footer-link">ملف الخطوط (Tajawal)</div>
          </div>
        </div>
        <div className="b-footer-bottom">
          <div>© ٢٠٢٦ سودان مارت — جميع الحقوق محفوظة</div>
          <div>أعدّه فريق التصميم الداخلي</div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── Helpers ───────────────── */
function Eyebrow({ children }) {
  return <div className="b-eyebrow"><span className="b-eyebrow-dot"/>{children}</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Brand/>);
