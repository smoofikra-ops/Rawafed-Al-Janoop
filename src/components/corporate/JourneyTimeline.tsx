import React, { useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

export function JourneyTimeline() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  const title = { ar: 'مسيرتنا', en: 'Our Journey' };
  
  const milestones = [
    { year: '2018', title: { ar: 'انطلاقة الشركة', en: 'Company Launch' } },
    { year: '2019', title: { ar: 'توسع العمليات', en: 'Operations Expansion' } },
    { year: '2021', title: { ar: 'شراكات استراتيجية', en: 'Strategic Partnerships' } },
    { year: '2023', title: { ar: 'إطلاق العلامات الخاصة', en: 'Private Brands Launch' } },
    { year: '2025', title: { ar: 'شبكة توزيع وطنية', en: 'National Distribution Network' } },
    { year: '2026', title: { ar: 'تطور مستمر', en: 'Continuous Development' } },
    { year: 'اليوم', title: { ar: 'حاضرنا ومستقبلنا', en: 'Our Present & Future' }, summary: { ar: 'واليوم تواصل روافد الجنوب تعزيز مكانتها كشريك موثوق في الاستيراد والتوزيع والخدمات اللوجستية، مع شبكة تغطي مختلف مناطق المملكة وشراكات استراتيجية مع علامات تجارية محلية وعالمية.', en: 'Today, Rawafed Al-Janoob continues to strengthen its position as a trusted partner in import, distribution, and logistics, with a network covering various regions of the Kingdom and strategic partnerships with local and international brands.' } },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          {title[language as 'ar' | 'en']}
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
      </motion.div>

      <div ref={containerRef} className="max-w-4xl mx-auto relative z-10 py-10">
        {/* Background Track */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/10 -translate-x-1/2 rounded-full hidden md:block"></div>
        <div className="absolute top-0 bottom-0 rtl:right-8 ltr:left-8 w-1 bg-white/10 rounded-full md:hidden"></div>
        
        {/* Animated Progress Line */}
        <motion.div 
          className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-green-500 via-red-500 to-green-500 -translate-x-1/2 rounded-full hidden md:block origin-top"
          style={{ scaleY }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-0 bottom-0 rtl:right-8 ltr:left-8 w-1 bg-gradient-to-b from-green-500 via-red-500 to-green-500 rounded-full md:hidden origin-top"
          style={{ scaleY }}
        ></motion.div>

        <div className="flex flex-col gap-12 sm:gap-20 relative z-10">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem 
                key={index} 
                milestone={milestone} 
                index={index} 
                isEven={isEven} 
                language={language}
                isRTL={isRTL}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ milestone, index, isEven, language, isRTL }: any) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const borderColor = useTransform(scrollYProgress, [0, 1], ["rgba(255,255,255,0.1)", "rgba(34,197,94,1)"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.4]);

  return (
    <div ref={itemRef} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''} group relative`}>
      {/* Mobile only connection line fix */}
      <div className="absolute rtl:right-8 ltr:left-8 h-full w-px bg-transparent md:hidden" />
      
      {/* Spacer for alternating layout (Desktop) */}
      <div className="hidden md:block md:w-1/2" />
      
      {/* Badge / Year Node */}
      <motion.div 
        style={{ scale, borderColor }}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/80 border-4 flex items-center justify-center shrink-0 z-20 relative mx-auto md:mx-0 shadow-2xl transition-colors duration-500"
      >
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 bg-green-500/30 rounded-full blur-xl -z-10"
        />
        {/* Red accent dot inside */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-white font-black text-xl sm:text-2xl drop-shadow-md">{milestone.year}</span>
      </motion.div>

      {/* Content Card */}
      <motion.div 
        style={{ opacity, scale }}
        className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start md:pr-12 lg:pr-16' : 'md:justify-end md:pl-12 lg:pl-16'} mt-6 md:mt-0 px-12 md:px-0 relative`}
      >
        {/* Arrow connector (Desktop) */}
        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-green-500/50 ${isEven ? 'right-0' : 'left-0'}`}></div>
        
        {/* Arrow connector (Mobile) */}
        <div className="md:hidden absolute top-1/2 -translate-y-1/2 w-8 h-px bg-green-500/50 rtl:-right-4 ltr:-left-4"></div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-[2rem] w-full max-w-sm shadow-xl group-hover:border-green-500/30 group-hover:bg-black/60 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-green-400 transition-colors">
            {milestone.title[language as 'ar' | 'en']}
          </h3>
          <div className="h-1 w-12 bg-red-500 rounded opacity-50 group-hover:opacity-100 transition-opacity mb-2"></div>
          {milestone.summary && (
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-medium min-h-[100px]">
              {milestone.summary[language as 'ar' | 'en']}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}