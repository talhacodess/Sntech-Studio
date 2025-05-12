import React, { useEffect, useState } from 'react';
import { items } from './items';
import '../../styles/PortfolioFilters.css';

function PortfolioFilters() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilterBtnClick = (category) => {
    setSelectedFilter(category);
  };

  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.category === selectedFilter);
      setFilteredItems(filtered);
    }
  }, [selectedFilter]);

  const filters = ['All', 'Technology', 'Help Desk', 'Analysis', 'Marketing'];

  return (
    <div className="portfolio">
      <div className="filters">
        {filters.map((category, index) => (
          <button
            key={`filters-${index}`}
            onClick={() => handleFilterBtnClick(category)}
            className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items">
        {filteredItems.map((item, index) => (
          <div key={`item-${index}`} className="card">
            <img src={item.url} alt={item.name} />
            <div className="card-content">
              <h2>{item.name}</h2>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioFilters;
