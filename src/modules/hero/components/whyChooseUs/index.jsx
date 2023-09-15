'use client';
import dynamic from "next/dynamic";

const HeroCard = dynamic(() => import("../heroCard/index"))
const WhyChooseUs = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Du học Hàn Quốc, tại sao không</h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Khám phá ngay</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2">
                        <HeroCard
                            imageUrl="https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/eb29e5af-f38b-444b-bc76-ad112e6708c5"
                            title={"Tổng quan về đất nước Hàn Quốc"}
                        />
                        <HeroCard
                            imageUrl="https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/eb29e5af-f38b-444b-bc76-ad112e6708c5"
                            title={"Các chương trình du học Hàn Quốc"}
                        />
                        <HeroCard
                            imageUrl="https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/eb29e5af-f38b-444b-bc76-ad112e6708c5"
                            title={"Quy trình và chi phí du học tiếng"}
                        />
                        <HeroCard
                            imageUrl="https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/eb29e5af-f38b-444b-bc76-ad112e6708c5"
                            title={"Lộ trình và thời gian học tập"}
                        />
                        <HeroCard
                            imageUrl="https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/eb29e5af-f38b-444b-bc76-ad112e6708c5"
                            title={"Cơ hội và việc làm thêm"}
                        />

                    </div>

                </div>
            </section>
        </>
    )
}

export default WhyChooseUs