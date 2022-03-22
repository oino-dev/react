import styled from 'styled-components';
import { ITodo } from '../../../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItemDiv = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 18px;
  margin-top: 10px;
  padding: 5px 15px;
  width: auto;
  background-color: #fff;
  border-radius: 99em;
  transition: ease-in-out all 0.5s;
`;

const TodoItemIndex = styled.span`
  font-size: 14px;
  display: block;
  line-height: 20px;
`;

const TodoItemCheckbox = styled.input`
  height: 25px;
  width: 20px;
  margin: 0 10px;
  line-height: 20px;
`;

const TodoItemTitle = styled.span`
  font-size: 18px;
  line-height: 20px;
  flex-grow: 1;
`;

const TodoItemButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: navajowhite;
  border-radius: 100%;
  transition: ease-in-out all 0.4s;
  position: relative;

  & div {
    position: absolute;
    left: 8px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 2px;
      background: red;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }

  &:hover {
    background-color: red;
  }
`;

const TodoItem: React.FC<ITodoItem> = props => {
  const { id, index, title, complete, removeTodo, toggleTodo } = props;
  return (
    <TodoItemDiv>
      <TodoItemIndex>{index}. </TodoItemIndex>
      <TodoItemCheckbox
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />{' '}
      <TodoItemTitle>{title}</TodoItemTitle>
      <TodoItemButton onClick={() => removeTodo(id)}>
        <div />
      </TodoItemButton>
    </TodoItemDiv>
  );
};

export { TodoItem };

// onClick={() => removeTodo(id)}
