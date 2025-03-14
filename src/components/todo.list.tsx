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

    return (
        <div>
            <div>todo list</div>
            <br/>
            <TodoInput
                addNewTodo={addNewTodo}
            />
            <TodoData
                todos={listTodo}
                owner={"Hello World"}
            />
        </div>
    )
}

export default TodoList;