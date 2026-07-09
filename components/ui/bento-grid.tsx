import { ReactNode } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 gap-4 lg:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  image,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta?: string;
  image?: string;
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-1 flex h-full flex-col justify-between overflow-hidden rounded-xl',
      'border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 shadow-2xl shadow-purple-500/10 backdrop-blur-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset,0_0_60px_-10px_#00000040]',
      'transform-gpu',
      className,
    )}
  >
    <div>{background}</div>
    {image && (
      <div className="absolute inset-0 opacity-20">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    )}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-purple-200 transition-all duration-300 ease-in-out group-hover:scale-75 drop-shadow-sm" />
      <h3 className="text-xl font-semibold text-purple-200 drop-shadow-md">{name}</h3>
      <p className="max-w-lg text-gray-100">{description}</p>
    </div>

    {cta && (
      <div
        className={cn(
          'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
        )}
      >
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto border border-purple-500/30 text-purple-200 backdrop-blur-sm hover:border-purple-400/50 hover:bg-purple-900/70"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-purple-950/30" />
  </div>
);

export { BentoCard, BentoGrid };
