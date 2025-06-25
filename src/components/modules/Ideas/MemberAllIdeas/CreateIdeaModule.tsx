import { getAllCategories } from '@/services/Category';
import CreateIdeaForm from './CreateIdeaForm';

const CreateIdeaModule = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div>
      <CreateIdeaForm categories={categories} />
    </div>
  );
};

export default CreateIdeaModule;
