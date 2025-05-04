"use client";

import { Button } from "@/components/ui/button";
import IdeaCardCarousel from "./IdeaCardCarousel";
import { Idea } from "@/types/idea";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IdeaActionSkeleton from "./IdeaActionSkeleton";
import { useUser } from "@/context/UserContext";
import { MessageCircle, Leaf, ArrowRight, Heart, HeartOff } from "lucide-react";
import { useRouter } from "next/navigation";

const IdeaCard = ({ idea }: { idea: Idea }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  return (
    <Card className="bg-white dark:bg-transparent rounded-3xl border-2 border-green-100 shadow-lg hover:shadow-xl transition-shadow relative">
      <div className="absolute -top-3 z-10 -right-1">
        <Leaf className="w-10 h-10 text-green-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 ">
        <div className="lg:h-full relative aspect-video lg:aspect-auto">
          <CardHeader className="relative h-full w-full p-0 overflow-hidden rounded-xl  ">
            <IdeaCardCarousel idea={idea} />

            <div className="absolute top-2 left-2 flex items-center gap-1.5  backdrop-blur-sm text-green-700 px-3 py-1 rounded-full z-10 border border-green-200 bg-green-200/50 transition-colors">
              <MessageCircle className="w-4 h-4 text-green-900" />
              <span className="text-sm font-medium">
                {idea.comments?.length || 0}
              </span>
            </div>

            {/* Vote Badge */}
            <div className="absolute top-2 left-36 flex items-center gap-1.5  backdrop-blur-sm text-green-700 px-3 py-1 rounded-full z-10 border border-green-200 bg-green-200/50 transition-colors">
              <Heart className="w-4 h-4 text-green-900" />
              <span className="text-sm font-medium">
                {idea.votes?.filter((vote) => vote.type === "UP").length || 0}
              </span>
            </div>
            <div className="absolute top-2 left-20 flex items-center gap-1.5  backdrop-blur-sm text-green-700 px-3 py-1 rounded-full z-10 border border-green-200 bg-green-200/50 transition-colors">
              <HeartOff className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium">
                {idea.votes?.filter((vote) => vote.type === "UP").length || 0}
              </span>
            </div>

            {/* {idea?.isPaid && (
              <div className="absolute bottom-4 right-2 flex items-center gap-1 bg-green-300 text-white px-1 py-1 rounded-full z-10">
                <Zap className="w-3 h-3" />
                <small className="text-sm ">Premium Solution</small>
              </div>
            )} */}
          </CardHeader>
        </div>

        <div className="flex flex-col justify-between lg:h-full lg:pl-4">
          <CardContent className="p-0 space-y-4">
            <CardTitle className="space-y-2">
              <h1 className="text-xl font-bold text-green-900 dark:text-green-100 leading-tight">
                {idea.title}
              </h1>
            </CardTitle>

            <div className="relative">
              <p className="text-gray-600 text-sm dark:text-green-100 line-clamp-3">
                {idea.description}
              </p>
            </div>
          </CardContent>

          <CardFooter className="p-0 mt-4">
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">
                    {idea.category?.name}
                  </span>
                </div>
                <div className="bg-green-100 px-4 py-1 rounded-full">
                  <span className="text-lg font-medium text-green-900">
                    {idea.isPaid ? <>${idea.price?.toFixed(2)}</> : "Free"}
                  </span>
                </div>
              </div>

              {isLoading ? (
                <IdeaActionSkeleton />
              ) : (
                <Link
                  href={
                    idea.isPaid
                      ? !user
                        ? `/login?returnUrl=${encodeURIComponent(
                            `/checkout/${idea.id}`
                          )}`
                        : idea.payments?.some(
                            (p) =>
                              p.ideaId === idea.id &&
                              p.userEmail?.toLowerCase() ===
                                user.email?.toLowerCase()
                          )
                        ? `/ideas/${idea.id}`
                        : `/checkout/${idea.id}`
                      : `/ideas/${idea.id}`
                  }
                  className="w-full"
                  onClick={(e) => {
                    if (idea.isPaid && user) {
                      const hasValidPayment = idea.payments?.some(
                        (p) =>
                          p.ideaId === idea.id &&
                          p.userEmail?.toLowerCase() ===
                            user.email?.toLowerCase()
                      );

                      if (!hasValidPayment) {
                        e.preventDefault();
                        router.push(`/checkout/${idea.id}`);
                      }
                    }
                  }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-2"
                  >
                    {idea.isPaid
                      ? idea.payments?.some(
                          (p) =>
                            p.ideaId === idea.id &&
                            p.userEmail?.toLowerCase() ===
                              user?.email?.toLowerCase()
                        )
                        ? "View Premium Solution"
                        : "View Premium Solution"
                      : "View Detailed Solution"}
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </Link>
              )}
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default IdeaCard;
