import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Header() {
  return (
    <header className='bg-salate-900 text-white shadow-md'>
      <div className='container mx-auto px-4 py-6'>
        <h1 className='text-3xl font-bold mb-2'>Patchwork Library</h1>
        <p className='text-slate-300 mb-4'>
          A collaborative collection of full-stack learning resources
        </p>
        <nav className='flex gap-6'>
          <a href='#' className='hover:text-blue-400 transition-colors'>
            About
          </a>
          <a href='#' className='hover:text-blue-400 transition-colors'>
            Library
          </a>
          <a href='#' className='hover:text-blue-400 transition-colors'>
            Contributors
          </a>
        </nav>
      </div>
    </header>
  );
}
