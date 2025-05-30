import ClassLink from "./classlink";

const ClassBar = () => {
  const classes = [
    { name: "Mage" },
    { name: "Hunter" },
    { name: "Shadow" },
    { name: "Alchemist" },
    { name: "Warrior" },
  ];
  return (
    <nav className="flex justify-around w-full max-w-lg border rounded-md border-[#896339] p-1">
      {classes.map((class_) => {
        return <ClassLink class_link={class_.name} key={class_.name} />;
      })}
    </nav>
  );
};

export default ClassBar;
