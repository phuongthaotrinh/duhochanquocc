import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(() => import('../components/whyChooseUs'));
const CTA = dynamic(() => import('../components/cta/index'))
const Hero = () => {
    return (
        <div className="w-full mt-5 relative grid place-items-center">
            <CTA/>
            <WhyChooseUs/>

        </div>
    )
}

export default Hero

