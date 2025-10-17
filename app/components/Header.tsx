'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const formattedDate = now.toLocaleDateString('bn-BD', dateOptions);
      
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
      
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="banner-section bg-gradient-to-br from-green-600 to-green-700 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/bg_main.gif" 
            alt="" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6">
            <div className="logo">
              <Image 
                src="/logo.png" 
                alt="Jessore Board Logo" 
                width={80} 
                height={80}
                className="drop-shadow-lg"
              />
            </div>
            <div className="title text-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
                Chalishia High School
              </h1>
              <p className="text-white text-lg mt-2">EIIN - 115498</p>
            </div>
          </div>
        </div>
      </section>

      <section className="datetime-section bg-gray-100 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-3 text-sm">
            <div className="date flex items-center gap-2 text-gray-700">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span>{currentDate}</span>
            </div>
            <div className="time flex items-center gap-2 text-gray-700">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span>{currentTime}</span>
            </div>
            <div className="admin">
              <a 
                href="//institute.jessoreboard.gov.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <i className="fa fa-user" aria-hidden="true"></i> 
                Admin Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
