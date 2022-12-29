export default function Landing () {
    return (
        <div id="home" className="bg-navy-blue text-white relative min-h-screen w-full items-center flex justify-center">
            <div className="font-mono">
                <div className="flex flex-col sm:flex-row">
                    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/microsoft/319/waving-hand_1f44b.png" className="object-contain h-32 max-w-sm rounded-lg pr-32 pb-5 sm:mr-0 sm:pb-0 sm:h-20 md:h-24 sm:pr-5"></img>
                    <div className="flex flex-col">
                        <h2 className="text-l sm:text-2xl md:text-3xl ">Hi! My name is</h2>
                        <h1 className="typewriter reveal text-2xl font-bold sm:text-5xl md:text-6xl">Marc Bernardino</h1>  
                        <br/>
                        <nav className="flex z-10 flex-col md:text-xl">
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