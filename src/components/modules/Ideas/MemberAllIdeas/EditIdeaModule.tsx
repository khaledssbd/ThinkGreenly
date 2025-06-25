import { FC } from 'react';
import { getAllCategories } from '@/services/Category';
import EditIdeaForm from './EditIdeaForm';
import { DynamicPageProps } from '@/types';
import { getSingleIdeaDetails } from '@/services/Idea';

const EditIdeaModule: FC<DynamicPageProps> = async ({ params }) => {
  const { data: categories } = await getAllCategories();
  const { id } = await params;
  const data = await getSingleIdeaDetails(id);
  return (
    <div>
      <EditIdeaForm categories={categories} idea={data} />
    </div>
  );
};

export default EditIdeaModule;
