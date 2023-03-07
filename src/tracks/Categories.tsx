import React from 'react';

export interface ICategories {
  categories: string[];
}

const Categories: React.FC<ICategories> = ({categories}) => {
  return (
    <div className="categories flex gap-1  mt-2">
      {categories.map((category,index) => (
        <div key={index} className="bg-black-lightest px-2 py-1 rounded-full">
          <p className="text-[8px] leading-none">{category}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
