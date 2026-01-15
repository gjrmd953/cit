import React from 'react';
import { IoCall } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const Header = () => {
  return (
    <div className="py-3 bg-[#ff1e1e]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex gap-5">
          <div className="flex items-center gap-2 font-INT">
            <IoCall className="text-white text-[12px]" />
            <h2 className="!text-[12px] text-white leading-none">08767856454</h2>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="text-white text-[12px]" />
            <h3 className="!text-[16px] text-white leading-none">
              info@creativeitinstitute.com
            </h3>
          </div>
        </div>
        <div className="w-1/2">{/* Future content */}</div>
      </div>
    </div>
  );
};

export default Header;
