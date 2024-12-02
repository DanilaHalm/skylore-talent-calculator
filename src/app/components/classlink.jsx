import Link from "next/link";

const ClassLink = ({ class_link }) => {
  return (
    <div className={`w-14 h-14 bg-gray-200 bg-cover rounded-full`}>
      <Link className="w-14 h-14 block rounded-full" href={`/${class_link.toLowerCase()}`}>
        {class_link}
      </Link>
    </div>
  );
};

export default ClassLink;
