const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');

router.post('/api/item', async (req, res)=>{
  try{
    const newItem = new todoItemsModel({

      item: req.body.item,
      completed: "false"
    })

    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
  } catch(err){
    res.json(err);
  }
})


router.get('/api/items', async (req, res)=>{
  try{
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems)
  } catch(err){
    res.json(err);
  }
})



router.put('/api/item/:id', async (req, res)=>{
  console.log(req.body.true)
  try{
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set : {true:req.body.completed},});
    res.status(200).json(updateItem);
  } catch(err){
    res.json(err);
  }
})

router.delete('/api/item/:id', async (req, res)=>{
  
  try{
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  } catch(err){
    res.json(err);
  }
})

module.exports = router;