"use client";
import { useState } from "react";
import SkillShards from "./skillShards";
import ChosedShardsDesc from "./chosedShardsDesc";
import { useSearchParams, usePathname } from "next/navigation";

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
        const iconName = skill.name.replaceAll(" ", "");
        console.log(skill.shards);
        return (
          <div className="flex  items-center flex-col w-screen" key={skill.name + "add"}>
            <div className="w-full rounded-md border-[#896339] border-x-2 max-w-lg flex flex-row h-[16vh]">
              <div className="w-1/2 flex flex-col p-1 chosedSkillBg bg-no-repeat bg-center bg-cover">
                <div className="flex flex-row">
                  <div
                    onClick={() => setIsDescActive(!isDescActive)}
                    className={`h-[10vh] min-h-[70px] max-h-[100px] aspect-square bg-cover bg-no-repeat bg-center rounded-md ${iconName}`}
                  ></div>
                  <SkillShards skillIndex={skill.index} />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold pl-1">{skill.ru.name}</h2>
                </div>
              </div>
              <ChosedShardsDesc shards={skill.shards} skillIndex={skill.index} />
            </div>
            {isDescActive && (
              <div className="h-auto max-w-lg text-xs p-1 bg-no-repeat bg-center bg-cover chosedSkillDescBg">
                {skill.ru.props.map((prop) => {
                  return <p key={prop}>{prop}</p>;
                })}
                {skill.ru.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ChosedSkills;
