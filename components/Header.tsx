import Link from 'next/link';
import React from 'react';

type Props = {
  currentPathname: string;
  dict: any;
  lang: string;
};

const Header: React.FC<Props> = ({ currentPathname, dict, lang }) => {
  const useSticky = false;
  return (
    <header className={`bg-white md:border-b border-blue-100 ${useSticky ? 'sticky' : 'fixed'} top-0 left-0 right-0 z-50`} translate="no">      <nav className="container mx-auto px-4 py-4">
      <ul className="flex space-x-6">
        <li>
          <Link href={`/${lang}`} className={currentPathname === '' ? 'text-blue-600' : ''}>
            {dict.header.home}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/tools`} className={currentPathname.includes('tools') ? 'text-blue-600' : ''}>
            {dict.header.tools}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/about`} className={currentPathname.includes('about') ? 'text-blue-600' : ''}>
            {dict.header.about}
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
