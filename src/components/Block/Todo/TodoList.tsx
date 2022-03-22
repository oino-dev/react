import styled from 'styled-components';
import { TodoItem } from './TodoItem';
import { ITodo } from '../../../types/data';

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = props => {
  const { items, toggleTodo, removeTodo } = props;

  const TodoListDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
  `;

  return (
    <TodoListDiv>
      {items.map(item => (
        <TodoItem
          key={item.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...item}
        />
      ))}
    </TodoListDiv>
  );
};

export { TodoList };
