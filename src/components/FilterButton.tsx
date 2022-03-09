import React, {FC} from 'react';

interface Button {
    name: string,
    isPressed: any,
    setFilter: Function
}

const FilterButton:FC<Button> = ({name, isPressed, setFilter}) => {
    return (
        <button type="button" className="filter-button" aria-pressed={isPressed} onClick={() => setFilter(name)}>
            {name}
        </button>
    );
};

export default FilterButton;
