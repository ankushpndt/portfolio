import Link from 'next/link';
import { FaHashtag } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <section id='about'>
        <h2 className='text-lg font-semibold flex items-center'>
          About
          <Link
            className='text-muted-foreground'
            aria-label='anchor'
            scroll
            href={'/#about'}
          >
            <FaHashtag className='ml-2 h-3 w-3' />
          </Link>
        </h2>
        <p>
          {`I'm Ankush, a Frontend Developer at a startup, who's all about turning wild ideas into kick-ass web apps. 
					When I'm not submerged in code-commits, you can catch me dive-deep in playing games. 
					Let's team up and build some exceptional products.`}
        </p>
      </section>
      <Present />
    </>
  );
};

export default About;

const Present = () => {
  return (
    <section id='present'>
      <h2 className='text-lg flex items-center font-semibold'>
        Present{' '}
        <Link
          className='text-muted-foreground'
          aria-label='anchor'
          scroll
          href={'/#present'}
        >
          <FaHashtag className='ml-2 h-3 w-3' />
        </Link>
      </h2>
      <p>
        Currently I work as a Senior Frontend Developer at Overdose. In my free
        time I freelance & work on my own projects! I&apos;m always looking for
        new things to work on, so if you are hiring, feel free to
        reach-out.&nbsp;
        <Link
          className='text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground transition-colors'
          target='_blank'
          href='mailto:ankushpndt@gmail.com?subject=Hello!&body=Hi, My name is [name] and I have a hiring opportunity that I would like to discuss with you.'
          type='email'
        >
          contact me.
        </Link>
      </p>
    </section>
  );
};
