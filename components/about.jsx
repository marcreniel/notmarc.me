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
              <p className="my-5 text-lg lg:pr-24">Hey! Im Marc Bernardino, an undergraduate student at <span className="font-bold">Stanford University</span> majoring in Computer Science. My passions lie in creating experiences that bring real-world value to others. Whether it be through projects, research, or the industry, I strive to make an impact through my work. </p>
              <p className="my-5 text-lg lg:pr-24">I am proficient in full-stack web development, while my ambition to learn drives me to further explore Blockchain Technology and Artificial Intelligence.</p>
              <h3 className="mb-2 text-l">Looking to reach me for work, research, or just to chat? I dont mind! Feel free to <a className="underline" href="#contact">contact</a> me!</h3>
          </div>
        </div>
      </div>
  )   
}