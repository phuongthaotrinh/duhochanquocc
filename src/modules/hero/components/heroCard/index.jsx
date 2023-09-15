'use client';

import { Card } from 'flowbite-react';

const HeroCard = ({imageUrl, title}) => {
    return (
    <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        style={{backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.8}}
    >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
                {title}
            </p>
        </h5>

    </Card>
    )
}

export default HeroCard