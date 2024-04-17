const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  personalInformation: {
    fullname: {
      type: String,
      required: true,
      description: "Full Name"
    },
    dob: {
      type: Date,
      required: true,
      description: "Date of Birth"
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
      description: "Gender"
    },
    address: {
      type: String,
      required: true,
      description: "Address"
    },
    contact: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
      description: "Contact Number"
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      description: "Email Address"
    },
    maritalstatus: {
      type: String,
      enum: ["single", "married", "divorced", "widowed"],
      required: true,
      description: "Marital Status"
    }
  },
  emergencyContactInformation: {
    emergencycontact: {
      type: String,
      required: true,
      description: "Name of Emergency Contact"
    },
    relationship: {
      type: String,
      required: true,
      description: "Relationship to Patient"
    },
    emergencycontactnumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
      description: "Contact Number of Emergency Contact"
    }
  },
  insuranceInformation: {
    insuranceCompanyName: {
      type: String,
      description: "Insurance Company Name"
    },
    policyNumber: {
      type: String,
      description: "Policy Number"
    },
    groupNumber: {
      type: String,
      description: "Group Number"
    },
    primaryInsuredName: {
      type: String,
      description: "Primary Insured Name"
    }
  },
  medicalInformation: {
    knownAllergies: {
      type: String,
      description: "Known Allergies"
    },
    chronicMedicalConditions: {
      type: String,
      description: "Chronic Medical Conditions"
    },
    currentMedications: {
      type: String,
      description: "Current Medications"
    },
    previousSurgeries: {
      type: String,
      description: "Previous Surgeries or Medical Procedures"
    },
    bloodType: {
      type: String,
      description: "Blood Type (if known)"
    }
  },
  employmentInformation: {
    occupation: {
      type: String,
      description: "Occupation"
    },
    employerName: {
      type: String,
      description: "Employer Name"
    },
    employerContactInformation: {
      type: String,
      description: "Employer Contact Information"
    }
  },
  password: {
    type: String,
    required: true,
    description: "Password"
  }
});

// Export the model, ceating a collection named 'Patient' in the database

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = mongoose.model('Patient', PatientSchema);
