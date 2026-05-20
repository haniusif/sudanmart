// Sudan Mart — mock catalog data
// Bilingual, with categories matching the brief.

const CATEGORIES = [
  { id: 'coffee',  ar: 'بن وقهوة',    en: 'Coffee',    cat: 'coffee',  count: 42 },
  { id: 'spice',   ar: 'بهارات',      en: 'Spices',    cat: 'spice',   count: 86 },
  { id: 'food',    ar: 'مواد غذائية', en: 'Pantry',    cat: 'food',    count: 124 },
  { id: 'dates',   ar: 'تمور',        en: 'Dates',     cat: 'dates',   count: 28 },
  { id: 'perfume', ar: 'عطور وبخور',  en: 'Perfumes',  cat: 'perfume', count: 65 },
  { id: 'tea',     ar: 'كركديه وشاي', en: 'Tea',       cat: 'tea',     count: 19 },
  { id: 'textile', ar: 'أزياء وأقمشة',en: 'Textiles',  cat: 'textile', count: 73 },
  { id: 'craft',   ar: 'حرف يدوية',   en: 'Crafts',    cat: 'craft',   count: 51 },
  { id: 'sweets',  ar: 'حلويات',      en: 'Sweets',    cat: 'sweets',  count: 34 },
  { id: 'beans',   ar: 'حبوب وبقول',  en: 'Grains',    cat: 'beans',   count: 47 },
];

const PRODUCTS = [
  { id: 'p1',  ar: 'بن سوداني محمص — حلة الجبنة',  en: 'Roasted Sudanese Coffee 500g', cat: 'coffee',  price: 38, old: 48, rating: 4.9, reviews: 312, tag: '-20%', seller: 'بيت البن' },
  { id: 'p2',  ar: 'كركديه أحمر فاخر',              en: 'Premium Hibiscus 1kg',          cat: 'tea',     price: 24, rating: 4.8, reviews: 198, seller: 'مزارع كردفان' },
  { id: 'p3',  ar: 'فول مصري سوداني',                en: 'Sudanese Fava Beans 2kg',       cat: 'beans',   price: 19, rating: 4.7, reviews: 87, seller: 'سوق الخرطوم' },
  { id: 'p4',  ar: 'بهار شطة وكمون',                 en: 'Chili Cumin Spice Mix',         cat: 'spice',   price: 14, rating: 4.6, reviews: 145, tag: 'جديد', seller: 'بهارات أم درمان' },
  { id: 'p5',  ar: 'عطر صندل سوداني',                en: 'Sudanese Sandalwood Oud',       cat: 'perfume', price: 95, old: 120, rating: 4.9, reviews: 421, tag: '-21%', seller: 'دار العطور' },
  { id: 'p6',  ar: 'بخور تلقاي معتق',                 en: 'Talqai Incense Premium',        cat: 'perfume', price: 65, rating: 4.8, reviews: 256, seller: 'دار العطور' },
  { id: 'p7',  ar: 'تمر مدينة فاخر — كيلو',          en: 'Medina Dates Premium 1kg',      cat: 'dates',   price: 42, rating: 4.7, reviews: 167, seller: 'تمور النخيل' },
  { id: 'p8',  ar: 'ثوب نسائي مطرز يدوياً',           en: 'Hand-embroidered Thobe',        cat: 'textile', price: 220, rating: 4.9, reviews: 64, tag: 'حصري', seller: 'أقمشة السودان' },
  { id: 'p9',  ar: 'سمسم أبيض مغسول',                en: 'Washed White Sesame 1kg',       cat: 'food',    price: 16, rating: 4.6, reviews: 92, seller: 'سوق الخرطوم' },
  { id: 'p10', ar: 'دلكة بخور للعروس',                en: 'Bridal Dilka Smoke Bath',       cat: 'perfume', price: 55, rating: 4.9, reviews: 312, tag: 'الأكثر مبيعاً', seller: 'دار العطور' },
  { id: 'p11', ar: 'قهوة جبنة مع زنجبيل',             en: 'Jebena Coffee w/ Ginger',       cat: 'coffee',  price: 28, rating: 4.7, reviews: 88, seller: 'بيت البن' },
  { id: 'p12', ar: 'سلة خوص يدوية كبيرة',             en: 'Hand-woven Palm Basket L',      cat: 'craft',   price: 78, rating: 4.8, reviews: 41, seller: 'حرف نوبية' },
  { id: 'p13', ar: 'حلاوة طحينية بالسمسم',            en: 'Sesame Halawa 500g',            cat: 'sweets',  price: 22, rating: 4.5, reviews: 67, seller: 'حلويات الخرطوم' },
  { id: 'p14', ar: 'فول سوداني مملح',                 en: 'Salted Peanuts 500g',           cat: 'beans',   price: 12, rating: 4.6, reviews: 134, seller: 'مزارع كردفان' },
];

