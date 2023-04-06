import { FieldValue } from "firebase-admin/firestore";
import { db } from "./dbConnect.js";
// insert timeStamp(1/2)
const coll = db.collection('employees');

/* -----===<< CREATE >>===----- */
export async function addEmployee(req, res) {
  const newEmployee = req.body;
  newEmployee.createdA = FieldValue .serverTimestamp()
  // insert timeStampe (2/2)
  await coll.add(newEmployee);
  res.status(201).send({ message: "Employee successfully added." });
}

/* -----===<< GET ALL >>===----- */
export async function getAllEmployees(req, res) {
  const collection = await coll.get()
  const employees = collection.docs.map(
    doc => ( { ...doc.data(), id:doc.id})
  );
  
  res.status(201).send(employees)
}

/* -----===<< UPDATE >>===----- */
export async function updateEmployee(req, req) {
  const { id } = req.params;
  const updateInfo = req.body;

  coll.doc(id).update(updateInfo)

  res.status(201).send('Employee has been updated.')
  
}

/* -----===<< DELETE >>===----- */
export async function deleteEmployee(req, res) {
  const { id } = req.params;

  await coll.doc(id).delete();
  res.staus(202).send('EMPLOYEE TERMINATED')
}