import Link from "next/link"

export default function Landing () {
    return (
        <div id="home" className="bg-stone-900 text-white relative min-h-screen w-full items-center flex justify-center">
            <svg data-aos="zoom-y-out" data-aos-delay="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className="absolute bottom-0">
                <path fill="#f3f4f5" fillOpacity="0.05" d="M0,32L60,74.7C120,117,240,203,360,202.7C480,203,600,117,720,106.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <svg data-aos="zoom-y-out" data-aos-delay="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" className="absolute bottom-0">
                <path fill="#f3f4f5" fillOpacity="0.01" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,101.3C672,128,768,224,864,250.7C960,277,1056,235,1152,197.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg data-aos="zoom-y-out" data-aos-delay="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 300" className="absolute bottom-0">
                <path fill="#f3f4f5" fillOpacity="0.03" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="font-mono">
                <div className="flex flex-row">
                    <img data-aos="zoom-out" data-aos-delay="300" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/microsoft/319/waving-hand_1f44b.png" className="h-12 md:h-24 pr-4 max-w-sm rounded-lg"></img>
                    <div data-aos="zoom-out" data-aos-delay="600" className="flex flex-col">
                        <h2 className="text-l sm:text-2xl md:text-3xl ">Hi! My name is</h2>
                        <h1 className="typewriter reveal text-2xl sm:text-5xl md:text-6xl font-bold">Marc Bernardino</h1>  
                        <br/>
                        <nav data-aos="fade-right" data-aos-delay="2100"  className="md:text-xl float-left flex flex-col">
                            <button className="transition ease-in-out delay-150 hover:scale-110 duration-300 text-left">
                            About
                            </button>
                            <button className="transition ease-in-out delay-150 hover:scale-110 duration-300 text-left">
                            Blog
                            </button>
                            <button className="transition ease-in-out delay-150 hover:scale-110 duration-300 text-left">
                            Projects
                            </button>
                            <button className="transition ease-in-out delay-150 hover:scale-110 duration-300 text-left">
                            Contact
                            </button>
                        </nav>    
                    </div>      
                </div>    
            </div>
        </div>
      )
    }