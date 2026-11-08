import React from 'react';

export function Eyebrow({
  children,
  variant = 'indigo',
}: {
  children: React.ReactNode;
  variant?: 'indigo' | 'sky' | 'violet' | 'light';
}) {
  const variantClass =
    variant === 'sky'
      ? 'eyebrow-sky'
      : variant === 'violet'
      ? 'eyebrow-violet'
      : variant === 'light'
      ? 'eyebrow-light'
      : '';

  return <span className={`eyebrow ${variantClass}`}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  centered = false,
}: {
  eyebrow: string;
  title: string | React.ReactNode;
  text?: string | React.ReactNode;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`section-heading ${light ? 'heading-light text-white' : ''} ${
        centered ? 'centered' : ''
      }`}
    >
      <Eyebrow variant={light ? 'light' : 'indigo'}>{eyebrow}</Eyebrow>
      <h2 className={light ? '!text-white' : ''}>{title}</h2>
      {text && <p className={light ? '!text-slate-400' : ''}>{text}</p>}
    </div>
  );
}
