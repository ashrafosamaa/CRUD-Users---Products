import  express  from "express";
import userRouter from "./src/Modules/User/user.routes.js"
import productRouter from "./src/Modules/Product/product.routes.js"
import db_connection from "./DB/connection.js";


const app = express();

app.use(express.json());
app.use(userRouter)
app.use(productRouter)

db_connection()

app.listen(3000, ()=>{
    console.log("running on port 3000");
})
