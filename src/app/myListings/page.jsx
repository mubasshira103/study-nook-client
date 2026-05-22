import React from 'react';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import RoomsCard from '@/component/RoomsCard'
import ListingCard from '@/component/ListingCard';
export const metadata = {
    title: "studyNook - my-listing page",
};
const fetchSingleRooms = async (id='', token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/myRooms/${id}`, {
    headers: {
      authorization: `Bearer ${token}` || '',
    },
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
};

const MyListingsPage = async () => {
  const authData = await auth.api.getToken({
    headers: await headers(),
  });
    const session = await auth.api.getSession({
        headers: await headers()
    })
  const user = session?.user;

  const token = authData?.token;
  const rooms = await fetchSingleRooms(user.id, token);

  if (!rooms) {
    return <div className="text-center py-20">Room not found!</div>;
  }

  return  (
    <div className='my-10'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <ListingCard room={room} key={room._id}></ListingCard>
        ))}
      </div>
    </div>
  );
};

export default MyListingsPage;
