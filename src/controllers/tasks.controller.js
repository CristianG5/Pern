
const getAllTasks = async (req, res)=>{
    res.send("retornado una lista de tareas");
}

const getTask = (req, res)=>{
    res.send("retornado una tarea");
}

const createTask = (req, res)=>{
    const task = req.body

    console.log(task)
    res.send("creando una tarea");
}

const deleteTask =  (req, res)=>{
    res.send("eliminando una tarea");
}

const updateTask = (req, res)=>{
    res.send("actualizando una tarea");
}

module.exports = {
    getAllTasks,
    getTask, 
    createTask,
    deleteTask, 
    updateTask
}
