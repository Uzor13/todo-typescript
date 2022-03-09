import React, {useState} from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./GlobalStyles";
import {lightTheme, darkTheme} from "./themes";
import ThemeToggler from "./components/ThemeToggler";
import useDarkTheme from "./hooks/useDarkTheme";

import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

    const [inputText, setInputText] = useState<string>("");
    const [todos, setTodos] = useLocalStorage<any>("todos", []);
    const [filter, setFilter] = useState<string>('all');
    const [theme, themeToggler] = useDarkTheme();
    const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

    const FILTER_MAPS = {
        all: () => true,
        active: (todo: { completed: any; }) => !todo.completed,
        completed: (todo: { completed: any; }) => todo.completed
    }

    const FILTER_NAMES = Object.keys(FILTER_MAPS)

    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles/>
            <div className="App">
                <div className="header">
                    <div className="header-content">
                        <h1>TODO</h1>
                        <ThemeToggler themeToggler={themeToggler} selectedTheme={theme}/>
                    </div>

                </div>

                <div className="todos">
                    <Form setText={setInputText}
                          setTodos={setTodos}
                          todos={todos}
                          inputText={inputText}/>

                    <TodoList todos={todos}
                              setTodos={setTodos}
                              filterMap={FILTER_MAPS}
                              filter={filter}
                              filterNames={FILTER_NAMES}
                              setFilter={setFilter}
                    />
                </div>

            </div>
        </ThemeProvider>
    );
}

export default App;
