import clsx from 'clsx';
import { HTMLProps, ReactNode } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export function Container(props: Props) {
  const { className, children, ...rest } = props;

  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-6xl px-2 sm:px-6 lg:px-8',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
