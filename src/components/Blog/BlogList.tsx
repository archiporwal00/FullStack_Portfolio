import { BlogCard } from "./BlogCard"

export const BlogList = () => {
  return (
    <div className="flex flex-col gap-y-6">
            <BlogCard
                desc={<p>Selected participant in <strong>Smart India Hackathon - SIH 2024</strong> as part of <strong>Team Cultivators</strong>, contributing as a <strong>Frontend Developer</strong>. We developed <strong>Krashak Setu</strong>, an AI-powered solution to empower farmers through smart crop management, price prediction, and direct market connectivity.</p>}
                image="https://drive.google.com/file/d/1Jl8oKlnKlnz_BDllPElRI7KTaTgx0Ze6/view?usp=drive_link"
                title="Smart India Hackathon -2024 Finalist(among top 6)"
            />
            <BlogCard
                desc={<p>Awarded a Certificate of Appreciation by Poornima University for exceptional contribution in the domain of Tech & Innovation, recognizing consistent dedication, creativity, and impactful work in technology-driven initiatives.</p>}
                image="https://drive.google.com/file/d/1aJy4b4V_Sfq9lfsROpdIvSZt0qHWRku9/view?usp=drive_link"
                title="University Appretiation"
            />
            <BlogCard
                desc={<p>Successfully completed the Alpha – DSA with Java course by Apna College, under the mentorship of Shradha Khapra. Gained in-depth understanding of Data Structures and Algorithms, problem-solving techniques, and Java programming, with hands-on coding practice and regular assessments.</p>}
                image="https://drive.google.com/file/d/1fFWXGg0M3Z-Bz3x8mSJmHhflPsazcHFf/view?usp=drive_link"
                title="Certified in Data Structures & Algorithms using Java"
            />
    </div>
  )
}
