"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, 
getProviders } from 'next-auth/react';

const Nav = () => {

    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setNewProviders = async () => {
           const response = await getProviders();
           setProviders(response);
        }

        setNewProviders();

    }, [])

    return (
       <nav className="flex-between w-full mb-16 pt-3">
           <Link href="/" className="flex gap-2 flex-between">
               <Image
                  src="/assets/images/Logo.svg"
                  alt="Prompto Logo"
                  width={30}
                  height={30}
                  className='object-contain'
               />
               <p className="logo_text">Prompto</p>
           </Link>

           {/* Desktop Navigatin */}
           <div className="sm:flex hidden">
              {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                       Create Post
                    </Link>

                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image 
                            src="assets/images/logo.svg"
                            width={37}
                            height={37}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                </div>
              ) : (
                <>
                   {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                          type="button"
                          key={provider.name}
                          onClick={() => signIn(provider.id)}
                          className="black_btn"
                        >Sign In</button>
                    ))
                   }
                </>
              )
            }
           </div>

           {/* Mobile Navigatin */}
           <div className="sm:hidden flex relative">
            {isUserLoggedIn ? (
                <div className="flex">
                    <Image 
                            src="assets/images/logo.svg"
                            width={37}
                            height={37}
                            alt="profile"
                            className="rounded-full"
                            onClick={() => {}}
                        />
                </div>

            ) : (
                <>
                   {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                          type="button"
                          key={provider.name}
                          onClick={() => signIn(provider.id)}
                          className="black_btn"
                        >Sign In</button>
                    ))
                   }
                </>
            )}


           </div>
           

       </nav>
    )
}

export default Nav