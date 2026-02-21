import { useAppStore } from '@/context/AppContext';
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';

export default function PortfolioPage() {
  const { projects } = useAppStore();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Portfolio" 
        description="STUDIO K의 포트폴리오. 브랜딩, 웹 디자인, UI/UX 등 다양한 프로젝트를 확인하세요." 
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            STUDIO K의 크리에이티브한 작업물을 소개합니다. <br />
            각 프로젝트는 브랜드의 고유한 이야기를 담고 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
