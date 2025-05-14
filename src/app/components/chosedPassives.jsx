"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ChosedPassives = ({passives}) => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isDescActive, setIsDescActive] = useState(false);
  const urlSkills = searchParams.get("passives").split("");

  const chosed = passives.filter((skill) => urlSkills.includes(`${skill.index}`));

  return (
    <div className="flex flex-col  w-full max-w-lg">
      <div className="h-[12vh] bg-green-500 flex flex-row justify-around items-center">
        {chosed.map((passive) => {
          return (
            <div
              key={passive.name}
              className="h-[8vh] aspect-square bg-purple-500 rounded-full"
              onClick={() => setIsDescActive(!isDescActive)}
            ></div>
          );
        })}
      </div>
      {isDescActive && (
        <div className="flex flex-col">
          {chosed.map((passive) => {
            return <div key={passive.name+passive.desc}>{passive.desc}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default ChosedPassives;
