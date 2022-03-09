// @ts-ignore

import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.color};
    transition: all .3s linear;
  }

  .header {
    background: url(${({theme}) => theme.backgroundImage}) center center no-repeat;
    background-size: cover;
    height: 300px;
    position: relative;
    margin-top: -17px;
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
  }

  .todo-input {
    background: ${({theme}) => theme.todoBackground};
    color: ${({theme}) => theme.todoColor};
  }

  .todo-input__button {
    background: ${({theme}) => theme.buttonColor};
  }

  .todo-input::placeholder {
    color: ${({theme}) => theme.todoPlaceholderColor};
  }

  .todo {
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
  }
  
  .todo:hover {
    color: ${({theme}) => theme.hover};
  }

  .todo-list {
    background: ${({theme}) => theme.todoBackground};
    color: ${({theme}) => theme.todoColor};
  }

  .todo-text button svg {
    color: ${({theme}) => theme.borderColor};
  }
  
  .filter {
    color: ${({theme}) => theme.todoPlaceholderColor};
    transition: .3s ease;
  }
  
  .filter p:hover {
    color: ${({theme}) => theme.hover};
  }

  .filter-button, .delete {
    color: ${({theme}) => theme.todoPlaceholderColor};
  }

  .filter-button:hover {
    color: ${({theme}) => theme.hover};
  }
  
`