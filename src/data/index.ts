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
  founded: 2019,
  email: 'info@rawafedj.com',
  phone: '0569083763',
  whatsapp: '966569083763',
  about: {
    ar: 'تأسست شركة روافد الجنوب للتجارة في العام 2019 في مدينة جدة لتوزيع المنتجات الغذائية والحلويات والعصائر لعدد من المدن السعودية، ومن ثم افتتحت الشركة فروعها ومستودعاتها في مدن جنوب المملكة لتلبية احتياجات المنطقة وتوزيع المنتجات الغذائية.',
    en: 'Rawafed Al Janoob Trading Company was established in 2019 in Jeddah to distribute food products, sweets, and juices to several Saudi cities. The company then opened its branches and warehouses in the southern cities of the Kingdom to meet the region\'s needs and distribute food products.',
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
  { id: 'branches', value: 2, label: { ar: 'فروع ومستودعات', en: 'Branches & Warehouses' } },
];

export const brands: Brand[] = [
  {
    id: 'estikan',
    name: { ar: 'شاي استكان', en: 'Estikan Tea' },
    description: { 
      ar: 'أجود أنواع الشاي السيلاني الفاخر المقطوف يدوياً. يتميز بنكهته الغنية ولونه الذهبي الأصيل ليقدم لك تجربة شاي استثنائية في كل كوب.', 
      en: 'The finest premium Ceylon tea, hand-picked. It is distinguished by its rich flavor and authentic golden color to offer you an exceptional tea experience in every cup.' 
    },
    logo: 'https://res.cloudinary.com/x6mkqvcj/image/upload/v1785951068/istkan_tea_logo_rqst8e.png',
    categories: [{ ar: 'شاي', en: 'Tea' }]
  },
  {
    id: 'lusail',
    name: { ar: 'لوسيل', en: 'Lusail' },
    description: { 
      ar: 'منتجات عالية الجودة تلبي تطلعات المستهلكين. نقدم تشكيلة متنوعة من المشروبات المنعشة المصنعة بأعلى معايير الجودة والسلامة الغذائية.', 
      en: 'High-quality products meeting consumer expectations. We offer a diverse range of refreshing beverages manufactured with the highest quality and food safety standards.' 
    },
    logo: lusailLogo,
    categories: [{ ar: 'مشروبات', en: 'Beverages' }]
  },
  {
    id: 'muscat',
    name: { ar: 'شيبس مسقط', en: 'Muscat Chips' },
    description: { 
      ar: 'علامة تجارية عمانية رائدة في صناعة رقائق البطاطس الطازجة المقرمشة بنكهات متنوعة ترضي جميع الأذواق ومصنوعة من أفضل المكونات الطبيعية.', 
      en: 'A leading Omani brand in the manufacture of fresh, crispy potato chips in various flavors that satisfy all tastes, made from the best natural ingredients.' 
    },
    logo: 'https://muscatchips.com/wp-content/uploads/al_opt_content/IMAGE/muscatchips.com/wp-content/uploads/2025/07/cropped-Logo-512x512-No_BG.png',
    categories: [{ ar: 'وجبات خفيفة', en: 'Snacks' }]
  },
  {
    id: 'simak',
    name: { ar: 'سماك', en: 'Simak' },
    description: {
      ar: 'علامة تجارية متميزة تقدم أفضل المنتجات الغذائية والمشروبات المستوحاة من الطبيعة. نلتزم بتقديم الجودة والمذاق الرائع لتلبية احتياجاتك اليومية.',
      en: 'A premium brand offering the best natural-inspired food and beverage products. We are committed to delivering quality and great taste to meet your daily needs.'
    },
    logo: 'https://res.cloudinary.com/x6mkqvcj/image/upload/v1785951068/simak_logo_vcxta6.png',
    categories: [{ ar: 'أغذية ومشروبات', en: 'Food & Beverages' }]
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
    phone: '0569083763',
    phones: ['0569083763'],
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
    phone: '0568737798',
    phones: ['0568737798', '0566483874'],
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
    phone: '0566151995',
    phones: ['0566151995'],
    mapLink: '#',
    type: 'branch',
    hours: { ar: 'الأحد - الخميس: 8 ص - 5 م', en: 'Sun - Thu: 8 AM - 5 PM' },
    iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4429.574418940696!2d42.7280814!3d18.2868771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb599ffa41ec0f%3A0xc0484fe2ef626925!2z2YXYpNiz2LPYqSDYsdmI2KfZgdivINin2YTYrNmG2YjYqCDYp9mE2KrYrNin2LHZitip!5e1!3m2!1sar!2ssa!4v1785974693805!5m2!1sar!2ssa" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
  }
];

export const services: Service[] = [
  {
    id: 'distribution',
    title: { ar: 'توزيع المنتجات الغذائية', en: 'Food Products Distribution' },
    description: { ar: 'شبكة توزيع واسعة لضمان وصول المنتجات طازجة وبأسرع وقت.', en: 'Extensive distribution network ensuring products arrive fresh and fast.' },
    icon: 'Truck'
  },
  {
    id: 'warehousing',
    title: { ar: 'التخزين المبرد والجاف', en: 'Cold and Dry Warehousing' },
    description: { ar: 'مستودعات مجهزة بأحدث التقنيات لضمان جودة المنتجات.', en: 'Warehouses equipped with latest technologies to ensure product quality.' },
    icon: 'Package'
  },
  {
    id: 'brand-management',
    title: { ar: 'إدارة العلامات التجارية', en: 'Brand Management' },
    description: { ar: 'خطط تسويقية وبيعية متكاملة لنمو العلامات التجارية في السوق.', en: 'Integrated marketing and sales plans for brand growth in the market.' },
    icon: 'TrendingUp'
  }
];
