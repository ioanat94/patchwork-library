import About from './components/About';
import Contributors from './components/Contributors';
import Header from './components/Header';
import Library from './components/Library';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <About />
        <Library />
        <Contributors />
      </main>
      <footer className='bg-slate-900 text-white py-6 text-center'>
        <div className='container mx-auto px-4'>
          <p className='text-slate-300'>
            Open source project • Licensed under MIT •{' '}
            <a
              href='https://github.com/ioanat94/patchwork-library'
              className='hover:text-blue-400 transition-colors'
            >
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
