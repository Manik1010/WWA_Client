// import img1 from '../../assets/home/111.jpeg';
// // import img2 from '../../assets/home/11.jpeg';
// import img3 from '../../assets/home/01.jpeg';
// // import img4 from '../../assets/home/02.jpeg';
// import img5 from '../../assets/home/0=22.jpeg';
// import img6 from '../../assets/home/03.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img5 from '../../assets/home/05.png';
import img6 from '../../assets/home/06.png';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./styles.css";

// // import required modules
// import { EffectFade, Navigation, Pagination } from "swiper";
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Et exercitationem laudantium laborum ut dignissimos deserunt atque, nobis, sit aspernatur dolorem eos sunt voluptates nostrum voluptatem iusto sequi libero, ipsa neque.</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta?</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta? 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta? 1</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta? 2</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta? 3</p>
                </div>
            </Carousel>
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

