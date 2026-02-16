import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Library from './Library';

describe('Library', () => {
  it('renders the library section heading', () => {
    render(<Library />);
    expect(
      screen.getByRole('heading', { name: /resource library/i }),
    ).toBeInTheDocument();
  });

  it('renders resource items from data', () => {
    render(<Library />);
    // Check for some known resource titles from our data
    expect(screen.getByText(/MDN Web Docs: HTML Basics/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript Handbook/i)).toBeInTheDocument();
    expect(
      screen.getByText(/React Official Documentation/i),
    ).toBeInTheDocument();
  });

  it('renders multiple resource tags', () => {
    render(<Library />);
    // Check that tags are rendered
    const htmlTags = screen.getAllByText('html');
    expect(htmlTags.length).toBeGreaterThan(0);
  });
});
