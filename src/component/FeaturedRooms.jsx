import React from 'react';
import { Button, } from '@heroui/react';

import RoomsCard from './RoomsCard';
import { fetchFeatured } from '@/lib/studynook/data';
import Link from 'next/link';

const FeaturedRooms =async () => {
  // ডামি ডাটা (আপনি আপনার API থেকে আসা ডাটা এখানে ম্যাপ করতে পারেন)
  // const rooms = [
  //   {
  //     id: 1,
  //     name: "Quiet Pod 3A",
  //     price: 5,
  //     description: "A small, soundproof pod perfect for solo study sessions or focused interview prep.",
  //     floor: "3rd Floor",
  //     capacity: "2 people",
  //     bookings: 12,
  //     amenities: ["Wi-Fi", "Power Outlets", "Quiet Zone"],
  //     image: "https://images.unsplash.com/photo-1590644365607-1c5a519a9a37?q=80&w=800",
  //   },
  //   {
  //     id: 2,
  //     name: "Group Studio West",
  //     price: 12,
  //     description: "Bright corner studio with a large whiteboard wall, ideal for project teams and study groups.",
  //     floor: "2nd Floor",
  //     capacity: "6 people",
  //     bookings: 9,
  //     amenities: ["Whiteboard", "Wi-Fi", "Projector", "+1 more"],
  //     image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=800",
  //   },
  //   {
  //     id: 3,
  //     name: "Atrium Reading Nook",
  //     price: 6,
  //     description: "Window-side reading nook overlooking the library atrium. Calm, plant-filled, and well-lit.",
  //     floor: "1st Floor",
  //     capacity: "3 people",
  //     bookings: 21,
  //     amenities: ["Wi-Fi", "Quiet Zone", "Air Conditioning"],
  //     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  //   },
  // ];
  const rooms = await fetchFeatured();
  console.log(rooms)
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-[#fcf9f4]">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#1a2e2a] mb-2">
            Available Study Rooms
          </h2>
          <p className="text-gray-500 text-lg">Hand-picked rooms recently added to StudyNook.</p>
        </div>
        <Button
          variant="bordered"
          className="border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-white px-6"
        >
          <Link href={'/rooms'}>
          View all rooms</Link>
        </Button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <RoomsCard room={room} key={room._id}></RoomsCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;

