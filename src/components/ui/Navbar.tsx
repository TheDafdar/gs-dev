'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

import ThemeToggle from "@/components/ui/ThemeToggle";
import UserIcon from "@/components/ui/icons/UserIcon";
import CVIcon from "@/components/ui/icons/CVIcon";
import ContactIcon from "@/components/ui/icons/ContactIcon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Close menu after Link clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 p-4 bg-gray-100 dark:bg-gray-800 shadow">
      <div className="flex justify-between items-center">
        <Link href="/"><h1 className="text-lg font-semibold">GS Dev</h1></Link>

        {/* Right-aligned section */}
        <div className="flex items-center gap-4">
          {/* Theme toggle and links on larger screens */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Add links or other elements here */}
            <Link href='/dashboard' className="flex items-center">
              <UserIcon width="w-6" height="h-6" />
              À propos de moi
            </Link>
            <Link href='/resume' className="flex items-center">
              <CVIcon width="w-6" height="h-6" />
              Curriculum vitae
            </Link>
            <Link href='/contact' className="flex items-center">
              <ContactIcon width='w-6' height='h-6' />
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Burger button for small screens */}
          <button
            className="sm:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-1 bg-black dark:bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-black dark:bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-black dark:bg-white"></span>
          </button>
        </div>
      </div>

      {/* Menu dropdown for small screens */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-800 p-4">
          <Link onClick={handleLinkClick} href='/dashboard' className="flex items-center gap-4 py-2">
            <UserIcon width="w-6" height="h-6" />
            À propos de moi
          </Link>
          <Link onClick={handleLinkClick} href='/resume' className="flex items-center gap-4 py-2">
            <CVIcon width="w-6" height="h-6" />
            Curriculum vitae
          </Link>
          <Link onClick={handleLinkClick} href='/contact' className="flex items-center gap-4 py-2">
            <ContactIcon width='w-6' height='h-6' />
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
