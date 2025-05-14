"use client";
import { useState } from "react";
import SkillShards from "./skillShards";
import ChosedShardsDesc from "./chosedShardsDesc";
import { useSearchParams } from "next/navigation";

const ChosedSkills = ({ skills }) => {
  const searchParams = useSearchParams();
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
                  <div onClick={() => setIsDescActive(!isDescActive)} className={`h-[8vh] aspect-square bg-[url(../../public/mageult.jpg)] bg-size-[95%] bg-no-repeat bg-center p-2`}>
                    img
                  </div>
                  <SkillShards skillIndex={skill.index} />
                </div>
                <div>{"skillname"}</div>
              </div>
              <ChosedShardsDesc shards={skill.shards} skillIndex={skill.index} />
            </div>
            {isDescActive && <div className="h-auto">{"description"}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default ChosedSkills;
