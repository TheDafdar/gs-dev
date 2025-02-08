'use client';

import React from 'react';
import Link from 'next/link';

import UserIcon from '@/components/ui/icons/UserIcon';
import CVIcon from '@/components/ui/icons/CVIcon';
import ContactIcon from '@/components/ui/icons/ContactIcon';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full px-4">
            <h1 className="text-xl font-bold mb-4 text-teal-400">404</h1>
            <p className="text-4xl">Cette page ne semble pas exister.</p>
            <div className='w-1/5 mt-8'>
                <Link href='/dashboard' className="flex items-center justify-between py-2 border-b border-gray-200 hover:text-teal-500">
                    <div className="flex items-center">
                        <UserIcon width="w-6" height="h-6" />
                        <div>
                            <h2 className="text-lg font-semibold">À propos de moi</h2>
                            <p className="text-sm text-gray-500">En savoir plus sur moi</p>
                        </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                <Link href='/resume' className="flex items-center justify-between py-2 border-b border-gray-200 hover:text-teal-500">
                    <div className="flex items-center">
                        <CVIcon width="w-6" height="h-6" />
                        <div>
                            <h2 className="text-lg font-semibold">Curriculum vitae</h2>
                            <p className="text-sm text-gray-500">Découvrir mon CV numérique</p>
                        </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                <Link href='/contact' className="flex items-center justify-between py-2 border-b border-gray-200 hover:text-teal-500">
                    <div className="flex items-center">
                        <ContactIcon width='w-6' height='h-6' />
                        <div>
                            <h2 className="text-lg font-semibold">Contact</h2>
                            <p className="text-sm text-gray-500">Nous contacter</p>
                        </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
            <Link href="/" className="text-teal-400 hover:text-teal-500 flex items-center gap-2 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                Retourner à l'accueil
            </Link>
        </div>
    );
};

export default NotFound;
