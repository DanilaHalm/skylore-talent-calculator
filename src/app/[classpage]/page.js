import ClassBar from "../components/classbar";
import SkillBar from "../components/skillbar";
import { Suspense } from "react";

const SearchBarFallback = () => {
  return <>Loading...</>;
};

export async function generateStaticParams() {
  const classes = [
    { name: "Mage" },
    { name: "Hunter" },
    { name: "Shadow" },
    { name: "Alchemist" },
    { name: "Warrior" },
  ];

  return classes.map((class_) => ({
    classpage: class_.name.toLowerCase(),
  }));
}

const ClassPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 bgPage bg-no-repeat bg-center bg-cover">
      <ClassBar />
      <Suspense fallback={<SearchBarFallback />}>
        <SkillBar />
      </Suspense>
    </div>
  );
};

export default ClassPage;
