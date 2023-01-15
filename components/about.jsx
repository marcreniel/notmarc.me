export default function About (props) {
    return (
        <div id={props.id} className="bg-sky-white h-auto md:px-24 md:py-12">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="mt-10 mb-5">
              <img src="/pfp.png" className="rounded-full scale-75 md:scale-100 shadow-2xl"/>
            </div>
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