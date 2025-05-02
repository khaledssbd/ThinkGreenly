"use client";

import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "10 Easy Ways to Reduce Plastic at Home",
    excerpt:
      "Discover simple yet powerful ways to cut down your plastic usage and contribute to a cleaner environment.",
    author: "Ayesha Khan",
    date: "April 24, 2025",
    tag: "Green Tips",
    image: image1,
  },
  {
    id: 2,
    title: "How Solar Energy is Changing Rural Lives",
    excerpt:
      "A deep dive into how renewable energy is transforming remote communities sustainably.",
    author: "Rahim Uddin",
    date: "April 18, 2025",
    tag: "Innovation",
    image: image2,
  },
  {
    id: 3,
    title: "Zero Waste Lifestyle: A Beginner’s Guide",
    excerpt:
      "Interested in sustainability? Start with this easy guide to adopting a zero waste lifestyle today.",
    author: "Tasniya Islam",
    date: "April 10, 2025",
    tag: "Lifestyle",
    image: image3,
  },
];

export default function BlogsPage() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 px-4 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-green-700">
          Explore Our Blog
        </h1>
        <p className="text-muted-foreground text-lg">
          Stories, tips, and news that spark sustainable change.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <Input
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <Card key={blog.id} className="hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-5">
              <Badge className="mb-2">{blog.tag}</Badge>
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {blog.excerpt}
              </p>
              <div className="text-xs text-muted-foreground mb-2">
                By {blog.author} • {blog.date}
              </div>
              <Link href={`/blogs/${blog.id}`}>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      {/* Newsletter CTA */}
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
        <p className="mb-4 text-muted-foreground">
          Join our newsletter for the latest sustainability tips and stories.
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  );
}
