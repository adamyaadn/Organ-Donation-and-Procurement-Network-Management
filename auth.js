const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/login',authController.login )
router.post('/register', authController.register );

// Donor
router.post('/donor', authController.donor );
router.post('/donorStatus', authController.donorStatus );

// Doctor
router.post('/doctor', authController.doctor );
router.post('/doctorStatus', authController.doctorStatus );
router.post('/doctorConfirm', authController.doctorConfirm);


// Recipient
router.post('/recipient', authController.recipient );
router.post('/recipientStatus', authController.recipientStatus );
router.post('/recipientConfirm', authController.recipientConfirm );
router.post('/recipientBill', authController.recipientBill );

// Hospital
router.post('/hospital', authController.hospital );
router.post('/hospitalStatus', authController.hospitalStatus );
router.post('/hospitalConfirm', authController.hospitalConfirm );
router.post('/hospitalTransplantReport', authController.hospitalTransplantReport );
router.post('/hospitalReport',authController.hospitalReport);

module.exports = router;