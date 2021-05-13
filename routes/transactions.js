const express=require('express')
const router=express.Router()
//need this
const {getTransactions,addTransactions,deleteTransactions}=require('../controlers/transactions_controller')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)

router
    .route('/:id')
    .delete(deleteTransactions)

module.exports=router