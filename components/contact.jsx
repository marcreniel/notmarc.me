export default function Contact (props) {
    return (
        <div id={props.id}>
          <div className="p-10 footer font-mono bg-gray-800 text-neutral-content">
            <div>
            </div>
            <h1 className="mb-5 text-4xl font-light justify-center">
              Contact <span className="font-medium">Me</span>
            </h1> 
            <div>
              <span className="footer-title">Socials</span> 
              <a href="https://www.linkedin.com/in/marcreniel" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a> 
              <a href="https://github.com/marcreniel" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a> 
              <a href="https://twitter.com/marcrenielb" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a> 
            </div> 
           <div>
            <span className="footer-title">Email</span> 
            <a href="mailto:marc@notmarc.me"className="link link-hover">marc@notmarc.me</a>
          </div>
          <div>
            <span className="footer-title">Resume</span> 
            <a href="" target="_blank" rel="noopener noreferrer" className="link link-hover">Coming Soon!</a> 
          </div>
      </div>
      </div>    
    )
}