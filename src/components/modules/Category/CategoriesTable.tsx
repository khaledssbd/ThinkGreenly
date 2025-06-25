import React from 'react';
import CategoriesDataTable from './CategoriesDataTable';
import { TCategory } from '@/types';

const CategoriesTable = ({ categories }: { categories: TCategory[] }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Categories ({categories?.length})
      </h1>

      <div className="overflow-x-auto">
        <CategoriesDataTable categories={categories} />
      </div>
    </div>
  );
};

export default CategoriesTable;
