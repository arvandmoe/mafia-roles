'use client';

import clsx from 'clsx';

interface Props {
  text: string;
  type: 'submit' | 'button';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  color?: string;
}

const ContainedButton = (props: Props) => {
  const {
    text,
    type,
    loading,
    disabled = false,
    onClick,
    color = 'orange',
  } = props;

  const modifiedClassName = clsx(
    `group flex w-full items-center justify-center space-x-1 rounded-md py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2`,
    `bg-${color}-600 text-white hover:bg-${color}-500 hover:text-white focus-visible:outline-orange-600 active:bg-${color}-800 active:text-orange-100`,
    (loading || disabled) &&
      `pointer-events-none bg-${color}-400 cursor-default`
  );

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={modifiedClassName}
      onClick={onClick}
    >
      {!loading && <span>{text}</span>}
    </button>
  );
};

export default ContainedButton;
