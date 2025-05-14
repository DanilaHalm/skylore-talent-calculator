"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const Shards = ({ skillIndex, shardIndex }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setShard = useCallback(
    (e) => {
      const shardId = e.target.dataset.id;
      const urlSkills = searchParams.get("skills").split("-");
      const urlPassives = searchParams.get("passives");
      const activeSkill = urlSkills.find((skill) => skill[0] === `${skillIndex}`);
      const activeSkillIdx = urlSkills.indexOf(activeSkill);
      const newActiveSkill = activeSkill.split("");
      newActiveSkill.splice(shardIndex, 1, shardId);
      urlSkills.splice(activeSkillIdx, 1, newActiveSkill.join(""));
      const url = `${pathname}?skills=${urlSkills.join("-")}&passives=${urlPassives}`;

      router.replace(url,{ scroll: false });
    },
    [searchParams]
  );

  const checkShard = (shardId) => {
    const urlSkills = searchParams.get("skills").split("-");
    const activeSkill = urlSkills.find((skill) => skill[0] === `${skillIndex}`);
    if (activeSkill[shardIndex] === shardId) return true;
    else {
      return false;
    }
  };

  return (
    <div className="flex flex-col justify-around h-[90%] w-7 pl-1 pt-1">
      <input type="radio" data-id={1} checked={checkShard("1")} onChange={(e) => setShard(e)}></input>
      <input type="radio" data-id={2} checked={checkShard("2")} onChange={(e) => setShard(e)}></input>
    </div>
  );
};

export default Shards;
