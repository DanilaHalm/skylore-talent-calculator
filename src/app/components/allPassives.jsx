"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const AllPassives = ({ passives }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSkill = useCallback(
    (index) => {
      const urlActiveSkillsString = searchParams.get("skills");
      const urlPassiveSkillsString = searchParams.get("passives") || "";
      const urlSkills = urlPassiveSkillsString.split("");
      const activeSkill = urlSkills.find((skill) => skill === `${index}`);

      if (activeSkill) {
        const idx = urlSkills.indexOf(activeSkill);
        urlSkills.splice(idx, 1);
      } else {
        urlSkills.push(`${index}`);
      }
      const url = `${pathname}?skills=${urlActiveSkillsString}&passives=${urlSkills.join("")}`;
      router.replace(url, { scroll: false });
    },
    [searchParams]
  );

  const checkSkill = (index) => {
    const urlSkillsIdx = searchParams.get("passives").split("");
    const isActive = urlSkillsIdx.includes(index);

    if (isActive) return false;
    else {
      return urlSkillsIdx.length > 2 ? true : false;
    }
  };

  const checkActive = (index) => {
    const urlSkillsIdx = searchParams.get("passives").split("");
    const isActive = urlSkillsIdx.includes(index);
    return isActive;
  };

  return (
    <div className="grid w-full max-w-lg grid-cols-5 gap-3 justify-around justify-items-center my-3 rounded-md border border-[#896339] p-1">
      {passives.map((skill) => {
        const isActive = checkActive(`${skill.index}`);
        const isDisabled = checkSkill(`${skill.index}`);
        const iconName = skill.name.replaceAll(" ", "");
        return (
          <div
            key={skill.name}
            className={`w-14 h-14 test ${iconName} ${isActive ? "border-green-500 border-2" : ""} ${
              isDisabled ? "grayscale" : ""
            } bg-cover bg-no-repeat bg-center rounded-full`}
          >
            <input
              type="checkbox"
              onClick={() => setSkill(skill.index)}
              disabled={isDisabled}
              className="opacity-0 w-14 h-14 bg-green-200 rounded-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllPassives;
