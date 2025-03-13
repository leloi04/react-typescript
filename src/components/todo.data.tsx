interface Iprops {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    owner: string;
    
}

const TodoData = (props: Iprops) => {
    const {todos, owner} = props;

    return (
        <div>
            {todos.map((todo) => {
                return (
                    <>
                    <div key={todo.id}>
                        <h2>id: {todo.id}</h2>
                        <span>title: {todo.title}</span>
                        <h3>isComplete: {todo.isComplete}</h3>
                    </div>
                    <br/>
                    </>
                )
            })}
        </div>
    )
}

export default TodoData;