import React, {ChangeEvent, FC, useState, SyntheticEvent} from 'react';
import {v4 as uuid} from "uuid";

interface FormTypes {
    setText: Function,
    setTodos: Function,
    todos: Array<any>,
    inputText: string,
}

const Form: FC<FormTypes> = ({setText, setTodos, todos, inputText}) => {

    const [response, setResponse] = useState<string>("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault()

        if (!inputText) {
            setResponse("You did not type anything")
            setTimeout(() => {
                setResponse("")
            }, 5000)

            return
        }

        setTodos([
            ...todos,
            {text: inputText, completed: false, id: uuid()},
        ])
        setText("")
    }

    return (
        <>
            <form>
                <input type="text" value={inputText} onChange={onChange} className="todo-input"
                       placeholder="Create a new Todo"/>
                <button type="submit" className="todo-input__button" onClick={submitHandler}>Add Todo</button>
            </form>
            <p className="response">{response}</p>

        </>

    );
};

export default Form;
