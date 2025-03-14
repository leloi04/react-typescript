interface Iprops {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    owner: string;
    
}

const TodoData = (props: Iprops) => {
    const {todos} = props;

    return (
        <div>
            {todos.map((todo) => {
                return (
                    <>
                    <div key={todo.id}>
                        <br />
                        <span>{todo.id} - {todo.title}</span>
                    </div>
                    <br/>
                    </>
                )
            })}
        </div>
    )
}

export default TodoData;