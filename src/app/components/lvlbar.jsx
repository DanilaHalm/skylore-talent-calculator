"use client";
import { useCallback, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const LevelBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [curLevel,setCurLevel] = useState(searchParams.get("lvl") || 20)
  
  const levels = ["20","23","26","29","32","35"]
  
  const createQueryString = useCallback(
    (values) => {
      const params = new URLSearchParams(searchParams);
      params.set("lvl", values.lvl);
      params.set("shards", values.shards);

      return params.toString();
    },
    [searchParams]
  );

  const createString = (event) => {
    const value = JSON.parse(event.target.value);
    return pathname + "?" + createQueryString(value);
  };

  const handleChange = (event) => {
    //router.push(createString(event));
    setCurLevel(event.target.value)
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
