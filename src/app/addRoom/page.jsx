"use client";

import { Button, Card, Input, TextArea } from '@heroui/react';
import React, { useState } from 'react';
// import {
//   Input,
//   Textarea,
//   Button,
//   Card,
// } from "@heroui/react";
import toast from 'react-hot-toast';

const AddRoomForm = () => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [loading, setLoading] = useState(false);

  const amenitiesOptions = [
    "Whiteboard", "Projector", "Wi-Fi",
    "Power Outlets", "Quiet Zone", "Air Conditioning"
  ];

  // Amenity সিলেকশন হ্যান্ডলার
  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.amenities = selectedAmenities;

    setLoading(true);
    // সিমুলেটেড API কল
    setTimeout(() => {
      setLoading(false);
      console.log("Submitted Data:", data);
      toast.success("Room published successfully!");
    }, 1500);
  };

  // কমন ইনপুট স্টাইল (ছবির মত)
  const inputStyles = {
    label: "text-[#333] font-medium mb-1",
    inputWrapper: [
      "bg-[#F9F7F2]", // ছবির ইনপুট ব্যাকগ্রাউন্ড
      "border border-[#E8E4DB]",
      "hover:border-[#D1CDC2]",
      "group-data-[focus=true]:border-[#1E4D3A]",
      "group-data-[focus=true]:bg-[#F9F7F2]",
      "rounded-lg",
      "shadow-none"
    ],
    input: "placeholder:text-[#A09E91] text-gray-800"
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-10 px-4 flex justify-center items-center font-sans">
      <Card className="max-w-4xl w-full shadow-lg border border-[#E8E4DB] rounded-2xl bg-white">
        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Room Name */}
            <div className="flex flex-col gap-1">
              <label className={inputStyles.label}>Room Name</label>
              <Input
                name="roomName"
                required
                placeholder=""
                variant="bordered"
                classNames={inputStyles}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1">
              <label className={inputStyles.label}>Description</label>
              <TextArea
                name="description"
                required
                placeholder=""
                variant="bordered"
                minRows={4}
                classNames={inputStyles}
              />
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-1">
              <label className={inputStyles.label}>Image URL</label>
              <Input
                name="imageUrl"
                required
                placeholder="https://..."
                variant="bordered"
                classNames={inputStyles}
              />
            </div>

            {/* Grid Layout for Floor, Capacity, and Rate */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1">
                <label className={inputStyles.label}>Floor</label>
                <Input
                  name="floor"
                  required
                  placeholder="e.g. 3rd Floor"
                  variant="bordered"
                  classNames={inputStyles}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className={inputStyles.label}>Capacity</label>
                <Input
                  name="capacity"
                  required
                  type="number"
                  placeholder="2"
                  variant="bordered"
                  classNames={inputStyles}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className={inputStyles.label}>Hourly Rate ($)</label>
                <Input
                  name="hourlyRate"
                  required
                  type="number"
                  placeholder="5"
                  variant="bordered"
                  classNames={inputStyles}
                />
              </div>
            </div>

            {/* Amenities Section - Custom Grid Selection */}
            <div className="space-y-3">
              <label className={inputStyles.label}>Amenities</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {amenitiesOptions.map((amenity) => (
                  <div
                    key={amenity}
                    onClick={() => toggleAmenity(amenity)}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all
                      ${selectedAmenities.includes(amenity)
                        ? 'bg-[#F9F7F2] border-[#1E4D3A]'
                        : 'bg-[#F9F7F2] border-[#E8E4DB]'}
                    `}
                  >
                    {/* Custom Circle Checkbox */}
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center transition-all
                      ${selectedAmenities.includes(amenity)
                        ? 'border-[#1E4D3A] bg-[#1E4D3A]'
                        : 'border-[#A09E91] bg-white'}
                    `}>
                      {selectedAmenities.includes(amenity) && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-sm text-[#444] font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                isLoading={loading}
                className="bg-[#1E4D3A] text-white font-semibold px-8 py-6 rounded-lg hover:opacity-90 transition-all text-base"
              >
                Publish Room
              </Button>
            </div>

          </form>
        </div>
      </Card>
    </div>
  );
};

export default AddRoomForm;
