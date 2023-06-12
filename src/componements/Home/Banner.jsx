import img1 from '../../assets/home/111.jpeg';
// import img2 from '../../assets/home/11.jpeg';
import img3 from '../../assets/home/01.jpeg';
// import img4 from '../../assets/home/02.jpeg';
import img5 from '../../assets/home/0=22.jpeg';
import img6 from '../../assets/home/03.jpeg';

const Banner = () => {


    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img3} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img5} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img6} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>

    );
};

export default Banner;

