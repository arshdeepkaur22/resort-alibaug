import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GalleryCarousel = () => {
    const images = [
        '/c1.JPG', '/c2.JPG', '/c3.JPG', '/c4.JPG', '/c5.JPG', '/c6.JPG', '/c7.JPG', '/c8.JPG', '/c9.JPG',
         '/demo2.JPG', '/demo3.JPG', '/demo4.JPG', '/demo5.JPG', '/demo6.JPG', 
        '/demo7.JPG', '/demo8.JPG', '/demo9.JPG', '/demo10.JPG', '/demo11.JPG', '/demo12.JPG', 
        '/demo13.JPG', '/demo14.JPG', '/demo15.JPG', '/demo16.JPG'
      ];
       
  return (
    <div className="py-16 bg-white relative">
      <div className="container mx-auto px-6 max-w-screen-xl text-center">
        <span className="text-[#002A2F] text-lg font-bold">Take a Look at Our Gallery</span>
        <h2 className="text-3xl font-serif mt-2">Check Out The Luxury at Our Resort & Beach Club</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm">
          Our Gallery showcases the finest amenities and scenic views.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation
          pagination={{ clickable: true }}
          className="mt-8"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Resort ${index}`} className="w-full h-[500px] object-cover rounded-md" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryCarousel;
