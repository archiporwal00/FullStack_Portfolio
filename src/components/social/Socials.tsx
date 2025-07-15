import { Github } from "../ui/icons/Github";
import { HackerRankIcon } from "../ui/icons/HackerRankIcon";
import { LeetCodeIcon } from "../ui/icons/LeetCodeIcon";
import { Linkedin } from "../ui/icons/Linkedin";
import { Mail } from "lucide-react";          // lightweight email icon


export const Socials = () => {
  return (
    <div className="flex gap-x-4 items-center">

        <a target="_blank" href="https://github.com/archiporwal00">
          <Github size={40}/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/archi-porwal-b36108272">
          <Linkedin size={40}/>
        </a>
        <a target="_blank" href="https://leetcode.com/u/Archi1406/">
          <LeetCodeIcon size={35}/>
        </a>
        <a
  href="https://www.hackerrank.com/profile/archiporwal28"
  target="_blank"
  rel="noopener noreferrer"
>
  <HackerRankIcon />
</a>

<a href="mailto:porwalarchi00@gmail.com">
  <Mail size={33} />
</a>

    </div>
  )
}
