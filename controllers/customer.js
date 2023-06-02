import Customer from "../models/Customer.js";

export const createCustomer = async (req,res) => {
    const newCustomer = new Customer(req.body)

    try{
        const savedCustomer = await newCustomer.save()
        res.status(200).json(savedCustomer)
    }catch(err){
        throw err;
    }
}

export const updateCustomer = async (req,res) => {
    try{
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updateCustomer)
    }catch(err){
        throw err;
    }
}

export const deleteCustomer = async (req,res) => {
    try{
        await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json("Customer has been deleted!")
    }catch(err){
        throw err
    }
}

export const getCustomer = async (req,res) => {
    try{
        const customer = await Customer.findById(req.params.id)
        res.status(200).json(customer)
    }catch(err){
        throw err
    }
}

export const getCustomers = async (req,res) => {
    try{
        const customers = await Customer.find()
        res.status(200).json(customers)
    }catch(err){
        throw err
    }
}

export const entryUpdate = async (req,res) => {
    try{
        await Customer.findByIdAndUpdate(req.params.id, {$push: {transaction: req.body}}, {new: true})
        res.status(200).json("Entry has been added")
    }catch(err){
        throw err
    }
}

export const interestUpdate = async (req,res) => {
    try{
        await Customer.updateOne({_id: req.params.id, "transaction._id": req.body.id}, {$set: {"transaction.$.interest": req.body.interest, "transaction.$.days": req.body.days}}, {new: true});
        res.status(200).json("Interest has been updated");
    }catch(err){
        throw err;
    }
}

export const deleteEntry = async (req,res) => {
    try{
        await Customer.findByIdAndUpdate(req.params.id, { $pull: { transaction: { _id: req.body.subId}  } }, {new: true})
        res.status(200).json("Entry has been deleted")
    }catch(err){
        throw err;
    }
}

export const editEntry = async (req,res) => {
    try{
        await Customer.updateOne({_id: req.params.id, "transaction._id": req.body.id}, {$set: {"transaction.$.credit": req.body.credit, "transaction.$.debit": req.body.debit, "transaction.$.interest": req.body.interest, "transaction.$.days": req.body.days, "transaction.$.date": req.body.date, "transaction.$.remark": req.body.remark}}, {new: true});
        res.status(200).json("Interest has been updated");
    }catch(err){
        throw err;
    }
}

export const updatePayable = async (req,res) => {
    try{
        await Customer.updateOne({_id: req.params.id}, {$set: {payable: req.body}}, {new: true});
        res.status(200).json("Payable has been updated");
    }catch(err){
        throw err;
    }
}