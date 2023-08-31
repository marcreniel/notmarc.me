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
                <p className="my-5 text-lg lg:pr-24">I am a student at <span className="font-bold">Stanford University</span> pursuing Computer Science and proficient in full-stack Web Development. I have deep passion in exploring and expanding my knowledge across various domains such as Natural Language Processing, Computer Vision, Data Structures and Algorithms, and much more.</p>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Languages</span>: JavaScript/TypeScript, Java, Python, HTML, CSS
                </h3>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Technologies</span>: Node.js, React/React Native, Next.js, Flask, Express, MongoDB
                </h3>
                <h3 className="mb-2 text-l">
                  <span className="font-bold">Notable Experience</span>:  SWE Intern @ Notebook Labs, Scientific Computation Intern @ Fermilab (TARGET)
                </h3>
            </div>
          </div>
        </div>
    )   
}