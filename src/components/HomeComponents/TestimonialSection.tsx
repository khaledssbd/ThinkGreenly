import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import u1 from "../../assets/u1.avif";
import u2 from "../../assets/u2.png";
import u3 from "../../assets/u3.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ariana Johnson",
      role: "Eco Activist",
      message:
        "This platform helped turn my sustainability idea into action! The support from the community has been incredible.",
      avatar: u1,
    },
    {
      name: "James Carter",
      role: "Renewable Energy Engineer",
      message:
        "The user-friendly tools and exposure made it so easy to share my solar microgrid concept with the world.",
      avatar: u2,
    },
    {
      name: "Priya Desai",
      role: "Environmental Scientist",
      message:
        "I was blown away by the quality of ideas. It’s like a greenhouse for green innovation!",
      avatar: u3,
    },
  ];

  return (
    <section className="py-16 px-4 text-center mt-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        💬 What Our Users Say
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
        Real voices from changemakers who are building a more sustainable future
        with us.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((user, idx) => (
          <Card
            key={idx}
            className="bg-white dark:bg-[#0b1d0f] border border-green-600 dark:border-green-400 rounded-2xl shadow-lg hover:shadow-green-500/20 transition"
          >
            <CardHeader className="flex items-center gap-4">
              <Image
                src={user.avatar}
                alt={user.name}
                width={1200}
                height={1200}
                className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
              />
              <div className="text-left">
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  {user.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                  {user.role}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-left text-gray-700 dark:text-gray-300">
              <p>{user.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
