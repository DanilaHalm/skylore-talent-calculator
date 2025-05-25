"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const AllSkills = ({ skills, ultimates }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSkill = useCallback(
    (index) => {
      const urlPassiveSkillsString = searchParams.get("passives") || "";
      const urlActiveSkillsString = searchParams.get("skills") || "";
      const urlSkills = urlActiveSkillsString ? urlActiveSkillsString.split("-") : [];
      const activeSkill = urlSkills.find((skill) => skill[0] === `${index}`);

      if (activeSkill) {
        const idx = urlSkills.indexOf(activeSkill);
        urlSkills.splice(idx, 1);
      } else {
        urlSkills.push(`${index}000`);
      }
      const url = `${pathname}?skills=${urlSkills.join("-")}&passives=${urlPassiveSkillsString}`;
      router.replace(url, { scroll: false });
    },
    [searchParams]
  );

  const checkSkill = (index, isUltimate) => {
    const urlSkillsIdx = searchParams
      .get("skills")
      .split("-")
      .map((skill) => skill[0]);
    const isActive = urlSkillsIdx.includes(index);

    if (isActive) return false;
    else {
      if (isUltimate) {
        const secondUltimate = index === "0" ? "9" : "0";
        return urlSkillsIdx.includes(secondUltimate) ? true : false;
      } else {
        const isActiveUltimate = urlSkillsIdx.includes("0") || urlSkillsIdx.includes("9");
        const maxSkills = isActiveUltimate ? 4 : 3;
        return urlSkillsIdx.length > maxSkills ? true : false;
      }
    }
  };

  const checkActive = (index) => {
    const urlSkillsIdx = searchParams
      .get("skills")
      .split("-")
      .map((skill) => skill[0]);
    const isActive = urlSkillsIdx.includes(index);
    return isActive;
  };

  return (
    <div className="flex flex-col my-2 border rounded-md border-[
#896339]">
      <div className="grid grid-cols-2 justify-items-center gap-4 justify-around mb-2">
        {ultimates.map((skill) => {
          const isDisabled = checkSkill(`${skill.index}`, true);
          const isActive = checkActive(`${skill.index}`);
          const iconName = skill.name.replaceAll(" ", "");

          return (
            <div
              key={skill.name}
              className={`w-14 h-14 ${iconName} ${isDisabled ? "grayscale" : ""} ${
                isActive ? "border-green-500 border-2" : ""
              } rounded-lg bg-cover bg-no-repeat bg-center`}
            >
              <input
                type="checkbox"
                onClick={() => setSkill(skill.index)}
                disabled={isDisabled}
                className="opacity-0 w-14 h-14"
              />
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-4 gap-4 justify-around">
        {skills.map((skill) => {
          const isDisabled = checkSkill(`${skill.index}`, false);
          const isActive = checkActive(`${skill.index}`);
          const iconName = skill.name.replaceAll(" ", "");

          return (
            <div
              key={skill.name}
              className={`w-14 h-14 ${iconName} ${isDisabled ? "grayscale" : ""} ${
                isActive ? "border-green-500 border-2" : ""
              } rounded-lg bg-cover bg-no-repeat bg-center`}
            >
              <input
                type="checkbox"
                onClick={() => setSkill(skill.index)}
                disabled={isDisabled}
                className="opacity-0 w-14 h-14 bg-green-200"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
