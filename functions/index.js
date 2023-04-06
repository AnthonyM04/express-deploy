import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addEmployee, deleteEmployee, getAllEmployees, updateEmployee } from "./src/employees.js";

const app = express();
app.use(cors());
app.use(express.json()); // needed for POST and PATCH

// endpoints
app.get('/', (req, res) => res.send('The one API is real!!! 🧑‍💻'))

app.get('/employees', getAllEmployees)
app.post('/employees',addEmployee)
app.patch('/employees/:employeeId', updateEmployee)
app.delete('/employee/:employeeId', deleteEmployee)


export const api = functions.https.onRequest(app);
