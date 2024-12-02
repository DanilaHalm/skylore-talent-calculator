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
    <nav className="flex justify-around w-96">
      {classes.map((class_) => {
        return <ClassLink class_link={class_.name} id={class_.name} />;
      })}
    </nav>
  );
};

export default ClassBar;
