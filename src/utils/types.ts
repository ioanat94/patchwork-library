export type Resource = {
  id: string;
  title: string;
  url: string;
  tags: TagCategory[];
};

export type Contributor = {
  id: string;
  name: string;
  github: string;
  contributions: string;
};

export type TagCategory =
  // Main topic categories
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nodejs'
  | 'databases'
  | 'testing'
  | 'ci-cd'
  // Difficulty levels
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  // Resource types
  | 'documentation'
  | 'tutorial'
  | 'interactive'
  | 'video'
  | 'course'
  | 'book'
  | 'free-book'
  | 'tool'
  // Attributes
  | 'official'
  | 'comprehensive'
  | 'patterns'
  | 'best-practices'
  | 'accessibility'
  | 'layout'
  | 'sql'
  | 'nosql'
  | 'github'
  | 'devops';
