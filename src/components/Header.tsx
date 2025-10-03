import React from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { logout } from '@/app/login/actions';

const Header = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="bg-white text-primary-text p-4 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary-text">
          AJayji
        </Link>
        <nav>
          <ul className="flex list-none items-center">
            <li className="ml-12">
              <Link href="/privacy" className="text-primary-text hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li className="ml-12">
              <Link href="/support" className="text-primary-text hover:text-accent">
                Support
              </Link>
            </li>
            {user ? (
              <>
                <li className="ml-12">
                  <Link href="/account" className="text-primary-text hover:text-accent">
                    Account
                  </Link>
                </li>
                <li className="ml-12">
                  <form action={logout}>
                    <button className="text-primary-text hover:text-accent cursor-pointer">
                      Logout
                    </button>
                  </form>
                </li>
              </>
            ) : (
              <li className="ml-12">
                <Link href="/login" className="text-primary-text hover:text-accent">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;