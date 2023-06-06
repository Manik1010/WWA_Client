import SectionTitle from '../../SectionTitle/SectionTitle';
import './Serivces.css';
import img1 from '../../../assets/Kids/books-egg.png'
import img2 from '../../../assets/Kids/games-egg.png'
import img3 from '../../../assets/Kids/lessons-egg.png'
import img4 from '../../../assets/Kids/worksheets-egg.png'


function Serivces() {
    return (
        <div>
            <SectionTitle
                subHeading='Do you Want!!!'
                heading='How do kids learn languages with Dinolingo?'
            ></SectionTitle>

            <div className="container">
                <div className="grid grid-rows-2 grid-flow-col gap-4 md:grid-rows-1">
                    <div className='p-4'>
                        <div className="flex gap-12 service__box">
                            <div className="icon">
                                <img src={img2}></img>
                            </div>
                            <div className="service__meta"> 
                                <h1 className="service__text text-xl font-bold text-slate-600">Language games</h1>
                                <p className='font-semibold'>Language games for kids encourage children to repeat 
                                words and phrases while earning surprise awards.</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-4'>
                        <div className="flex gap-12 service__box pointer">
                            <div className="icon">
                                <img src={img1}></img>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text  text-xl font-bold text-slate-600">Language books</h1>
                                <p className="font-semibold">
                                Language books for kids motivate children to read the beginner and advanced level stories.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4 md:grid-rows-1">
                    <div className='p-4'>
                        <div className="flex gap-12 service__box">
                            <div className="icon">
                            <img src={img3}></img>
                            </div>
                            <div className="service__meta"> 
                                <h1 className="service__text text-xl font-bold text-slate-600">Language lessons</h1>
                                <p className='font-semibold'>Language lessons for kids inspire children to 
                                speak a second language while watching fun videos and cartoons.</p>

                            </div>
                        </div>
                    </div>

                    <div className='p-4'>
                        <div className="flex gap-12 service__box pointer">
                            <div className="icon">
                                <img src={img4}></img>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text text-xl font-bold text-slate-600">Language worksheets</h1>
                                <p className="font-semibold">
                                Language worksheets and flashcards help kids to learn the basics for writing and reading.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Serivces;
