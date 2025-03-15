interface Iprops {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    deleteTodo: (v: number) => void;
    
}

const TodoData = (props: Iprops) => {
    const {todos, deleteTodo} = props;

    return (
        <div>
            {todos.map((item) => {
                return (
                    <div key={item.id}>
                        <br />
                        <span>{item.id} - {item.title}</span>
                        <button 
                        style={{marginLeft: "30px"}}
                        onClick={() => deleteTodo(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;