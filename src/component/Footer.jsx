// components/Footer.jsx
import React from "react";
import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F4] text-slate-700 pt-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand/Logo Section */}
          <div className="col-span-1 md:col-span-1">
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
              <span className="text-2xl font-bold text-slate-800 tracking-tight">
                StudyNook
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Quiet study rooms, booked by the hour. Built for students,
              scholars, and lifelong learners.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" size="sm" className="text-slate-500 hover:text-indigo-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" size="sm" className="text-slate-500 hover:text-indigo-600 transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/about" size="sm" className="text-slate-500 hover:text-indigo-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                hello@studynook.app
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                +1 (415) 555-0142
              </li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs">
              Follow
            </h4>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:bg-indigo-600 hover:text-white transition-all">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              {/* X (New Twitter Logo) */}
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:bg-black hover:text-white transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:bg-blue-700 hover:text-white transition-all">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:bg-pink-600 hover:text-white transition-all">
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-3 border-t border-slate-200 flex md:row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2026 StudyNook. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 italic">
            Crafted for focused minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
