
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../../assets/home/a.png';
import img2 from '../../assets/home/b.jpeg';
import img3 from '../../assets/home/c.jpeg';
import img4 from '../../assets/home/d.jpeg';
import img5 from '../../assets/home/e.jpeg';


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img5} className="w-full h-[700px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} className="w-full h-[700px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className="w-full h-[700px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} className="w-full h-[700px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} className="w-full h-[700px]"></img>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
// const Banner = () => {


//     return (
//         <div>
//             <div className="carousel w-full">
//                 <div id="item1" className="carousel-item w-full">
//                     <img src={img1} className="w-full" />
//                 </div>
//                 <div id="item2" className="carousel-item w-full">
//                     <img src={img3} className="w-full" />
//                 </div>
//                 <div id="item3" className="carousel-item w-full">
//                     <img src={img5} className="w-full" />
//                 </div>
//                 <div id="item4" className="carousel-item w-full">
//                     <img src={img6} className="w-full" />
//                 </div>
//             </div>
//             <div className="flex justify-center w-full py-2 gap-2">
//                 <a href="#item1" className="btn btn-xs">1</a>
//                 <a href="#item2" className="btn btn-xs">2</a>
//                 <a href="#item3" className="btn btn-xs">3</a>
//                 <a href="#item4" className="btn btn-xs">4</a>
//             </div>
//         </div>
//     // <>
//     //     <Swiper
//     //       spaceBetween={30}
//     //       effect={"fade"}
//     //       navigation={true}
//     //       pagination={{
//     //         clickable: true,
//     //       }}
//     //       modules={[EffectFade, Navigation, Pagination]}
//     //       className="mySwiper"
//     //     >
//     //       <SwiperSlide>
//     //       <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //       <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//     //       </SwiperSlide>
//     //     </Swiper>
//     //   </>

//     );
// };

// export default Banner;

