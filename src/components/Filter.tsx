import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  padding: 5px;
  font-size: 16px;
`;

interface FilterProps {
  setFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="activity-filter">Filter:</FilterLabel>
      <FilterSelect id="activity-filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="PR Open">PR Open</option>
        <option value="PR Merged">PR Merged</option>
        <option value="Commits">Commits</option>
        <option value="PR Reviewed">PR Reviewed</option>
        <option value="PR Comments">PR Comments</option>
        <option value="Incident Alerts">Incident Alerts</option>
        <option value="Incidents Resolved">Incidents Resolved</option>
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;
