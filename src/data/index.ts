import { Branch, Brand, Product, Service, Stat, NavItem } from '../types';
import nofLogo from '../assets/images/regenerated_image_1783733661623.webp';
import lusailLogo from '../assets/images/regenerated_image_1783733662201.webp';

export const navigation: NavItem[] = [
  { id: 'home', label: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
  { id: 'about', label: { ar: 'من نحن', en: 'About Us' }, href: '/about' },
  { id: 'services', label: { ar: 'الخدمات', en: 'Services' }, href: '/services' },
  { id: 'brands', label: { ar: 'العلامات التجارية', en: 'Brands' }, href: '/brands' },
  { id: 'products', label: { ar: 'المنتجات', en: 'Products' }, href: '/products' },
  { id: 'branches', label: { ar: 'الفروع والمستودعات', en: 'Branches & Warehouses' }, href: '/branches' },
  { id: 'quote', label: { ar: 'طلب عرض سعر', en: 'Request a Quote' }, href: '/quote' },
  { id: 'contact', label: { ar: 'تواصل معنا', en: 'Contact Us' }, href: '/contact' },
];

export const companyInfo = {
  name: { ar: 'شركة روافد الجنوب للتجارة', en: 'Rawafed Al Janoob Trading Company' },
  founded: 2018,
  email: 'info@rawafedj.com',
  phone: '+966569083763',
  whatsapp: '+966569083763',
  about: {
    ar: 'تأسست روافد الجنوب في عام 2018. نحن نفخر بكوننا شركة رائدة في توزيع المنتجات الغذائية والحلويات عبر مناطق الرياض، جازان، ومنطقة عسير. من خلال وجودنا القوي في هذه الأسواق الرئيسية، اكتسبنا سمعة طيبة في تقديم منتجات عالية الجودة، بأسعار تنافسية، وخدمات توزيع موثوقة. ومن خلال الشراكات الاستراتيجية وشبكة لوجستية قوية، نواصل النمو والابتكار لتلبية الاحتياجات المتطورة لعملائنا.',
    en: 'Rawafed Al Janoob was established in 2018. We take pride in being a leading company in the distribution of food products and sweets across the Riyadh, Jazan, and Asir regions. With our strong presence in these key markets, we have earned a solid reputation for providing high-quality products at competitive prices, along with reliable distribution services. Through strategic partnerships and a strong logistics network, we continue to grow and innovate to meet the evolving needs of our customers.',
  },
  address: {
    ar: 'الرياض – حي الدار البيضاء – طريق عرفات',
    en: 'Riyadh – Al-Dar Al-Baida – Arafat Road',
  },
  social: {
    tiktok: 'https://www.tiktok.com/@rawafedaljanoob?_r=1&_t=ZG-97wlzZmlXBA',
    instagram: 'https://www.instagram.com/rawafedaljanoob?igsh=MTJ2b2o5cWU1eDk3cg%3D%3D&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1cvejwFYLh/?mibextid=wwXIfr',
    x: 'https://x.com/rawafedaljanoob?s=21',
    snapchat: 'https://snapchat.com/t/OVmnSDGl',
  }
};

export const stats: Stat[] = [
  { id: 'brands', value: 4, label: { ar: 'علامات تجارية', en: 'Brands' }, suffix: '+' },
  { id: 'regions', value: 13, label: { ar: 'مناطق المملكة', en: 'Regions of the Kingdom' } },
  { id: 'cities', value: 100, label: { ar: 'مدينة مغطاة', en: 'Covered Cities' }, suffix: '+' },
  { id: 'branches', value: 3, label: { ar: 'فروع ومستودعات', en: 'Branches & Warehouses' } },
];

export const brands: Brand[] = [
  {
    id: 'estikan',
    name: { ar: 'شاي استكان', en: 'Istikan Tea' },
    description: { 
      ar: 'أجود أنواع الشاي السيلاني الفاخر المقطوف يدوياً. يتميز بنكهته الغنية ولونه الذهبي الأصيل ليقدم لك تجربة شاي استثنائية في كل كوب.', 
      en: 'The finest premium Ceylon tea, hand-picked. It is distinguished by its rich flavor and authentic golden color to offer you an exceptional tea experience in every cup.' 
    },
    logo: 'https://res.cloudinary.com/x6mkqvcj/image/upload/v1785951068/istkan_tea_logo_rqst8e.png',
    categories: [{ ar: 'شاي', en: 'Tea' }],
    badge: { ar: '🤝 شريك استراتيجي', en: '🤝 Strategic Partner' }
  },
  {
    id: 'lusail',
    name: { ar: 'لوسيل', en: 'Lusail' },
    description: { 
      ar: 'لوسيل هي العلامة التجارية الخاصة بشركة روافد الجنوب، ويتم تطوير منتجاتها بالتعاون مع مصانع متخصصة وفق أعلى معايير الجودة.\n\nتضم العلامة مجموعة متنوعة من المنتجات الغذائية، من أبرزها:\n• الأجبان\n• الصلصات\n• الشطة الحارة\n\nوتركز العلامة على تقديم منتجات عالية الجودة تلبي احتياجات السوق السعودي.', 
      en: 'Lusail is the private label of Rawafed Al-Janoob.\n\nIts products are developed in cooperation with specialized manufacturing partners while maintaining the highest quality standards.\n\nThe brand currently offers:\n• Cheese Products\n• Sauces\n• Hot Chili Sauce\n\nDesigned specifically to meet the needs of the Saudi market.' 
    },
    logo: lusailLogo,
    categories: [{ ar: 'أغذية', en: 'Food' }],
    badge: { ar: '🏷️ العلامة التجارية الخاصة بنا', en: '🏷️ Our Private Label' },
    origin: { ar: 'السعودية', en: 'Saudi Arabia' }
  },
  {
    id: 'muscat',
    name: { ar: 'شيبس مسقط', en: 'Muscat Chips' },
    description: { 
      ar: 'علامة تجارية عمانية رائدة في صناعة رقائق البطاطس الطازجة المقرمشة بنكهات متنوعة ترضي جميع الأذواق ومصنوعة من أفضل المكونات الطبيعية.', 
      en: 'A leading Omani brand in the manufacture of fresh, crispy potato chips in various flavors that satisfy all tastes, made from the best natural ingredients.' 
    },
    logo: 'https://muscatchips.com/wp-content/uploads/al_opt_content/IMAGE/muscatchips.com/wp-content/uploads/2025/07/cropped-Logo-512x512-No_BG.png',
    categories: [{ ar: 'وجبات خفيفة', en: 'Snacks' }],
    badge: { ar: '🤝 شريك استراتيجي', en: '🤝 Strategic Partner' }
  },
  {
    id: 'simak',
    name: { ar: 'سماك', en: 'Simak' },
    description: {
      ar: 'سماك هي علامة تجارية ومصنع عُماني متخصص في إنتاج التونة.\n\nتقوم شركة روافد الجنوب بتوزيع منتجات سماك في السوق السعودي مع الالتزام بأعلى معايير الجودة وسلامة المنتجات.',
      en: 'Simak is an Omani brand and manufacturer specializing exclusively in tuna products.\n\nRawafed Al-Janoob distributes Simak products across the Saudi market while maintaining high standards of quality and food safety.'
    },
    logo: 'https://res.cloudinary.com/x6mkqvcj/image/upload/v1785951068/simak_logo_vcxta6.png',
    categories: [{ ar: 'أغذية ومشروبات', en: 'Food & Beverages' }],
    badge: { ar: '🌍 علامة تجارية دولية', en: '🌍 International Brand' },
    origin: { ar: 'سلطنة عُمان', en: 'Oman' }
  }
];

export const successPartners = [
  { id: 'othaim', name: { ar: 'أسواق العثيم', en: 'Othaim Markets' }, logo: 'https://upload.wikimedia.org/wikipedia/ar/2/23/Othaim_Markets_Logo.png' },
  { id: 'panda', name: { ar: 'بنده', en: 'Panda' }, logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Panda_Retail_Company_Logo.svg' },
  { id: 'lulu', name: { ar: 'لولو هايبر ماركت', en: 'LuLu Hypermarket' }, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lulu_Hypermarket_Logo.svg/512px-Lulu_Hypermarket_Logo.svg.png' },
  { id: 'danube', name: { ar: 'الدانوب', en: 'Danube' }, logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Danube_Company_logo.svg/512px-Danube_Company_logo.svg.png' },
  { id: 'carrefour', name: { ar: 'كارفور', en: 'Carrefour' }, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/512px-Carrefour_logo.svg.png' },
  { id: 'tamimi', name: { ar: 'أسواق التميمي', en: 'Tamimi Markets' }, logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Tamimi_Markets_Logo.svg/512px-Tamimi_Markets_Logo.svg.png' },
];


export const branches: Branch[] = [
  {
    id: 'riyadh',
    name: { ar: 'المركز الرئيسي', en: 'Head Office' },
    city: { ar: 'الرياض', en: 'Riyadh' },
    address: { ar: 'حي الدار البيضاء – طريق عرفات', en: 'Al-Dar Al-Baida – Arafat Road' },
    phone: '+966569083763',
    phones: ['+966569083763'],
    mapLink: '#',
    type: 'headquarters',
    hours: { ar: 'الأحد - الخميس: 8 ص - 5 م', en: 'Sun - Thu: 8 AM - 5 PM' },
    iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4243.179112053647!2d46.754382299999996!3d24.5577575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f09001a69376d%3A0x50e2c394120bb08c!2z2LTYsdmD2Kkg2LHZiNin2YHYryDYp9mE2KzZhtmI2Kgg2YTZhNiq2KzYp9ix2Kkg2YjYp9mE2KXYs9iq2YrYsdin2K8!5e1!3m2!1sar!2ssa!4v1785973566095!5m2!1sar!2ssa" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
  },
  {
    id: 'sabya',
    name: { ar: 'فرع صبيا', en: 'Sabya Branch' },
    city: { ar: 'صبيا', en: 'Sabya' },
    address: { ar: 'المنطقة الصناعية', en: 'Industrial Area' },
    phone: '+966568737798',
    phones: ['+966568737798'],
    mapLink: '#',
    type: 'branch',
    hours: { ar: 'الأحد - الخميس: 8 ص - 5 م', en: 'Sun - Thu: 8 AM - 5 PM' },
    iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.0426023423315!2d42.7416817!3d17.1792705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fd450222c82375%3A0xede6d6c80b72189e!2z2YXYs9iq2YjYr9i5INi02LHZg9ipINix2YjYp9mB2K8g2KfZhNis2YbZiNio!5e1!3m2!1sar!2ssa!4v1783733071602!5m2!1sar!2ssa" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
  },
  {
    id: 'khamis-mushait',
    name: { ar: 'فرع خميس مشيط', en: 'Khamis Mushait Branch' },
    city: { ar: 'خميس مشيط', en: 'Khamis Mushait' },
    address: { ar: 'المنطقة الصناعية', en: 'Industrial Area' },
    phone: '+966566151995',
    phones: ['+966566151995'],
    mapLink: '#',
    type: 'branch',
    hours: { ar: 'الأحد - الخميس: 8 ص - 5 م', en: 'Sun - Thu: 8 AM - 5 PM' },
    iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4429.574418940696!2d42.7280814!3d18.2868771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb599ffa41ec0f%3A0xc0484fe2ef626925!2z2YXYpNiz2LPYqSDYsdmI2KfZgdivINin2YTYrNmG2YjYqCDYp9mE2KrYrNin2LHZitip!5e1!3m2!1sar!2ssa!4v1785974693805!5m2!1sar!2ssa" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
  }
];

export const services: Service[] = [
  {
    id: 'import-services',
    title: { ar: 'خدمات الاستيراد', en: 'Import Services' },
    description: { ar: 'نقدم خدمات استيراد موثوقة لأجود المنتجات الغذائية من الأسواق العالمية لضمان تنوع وجودة تلبي احتياجات السوق.', en: 'We offer reliable import services for the finest food products from global markets to ensure quality and variety.' },
    icon: 'Globe'
  },
  {
    id: 'distribution-services',
    title: { ar: 'خدمات التوزيع', en: 'Distribution Services' },
    description: { ar: 'شبكة توزيع وطنية واسعة لضمان وصول منتجاتنا إلى مختلف مناطق المملكة بكفاءة وسرعة.', en: 'A vast national distribution network ensuring our products reach various regions of the Kingdom efficiently and swiftly.' },
    icon: 'Truck'
  },
  {
    id: 'logistics-supply-chain',
    title: { ar: 'الخدمات اللوجستية وسلاسل الإمداد', en: 'Logistics & Supply Chain' },
    description: { ar: 'إدارة متكاملة لسلاسل الإمداد وحلول لوجستية مرنة لضمان استمرارية الأعمال وتدفق المنتجات.', en: 'Integrated supply chain management and flexible logistics solutions ensuring business continuity and product flow.' },
    icon: 'Map'
  },
  {
    id: 'warehousing',
    title: { ar: 'التخزين', en: 'Warehousing' },
    description: { ar: 'مستودعات حديثة ومجهزة بأعلى معايير السلامة والجودة لتخزين المنتجات الجافة والمبردة.', en: 'Modern warehouses equipped with the highest safety and quality standards for storing dry and refrigerated products.' },
    icon: 'Package'
  },
  {
    id: 'sales-marketing',
    title: { ar: 'دعم المبيعات والتسويق', en: 'Sales & Marketing Support' },
    description: { ar: 'فريق محترف يقدم خطط تسويقية مبنية على بيانات السوق لدعم نمو مبيعات العلامات التجارية.', en: 'A professional team providing data-driven marketing plans to support the sales growth of brands.' },
    icon: 'TrendingUp'
  },
  {
    id: 'brand-representation',
    title: { ar: 'تمثيل العلامات التجارية', en: 'Brand Representation' },
    description: { ar: 'تمثيل حصري وموثوق للعلامات التجارية العالمية والمحلية في السوق السعودي لبناء حضور قوي.', en: 'Exclusive and reliable representation for global and local brands in the Saudi market to build a strong presence.' },
    icon: 'Award'
  },
  {
    id: 'exclusive-distribution',
    title: { ar: 'التوزيع الحصري', en: 'Exclusive Distribution' },
    description: { ar: 'توزيع حصري لعلامات بارزة مع التزام كامل بتوسيع نطاق انتشارها وزيادة حصتها السوقية.', en: 'Exclusive distribution of prominent brands with a full commitment to expanding their reach and market share.' },
    icon: 'ShieldCheck'
  },
  {
    id: 'retail-wholesale',
    title: { ar: 'الإمداد لقطاعات التجزئة والجملة', en: 'Retail & Wholesale Supply' },
    description: { ar: 'توفير المنتجات والسلع الاستهلاكية لقطاعات التجزئة والجملة بأسعار تنافسية وموثوقية عالية.', en: 'Providing FMCG products to retail and wholesale sectors with competitive pricing and high reliability.' },
    icon: 'Store'
  }
];
