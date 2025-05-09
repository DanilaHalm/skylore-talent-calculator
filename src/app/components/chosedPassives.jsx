"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ChosedPassives = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isDescActive, setIsDescActive] = useState(false);
  const urlSkills = searchParams.get("passives").split("");

  const passives = [
    { name: "Pname0", index: 0, desc: "description0" },
    { name: "Pname1", index: 1, desc: "description1" },
    { name: "Pname2", index: 2, desc: "description2" },
    { name: "Pname3", index: 3, desc: "description3" },
    { name: "Pname4", index: 4, desc: "description4" },
    { name: "Pname5", index: 5, desc: "description5" },
    { name: "Pname6", index: 6, desc: "description6" },
    { name: "Pname7", index: 7, desc: "description7" },
  ];

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
            return <div key={passive.desc}>{passive.desc}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default ChosedPassives;
