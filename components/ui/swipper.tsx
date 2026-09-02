import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwipperProps {
  children?: React.ReactNode;
  breakpoints: {
    [key: number]: {
      slidesPerView: number;
    };
  }
  className?: string;
}

export default function Swipper({ children, breakpoints, className }: SwipperProps) {
  return (
    <Swiper
      className={`mt-20 w-full  px-4 ${className}`}
      spaceBetween={10}
      slidesPerView={1.1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      breakpoints={breakpoints}
    >
        {children}
    </Swiper>
  );
}
