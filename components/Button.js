// components/Button.js
import Link from 'next/link';

export default function Button({ href, children, className = '', onClick, type = 'button' }) {
  const baseClasses = `px-6 py-3 bg-primaryGradient-from text-white font-semibold rounded-md shadow ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={baseClasses}>
      {children}
    </button>
  );
}
