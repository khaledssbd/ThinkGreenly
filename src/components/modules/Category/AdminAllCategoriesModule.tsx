import React from 'react'
import CategoriesTable from './CategoriesTable';
import { getAllCategories } from '@/services/Category';


const AdminAllCategoriesModule = async () => {
  const { data:categories } = await getAllCategories();
    
  return (
    <div>
      <CategoriesTable categories={categories} />
    </div>
  );
}

export default AdminAllCategoriesModule
