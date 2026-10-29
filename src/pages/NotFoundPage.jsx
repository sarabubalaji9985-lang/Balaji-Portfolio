import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 text-center">
      <div className="space-y-5 max-w-md">
        <span className="font-mono text-xs text-accent font-semibold tracking-wider">
          ERROR 404
        </span>
        <h1 className="text-4xl font-display font-medium text-ink-primary dark:text-ink-dark-primary">
          Page Not Found
        </h1>
        <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-light">
          The requested page does not exist or may have been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ink-primary text-canvas-card dark:bg-ink-dark-primary dark:text-canvas-dark text-xs font-medium hover:bg-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};
