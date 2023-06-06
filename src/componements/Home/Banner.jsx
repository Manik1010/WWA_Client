import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/home/111.jpeg';
// import img2 from '../../assets/home/11.jpeg';
import img3 from '../../assets/home/01.jpeg';
// import img4 from '../../assets/home/02.jpeg';
import img5 from '../../assets/home/0=22.jpeg';
import img6 from '../../assets/home/03.jpeg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Et exercitationem laudantium laborum ut dignissimos deserunt atque, nobis, sit aspernatur dolorem eos sunt voluptates nostrum voluptatem iusto sequi libero, ipsa neque.</p>
                </div>
                {/* <div>
                    <img src={img2} />
                    <p className="legend">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet libero recusandae enim alias soluta?</p>
                </div> */}
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                {/* <div>
                    <img src={img4} />
                    <p className="legend">Legend 1</p>
                </div> */}
                <div>
                    <img src={img5} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;