const express = require("express");//requerimos exp
const morgan = require("morgan")

const taskRouters = require("./routes/tasks.routes");

const app = express(); //ejecuto exp , lo almaceno en var
app.use(morgan("dev"));
app.use(taskRouters);

app.listen(4000)
console.log("Server on port 4000")