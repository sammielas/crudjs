const express = require('express');
const router = express.Router();
const employeeModel = require('../models/employees');

router.get('/', async (req, res) => {
  // const employees = await employeeModel.find();
  // res.json({ employees });
  res.render('employee/addOrEdit.hbs', { viewTitle: 'Insert Employee' });
});

router.get('/:id', async (req, res) => {
  const employee = await employeeModel.findById(req.params.id);
  res.json({ employee });
});

router.post('/', async (req, res) => {
  const employees = await new employeeModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
  });
  try {
    const data = await employees.save();
    res.json({ data });
  } catch (error) {
    console.log({ error });
  }
});
router.get('/list', (req, res) => {
  res.json({ message: 'list sent' });
});

module.exports = router;
