import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './assets/style/App.scss';
import { TodoList } from './components/Block/Todo/TodoList';
import { ITodo } from './types/data';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        { id: Date.now(), index: todos.length, title: value, complete: false },
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;

        return { ...todo, complete: !todo.complete };
      })
    );
  };

  const Wrapper = styled.div`
    display: flex;
    max-width: 800px;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
  `;

  const HeaderInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Input = styled.input`
    height: 40px;
    width: 620px;
    margin: 0 10px;
    padding: 0 20px;
    border-radius: 99em;
    border: none;
    font-size: 20px;

    &:focus {
      border: none;
      outline: none;
    }
  `;

  const Button = styled.button`
    display: block;
    width: auto;
    height: auto;
    padding: 7px 15px;
    border: 2px solid #ccb7ae;
    border-radius: 99em;
    margin-left: 45px;
    font-size: 16px;
    background-color: #ccb7ae;
    color: #565254;
    transition: all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgba(204, 183, 174, 0.2);
      color: #ccb7ae;
      transition: all ease-in-out 0.3s;
    }
  `;

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  return (
    <Wrapper>
      <HeaderInput>
        <Input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <Button onClick={addTodo}>Добавить</Button>
      </HeaderInput>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </Wrapper>
  );
};

export default App;
