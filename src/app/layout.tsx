import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/react';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});
export const metadata: Metadata = {
  title: 'Ankush Sharma',
  description:
    "Ankush Sharma's personal website. Software Engineer & Frontend Dev. Building web applications with Next.js, Typescript, Tailwind CSS and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <script
          src='https://beamanalytics.b-cdn.net/beam.min.js'
          data-token='8efceb49-2776-47f5-bb58-33fcc018acc9'
          async
        ></script>
      </head>
      <body className={(font.className, 'p-3 relative overflow-x-hidden')}>
        <Background />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          themes={['light', 'dark', 'system']}
          enableSystem
          disableTransitionOnChange
        >
          <div className='absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(150,19,10,0.5),rgba(255,255,255,0))]' />
          <main className='max-w-2xl space-y-20 mx-auto py-24 pt-12 px-1'>
            {children}
          </main>
          {/* <Navbar /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

const Background = () => {
  return (
    <>
      <div className='fixed inset-0 -z-10 bg-gradient-to-t from-background from-25%  h-full w-full' />
      <div className='fixed inset-0 over h-screen w-full -z-20 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:12px_16px] dark:opacity-75' />
    </>
  );
};
