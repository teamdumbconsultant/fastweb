import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-primary-text p-4 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary-text">
          AJayji
        </Link>
        <nav>
          <ul className="flex list-none">
            {/* <li>
              <Link href="/" className="text-primary-text hover:text-accent">
                Home
              </Link>
            </li> */}
            <li className="ml-12">
              <Link href="/privacy" className="text-primary-text hover:text-accent">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;