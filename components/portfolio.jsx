export default function Portfolio (props) {
    return (
        <div id={props.id} className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12 mb-20">
            <div className="flex flex-col items-center justify-center">
                <h1 data-aos="zoom-out" className="mt-10 mb-8 text-4xl font-medium">
                    Portfolio
                </h1>
                <div className="flex flex-col xl:space-x-5 xl:flex-row">
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                                <figure><img src="/notifai.png" alt="Maple" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                    notifAI
                                    </h2>
                                    <div className="flex flex-col md:flex-row space-x-2">
                                        <a href="https://lablab.ai/event/cohere-hackathon/abg-hunters/notifai" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Presentation</a>
                                        <a href="https://github.com/Kalamojo/notifAI" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                    </div>
                                    <p>An application that uses a custom model of Cohere&apos;s Generate to scan and summarize notes on the fly.</p>
                                    <div className="card-actions justify-end">
                                    <div className="badge badge-accent badge-outline">Cohere Hackathon 2023</div>
                                    <div className="badge badge-outline">React Native</div>
                                    <div className="badge badge-outline">TypeScript</div>
                                    <div className="badge badge-outline">Python</div> 
                                    </div>
                                </div>
                        </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="/maple.png" alt="Maple" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Maple
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://maple.notmarc.me/" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Website</a>
                                <a href="https://github.com/imedra/Maple" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>A user-friendly all-in-one client for CPS Students. Check your grades, attendance, and bus times!</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">JSX</div>
                            <div className="badge badge-outline">Framework7</div> 
                            <div className="badge badge-outline">Axios</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="/pynq.png" alt="Pynq" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Pynq-Z2 CV Demo
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://lss.fnal.gov/archive/2022/slides/fermilab-slides-22-107-scd.pdf" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Presentation</a>
                            </div>
                            <p>Contributed to Live Pokemon Interface Demo, a CV demonstrator for Fermilab&apos;s hls4ml Demo Lab at DEFCON 30.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">Fermilab TARGET Internship</div>
                            <div className="badge badge-outline">Xiilinx Vivado</div>
                            <div className="badge badge-outline">Python</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="/discordcgpt.png" alt="discordCGPT" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            discordCGPT
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/imedra/discordCGPT" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>A Discord bot that integrates OpenAI&apos;s ChatGPT to use on text channels.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">TypeScript</div> 
                            <div className="badge badge-outline">discord.js</div>
                            <div className="badge badge-outline">OpenAI</div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col lg:space-x-5 lg:flex-row">
                        <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                            <figure><img src="/headphones.png" alt="Headphones" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Headphones
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/imedra/Headphones" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>A discord music bot that supports over 900+ audio websites.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">JavaScript</div> 
                            <div className="badge badge-outline">discord.js</div>
                            <div className="badge badge-outline">Distube</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                            <figure><img src="/chivaxtrack.png" alt="ChiVaxTrack" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            ChiVaxTrack
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://chivaxtrack.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Website</a>
                                <a href="https://github.com/imedra/ChiVaxTrack" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>A Student-made COVID-19 vaccine tracker for the City of Chicago.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">React</div> 
                            <div className="badge badge-outline">TailwindCSS</div> 
                            <div className="badge badge-outline">Axios</div> 
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                            <figure><img src="/shrtnninja.png" alt="shrtn.ninja" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            shrtn.ninja
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://shrnk-ninja.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Website</a>
                                <a href="https://github.com/imedra/shrtn.ninja" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
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