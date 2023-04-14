const UpdateForm =({updateData, updateTask, changeTask, cancelUpdate  }) => {
    return(
        <>
         {/* update task */}

        < div className='row'>
          <div className='col'>
           <input 
            value={ updateData && updateData.title }
            onChange = {(e) => changeTask(e)}
            className='form-control form-control-lg' />
         </div>

         <div className='col-auto'>
           <button 
            onClick={updateTask}
            className='btn btn-lg btn-dark mr-20'>
             Update
           </button>
           <button 
           onClick={cancelUpdate}
           className='btn btn-lg btn-light'>
            Cancel
           </button>
         </div>
        </div>
        <br />
        </>

    )
}

export default UpdateForm;