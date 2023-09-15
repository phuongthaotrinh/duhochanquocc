import dynamic from "next/dynamic";
const ContactTemplate = dynamic(() => import('@/modules/contact/index'))

const Contact = () => {
    return (
        <>
            <ContactTemplate />
        </>
    )
}

export default Contact