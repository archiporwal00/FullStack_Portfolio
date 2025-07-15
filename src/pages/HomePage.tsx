import { BlogList } from "../components/Blog/BlogList"
import { ProjectList } from "../components/Project/ProjectList"
import { SkillList } from "../components/Skill/SkillList"
import { ExperienceList } from "../components/experience/ExperienceList"
import { Intro } from "../components/intro/Intro"
import { Summary } from "../components/intro/Summary"
import { Navbar } from "../components/navigation/Navbar"
import { Socials } from "../components/social/Socials"
import { SKILLS } from "../constants/skills"

export const HomePage = () => {
  return (
    <div className="w-full h-full flex gap-10 max-lg:gap-28 justify-center pt-24 max-2xl:px-20 max-lg:flex-col max-lg:justify-normal max-lg:px-14 max-md:px-4 max-sm:px-4 max-md:pt-12">
        
        {/* intro and social */}
        <div className="text-white w-[30rem] h-screen relative">

            <div className="fixed max-lg:static gap-y-8 flex flex-col">
                <Intro 
                  name="Archi Porwal"
                  profile="Full Stack Developer"
                  shortDesc="Turning ideas into responsive and intuitive web applications."
                />

                <div className="hidden max-lg:block">
                    <Socials/>
                </div>

                <div className="mt-16 max-lg:mt-5">
                  <Navbar/>
                </div>
            </div>


            <div className="absolute bottom-60 max-lg:hidden">
              <div className="fixed max-lg:relative">
                  <Socials/>
              </div>
            </div>
        </div>

        {/* sections */}
        <div className="w-[40rem] max-xl:w-fit text-text-secondary flex flex-col gap-y-20">

          {/* about section */}
          <section id="about" className="gap-y-6 flex flex-col scroll-m-24 max-lg:scroll-m-12">
            <h4 className="max-lg:block hidden text-text-primary font-bold uppercase tracking-wide">About</h4>
            <div className="gap-y-6 flex flex-col pl-6 max-sm:pl-0">
              <Summary summary={<p>When I first built a webpage using <strong>HTML</strong> and <strong>CSS</strong>, I knew development was more than just code—it was creativity in action. My journey deepened with <strong>React</strong> and <strong>Firebase</strong>, leading to a strong interest in crafting <strong>scalable full-stack applications</strong>. Along the way, I’ve worked on projects like a <strong>medical e-commerce platform</strong>, an <strong>AI-powered math calculator</strong>, and a <strong>farmer–customer marketplace</strong>, gaining hands-on experience in building <strong>real-world digital solutions</strong> that are both <strong>functional</strong> and <strong>user-friendly</strong>.</p>}/>
              <SkillList skills={SKILLS}/>
            </div>
          </section>

          {/* experience section */}
          <section id="experience" className="flex flex-col gap-y-6 scroll-m-12">
            <h4 className="max-lg:block hidden text-text-primary font-bold uppercase tracking-wide">Experience</h4>
            <ExperienceList/>
          </section>

          {/* project section */}
          <section id="projects" className="gap-y-6 flex flex-col scroll-m-12">
            <h4 className="max-lg:block hidden text-text-primary font-bold uppercase tracking-wide">Projects</h4>
            <ProjectList/>
          </section>

          {/* project section */}
          <section id="blogs" className="gap-y-6 flex flex-col pb-24 max-md:pb-12 scroll-m-12">
            <h4 className="max-lg:block hidden text-text-primary font-bold uppercase tracking-wide">Blogs</h4>
            <BlogList/>
          </section>

        </div>

    </div>
  )
}
