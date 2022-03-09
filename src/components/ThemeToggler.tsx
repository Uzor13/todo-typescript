import React, {FC} from 'react';
import {FiMoon, FiSun} from 'react-icons/fi'

interface theme {
    themeToggler: any,
    selectedTheme: any
}

const ThemeToggler: FC<theme> = ({themeToggler, selectedTheme}) => {
    return (
        <button onClick={themeToggler}>
            {selectedTheme === 'light' ? <FiMoon/> : <FiSun/>}
        </button>
    );
};

export default ThemeToggler;
