import React, { useEffect } from 'react';
import { ProjectShowcase } from '../components/projects/ProjectShowcase';
import { PageCtaSection } from '../components/ui/PageCtaSection';

export const ProjectsPage = ({ isDarkMode }) => {
  useEffect(() => {
    document.title = "Verified Projects & 28+ Production Deployments | Balaji Projects .P";
  }, []);

  return (
    <main className="pt-20">
      <ProjectShowcase />

      {/* 3D Floating Project Cubes Matrix CTA */}
      <PageCtaSection
        variant="cubes"
        badge="Available for Custom SaaS & Full-Stack Builds"
        headingPrefix="Like what you see in the"
        highlightWord="flagship showcase?"
        subtitle="I transform complex requirements into fast, intuitive, production-grade applications with modern React and robust backends."
        primaryBtnText="Initiate a Project"
        primaryBtnLink="/contact"
        isDarkMode={isDarkMode}
      />
    </main>
  );
};
