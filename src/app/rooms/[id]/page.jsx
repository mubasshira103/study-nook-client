import React from 'react';
import { Card, Button, Chip, Avatar } from '@heroui/react'; // Divider প্রয়োজন না হলে বাদ দিতে পারেন
import { CalendarDays, MapPin, Users, CheckCircle, Wifi, Zap, VolumeX } from 'lucide-react';
const fetchSingleRooms = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/rooms/${id}`);
  const data = await res.json();
  return data || {};
};
const RoomDetails = async ({ params }) => {
  const { id } = await params;
  const room = await fetchSingleRooms(id);


  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Image and Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-sm">
            <img src={room.image} alt={room.name} className="w-full h-[450px] object-cover" />
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-[#1a2e2a]">{room.name}</h1>
              <p className="text-gray-500 mt-1">Listed {room.listedDate}</p>
            </div>
            {/* সমাধান: classNames (plural) ব্যবহার করা হয়েছে স্টাইলিং আলাদা করতে */}
            <Chip
              startContent={<CheckCircle size={16} />}
              variant="flat"
              color="success"
              classNames={{
                base: 'bg-[#e8f5e9] border-none px-3',
                content: 'text-[#2e7d32] font-medium',
              }}
            >
              {room.bookingsCount} bookings
            </Chip>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">{room.description}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#1a2e2a]">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="flat" color="warning" startContent={<Wifi size={16} />}>
                Wi-Fi
              </Chip>
              <Chip variant="flat" color="warning" startContent={<Zap size={16} />}>
                Power Outlets
              </Chip>
              <Chip variant="flat" color="warning" startContent={<VolumeX size={16} />}>
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
                <span className="text-lg">{room.capacity}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CalendarDays className="mr-3 text-gray-400" size={20} />
                <span className="text-lg">{room.bookingsCount} total bookings</span>
              </div>
            </div>

            <Button
              className="w-full py-7 text-lg font-semibold bg-[#1a4031] text-white rounded-xl hover:bg-[#265a45] transition-all"
              startContent={<CalendarDays size={20} />}
            >
              Book Now
            </Button>
          </Card>

          {/* Owner Info Card */}
          <Card className="p-6 border border-gray-100 shadow-sm bg-white rounded-[1.5rem]">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Listed By
            </p>
            <div className="flex items-center gap-4">
              <Avatar src={room?.owner?.avatar} className="w-14 h-14" size="lg" />
              <div>
                <h4 className="font-bold text-[#1a2e2a] text-lg">{room.owner.name}</h4>
                <p className="text-gray-500 text-sm">{room.owner.email}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
