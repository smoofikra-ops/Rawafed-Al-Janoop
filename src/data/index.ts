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
  email: 'Info@rawafedj.com',
  phone: '+966 56 491 9346',
  whatsapp: '+966564919346',
  about: {
    ar: 'تأسست شركة روافد الجنوب للتجارة في العام 2019 في مدينة جدة لتوزيع المنتجات الغذائية والحلويات والعصائر لعدد من المدن السعودية، ومن ثم افتتحت الشركة فروعها ومستودعاتها في مدن جنوب المملكة لتلبية احتياجات المنطقة وتوزيع المنتجات الغذائية.',
    en: 'Rawafed Al Janoob Trading Company was established in 2019 in Jeddah to distribute food products, sweets, and juices to several Saudi cities. The company then opened its branches and warehouses in the southern cities of the Kingdom to meet the region\'s needs and distribute food products.',
  },
  address: {
    ar: 'المقر الرئيسي، جازان، المملكة العربية السعودية',
    en: 'Headquarters, Jizan, Saudi Arabia',
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
  { id: 'experience', value: 5, label: { ar: 'سنوات من الخبرة', en: 'Years of Experience' }, suffix: '+' },
  { id: 'brands', value: 2, label: { ar: 'علامات تجارية', en: 'Brands' }, suffix: '+' },
  { id: 'branches', value: 2, label: { ar: 'فروع ومستودعات', en: 'Branches & Warehouses' } },
  { id: 'cities', value: 10, label: { ar: 'مدن نغطيها', en: 'Cities Covered' }, suffix: '+' },
];

export const brands: Brand[] = [
  {
    id: 'nof',
    name: { ar: 'نوف', en: 'NOF' },
    description: { ar: 'علامة تجارية رائدة في مجال المنتجات الغذائية.', en: 'A leading brand in food products.' },
    logo: nofLogo,
    categories: [{ ar: 'أسماك', en: 'Fish' }, { ar: 'معلبات', en: 'Canned Goods' }]
  },
  {
    id: 'lusail',
    name: { ar: 'لوسيل', en: 'Lusail' },
    description: { ar: 'منتجات عالية الجودة تلبي تطلعات المستهلكين.', en: 'High-quality products meeting consumer expectations.' },
    logo: lusailLogo,
    categories: [{ ar: 'مشروبات', en: 'Beverages' }]
  },
  {
    id: 'muscat',
    name: { ar: 'شيبس مسقط', en: 'Muscat Chips' },
    description: { ar: 'علامة تجارية عمانية رائدة في صناعة رقائق البطاطس.', en: 'A leading Omani brand in potato chips.' },
    logo: 'https://muscatchips.com/wp-content/uploads/al_opt_content/IMAGE/muscatchips.com/wp-content/uploads/2025/07/cropped-Logo-512x512-No_BG.png',
    categories: [{ ar: 'وجبات خفيفة', en: 'Snacks' }]
  }
];

export const branches: Branch[] = [
  {
    id: 'riyadh',
    name: { ar: 'المركز الرئيسي - الرياض', en: 'Headquarters - Riyadh' },
    city: { ar: 'الرياض', en: 'Riyadh' },
    address: { ar: 'الرياض', en: 'Riyadh' },
    phone: '+966 56 491 9346',
    mapLink: '#',
    type: 'headquarters',
    hours: { ar: 'الأحد - الخميس: 8 ص - 5 م', en: 'Sun - Thu: 8 AM - 5 PM' },
    iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4243.179112053647!2d46.754382299999996!3d24.5577575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f09001a69376d%3A0x50e2c394120bb08c!2z2LTYsdmD2Kkg2LHZiNin2YHYryDYp9mE2KzZhtmI2Kgg2YTZhNiq2KzYp9ix2Kkg2YjYp9mE2KXYs9iq2YrYsdin2K8!5e1!3m2!1sar!2ssa!4v1783770337742!5m2!1sar!2ssa" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
  },
  {
    id: 'sabya',
    name: { ar: 'الفرع الأول - صبياء الصناعية', en: 'First Branch - Sabya Industrial' },
    city: { ar: 'صبيا', en: 'Sabya' },
    address: { ar: 'صبيا الصناعية', en: 'Sabya Industrial Area' },
    phone: '+966 56 491 9346',
    mapLink: '#',
    type: 'branch',
    hours: { ar: 'الأحد - الخميس: 8 ص - 5 م', en: 'Sun - Thu: 8 AM - 5 PM' },
    iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.0426023423315!2d42.7416817!3d17.1792705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fd450222c82375%3A0xede6d6c80b72189e!2z2YXYs9iq2YjYr9i5INi02LHZg9ipINix2YjYp9mB2K8g2KfZhNis2YbZiNio!5e1!3m2!1sar!2ssa!4v1783733071602!5m2!1sar!2ssa" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
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
