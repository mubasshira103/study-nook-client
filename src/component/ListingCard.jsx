import { Button, Card, CardFooter, Chip } from '@heroui/react';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListingCard = ({room}) => {
  return (
    <div>
          <Card
            key={room.id}
            className="border-none bg-white shadow-sm hover:shadow-md transition-shadow rounded-[2rem] overflow-hidden"
          >
            <div className="p-0">
              <Image
                src={room?.image}
                alt={room?.name}
                className="w-full h-64 object-cover rounded-none"
                width={250}
                height={200}
              />
              <div className="p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-[#1a2e2a]">{room.name}</h3>
                  <Chip
                    className="bg-[#edf5f1] text-[#2d5a45] font-bold border-none"
                    size="sm"
                    variant="flat"
                  >
                    ${room.price}/hr
                  </Chip>
                </div>

                <p className="text-gray-500 leading-relaxed line-clamp-2">{room.description}</p>

                <div className="flex flex-wrap gap-4 text-gray-400 text-sm font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} /> {room.floor}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} /> {room.capacity}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays size={16} /> {room.bookings} bookings
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {room.amenities.map((amenity, index) => (
                    <Chip
                      key={index}
                      className="bg-[#fef3e2] text-[#d97706] font-semibold text-xs border-none"
                      variant="flat"
                      size="sm"
                    >
                      {amenity}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
            <CardFooter className="px-6 pb-2 pt-0">
              <Button
                className="w-full bg-[#f8f6f2] text-gray-800 font-bold py-6 rounded-xl hover:bg-[#efede9] border border-gray-100"
                variant="flat"
              >
                <Link href={`/rooms/${room._id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
  );
};

export default ListingCard;
