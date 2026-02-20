import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import App from '../App.tsx';
import type { Contributor } from '@/utils/types';
import { contributors } from '@/data/contributors.ts';

export default function Contributors() {
  return (
    <section id='contributors' className='py-12 bg-slate-50'>
      <div className='container px-4 max-w-4xl'>
        <h2 className='text-2xl font-bold mb-6'>Contributors</h2>
        <Card>
          <CardHeader>
            <CardTitle>Thanks to Our Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-slate-600 mb-6'>
              This project exists thanks to all the people who contribute. Join
              us and add your name to this list!
            </p>
            <div className='space-y-4'>
              {contributors.map((contributor) => (
                <div
                  key={contributor.id}
                  className='border-l-4 border-blue-500 pl-4 py-2'
                >
                  <div className='flex items-baseline gap-2'>
                    <span className='font-semibold text-lg'>
                      {contributor.name}
                    </span>
                    <a
                      href={`https://google.com/${contributor.github}`}
                      rel='noopener noreferrer'
                      className='text-sm text-green-600 hover:underline'
                    >
                      @{contributor.github}
                    </a>
                  </div>
                  <p className='text-slate-600 text-sm mt-1'>
                    {contributor.contributions}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
