"use client";
import { useState } from "react";
import SkillShards from "./skillShards";
import ChosedShardsDesc from "./chosedShardsDesc";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ChosedSkills = ({ skills }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isDescActive, setIsDescActive] = useState(false);
  const urlSkills = searchParams
    .get("skills")
    .split("-")
    .map((skill) => skill[0]);
  const selectedSkills = skills.filter((skill) => urlSkills.includes(`${skill.index}`));

  return (
    <div>
      {selectedSkills.map((skill) => {
        return (
          <div className="flex items-center flex-col w-screen bg-yellow-200" key={skill.name + "add"}>
            <div className="w-full max-w-lg flex flex-row h-[16vh] bg-orange-200">
              <div className="w-1/2 flex flex-col">
                <div className="flex flex-row">
                  <div onClick={() => setIsDescActive(!isDescActive)} className="h-[8vh] aspect-square bg-blue-200">
                    img
                  </div>
                  <SkillShards skillIndex={skill.index} />
                </div>
                <div>{"skillname"}</div>
              </div>
              <ChosedShardsDesc skill={skill}/>
            </div>
            {isDescActive && <div className="h-auto">{"description"}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default ChosedSkills;
