export default function Portfolio () {
    return (
        <div id="portfolio" className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12">
            <div className="flex flex-col items-center justify-center">
                <h1 data-aos="zoom-out" className="mt-5 mb-8 text-4xl font-medium">
                    Portfolio
                </h1>
                <div className="flex flex-col lg:space-x-5 lg:flex-row">
                    <div className="card w-64 md:w-80 bg-base-100 my-3 shadow-xl">
                        <figure><img src="/maple.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Maple
                            </h2>
                            <p>A user-friendly all-in-one client for CPS Students. Check your grades, attendance, and bus times!</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">JSX</div>
                            <div className="badge badge-outline">Framework7</div> 
                            <div className="badge badge-outline">Axios</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-base-100 my-3 shadow-xl">
                        <figure><img src="/pynq.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Pynq-Z2 CV Demo
                            </h2>
                            <p>A CV demonstrator for Fermilab's hls4ml Demo Lab at DEFCON 30.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Xiilinx Vivado</div>
                            <div className="badge badge-outline">Python</div>
                            </div>
                        </div>
                    </div>
                        <div className="card w-64 md:w-80 bg-base-100 my-3 shadow-xl">
                        <figure><img src="/discordcgpt.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            discordCGPT
                            </h2>
                            <p>A Discord bot that integrates OpenAI's ChatGPT to use on text channels.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">TypeScript</div> 
                            <div className="badge badge-outline">discord.js</div>
                            <div className="badge badge-outline">OpenAI</div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col lg:space-x-5 lg:flex-row">
                        <div className="card w-64 md:w-80 bg-base-100 my-3 shadow-xl">
                            <figure><img src="/headphones.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Headphones
                            </h2>
                            <p>A discord music bot that supports over 900+ audio websites.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">JavaScript</div> 
                            <div className="badge badge-outline">discord.js</div>
                            <div className="badge badge-outline">Distube</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-base-100 my-3 shadow-xl">
                            <figure><img src="/chivaxtrack.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            ChiVaxTrack
                            </h2>
                            <p>A Student-made COVID-19 vaccine tracker for the City of Chicago.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">React</div> 
                            <div className="badge badge-outline">JSX</div>
                            <div className="badge badge-outline">TailwindCSS</div> 
                            <div className="badge badge-outline">Axios</div> 
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-base-100 my-3 shadow-xl">
                            <figure><img src="/shrtnninja.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            shrtn.ninja
                            </h2>
                            <p>A simple URL shortener service.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">MongoDB</div>
                            <div className="badge badge-outline">Mongoose</div> 
                            <div className="badge badge-outline">Express</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}