
onClick={checkEditStatus(val.id,val.item,val.status)}
{ editStatus ? ( <>
                <div class="todo-input mx-auto mt-5 mb-5 w-75 d-flex justify-content-center row align-center">
                <input class="form-control text-center col-7 pt-4 pb-4 mr-3" />
                <button type="button" class="btn btn-warning col-1" >Update</button>
                <button type="button " class="btn btn-danger col-1 ml-3">Cancel</button>
                </div>
                </> ) : ( 
                    <div class="todo-input mx-auto mt-5 mb-5 w-75 d-flex justify-content-center row align-center">
                    <input class="form-control text-center col-8 pt-4 pb-4 mr-3" onChange={(e) => setTodo(e.target.value)} placeholder="Enter Your ToDo list" />
                    <button type="button col-4 " class="btn btn-success" onClick={addTodoList}>Add ToDo</button>
                    </div>
                    )
                }