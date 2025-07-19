import React from 'react';
import './categoryTiles.css';

const CategoryTiles = ({ categories, selected, onSelect }: {
  categories: string[],
  selected: string,
  onSelect: (cat: string) => void
}) => (
  <div className="category-tiles">
    {categories.map(cat => (
      <div
        key={cat}
        className={`tile${selected === cat ? ' selected' : ''}`}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </div>
    ))}
  </div>
);

export default CategoryTiles;