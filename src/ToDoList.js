const ToDoList = ({ itemval, onSelect, id }) => {


    return (
        <div className="todo_style">
            <i className="fas fa-times"
                onClick={() => {
                    onSelect(id)
                }}></i>
            <li key={itemval}>{itemval}</li>
        </div>
    )
}

export default ToDoList
