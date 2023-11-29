const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date_of_birth: String,
    phone_number: {
        type: String,
        required: true,
    },
    residential_address: String,
    city: String,
    state: String,
    pincode: String,
    Degree: String,
    Specialization: String,
    academic_achievement: String,
    work_history: String,
    position: String,
    job_responsibilities: String,
    professional_achievement: String,
    college_name: String,
    department: String,
    position_appointment: String,
    start_date_appointment: String,
    employee_status: String,
    teaching_specialization: String,
    publications: String,
    conference_presentation: String,
    awards: String,
});

module.exports = mongoose.model('Applicant', applicantSchema);
