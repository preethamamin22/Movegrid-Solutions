import Image from 'next/image';
import Link from 'next/link';

export function Brand({ light = false }: { light?: boolean }) {
  const src = light
    ? '/brand/movegrid-logo-light.svg'
    : '/brand/movegrid-logo.svg';
  return (
    <Link href="/" className="brand" aria-label="Movegrid Solutions home">
      <Image
        src={src}
        width={220}
        height={52}
        alt="Movegrid Solutions — Moving Businesses Forward"
        priority
        style={{ height: '36px', width: 'auto' }}
      />
    </Link>
  );
}
