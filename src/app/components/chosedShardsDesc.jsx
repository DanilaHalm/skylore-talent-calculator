"use client";

import { useSearchParams } from "next/navigation";

const ChosedShardsDesc = ({ shards, skillIndex }) => {
  const searchParams = useSearchParams();

  const urlSkills = searchParams.get("skills").split("-");

  const selectedSkill = urlSkills.find((skill) => skill[0] === `${skillIndex}`);

  const selectedShards = [
    shards.tier1[selectedSkill[1]],
    shards.tier2[selectedSkill[2]],
    shards.tier3[selectedSkill[3]],
  ];

  return (
    <div className="h-full w-1/2 overflow-y-scroll bg-no-repeat bg-center bg-cover chosedSkillBg p-1">
      {selectedShards.map((shard) => {
        if (!shard) return;
        return (
          <div key={shard.desc}>
            <h5>{shard.name}</h5>
            <p>{shard.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ChosedShardsDesc;
