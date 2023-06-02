import express from "express";
import { createCustomer, deleteCustomer, deleteEntry, editEntry, entryUpdate, getCustomer, getCustomers, interestUpdate, updateCustomer, updatePayable } from "../controllers/customer.js";

const router = express.Router();

router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
router.get("/:id", getCustomer);
router.get("/", getCustomers);
router.post("/:id", entryUpdate);
router.put("/interestUpdate/:id", interestUpdate);
router.put("/editEntry/:id", editEntry);
router.put("/deleteEntry/:id", deleteEntry);
router.put("/updatePayable/:id", updatePayable);



export default router;