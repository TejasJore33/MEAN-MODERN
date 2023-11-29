const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Applicant = require('../models/applicantSchema');
const Registration = require('../models/registrationModel');


function handleErrors(res, error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}

router.post('/applicant/create', (req, res) => {
    const applicantData = req.body;
    const newApplicant = new Applicant(applicantData);

    newApplicant.save()
        .then((savedApplicant) => {
            res.status(201).json({ message: 'Applicant created successfully', applicant: savedApplicant });
        })
        .catch((error) => {
            handleErrors(res, error);
        });
});

router.post('/register', async (req, res) => {
    try {
      const newUser = new Registration(req.body);
      await newUser.save(); 
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed. Please try again.' });
    }
  });
   


  router.post('/login', async (req, res) => {
    const { emailOrUsername, password } = req.body;
  
    try {
      const user = await Registration.findOne({ emailOrUsername });
  
      if (!user) {
        return res.status(401).json({ message: 'Login failed. Invalid email or password' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ message: 'Login failed. Invalid email or password' });
       
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Login failed. An error occurred.' });
    }
  });  


  router.get('/applicant/read', async (req, res) => {
    try {
      const applicants = await Applicant.find();
  
      res.status(200).json(applicants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching applicants' });
    }
  });

 
  router.delete('/applicant/:email', async (req, res) => {
    const email = req.params.email;
  
    try {
      const deletedApplicant = await Applicant.findOneAndDelete({ email });
  
      if (!deletedApplicant) {
        return res.status(404).json({ message: 'Applicant not found' });
      }
  
      res.status(200).json({ message: 'Applicant deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


module.exports = router;
