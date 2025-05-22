"use client";
import { getAllIdeas } from "@/services/Idea";
import { Idea } from "@/types/idea";
import { Leaf } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const latestProperty = async () => {
      const { data: ideas } = await getAllIdeas(undefined, undefined);
      setIdeas(ideas);
    };
    latestProperty();
  }, []);

  return (
    <div className="text-white w-[80%] md:w-[50%] mx-auto mt-3 font-medium text-sm">
      {ideas.length > 0 ? (
        <Marquee speed={30} pauseOnHover={true} autoFill={true}>
          {ideas?.slice(0,2).map((idea: Idea) => (
            <Link
              href={`/ideas?searchTerm=${idea.id}`}
              key={idea.id}
              className="mx-5 flex items-center gap-2"
            >
            <Leaf className="w-4 h-4 text-green-600" />  <span className=" text-gray-500 dark:text-white  mx-1">{idea.title}</span>
            </Link>
          ))}
        </Marquee>
      ) : (
        ""
      )}
    </div>
  );
};

export default Marque;
