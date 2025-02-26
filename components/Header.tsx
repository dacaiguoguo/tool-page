import Link from 'next/link';
import React from 'react';
import { User } from 'lucide-react';

type Props = {
  currentPathname: string;
  dict: any;
  lang: string;
};

const Header: React.FC<Props> = ({ currentPathname, dict, lang }) => {
  return (
    <header className="bg-white md:border-b border-blue-100 fixed top-0 left-0 right-0 z-50" translate="no">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo and Navigation */}
          <div className="flex items-center gap-1 md:gap-8 overflow-hidden">
            {/* Mobile Menu Button */}
            <div className="block lg:hidden mt-1">
              <button className="relative shadow-black/5 shadow-none rounded-none cursor-pointer focus:outline-none active:outline-none focus-visible:outline-none tap-highlight-transparent" style={{ maxWidth: '48px' }}>
                <img className="relative z-10 opacity-100 shadow-black/5 shadow-none transition-transform-opacity rounded-none block" width="48" alt="Mobile Menu" src="/images/icon_nav.svg" />
              </button>
            </div>

            {/* Logo */}
            <Link href={`/${lang}`} className="inline-flex items-center gap-1 relative z-10">
              <div className="flex-shrink-0 w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40" height="40" viewBox="0 0 40 40" className="rounded-xl">
                  <rect width="40" height="40" fill="#3B82F6" rx="8" />
                  <path fill="#fff" d="M12 20a8 8 0 1116 0v8h-4v-8a4 4 0 10-8 0v8h-4v-8z" />
                </svg>
              </div>
              <h2 className="text-sm md:text-xl font-bold text-blue-900">{dict.header.title || 'Tool Page'}</h2>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href={`/${lang}`} className={`flex items-center gap-2 ${currentPathname === '' ? 'text-blue-600' : 'text-blue-900 hover:text-blue-600'}`}>
                {dict.header.home}
              </Link>
              <Link href={`/${lang}/faq`} className="flex items-center gap-2 text-blue-900 hover:text-blue-600">
                {dict.header.faq}
              </Link>
              <Link href={`/${lang}/blog`} className="flex items-center gap-2 text-blue-900 hover:text-blue-600">
                {dict.header.blog}
              </Link>
            </nav>
          </div>

          {/* Right section: Language and User */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors" aria-label="Select language">
                  <span className="font-medium">{dict.header.currentLang || 'English'}</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-hidden">
              <Link
                href={`/${lang}/transcribe`}
                className="hidden md:block bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis"
              >
                {dict.header.startTranscribing}
              </Link>
              <Link
                href={`/${lang}/transcribe`}
                className="md:hidden px-3 py-2 text-lg font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-all whitespace-nowrap overflow-hidden"
              >
                {dict.header.transcribing}
              </Link>

              {/* User Menu */}
              <div className="hidden md:block">
                <div className="relative max-w-full">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    <User className="h-6 w-6" />
                    <span className="hidden md:block text-sm font-medium">User</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-4 md:hidden">
              <div className="relative">
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors" aria-label="Select language">
                  <span className="font-medium">{dict.header.currentLang || 'English'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
