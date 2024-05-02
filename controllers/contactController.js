const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id: req.user.id});
  res.status(200).json(contacts);
});


//@desc create a new contact
//@route post /api/contacts
//@access private

const createContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id : req.user.id
  });
  res.status(201).json(contact);
});


//@desc get contact
//@route get /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});


//@desc update contact
//@route put /api/contacts/:id
//@access private

const updateConatct = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});


//@desc delete a contact
//@route delete /api/contacts/;id
//@access private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

// export module to router
module.exports = {
  getAllContact,
  createContacts,
  getContact,
  updateConatct,
  deleteContact,
};
