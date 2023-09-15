'use client'

import Masonry from 'react-masonry-css'
import "./index.css"

const Gallary = () => {
    const data = [
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/876137f5-5789-4bb9-b5e4-c346ad077429",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/8db9cbe5-5caa-46bc-b7ad-76356a3a8c98",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/9497fe24-ad69-4498-9329-6316a7aac470",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/e551aaed-8a58-4848-9071-da74b43967e9",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/b36f6439-726e-4660-bc66-f9436e5b3272",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/b1d6b1bb-42da-4142-8050-2b3502df0b91",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/51358744-b16e-4e69-a213-fdf60f04ba40",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/ee42a9f1-4703-4148-922e-84e3ca70d277",
        "https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/d15f8d15-2694-4708-acd6-deb25c2873b8",
    ];

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 3,
        500: 2
    };



    return (
        <div className='mt-5 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Hàn
                Quốc trong tôi</h2>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item} alt="" className="next-image"/>
                    </div>
                ))}

            </Masonry>

        </div>

    )
}

export default Gallary