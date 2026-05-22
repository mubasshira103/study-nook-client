
import React from 'react';
import { Card, Button, Chip } from '@heroui/react';
import { CalendarDays, MapPin, Users, CheckCircle, Wifi, Zap, VolumeX } from 'lucide-react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import RoomBookingModal from '@/component/RoomBookingModal';
export const metadata = {
    title: "studyNook - details page",
};
const fetchSingleRooms = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/rooms/${id}`, {
    headers: {
      authorization: `Bearer ${token}` || '',
    },
    cache: 'no-store', // ডাটা সবসময় ফ্রেশ রাখার জন্য
  });
  if (!res.ok) return null;
  return res.json();
};

const RoomDetails = async ({ params }) => {
  const { id } = await params;
  const authData = await auth.api.getToken({
    headers: await headers(),
  });

  const token = authData?.token;
  const room = await fetchSingleRooms(id, token);

  if (!room) {
    return <div className="text-center py-20">Room not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Image and Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-sm h-[450px]">
            <Image
              src={room.image || '/placeholder-image.jpg'}
              alt={room.name}
              fill
              className="object-cover transform transition duration-700 hover:scale-105"
            />
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-[#1a2e2a]">{room.name}</h1>
              <p className="text-gray-500 mt-1">Listed {room.listedDate}</p>
            </div>

            {/* Chip component-এ classNames এরর এড়াতে custom wrapper ব্যবহার করা নিরাপদ */}
            {/* <Chip
              variant="flat"
              color="success"
              startContent={<CheckCircle size={16} />}
              classNames={{
                base: 'bg-[#e8f5e9] border-none px-3',
                content: 'text-[#2e7d32] font-medium',
              }}
            >
              {room.bookingsCount} bookings
            </Chip> */}
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">{room.description}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#1a2e2a]">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="flat" color="warning">
                Wi-Fi
              </Chip>
              <Chip variant="flat" color="warning" >
                Power Outlets
              </Chip>
              <Chip variant="flat" color="warning" >
                Quiet Zone
              </Chip>
            </div>
          </div>
        </div>

        {/* Right Side: Booking Card */}
        <div className="space-y-6">
          <Card className="p-8 border-none shadow-xl bg-white rounded-[2rem]">
            <div className="flex justify-between items-baseline mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-[#1a2e2a]">${room.price}</span>
                <span className="text-gray-500 ml-2 italic">per hour</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <MapPin className="mr-3 text-gray-400" size={20} />
                <span className="text-lg">{room.floor}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="mr-3 text-gray-400" size={20} />
                <span className="text-lg">{room.capacity} Persons</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CalendarDays className="mr-3 text-gray-400" size={20} />
                <span className="text-lg">{room.bookingsCount} total bookings</span>
              </div>
            </div>

            <Button className="w-full py-7 text-lg font-semibold bg-[#1a4031] text-white rounded-xl hover:bg-[#265a45] transition-all">
              <CalendarDays size={20} className="mr-2" /> Book Now
            </Button>
            <RoomBookingModal room={room} ></RoomBookingModal>
          </Card>

          {/* Owner Info Card */}
          <Card className="p-6 border border-gray-100 shadow-sm bg-white rounded-[1.5rem]">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Listed By
            </p>
            <div className="flex items-center gap-4">
              {/* Owner data থাকলে এখানে শো করবেন */}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[#1a4031]">
                {room.owner?.name?.charAt(0) || 'O'}
              </div>
              <div>
                <h4 className="font-bold text-[#1a2e2a]">{room.owner?.name || 'Admin'}</h4>
                <p className="text-gray-500 text-sm">{room.owner?.email || 'N/A'}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
