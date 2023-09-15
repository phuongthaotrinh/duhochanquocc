import Image from 'next/image'
import dynamic from "next/dynamic";

const VideoBanner = dynamic(() => import("@/modules/banner/index"));
const HeroTemplate = dynamic(() =>import("@/modules/hero/template"));
const GallaryTemplate = dynamic(() => import('@/modules/gallery/index'));
const Dial  = dynamic(() => import('@/modules/dial/index'))
export default function Home() {
    return (
        <div className="w-full relative">
            <VideoBanner/>
            <div className="grid place-items-center mt-5">
                <HeroTemplate />
                <GallaryTemplate />
            </div>
            <Dial />
        </div>
    )
}
