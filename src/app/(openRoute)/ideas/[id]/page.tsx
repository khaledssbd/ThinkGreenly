import IdeaDetail from "@/components/modules/Ideas/IdeaDetails/IdeaDetail";
import { getSingleIdeaDetails } from "@/services/Idea";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await getSingleIdeaDetails(id)
  return <div>
    <IdeaDetail idea={data}/>
  </div>;
};

export default BlogDetailsPage;
