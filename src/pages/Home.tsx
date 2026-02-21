import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Code, Palette, Layout, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useAppStore } from '@/context/AppContext';
import { ProjectCard } from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import backImg from '@/assets/back.png';

export default function HomePage() {
  const { siteConfig, projects } = useAppStore();
  // Show all projects in the portfolio section
  const allProjects = projects;

  // Mouse move interaction for hero background
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 40, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  const xMove = useTransform(mouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const yMove = useTransform(mouseY, [-0.5, 0.5], ["-20px", "20px"]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Home" 
        description="STUDIO K는 브랜드의 본질을 시각화하는 로고 디자인 및 웹사이트 제작 전문 에이전시입니다." 
      />
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ x: xMove, y: yMove, scale: 1.1 }}
            className="w-full h-full"
          >
            <img 
              src={backImg} 
              alt="Abstract Blue Fluid Background" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ding-black/20 to-ding-black" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 whitespace-pre-line"
          >
            {siteConfig.heroTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 whitespace-pre-line"
          >
            {siteConfig.heroSubtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-ding-blue hover:bg-ding-blue-light text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              포트폴리오 보기 <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-[#020202] to-ding-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              세 기술을 모아 최적의 솔루션을 제공합니다
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 border border-white/10 rounded-2xl bg-ding-blue hover:bg-ding-blue-light hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <Palette className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Brand Identity</h3>
              <p className="text-white/70 group-hover:text-white transition-colors">
                로고 디자인부터 브랜드 가이드라인까지, 브랜드의 핵심 가치를 시각적으로 정의합니다.
              </p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 border border-white/10 rounded-2xl bg-ding-blue hover:bg-ding-blue-light hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <Layout className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Web Design</h3>
              <p className="text-white/70 group-hover:text-white transition-colors">
                사용자 경험(UX)을 최우선으로 고려한 현대적이고 직관적인 웹 인터페이스를 설계합니다.
              </p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 border border-white/10 rounded-2xl bg-ding-blue hover:bg-ding-blue-light hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <Code className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Development</h3>
              <p className="text-white/70 group-hover:text-white transition-colors">
                React, Next.js 등 최신 기술 스택을 활용하여 빠르고 안정적인 웹사이트를 구축합니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              STUDIO K의 크리에이티브한 작업물을 소개합니다. <br />
              각 프로젝트는 브랜드의 고유한 이야기를 담고 있습니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-ding-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{siteConfig.aboutTitle}</h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
              {siteConfig.aboutDescription}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
