export default function About () {
    return (
        <div id="about" className="bg-sky-white h-auto md:px-24 md:py-12">
          <div className="flex flex-col md:flex-row-reverse">
            <img src="https://media.licdn.com/dms/image/D5603AQGyMSUyAf8e2Q/profile-displayphoto-shrink_400_400/0/1665306343613?e=1677715200&v=beta&t=bCrhArsl0oFihV9ErR_pDmva1Rd3JTqvkXEdyWsI7JA" className="rounded-full mt-10 object-contain h-32 sm:h-64 max-w-sm shadow-2xl mb-5"/>
            <div className="text-gray-800 text-center font-mono px-6 md:text-left">
                <h1 className="mb-5 text-4xl">
                About <span className="font-bold">Me</span>
                </h1> 
                <p className="my-5 text-lg lg:pr-24">Hi again! My name is <span className="font-bold">Marc Bernardino</span>. I am currently a senior at Northside College Prep with a passion for Computer Science. Im interested in all things technology, espeically Web Development, Artificial Intelligence, Computer Vision, Machine Learning, and Blockchain Technology. I hope you enjoy my work!</p>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Languages</span>: JavaScript, TypeScript, HTML, CSS, Java, Python
                </h3>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Technologies</span>: Node.js, React, Next, Tailwind, Axios
                </h3>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Favorite Food</span>: Steak
                </h3> 
            </div>
          </div>
        </div>
    )   
}