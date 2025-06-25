import EditIdeaForm from '@/components/modules/Ideas/MemberAllIdeas/EditIdeaForm';
import { getAllCategories } from '@/services/Category';
import { getSingleIdeaDetails } from '@/services/Idea';

const EditIdeaPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: idea } = await getSingleIdeaDetails(id);

  const { data: categories } = await getAllCategories();

  return (
    <div>
      <EditIdeaForm idea={idea} categories={categories} />
    </div>
  );
};

export default EditIdeaPage;
