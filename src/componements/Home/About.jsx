import img from '../../assets/home/about.png';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold text-center p-2">What is WWA?</h1>
                        <div>
                            <div className='mt-2'>
                                <p>Worldly Words Academy(WWA) is the best language learning app & website for kids. It is available in 50 languages with over 30,000 online activities.</p>
                            </div>
                            <div className='mt-2'>
                                <p>Dinolingo is the best language learning app & website for kids. It is available in 50 languages with over 30,000 online activities.</p>
                            </div>
                            <div className='mt-2'>
                                <p>Get unlimited access to Dinolingo premium on your desktop, laptop, smartphone, tablet, all for one fixed monthly fee: $14.95 a month. Cancel anytime. No obligations, no contracts, no extra costs.</p>
                            </div>
                        </div>
                        <button className="btn btn-active btn-ghost p-2 mt-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;