const BANNERS = [
  { id: 'b1', ar: 'عروض رمضان', sub: 'خصم حتى 40% على المنتجات السودانية الأصيلة', cta: 'تسوّق الآن', bg: 'linear-gradient(135deg, #0F4D3A 0%, #14654C 60%, #2B7A5D 100%)', tag: 'حصري' },
  { id: 'b2', ar: 'بن أصيل من كردفان', sub: 'مباشرة من المزارع إلى منزلك في المملكة', cta: 'اكتشف', bg: 'linear-gradient(135deg, #3D2418 0%, #5A3B16 100%)', tag: 'وصل حديثاً' },
  { id: 'b3', ar: 'بخور وعطور سودانية', sub: 'صناعة محلية بأيدي حرفيات', cta: 'تصفح', bg: 'linear-gradient(135deg, #8E3A22 0%, #B0492C 100%)', tag: 'مفضل' },
];

const FLASH = PRODUCTS.filter(p => p.tag && p.tag.startsWith('-')).slice(0, 6);
const BEST  = PRODUCTS.slice().sort((a,b) => b.reviews - a.reviews).slice(0, 6);
const POPULAR = PRODUCTS.slice(0, 8);

const REVIEWS = [
  { user: 'أم محمد', city: 'الرياض', rating: 5, text: 'البن طازج ورائحته جميلة، يذكرني بأيام الخرطوم. التوصيل كان سريع جداً.', date: 'قبل ٣ أيام' },
  { user: 'عبد الرحمن', city: 'جدة', rating: 5, text: 'جودة ممتازة وأصلية ١٠٠٪. أكيد سأطلب مرة ثانية.', date: 'قبل أسبوع' },
  { user: 'فاطمة ع.', city: 'الدمام', rating: 4, text: 'المنتج جيد لكن العبوة كانت بسيطة. الطعم رائع.', date: 'قبل أسبوعين' },
];

const ORDERS = [
  { id: 'SM-8421', date: '٢٠ مايو ٢٠٢٦', status: 'in_transit', total: 142, items: 3, eta: 'يصل غداً قبل الساعة ٦ مساءً', courier: 'سمسا · SMSA' },
  { id: 'SM-8390', date: '١٥ مايو ٢٠٢٦', status: 'delivered', total: 89,  items: 2, courier: 'البريد السعودي' },
  { id: 'SM-8344', date: '٨ مايو ٢٠٢٦',  status: 'delivered', total: 215, items: 5, courier: 'سمسا · SMSA' },
  { id: 'SM-8201', date: '٢ مايو ٢٠٢٦',  status: 'cancelled', total: 36,  items: 1 },
];

const ADDRESSES = [
  { id: 'a1', label: 'المنزل',  city: 'الرياض',     line: 'شارع التحلية، مجمع العليا ٤، شقة ١٢٠٢', phone: '+966 55 ••• 4421', default: true },
  { id: 'a2', label: 'العمل',  city: 'الرياض',     line: 'واحة الملك عبدالله للتقنية، مبنى ١٧، الطابق ٣', phone: '+966 55 ••• 4421' },
];

const PAYMENTS = [
  { id: 'pay1', kind: 'card', last4: '4421', name: 'Visa', exp: '08/28', brand: '#1A1F71', default: true },
  { id: 'pay2', kind: 'card', last4: '7890', name: 'Mastercard', exp: '11/27', brand: '#EB001B' },
  { id: 'pay3', kind: 'apple', name: 'Apple Pay' },
  { id: 'pay4', kind: 'cod',   name: 'الدفع عند الاستلام' },
];

Object.assign(window, { CATEGORIES, PRODUCTS, BANNERS, FLASH, BEST, POPULAR, REVIEWS, ORDERS, ADDRESSES, PAYMENTS });
