import { ExperienceCard } from "./ExperienceCard"

export const ExperienceList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ExperienceCard
            duration="May 2025 - July 2025"
            companyName="Celebal Technologies"
            role="React Js Developer"
            companyWebsiteLink="https://celebaltech.com/"
            techStack={["ReactJS","APIs","Application Deployment",]}
            desc={<p>Built responsive and dynamic web interfaces using React.js for real-world projects. Implemented reusable components, managed state efficiently using Redux and Context API, and integrated RESTful APIs. Collaborated in an Agile team using Git and GitHub, contributing to clean, maintainable code and performance-optimized UIs.</p>}
            jobType="Internship"
        />
    </div>
  )
}
