"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  const slides = [
    {
      title: "Explore the World of Knowledge 📚",
      desc: "Immerse yourself in our vast collection of books and enrich your mind at Study Nook.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",

      topBadge: {
        image: "https://i.pravatar.cc/40?img=11",
        title: "Active Readers",
        count: "10k+",
      },

      bottomBadge: {
        image: "https://i.pravatar.cc/40?img=6",
        title: "Total Books",
        count: "25k+",
      },
    },

    {
      title: "Peaceful Study Environment ✍️",
      desc: "Unlock your productivity in our calm and quiet spaces designed for deep focus.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",

      topBadge: {
        image: "https://i.pravatar.cc/40?img=13",
        title: "Study Zones",
        count: "15+",
      },

      bottomBadge: {
        image: "https://i.pravatar.cc/40?img=4",
        title: "Daily Visitors",
        count: "500+",
      },
    },

    {
      title: "Digital Library Access 💻",
      desc: "Access thousands of e-books and audiobooks from anywhere through our digital portal.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",

      topBadge: {
        image: "https://i.pravatar.cc/40?img=14",
        title: "E-Books",
        count: "5000+",
      },

      bottomBadge: {
        image: "https://i.pravatar.cc/40?img=3",
        title: "Online Members",
        count: "12k+",
      },
    },
  ];

  return (
    <section className="bg-linear-to-br from-[#E0F2F1] to-[#F3E5F5] py-16 lg:py-24">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
              {/* Text Content */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-800">
                  {slide.title}
                </h1>

                <p className="mt-4 text-base sm:text-lg max-w-lg mx-auto md:mx-0 text-slate-600">
                  {slide.desc}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    href="/books"
                    className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-md text-center font-medium"
                  >
                    Find Books
                  </Link>

                  <Link
                    href="/membership"
                    className="px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition text-center font-medium"
                  >
                    Get Membership
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-125 h-64 sm:h-80 md:h-100">
                  <Image
                    src={slide.image}
                    alt="Study Nook Gallery"
                    fill
                    className="object-cover rounded-2xl shadow-2xl border-4 border-white"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-2 right-2 sm:-top-4 md:top-0 sm:-right-4 bg-white shadow-xl rounded-xl px-3 py-2 flex items-center gap-3 z-10 border border-slate-100">
                    <Image
                      src={slide.topBadge.image}
                      alt="stat"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-emerald-100"
                    />
                    <div>
                      <h6 className="text-sm sm:text-lg font-extrabold text-emerald-600 leading-none">
                        {slide.topBadge.count}
                      </h6>
                      <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {slide.topBadge.title}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="absolute bottom-2 left-2 sm:-bottom-4 md:bottom-0 sm:-left-4 bg-white shadow-xl rounded-xl px-3 py-2 flex items-center gap-3 z-10 border border-slate-100">
                    <Image
                      src={slide.bottomBadge.image}
                      alt="stat"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-emerald-100"
                    />
                    <div>
                      <h6 className="text-sm sm:text-lg font-extrabold text-emerald-600 leading-none">
                        {slide.bottomBadge.count}
                      </h6>
                      <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {slide.bottomBadge.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
