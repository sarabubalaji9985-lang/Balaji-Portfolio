import React from 'react';
import { aiVoice } from '../../utils/voiceAssistant';

export const ProjectFilters = ({ categories, activeCategory, onSelectCategory, projectCounts }) => {
  const handleClick = (category) => {
    onSelectCategory(category);
    aiVoice.speak(category === 'All Projects' ? 'Filtering: Displaying all verified projects.' : `Filtering projects by ${category}.`);
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none py-1">
      {categories.map((category) => {
        const count = projectCounts[category] || 0;
        if (count === 0 && category !== 'All Projects') return null;

        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-palette-navy text-white shadow-md scale-[1.02]'
                : 'bg-white dark:bg-canvas-dark-surface border border-ink-border dark:border-ink-dark-border text-ink-secondary dark:text-ink-dark-secondary hover:border-accent hover:text-accent hover:bg-canvas-ice-soft dark:hover:bg-accent-deep/20'
            }`}
          >
            <span>{category}</span>
            <span
              className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-canvas-ice-soft dark:bg-canvas-dark-card text-ink-muted dark:text-ink-dark-muted'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
