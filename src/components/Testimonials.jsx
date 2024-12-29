import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import sky from '../assets/sky.png';
import mentor from '../assets/Mentor.png';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Certifications = () => {

    // Sample certificate images
    const certificates = [
        {
            id: 1,
            image: sky, 
        },
        {
            id: 2,
            image: mentor, 
        },
    ];

    return (
        <div id='certifications' className='py-10 bg-gray-100 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold mb-8'>
                My Certifications
            </h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={2} // Display only two certificates at a time
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {certificates.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md rounded-lg flex flex-col p-4'>
                                <img
                                    src={item.image} 
                                    alt={`Certificate ${item.id}`} 
                                    className="w-full h-64 object-contain rounded-lg" // Fixed height and object-cover
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Certifications;
