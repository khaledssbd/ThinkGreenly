import { FC } from "react";
import { DynamicPageProps } from "@/types";
import { getAllCategories, getIdea } from "./_action";
import EditIdeaForm from "./_components/EditIdeaForm";

const EditIdeaPage: FC<DynamicPageProps> = async ({params}) => {
  const { data: categories } = await getAllCategories();
  const { id } = await params;
  const data = await getIdea(id);
  return (
    <div>
      <EditIdeaForm categories={categories} data={data.data} />
    </div>
  );
};

export default EditIdeaPage;