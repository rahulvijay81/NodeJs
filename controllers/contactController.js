const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getAllContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// create a new contact api 

const createContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }
  res.status(201).json({ message: "Create Contacts" });
});

// get contact information

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact Details for ${req.params.id}` });
});

// update contact details

const updateConatct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

// delete contact details

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});


// export module to router
module.exports = {
  getAllContact,
  createContacts,
  getContact,
  updateConatct,
  deleteContact,
};
