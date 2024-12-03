
import Link from "next/link";

const ClassLink = async ({ class_link }) => {
  //const img = await import(`/public/${class_link}.png`)
  return (
    <div className={`w-14 h-14 bg-[url('/public/${class_link}.png')] border-2 bg-cover rounded-full`}>
      <Link className="w-14 h-14 block rounded-full" href={`/${class_link.toLowerCase()}`}>
        {class_link}
      </Link>
    </div>
  );
};

export default ClassLink;
