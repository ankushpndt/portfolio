import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FaHashtag } from 'react-icons/fa';

const Connect = () => {
  return (
    <section id='connect'>
      <h2 className='text-lg font-semibold flex items-center'>
        Connect
        <Link
          className='text-muted-foreground'
          aria-label='anchor'
          scroll
          href={'/#connect'}
        >
          <FaHashtag className='ml-2 h-3 w-3' />
        </Link>
      </h2>
      <div className='flex flex-col space-y-1 sm:text-base text-sm '>
        <div className='flex gap-4'>
          <p className='max-w-[6ch] w-full'>Github</p>
          <Link
            className='flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground '
            href={'https://github.com/ankushpndt'}
            target='_blank'
          >
            <p className='truncate'>@ankushpndt</p>
            <ArrowUpRight className='h-4 w-4 ml-1' />
          </Link>
        </div>
        <div className='flex gap-4'>
          <p className='max-w-[6ch] w-full'>Linkedin</p>
          <Link
            className='flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground '
            href={'https://www.linkedin.com/in/ankush-sharma-00496b146/'}
            target='_blank'
          >
            <p className='truncate'>@Ankush-Sharma</p>
            <ArrowUpRight className='h-4 w-4 ml-1' />
          </Link>
        </div>
        <div className='flex gap-4'>
          <p className='max-w-[6ch] w-full'>Email</p>
          <Link
            className='flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground'
            href={'mailto:ankushpndt@gmail.com'}
            target='_blank'
          >
            <p className='truncate'>ankushpndt@gmail.com</p>
            <ArrowUpRight className='h-4 w-4 ml-1' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Connect;
