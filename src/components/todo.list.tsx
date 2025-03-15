import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";


const TodoList = () => {

    interface ITodo {
        id: number,
        title: string,
        isComplete: boolean
    }

    const [listTodo, setListTodo] = useState<ITodo[]>([])

    const addNewTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo])
    }

    const deleteTodo = (id: number) => {
        let newListTodo = listTodo.filter((item) => item.id !== id);
        setListTodo(newListTodo);
    }

    return (
        <div>
            <div>todo list</div>
            <br/>
            <TodoInput
                addNewTodo={addNewTodo}
            />
            <TodoData
                todos={listTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default TodoList;