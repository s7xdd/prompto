"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, 
getProviders } from 'next-auth/react';

const Nav = () => {
    return (
       <nav className="w-full mb-16 pt-3">
         <Link href="/">
            <Image
               src="/assets/images/Logo.svg"
               alt="Prompto Logo"
               width={30}
               height={30}
               className='object-contain'
            />
         </Link>
       </nav>
    )
}

export default Nav