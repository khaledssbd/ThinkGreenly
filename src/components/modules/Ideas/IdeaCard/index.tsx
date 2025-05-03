'use client';

import { Button } from '@/components/ui/button';
import IdeaCardCarousel from './IdeaCardCarousel';
import { Idea } from '@/types/idea';
import Link from 'next/link';
// import { Link } from 'next-view-transitions';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import IdeaActionSkeleton from './IdeaActionSkeleton';
import { useUser } from '@/context/UserContext';

const IdeaCard = ({ idea }: { idea: Idea }) => {
  const { user, isLoading } = useUser();

  return (
    <Card className="p-3">
      {/* CardHeader */}
      <CardHeader className="relative p-0 h-48">
        {/* Carousel */}
        <IdeaCardCarousel idea={idea} />

        {idea?.isPaid && (
          <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full z-10">
            Paid
          </div>
        )}
      </CardHeader>
      {/* CardContent */}
      <CardContent className="p-0 mt-2">
        {/* <CardContent className="p-0 mt-20"> */}
        <CardTitle
          title={idea?.title}
          className="font-semibold cursor-pointer text-sm"
        >
          <h1 className="text-lg font-semibold text-gray-800 text-center my-4">
            Problem: {idea.problemStatement}
          </h1>
        </CardTitle>

        <div className="my-3 py-3 border-y border-gray-300">
          <p>Description: {idea?.description?.slice(0, 20) + '...'}</p>

          <div className="flex items-center justify-between my-2">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">$ {idea?.price}</span>
            </p>

            <div className="flex items-center justify-center gap-1">
              Bedrooms:
              <span className="text-sm font-medium text-gray-700">
                {idea?.category?.name}
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      {/* CardFooter */}
      <CardFooter className="block p-0">
        {isLoading ? (
          <IdeaActionSkeleton />
        ) : (
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-around">
            {/* View Details */}
            <Link href={`/ideas/${idea?.id}`}>
              <Button
                size="sm"
                variant="outline"
                // className="text-black hover:text-white bg-green-500 hover:bg-black"
              >
                View Details
              </Button>
            </Link>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;
