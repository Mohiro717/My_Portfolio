import React from 'react';
import ScrollReveal from './ScrollReveal';

export interface ProjectProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  skills: string[];
}

const ProjectItem: React.FC<ProjectProps & { delay: number }> = ({ category, title, description, imageUrl, linkUrl, linkText, skills, delay }) => (
  <ScrollReveal delay={delay}>
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 watercolor-card p-8">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="md:w-1/3 w-full flex-shrink-0 block">
        <img src={imageUrl} alt={title} className="rounded-xl object-cover w-full h-64 md:h-full transform transition-all duration-300 hover:scale-105" />
      </a>
      <div className="md:w-2/3">
        <p className="font-sans-jp text-watercolor-pink font-bold mb-2">{category}</p>
        <h3 className="text-2xl font-serif-jp font-bold text-ink mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map(skill => (
            <span key={skill} className="bg-watercolor-blue/50 text-ink/80 text-xs font-bold px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
        <p className="text-ink/80 leading-relaxed mb-6">{description}</p>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-watercolor-pink text-ink font-bold font-serif-jp py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-watercolor">
          {linkText}
        </a>
      </div>
    </div>
  </ScrollReveal>
);

export default ProjectItem;