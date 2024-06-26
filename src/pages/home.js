import React from 'react';
import './home.css';
import myGif from '../assets/gif/DK-Homepage-One-Loop-With-Background.mp4';
import myLYellow from '../assets/gif/DK-Illustration-Home-Page-Short-About-LYellow.gif';
import myRYellow from '../assets/gif/DK-Illustration-Home-Page-Short-About-RYellow.gif';
import { Link } from 'react-router-dom';
import Cards from '../widgets/Cards/Cards';
import DanoneImg from '../assets/gif/Danone-540.gif';
import FonterraImg from '../assets/gif/Fonterra-540.gif';

function Home() {
const cardDanone = 'Danone • 2021';
const cardDanoneDesc = "BRINGING INDONESIAN ONE STEP CLOSER TO A HEALTHIER LIFE & CLEANER ENVIRONMENT";

const cardFonterra = 'Fonterra • 2020';
const cardFonterraDesc = "ELEVATING F&B BUSINESSES TO BE BETTER WITH HIGH QUALITY DAIRY PRODUCTS";

return (
<div className="allhome">
    <div className="home-1 pt-28 pb-32 px-20">
        <h4 className="text-4xl leading-loose">Finding it Hard to Engage Your Market?</h4>
        <h2 className="text-7xl tracking-wide leading-normal">Connecting the <span className="text-yellow">Hearts</span> of Your <span className='text-purple'>Brand</span> and <span className='text-orange'>Audiences</span></h2>
        <video className="my-video-class"  autoplay="autoplay" loop muted playsInline>
            <source src={myGif} type="video/mp4" />
            Your browser does not support the video tag.    
        </video>
    </div>
    <div className="home-2 pt-28 pb-20 px-20 grid grid-cols-12 gap-12">
        <div className='pt-5 leftImage col-span-3'>
            <img src={myLYellow} alt="Animated left gif" className="my-gif-class" />
        </div>
        <div className='CenterText text-center col-span-6'>
            <h3 className='tracking-wider text-7xl'>WE TELL OUR CLIENT'S STORY WITH HEART AT ITS CORE, CONVEYING THEIR MESSAGE TO EVOKE INSPIRATION ON THEIR AUDIENCE.</h3>
        </div>
        <div className='pt-4 leftImage col-span-3'>
            <img src={myRYellow} alt="Animated left gif" className="my-gif-class" />
        </div>
    </div>
    <div className="home-3 pt-28 pb-32 px-20">
        <div className='featuredWorks grid grid-cols-12 gap-12 pb-8'>
            <div className='pt-5 featuredL col-span-6'>
                <h3 className='text-5xl'>Featured Works</h3>
            </div>
            <div className='pt-5 featuredR col-span-6'>
                <Link to="/works" className='linkWorks text-xl flex justify-end pt-2'>
                    <h5>
                        VIEW ALL WORKS
                        <span class="circle-container">
                            <svg width="15" height="15" viewBox="1 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.05295 3H21V19.947H15.351V12.6435L4.99446 23L1 19.0055L11.3565 8.64901H4.05295V3Z" fill="white"></path>
                            </svg>
                        </span>
                    </h5>
                </Link>
            </div>
        </div>
        <div className='Danone pb-4'>
            <Cards title={cardDanone} description={cardDanoneDesc} imageSrc={DanoneImg} />
        </div>
        <div className='Fatore'>
            <Cards title={cardFonterra} description={cardFonterraDesc} imageSrc={FonterraImg} />
        </div>
    </div>
</div>
);
}

export default Home;
