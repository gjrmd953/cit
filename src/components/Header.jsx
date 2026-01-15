import React from 'react';
import { IoCall } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import Container from './Container';

const Header = () => {
    return (
        <div className="py-3 bg-[#ff1e1e]">
            <Container>
                <div className="flex justify-between">
                    <div className="w-1/2 flex gap-5">
                        <div className="flex items-center gap-2 font-INT">
                            <IoCall className="text-white text-2xl" />
                            <h2 className="!text-[16px] text-white leading-none"> 01777308777 </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdOutlineEmail className="text-white text-2xl" />
                            <h3 className="!text-[16px] text-white leading-none">
                                info@creativeitinstitute.com
                            </h3>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex justify-end gap-2.5 font-INT text-white">
                            <h2>BN</h2>
                            <h3>EN</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
