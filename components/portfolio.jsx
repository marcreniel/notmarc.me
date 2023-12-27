export default function Portfolio (props) {
    return (
        <div id={props.id} className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12 mb-20">
            <div className="flex flex-col items-center justify-center">
                <h1 data-aos="zoom-out" className="mt-10 md:mt-0 mb-8 text-4xl font-medium">
                    Portfolio <span className="text-xs">(psst... scroll horizontally!)</span>
                </h1>
                <div className="carousel carousel-end rounded-box w-3/4 md:w-full space-x-10 pb-5">
                    <div className="carousel-item w-72 h-[35rem]">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <figure><img src="/zephyr.png" alt="Zephyr" /></figure>
                        <div className="card-body">
                            <div className="space-y-1">
                            <h2 className="card-title">
                            Zephyr
                            </h2>
                            <p className="italic text-[0.8rem]">By Notebook Labs</p>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://www.zephyr.exchange/" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Link</a>
                            </div>
                            <p>A decentralized peer-to-peer cryptocurrency exchange application built using zk-SNARKs.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline badge-success">Notebook Labs Internship</div>
                            <div className="badge badge-outline">TypeScript</div>
                            <div className="badge badge-outline">Next.js</div> 
                            <div className="badge badge-outline">Express.js</div> 
                            <div className="badge badge-outline">Node.js</div> 
                            <div className="badge badge-outline">Amazon DynamoDB</div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item w-72">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <figure><img src="/serenade.png" alt="serenade" /></figure>
                        <div className="card-body">
                            <div className="space-y-1">
                            <h2 className="card-title">
                            Serenade
                            </h2>
                            <p className="italic text-[0.8rem]">CalHacks 2023 Submission</p>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://devpost.com/software/serenade" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Devpost</a>
                                <a href="https://github.com/marcreniel/serenade-calhacks23" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>Personalized, AI-powered therapeutic experiences to promote mental, emotional, physical wellbeing.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Next.js</div>
                            <div className="badge badge-outline">TypeScript</div>
                            <div className="badge badge-outline">Clerk</div> 
                            <div className="badge badge-outline">Convex</div> 
                            <div className="badge badge-outline">OpenAI</div> 
                            </div>
                        </div>
                        </div>
                    </div> 
                    <div className="carousel-item w-72">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <figure><img src="/discodb.png" alt="DiscoDB" /></figure>
                        <div className="card-body">
                            <div className="space-y-1">
                            <h2 className="card-title">
                            DiscoDB
                            </h2>
                            <p className="italic text-[0.8rem]">HackIllinois 2023 Submission</p>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://devpost.com/software/discdb" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Devpost</a>
                                <a href="https://github.com/andyluo03/DiscoDB" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>DiscoDB is a NoSQL document-based database using a novel technique to achieve infinite cloud storage for free using Discord.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Python</div>
                            <div className="badge badge-outline">Flask</div>
                            <div className="badge badge-outline">AWS</div> 
                            <div className="badge badge-outline">JWT</div> 
                            <div className="badge badge-outline">TypeScript</div> 
                            <div className="badge badge-outline">React</div> 
                            <div className="badge badge-outline">Discord Web API</div> 
                            </div>
                        </div>
                        </div>
                    </div> 
                    <div className="carousel-item w-72">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <figure><img src="/pynq.png" alt="NotifAI" /></figure>
                        <div className="card-body">
                            <div className="space-y-1">
                            <h2 className="card-title">
                            Pynq-Z2 CV Demo
                            </h2>
                            <p className="italic text-[0.8rem]">Fermilab TARGET Project</p>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://lss.fnal.gov/archive/2022/slides/fermilab-slides-22-107-scd.pdf" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Presentation</a>
                            </div>
                            <p>Contributed to Live Pokemon Interface Demo, a CV demonstrator for Fermilab&apos;s hls4ml Demo Lab at DEFCON 30.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline badge-success">Fermilab Internship</div>
                            <div className="badge badge-outline">Python</div>
                            <div className="badge badge-outline">Vivado</div>
                            <div className="badge badge-outline">OpenCV</div>
                            <div className="badge badge-outline">HDL</div>
                            </div>
                        </div>
                        </div>
                    </div> 
                    <div className="carousel-item w-72">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <figure><img src="/notifai.png" alt="NotifAI" /></figure>
                        <div className="card-body">
                            <div className="space-y-1">
                            <h2 className="card-title">
                            NotifAI
                            </h2>
                            <p className="italic text-[0.8rem]">Cohere Hackathon Submission</p>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://lablab.ai/event/cohere-hackathon/abg-hunters/notifai" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Submission</a>
                                <a href="https://github.com/Kalamojo/notifAI" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>An application that uses Computer Vision models and Cohere&apos;s Generate models to scan and summarize notes on the fly.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">React Native</div>
                            <div className="badge badge-outline">TypeScript</div>
                            <div className="badge badge-outline">Python</div> 
                            <div className="badge badge-outline">Expo</div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item w-72">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <figure><img src="/chivaxtrack.png" alt="NotifAI" /></figure>
                        <div className="card-body">
                            <div className="space-y-1">
                            <h2 className="card-title">
                            ChiVaxTrack
                            </h2>
                            <p className="italic text-[0.8rem]"></p>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://chivaxtrack.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Demo</a>
                                <a href="https://github.com/marcreniel/ChiVaxTrack" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>A COVID-19 vaccine tracker for residents of the City of Chicago.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">Axios</div>
                            <div className="badge badge-outline">TailwindCSS</div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item w-72">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <figure><img src="/shrtnninja.png" alt="NotifAI" /></figure>
                        <div className="card-body">
                            <div className="space-y-1">
                            <h2 className="card-title">
                            shrtn.ninja
                            </h2>
                            <p className="italic text-[0.8rem]"></p>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://shrnk-ninja.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Demo</a>
                                <a href="https://github.com/marcreniel/shrtn.ninja" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>A simple URL shortener service.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">MongoDB</div>
                            <div className="badge badge-outline">Express</div>
                            <div className="badge badge-outline">Mongoose</div> 
                            <div className="badge badge-outline">HTML/CSS</div> 
                            </div>
                        </div>
                        </div>
                    </div> 
                    <div className="carousel-item w-72">
                        <div className="card bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            🚀 And more...
                            </h2>
                            <p>From websites such as <a href="https://github.com/marcreniel/Maple" target="_blank" rel="noopener noreferrer" className="underline">Maple</a>, or discord bots like <a href="https://github.com/marcreniel/Headphones" target="_blank" rel="noopener noreferrer" className="underline">Headphones</a> or <a href="https://github.com/marcreniel/discordCGPT" target="_blank" rel="noopener noreferrer" className="underline">DiscordGPT</a>, and everything in between, check out my <a href="https://github.com/marcreniel/" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>!</p>
                        </div>
                        </div>
                    </div> 
                </div>                
            </div>
      </div>
    )
}