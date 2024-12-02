import ClassBar from "../components/classbar";

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
    <div className="flex justify-center pt-20">
      <ClassBar class_link={classpage} id={classpage} />
    </div>
  );
};

export default ClassPage;
