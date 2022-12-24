import Link from 'next/link'

export default function Landing () {
    return (
        <div id='home' className='bg-stone-900 text-white h-screen w-full items-center flex flex-col justify-center'>
            
            <svg data-aos="zoom-y-out" data-aos-delay="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 300" className="absolute bottom-0">
                <path fill="#f3f4f5" fillOpacity="0.1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg data-aos="zoom-y-out" data-aos-delay="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" className="absolute bottom-0">
                <path fill="#f3f4f5" fillOpacity="0.2" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,101.3C672,128,768,224,864,250.7C960,277,1056,235,1152,197.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

            <div className='font-mono'>
                <div data-aos="zoom-out" data-aos-delay="300">
                    <h2 className="text-l sm:text-2xl md:text-4xl ">Hi! My name is</h2>
                    <h1 className="typewriter reveal text-2xl sm:text-5xl md:text-7xl font-bold">Marc Bernardino</h1>         
                </div>
                <nav>
                    <p data-aos="fade-right" data-aos-delay="2100">About</p>
                    <p data-aos="fade-right" data-aos-delay="2200">Blog</p>
                    <p data-aos="fade-right" data-aos-delay="2300">Projects</p>
                    <p data-aos="fade-right" data-aos-delay="2400">Contact</p>
                </nav>       
            </div>


        </div>
      )
    }