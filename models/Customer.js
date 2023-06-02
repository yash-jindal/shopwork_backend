import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    fname: {
        type: String,
    },
    gfname: {
        type: String,
    },
    interestRate: {
        type: Number
    },
    payable: {
        base: {
            type: Number,
            default: 0
        },
        interest: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    },
    transaction: {
        type: [{credit: Number, debit: Number, interest: Number, days: Number, date: String, remark: String}],
    },
    
},{timestamps: true});

export default mongoose.model("Customer", CustomerSchema)