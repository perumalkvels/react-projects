import {useState} from 'react';
import React from 'react';
function Container() {

    const [todo, setTodo] = useState('');
    const [todolist, setTodoList] = useState([]);
    const [editStatus, setEditStatus] = useState(false);
    const [updateTodolist, setUpdateTodoList] = useState([]);

    // For Add TodoList

    let addTodoList = () => {
        setTodoList(() => [...todolist, { id:todolist.length, item: todo, status: false }]);
        setTodo('');
    }

    // For Remove TodoList

    let removeTodoList = (key) => {
        let newTodo = todolist.filter(val => val.id !== key);
        let filterTodo = newTodo.map((val,index) => {
            return ({
                id : index,
                item : val.item,
                status : val.status,
            })
        }) 
        setTodoList(filterTodo);
    }

    // For Update Temp State with a Updated value

    let updateTask = (e) => {

        let updateTodo = {
            id: updateTodolist.id,
            item: e.target.value,
            status: updateTodolist.status,
        }
        setUpdateTodoList(updateTodo);
    }

    // For Change the Update value to Todo List

    let changeUpdatedList = () => {

        let filterTodoList = todolist.filter(val => val.id !== updateTodolist.id);
        setTodoList([updateTodolist, ...filterTodoList]);
        setUpdateTodoList('');
        setEditStatus(false);
    }

    
    let checkJobStatus = (id) => {

        let newTodo = todolist.map(val => {

            if (val.id == id) {
                if (val.status == false) {
                    val.status = true;
                }
                else {
                    val.status = false;
                }
            };
            return val;
        })
        setTodoList(newTodo);
    }


    return (
        <>
            {editStatus == true ? (<>
                <div className="todo-input mx-auto mt-5 mb-5 w-75 d-flex justify-content-center row align-center">
                    <input className="form-control text-center col-7 pt-4 pb-4 mr-3" value={updateTodolist.item}
                        onChange={(e) => updateTask(e)} />
                    <button type="button" className="btn btn-warning col-1" onClick={changeUpdatedList}>Update</button>
                    <button type="button " className="btn btn-danger col-1 ml-3" onClick={(e) => {
                        setEditStatus(editStatus ? false : true);
                        setUpdateTodoList('');
                    }}>Cancel</button>
                </div>
            </>) :

                (
                    <div className="todo-input mx-auto mt-5 mb-5 w-75 d-flex justify-content-center row align-center">
                        <input className="form-control text-center col-8 pt-4 pb-4 mr-3" value={todo}
                        onChange={(e) => setTodo(e.target.value)} placeholder="Enter Your ToDo list" />
                        <button type="button" className="btn btn-success" onClick={addTodoList}>Add ToDo</button>
                    </div>
                )
            }


            {todolist.sort((a,b) => a.id >b.id ? 1 : -1)
            .map((val,index) => {
                return (
                    <React.Fragment key={val.id}>
                        <div className="bg-success text-white mx-auto mt-1 w-75 d-flex rounded p-3 row font-weight-bold">
                            <span className="ml-2 align-item-left text-center col-1 p-0 m-0 text-dark">Task - {index+1} </span>
                            <div className="col-7">
                                <div className={val.status == true ? 'done' : 'hai'} >
                                    <span className="display-5  align-item-left text-white  text-center"> {val.item} </span>
                                </div>
                            </div>

                            <span className="p-0 mr-3 btn btn-warning  border-dark align-item-right text-dark col-1"
                                onClick={() => checkJobStatus(val.id)}>Done</span>

                            {val.status == false ?
                                (<>
                                    <span className="p-0 mr-3 btn btn-primary border-dark align-item-right text-white col-1"
                                        onClick={(e) => {
                                            {
                                                setUpdateTodoList({
                                                    id: val.id,
                                                    item: val.item,
                                                    status: val.status,
                                                })
                                            };
                                            setEditStatus(editStatus ? false : true);
                                        }}>Edit</span>
                                </>) : null
                            }
                            {/* In React You May call Many Functions In One Event Handler Functions */}

                            <span className="p-0 mr-3 btn btn-danger border-dark align-item-right text-white col-1 " onClick={() => removeTodoList(val.id)}>Remove</span>
                        </div>
                    </React.Fragment>)
            })}
        </>
    )
}
export default Container;