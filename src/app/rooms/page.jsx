import RoomsCard from '@/component/RoomsCard';
import { fetchStudyNook } from '@/lib/studynook/data';
import React from 'react';

const RoomsPage = async () => {
  const rooms = await fetchStudyNook();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <RoomsCard room={room} key={room._id}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
