import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  const Content = () => (
    <>
      {header}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        {icon}
        <div className='mb-2 mt-2 font-display font-bold text-foreground'>
          {title}
        </div>
        <div className='text-xs font-sans font-normal text-muted-foreground'>
          {description}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={cn(
          "row-span-1 flex cursor-pointer flex-col justify-between space-y-4 rounded-xl border border-border/60 bg-background/85 p-4 shadow-sm transition duration-200 hover:shadow-xl",
          className
        )}
      >
        <Content />
      </a>
    );
  }

  return (
    <div
      className={cn(
        "row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border/60 bg-background/85 p-4 shadow-sm transition duration-200 hover:shadow-xl",
        className
      )}
    >
      <Content />
    </div>
  );
};
