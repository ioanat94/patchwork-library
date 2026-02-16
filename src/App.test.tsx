import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the header with project title', () => {
    render(<App />);
    const headings = screen.getAllByRole('heading', {
      name: /patchwork library/i,
    });
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders all main sections', () => {
    render(<App />);
    expect(screen.getByText(/about patchwork library/i)).toBeInTheDocument();
    expect(screen.getByText(/resource library/i)).toBeInTheDocument();
    expect(screen.getByText(/thanks to our contributors/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    const aboutLink = links.find((link) =>
      link.textContent?.toLowerCase().includes('about'),
    );
    const libraryLink = links.find((link) =>
      link.textContent?.toLowerCase().includes('library'),
    );
    const contributorsLink = links.find((link) =>
      link.textContent?.toLowerCase().includes('contributors'),
    );

    expect(aboutLink).toBeInTheDocument();
    expect(libraryLink).toBeInTheDocument();
    expect(contributorsLink).toBeInTheDocument();
  });
});
