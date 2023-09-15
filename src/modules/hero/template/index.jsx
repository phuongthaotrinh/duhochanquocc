import dynamic  from "next/dynamic";
const WhyChooseUs = dynamic(() => import('../components/whyChooseUs'))
const Hero = () => {
    return (
        <div className="w-full mt-5 relative grid place-items-center">
                <WhyChooseUs />
        </div>
    )
}

export default Hero

