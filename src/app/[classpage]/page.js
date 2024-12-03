import ClassBar from "../components/classbar";
import LevelBar from "../components/levelbar";
import { Suspense } from "react"

const SearchBarFallback = () => {
    return (<>placeholder</>)
}

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

const ClassPage = async ({ params }) => {
  const classpage = (await params).classpage;
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <ClassBar class_link={classpage} id={classpage} />
      <Suspense fallback={<SearchBarFallback />}>
        <LevelBar />
      </Suspense>
    </div>
  );
};

export default ClassPage;
