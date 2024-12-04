"use client";
import { useCallback, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const LevelBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [curLevel,setCurLevel] = useState(searchParams.get("lvl"))
  
  const levels = ["20","23","26","29","32","35"]
  const maxShards = {"20":"24","23":"26","26":"29","29":"31","32":"34","35":"36"},
  
  const createQueryString = useCallback(
    (lvl) => {
      const params = new URLSearchParams(searchParams);
      params.set("lvl", lvl);
      params.set("max", maxShards[lvl]);
      
      return params.toString();
    },
    [searchParams]
  );

  const createString = (lvl) => {
    return pathname + "?" + createQueryString(lvl);
  };

  const handleChange = (event) => {
    const lvl = event.target.value
    setCurLevel(lvl)
    router.replace(createString(lvl))
  };

  return (
    <select value={curLevel} onChange={(ev) => handleChange(ev)}>
      {levels.map((level) => {
        return (
          <option key={`option${level}`} value={level}>
            {level}
          </option>
        );
      })}
    </select>
  );
};

export default LevelBar;
