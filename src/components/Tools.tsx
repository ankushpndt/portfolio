import Link from 'next/link';
import { FaHashtag } from 'react-icons/fa';

const tools: { title: string; description: string; href: string }[] = [
  {
    title: 'Overdose.',
    description: "Senior Frontend Developer (Oct 23' - Present)",
    href: 'https://www.linkedin.com/in/ankush-sharma-00496b146/details/experience/',
  },
  {
    title: 'Overdose.',
    description: "Frontend Developer (Oct 22' - Oct 23')",
    href: 'https://www.linkedin.com/in/ankush-sharma-00496b146/details/experience/',
  },
  {
    title: 'Smarter.Codes',
    description: "Frontend Developer (June 22' - Oct 22')",
    href: 'https://www.linkedin.com/in/ankush-sharma-00496b146/details/experience/',
  },
  {
    title: 'Tata Consultancy Services',
    description: "System Engineer (2020-22')",
    href: 'https://www.linkedin.com/in/ankush-sharma-00496b146/details/experience/',
  },
];

const Tools = () => {
  return (
    <section id='tools'>
      <h2 className='text-lg flex items-center font-semibold'>
        Experiences
        <Link
          className='text-muted-foreground'
          aria-label='anchor'
          scroll
          href={'/#tools'}
        >
          <FaHashtag className='ml-2 h-3 w-3' />
        </Link>
      </h2>
      <div className='flex sm:text-base text-sm flex-col gap-1'>
        {tools.map((tool) => (
          <Link
            target='_blank'
            key={tool.title}
            className='text-muted-foreground hover:animate-pulse hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit'
            href={tool.href}
          >
            {tool.title} - {tool.description}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Tools;
