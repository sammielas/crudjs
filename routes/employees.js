const express = require('express');
const router = express.Router();
const employeeModel = require('../models/employees');

router.get('/', async (req, res) => {
  const employees = await employeeModel.find();
  res.json({ employees });
});

router.get('/:id', async (req, res) => {
  const employee = await employeeModel.findById(req.params.id);
  res.json({ employee });
});

router.post('/', async (req, res) => {
  const employees = await new employeeModel({
    name: req.body.name,
    dept: req.body.dept,
    salary: req.body.salary,
  });
  try {
    const data = await employees.save();
    res.json({ data });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
