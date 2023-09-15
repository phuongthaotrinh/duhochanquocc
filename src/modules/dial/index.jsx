'use client'
import {MdPhone} from "react-icons/md"
import {GrContact} from "react-icons/gr";
import {SiZalo} from 'react-icons/si';
import {FaTiktok} from "react-icons/fa"
const DialComp = () => {
    const phoneNumber = '+1234567890';
    const handlePhone = () => {
        window.open(`tel:${phoneNumber}`);
    }
    const handleZalo = () => {
        window.open('https://zalo.me/0961429779')
    }
    const handleFb = () => {
        window.open('https://m.me/100033434193102')
    }
    const handleTiktok = () => {
        window.open('https://www.tiktok.com/@duhochanquoc_?lang=vi-VN')
    }
    return (
        <div className="z-[999]">
            <div class="group fixed bottom-0 right-0 p-2  flex items-end justify-end w-34 h-34 cursor-pointer">

                <div
                    className="text-white shadow-xl flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  ">
                    <GrContact size={24} />

                </div>
                <div
                    className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-4 hover:p-5 bg-green-300 scale-100 hover:bg-green-400 text-white">

                        <MdPhone  onClick={handlePhone}/>
                </div>
                <div
                    className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-4 hover:p-5 bg-blue-300 hover:bg-blue-400  text-white">
                    <SiZalo onClick={handleZalo}/>
                </div>
                <div
                    className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-4 hover:p-5 bg-yellow-300 hover:bg-yellow-400 text-white">
                    <FaTiktok onClick={handleTiktok}/>
                </div>
                <div
                    className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-4 hover:p-5 bg-yellow-300 hover:bg-yellow-400 text-white">
                   <FaTiktok onClick={handleFb}/>
                </div>


            </div>

        </div>
    )
}

export default DialComp