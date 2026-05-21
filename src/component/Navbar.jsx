'use client';

import { Avatar, Button } from '@heroui/react';
import React, { useState } from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-50 border-b">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-[#2D5A43] p-1.5 rounded-md">
            {/* Simple Book Icon Placeholder */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25c.938-.332 1.948-.512 3-.512 2.608 0 4.998.998 6.787 2.624m0-16.114c1.788-1.626 4.178-2.624 6.787-2.624 1.052 0 2.062.18 3 .512v14.25c-.938-.332-1.948-.512-3-.512-2.608 0-4.998.998-6.787 2.624m0-16.114v16.114"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight">
            Study<span className="text-blue-700">Nook</span>
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinks className={'font-bold'} href="/">
            Home
          </NavLinks>
          <NavLinks className={'font-bold'} href="/rooms">
            Rooms
          </NavLinks>
          <NavLinks className={'font-bold'} href="/addRoom">
            AddRoom
          </NavLinks>
          <NavLinks className={'font-bold'} href="/MyBookings">
            My-Booking
          </NavLinks>
          <NavLinks className={'font-bold'} href="/myListings">
            My-Listing
          </NavLinks>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Avatar>
                <Image src={user.image} alt="User" width={40} height={40} />
              </Avatar>
              <h6 className="font-medium">{user.name}</h6>
              <Button
                variant="secondary"
                onClick={async () => {
                  await authClient.signOut();
                  alert('Logged out');
                  router.push('/login');
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex gap-3 flex-col px-4 pb-4 space-y-3 bg-white shadow">
          <NavLinks className={'font-bold'} href="/" onClick={() => setOpen(false)}>
            Home
          </NavLinks>
          <NavLinks className={'font-bold'} href="/rooms">
            Rooms
          </NavLinks>

          <NavLinks className={'font-bold'} href="/AddRoom" onClick={() => setOpen(false)}>
            AddRoom
          </NavLinks>

          <NavLinks className={'font-bold'} href="/MyBookings" onClick={() => setOpen(false)}>
            My-Booking
          </NavLinks>
          <NavLinks className={'font-bold'} href="/MyListings" onClick={() => setOpen(false)}>
            My-Listing
          </NavLinks>

          <div className="pt-3 border-t flex flex-col gap-2">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <Image src={user.image} alt="User" width={40} height={40} />
                  </Avatar>
                  <span>{user.name}</span>
                </div>

                <Button
                  variant="secondary"
                  onClick={async () => {
                    await authClient.signOut();
                    toast.success('Logged out');
                    router.push('/login');
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className="w-full">Login</Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
