import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/heading/heading';
import { todoSelectors } from '../../state/selectors/todoSelectors/todoSelectors';
import { createToDo } from "../../state/actions/todoActions";

const Todo = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const todo = useSelector(todoSelectors) || [];

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        let todo = {
            name: name
        }
        dispatch(createToDo(todo));
        setName('');
    }




    return (
        <div>
            <Heading title="Todo Redux Component" type="h1" />
            <div>
                <h3>Add Task </h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} className="form-control" value={name} /><br />
                    <input type="submit" value="ADD" />
                </form>
                {<ul className="list-group">
                    {todo.map((data, i) => (
                        <li key={i} className="list-group-item clearfix">
                            {data.name}
                        </li>
                    ))}
                </ul>}
            </div>
            <hr />
        </div>
    )
}

export default Todo;