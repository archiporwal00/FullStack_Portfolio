import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ProjectCard
            
            desc={<p>A full-stack medical e-commerce platform built with React.js and Firebase. Enables users to browse and search medicines, add items to the cart, and place orders. Includes real-time authentication, doctor search by specialization and location, and live availability indicators. Focused on improving medicine accessibility through a user-friendly UI and responsive design.</p>}
            title="MediMart – Medical E-commerce Web App"
            githubLink="https://github.com/archiporwal00/Medi-Mart.git"
            liveLink="https://medi-mart.netlify.app/"
            techStack={["React.js", "Firebase (Auth + Firestore)", "CSS", "Google Maps API", "Node.js", "MongoDB"]}
        />
        <ProjectCard
            
            desc={<p>An AI-powered calculator that scans handwritten or typed math problems and solves them instantly. Users can upload or capture equations, and the app returns accurate step-by-step solutions using an OCR + math solver API.</p>}
            title="AI-Math Calculator – Smart Math Solver App"
            githubLink="https://github.com/archiporwal00/AI-Math-Drawing-Calculator.git"
            liveLink="https://ai-math-drawing-calculator.netlify.app/"
            techStack={["React.js (Frontend)", "Flask (Backend)", "OCR + Math Solver API", "CSS"]}
        />
        <ProjectCard
           
            desc={<p>A multi-platform ecosystem connecting farmers and customers directly. Includes a Farmer App, Customer App, and Admin Web Portal. Features include crop listing, inventory management, AI-based price and demand prediction, order tracking, and e-Mitra integration for scheme updates.</p>}
            title="Krashak Setu – Farmer-Customer Agriculture Platform"
            githubLink="https://github.com/archiporwal00/SIH-Web-Project.git"
            liveLink="https://mern-ecommerce-frontend-gamma.vercel.app/"
            techStack={["React.js", "Flask/Django", "PostgreSQL", "Machine Learning Models (Price & Demand Prediction)"]}
        />
    </div>
  )
}
