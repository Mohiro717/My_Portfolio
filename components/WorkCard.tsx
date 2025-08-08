import React from 'react';
import type { Work } from '../types';

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <div className="group bg-paper rounded-2xl overflow-hidden shadow-watercolor transition-all duration-500 ease-out hover:shadow-watercolor-hover">
      <div className="overflow-hidden">
        <img src={work.imageUrl} alt={work.title} className="w-full h-64 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif-jp font-bold text-ink mb-2 transition-colors duration-300 group-hover:text-watercolor-pink">{work.title}</h3>
        <p className="text-ink/80 text-sm leading-relaxed">{work.description}</p>
      </div>
    </div>
  );
};

export default WorkCard;