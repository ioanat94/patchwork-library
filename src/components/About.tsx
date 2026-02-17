import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Contributors from './Contributors';
import Header from './Header';

export default function About() {
  return (
    <section id='about' className='py-12 bg-slate-50'>
      <div className='container px-4 max-w-4xl'>
        <h2 className='text-xl font-bold mb-6'>About Patchwork Library</h2>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p>
              Patchwork Library is a community-driven project designed to help
              aspiring developers practice collaborative coding while building a
              valuable resource for the developer community.
            </p>
            <p>
              <strong className='text-amber-600'>
                ⚠️ This project intentionally contains bugs and broken features!
              </strong>{' '}
              We believe the best way to learn is by debugging real problems.
              You'll find broken links, layout issues, missing features, and
              styling problems - all deliberately added as learning
              opportunities.
            </p>
            <p>
              Each contribution - whether fixing a bug, adding a feature, or
              improving documentation - helps you learn debugging, Git
              workflows, code review practices, and collaborative development
              while making this resource better for everyone.
            </p>
            <div>
              <h3 className='font-semibold mb-2'>Built With:</h3>
              <ul className='list-decimal list-inside space-y-1 text-slate-700'>
                <li>React 19 with TypeScript</li>
                <li>Vite for blazing fast development</li>
                <li>Tailwind CSS v4 for styling</li>
                <li>shadcn/ui for accessible components</li>
                <li>Vitest for testing</li>
                <li>Husky for Git hooks</li>
              </ul>
            </div>
            <p className='text-sm text-slate-600 mt-4'>
              Want to contribute? Check out our{' '}
              <a
                href='https://github.com/ioanat94/library-patchwork/blob/main/CONTRIBUTING.md'
                className='text-red-600 hover:underline'
              >
                Contributing Guide
              </a>{' '}
              to get started!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
