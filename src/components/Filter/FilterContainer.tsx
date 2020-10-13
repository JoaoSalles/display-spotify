import React from "react";
import Filter from "./Filter";
import useFilter from "./useFilter";

interface Props {}

function FilterContainer(props: Props) {
  const { filterFields, filterData, handleFieldChange, loading } = useFilter();

  return ( 
    <Filter 
      filterFields={filterFields}
      filterData={filterData}
      handleFieldChange={handleFieldChange}
      loading={loading}
    />
  );
}

export default FilterContainer;
