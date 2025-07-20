import React from 'react';
import './categoryTiles.css';

const CategoryTiles = ({ categories, selected, onSelect, theme }: {
  categories: string[],
  selected: string,
  onSelect: (cat: string) => void,
  theme: 'dark' | 'light'
}) => (
  <div className={`category-tiles ${theme}`}>
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