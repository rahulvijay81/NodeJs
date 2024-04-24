//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getAllContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

const createContacts = (req, res) => {
  res.status(201).json({ message: "Create Contacts" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact Details for ${req.params.id}` });
};

const updateConatct = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getAllContact,
  createContacts,
  getContact,
  updateConatct,
  deleteContact,
};
