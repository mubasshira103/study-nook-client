'use client';

import { useState } from 'react';
import { Modal, Button } from '@heroui/react';

import { FiX, FiCalendar, FiChevronDown } from 'react-icons/fi';

export default function RoomBookingModal({ room }) {
  console.log(room);
  const { _id, name, price, image } = room;
  const { data } = useSession();
  const user = data?.user;

  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString('sv-SE');

  const handleBookSession = async (e) => {
    e.preventDefault();
    const userBookingData = {
      date: currentDate,
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      bookingId: _id,
      bookingName: name,
      price,
      image,
      status: 'Pending',
    };
    const bookingRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userBookingData),
    });
    const bookingData = await bookingRes.json();

    if (bookingData.insertedId) {
      setSlot((prev) => prev - 1);
      toast.success('Booking Successfull');
      setIsOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ececec] p-10">
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop className="bg-black/40 backdrop-blur-sm" />

        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-3xl rounded-[32px] bg-[#F8F6F2] shadow-2xl">
            <Modal.Header className="flex items-start justify-between p-10 pb-0">
              <div>
                <Modal.Heading className="text-5xl font-semibold text-[#1D1D1B]">
                  Book Group Studio West
                </Modal.Heading>

                <p className="mt-3 text-2xl text-[#6D6D6A]">
                  Pick a date and time slot. Bookings run on the hour.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-[#7B7B77] hover:bg-black/5"
              >
                <FiX size={30} />
              </button>
            </Modal.Header>

            <Modal.Body className="p-10 pt-8">
              <form className="flex flex-col">
                <div className="mb-8">
                  <label className="mb-3 block text-3xl font-medium text-[#1F1F1D]">Date</label>

                  <button
                    type="button"
                    className="flex h-[92px] w-full items-center rounded-3xl border border-[#E4E0D8] bg-white px-8 text-left shadow-sm"
                  >
                    <FiCalendar className="mr-5 text-[#343431]" size={34} />

                    <span className="text-3xl text-[#262624]">May 21st, 2026</span>
                  </button>
                </div>

                <div className="mb-8 grid grid-cols-2 gap-6">
                  <div>
                    <label className="mb-3 block text-3xl font-medium text-[#1F1F1D]">Start</label>

                    <button
                      type="button"
                      className="flex h-[92px] w-full items-center justify-between rounded-3xl border border-[#E4E0D8] bg-white px-8 shadow-sm"
                    >
                      <span className="text-3xl text-[#262624]">08:00</span>

                      <FiChevronDown size={28} className="text-[#555]" />
                    </button>
                  </div>

                  <div>
                    <label className="mb-3 block text-3xl font-medium text-[#1F1F1D]">End</label>

                    <button
                      type="button"
                      className="flex h-[92px] w-full items-center justify-between rounded-3xl border border-[#E4E0D8] bg-white px-8 shadow-sm"
                    >
                      <span className="text-3xl text-[#262624]">12:00</span>

                      <FiChevronDown size={28} className="text-[#555]" />
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="mb-3 block text-3xl font-medium text-[#1F1F1D]">
                    Special note (optional)
                  </label>

                  <textarea
                    placeholder="Any setup needed?"
                    className="h-[170px] w-full rounded-3xl border border-[#E4E0D8] bg-white px-8 py-6 text-3xl text-[#262624] focus:outline-none"
                  />
                </div>

                <div className="mb-10 flex h-[110px] items-center justify-between rounded-3xl bg-[#F1ECE2] px-8">
                  <span className="text-3xl text-[#6E6A65]">Total cost</span>

                  <span className="text-5xl font-semibold text-[#155B44]">$48</span>
                </div>

                <Modal.Footer className="flex items-center justify-end gap-8 p-0">
                  <Button
                    variant="light"
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-medium text-[#1D1D1B]"
                  >
                    Cancel
                  </Button>

                  <Button
                    onClick={handleBookSession}
                    type="submit"
                    className="rounded-3xl bg-[#155B44] px-10 py-5 text-3xl font-semibold text-white hover:bg-[#104734]"
                  >
                    Confirm Booking
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal>
    </div>
  );
}

// export const metadata = {
//     title: "MediQueue - My Tutors",
// };
