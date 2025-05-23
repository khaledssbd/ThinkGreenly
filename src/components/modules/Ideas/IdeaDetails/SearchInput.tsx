"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getAllIdeas } from "@/services/Idea";
import { Idea } from "@/types/idea";
import { Button } from "@/components/ui/button";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const query = { searchTerm: searchQuery };
    const searchProperty = async () => {
      const { data: ideas } = await getAllIdeas(undefined, undefined, query);
      setIdeas(ideas);
    };
    searchProperty();
  }, [searchQuery]);

  return (
    <div className="relative px-4 md:px-0 w-[340px] xl:w-sm mx-auto">
      <form
        onSubmit={(e) => e.preventDefault()}
        role="search"
        className="w-full"
      >
        <Input
          type="search"
          placeholder="🔍 Search Ideas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label=" Search house"
          className="rounded-lg p-5 border-2 pl-6 
         border-green-300 focus:border-green-500 
        focus:ring-1 focus:ring-green-200 dark:border-gray-700
        dark:focus:ring-green-600/50 bg-transparent
        text-lg font-medium transition-colors"
        />
      </form>

      {searchQuery && (
        <div className="absolute top-full left-0 right-0 px-4 md:px-0 mt-2 bg-background rounded-xl shadow-lg z-10 max-h-96 overflow-y-auto">
          {ideas?.length > 0 ? (
            <>
              {ideas?.slice(0, 5).map((idea: Idea) => (
                <Link href={`/ideas?searchTerm=${idea.id}`} key={idea.id}>
                  <div className="flex items-center gap-5 p-2 hover:bg-accent transition-colors">
                    <div className="w-32 h-18 flex-shrink-0 relative rounded-lg overflow-hidden">
                      <Image
                        src={idea.images[0]}
                        alt={idea?.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <Card className="flex-1 hover:bg-transparent">
                      <CardHeader className="pb-1">
                        <h3 className="font-semibold line-clamp-1">
                          {idea.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="pt-0 flex items-center gap-5">
                        <div className="bg-green-100 px-2  rounded-full ">
                          <span className="text-sm font-semibold text-green-900">
                            {idea.isPaid ? (
                              <>${idea.price?.toFixed(2)}</>
                            ) : (
                              "Free"
                            )}
                          </span>
                        </div>
                        {/* <div className="flex  items-center gap-2 bg-green-50 px-2 py-[2px] rounded-full">
                          <Leaf className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-600">
                            {idea?.category?.name}
                          </span>
                        </div> */}
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}

              {ideas.length > 5 && (
                <div className="p-2 border-t">
                  <Link
                    href={`/ideas?searchTerm=${encodeURIComponent(
                      searchQuery
                    )}`}
                    className="w-full"
                  >
                    <Button type="submit" variant="outline" className="w-full">
                      See More ({ideas.length - 5}+ results)
                    </Button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="p-2 text-center text-muted-foreground">
              No ideas found for {searchQuery}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
