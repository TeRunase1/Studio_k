import React from 'react';
import { motion } from 'motion/react';
import { Project } from '@/data/content';
import { ArrowUpRight, Share2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app, this would copy the link
    alert('링크가 복사되었습니다!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-ding-dark cursor-pointer"
    >
      {/* Image */}
      <img
        src={project.imageUrl}
        alt={project.title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('picsum.photos')) {
            target.src = `https://picsum.photos/seed/${project.id}/800/600`;
          }
        }}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1B2E]/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-6 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full"
        >
          <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/60 px-3 py-1 rounded backdrop-blur-sm mb-4 inline-block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm mb-6 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] border border-white/30 text-white px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-center gap-4">
             <button className="w-10 h-10 rounded-full bg-white text-ding-blue flex items-center justify-center hover:bg-ding-black hover:text-white transition-colors">
                <ArrowUpRight size={20} />
             </button>
             <button 
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-ding-blue transition-colors"
             >
                <Share2 size={18} />
             </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
