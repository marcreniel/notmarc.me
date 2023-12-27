export default function Skills (props) {
    return (
        <div id={props.id} className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12">
            <div className="flex flex-col items-center justify-center">
                <h1 data-aos="zoom-out" className="mt-10 md:mt-0 mb-8 text-4xl font-medium">
                    Skills
                </h1>
                <div className="flex flex-col items-center md:items-stretch xl:space-x-5 xl:flex-row">
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            📜 Languages 
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">JavaScript</div>
                                <div className="badge badge-outline badge-info">TypeScript</div>
                                <div className="badge badge-outline badge-info">HTML/CSS</div>
                                <div className="badge badge-outline badge-info">Java</div>
                                <div className="badge badge-outline badge-info">C++</div>
                                <div className="badge badge-outline badge-info">Python</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            🖥️ Techologies
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">Node.js</div>
                                <div className="badge badge-outline badge-info">React</div>
                                <div className="badge badge-outline badge-info">React Native</div>
                                <div className="badge badge-outline badge-info">Next.js</div>
                                <div className="badge badge-outline badge-info">Express</div>
                                <div className="badge badge-outline badge-info">TailwindCSS</div>
                                <div className="badge badge-outline badge-info">Flask</div>
                                <div className="badge badge-outline badge-info">TensorFlow</div>
                                <div className="badge badge-outline badge-info">PyTorch</div>
                                <div className="badge badge-outline badge-info">OpenCV</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            🔧 Developer Tools 
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">Jira</div>
                                <div className="badge badge-outline badge-info">Git</div>
                                <div className="badge badge-outline badge-info">VS Code</div>
                                <div className="badge badge-outline badge-info">Amazon Web Services</div>
                                <div className="badge badge-outline badge-info">Google Cloud Platform</div>
                                <div className="badge badge-outline badge-info">Oracle Cloud</div>
                                <div className="badge badge-outline badge-info">DigitalOcean</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            🌐 Databases 
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">Firebase</div>
                                <div className="badge badge-outline badge-info">MongoDB</div>
                                <div className="badge badge-outline badge-info">Amazon DynamoDB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}