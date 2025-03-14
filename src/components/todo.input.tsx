import { useState } from "react";

interface ITodo {
    id: number,
    title: string,
    isComplete: boolean
}

interface Iprops {
    name?: string; 
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: Iprops) => {
    const [todo, setTodo] = useState<string>("");
    const {addNewTodo} = props;

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const randomId = (min: number, max: number) => {
        return Math.floor(Math.random() *(max - min + 1)) + min;
    }
    
    const handleClick = () => {
        if(!todo){
            alert("emty todo");
            return;
        }
        
        addNewTodo({
            id: randomId(0,100000000),
            title: todo,
            isComplete: false
        })

    }
    return (
        <div>
            <input type="text" 
            value={todo}
            onChange={handleTextChange} 
            />
            <button onClick={handleClick}>Add todo</button>
        </div>
    )
}

export default TodoInput;