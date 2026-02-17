import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Library from './Library';
import type { Resource } from '@/utils/types';
import ResourceItem from './ResourceItem';

describe('ResourceItem', () => {
  const mockResource: Resource = {
    id: 'test-123',
    title: 'Test Resource Title',
    url: 'https://example.com/test',
    tags: ['javascript', 'beginner', 'tutorial'],
  };

  it('renders the resource title as a link', () => {
    render(<ResourceItem resource={mockResource} />);
    const link = screen.getByRole('link', { name: /test resource title/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com/test');
  });

  it('renders the resource URL', () => {
    render(<ResourceItem resource={mockResource} />);
    expect(screen.getByText('https://example.com/test')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    render(<ResourceItem resource={mockResource} />);
    expect(screen.getByText('javascript')).toBeInTheDocument();
    expect(screen.getByText('beginner')).toBeInTheDocument();
    expect(screen.getByText('tutorial')).toBeInTheDocument();
  });

  it('opens link in new tab with security attributes', () => {
    render(<ResourceItem resource={mockResource} />);
    const link = screen.getByRole('link', { name: /test resource title/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
