import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { Resource } from '@/utils/types';
import ResourceItem from './ResourceItem';
import resourcesData from '@/data/resources.json';

export default function Library() {
  const resources = resourcesData as Resource[];

  return (
    <section id='library' className='py-12'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h2 className='text-3xl font-bold mb-6'>Resource Library</h2>
        <Card>
          <CardHeader>
            <CardTitle>Full-Stack Learning Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-slate-600 mb-6'>
              Browse our curated collection of learning resources. Want to add
              more? Submit a pull request!
            </p>
            <div className='space-y-0'>
              {resources.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
