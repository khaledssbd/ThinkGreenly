"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import aboutbanner from '@/assets/about-usbanner.jpeg'

export default function AboutUs() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-24">
      {/* Hero Section */}
      <div className="relative bg-green-50 rounded-2xl overflow-hidden mb-20">
        <Image
          src={aboutbanner}
          alt="Nature Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative z-10 text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-green-800">
            About Sustainability Idea Hub
          </h1>
          <p className="text-muted-foreground text-lg">
            Empowering Green Ideas for a Better Tomorrow
          </p>
        </div>
      </div>

      {/* Mission, Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-muted-foreground">
            To foster an online community where sustainable ideas are nurtured,
            shared, and celebrated to create a lasting impact on the
            environment.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-muted-foreground">
            To become the go-to platform for environmental changemakers around
            the globe.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-8 mb-20">
        {[
          { label: "Ideas Submitted", value: "1.2K+" },
          { label: "Active Members", value: "900+" },
          { label: "Ideas Funded", value: "120+" },
        ].map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-green-700">{item.value}</h3>
            <p className="text-muted-foreground mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* How We Work */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How We Work
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Submit Ideas",
              desc: "Members submit innovative and sustainable ideas.",
            },
            {
              title: "Community Voting",
              desc: "Other members can upvote or downvote ideas.",
            },
            {
              title: "Admin Feedback",
              desc: "Admins review and give feedback or approve ideas.",
            },
            {
              title: "Paid Access",
              desc: "Exclusive ideas require members to purchase access.",
            },
          ].map((step, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-24">
        <h2 className="text-2xl font-semibold mb-4">
          Want to make a difference?
        </h2>
        <p className="mb-6 text-muted-foreground">
          Join our community and share your sustainable ideas today.
        </p>
        <Link href="/ideas/create">
          <Button size="lg">Share Your Idea</Button>
        </Link>
      </div>
    </section>
  );
}