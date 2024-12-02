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
  return <div>{classpage}</div>;
};

export default ClassPage;
