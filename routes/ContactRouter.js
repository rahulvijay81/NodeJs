const express = require("express");

const router = express.Router();

const {
  getContact,
  getAllContact,
  createContacts,
  updateConatct,
  deleteContact,
} = require("../controllers/contactController");

const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)

router.route("/").get(getAllContact).post(createContacts);

router.route("/:id").get(getContact).put(updateConatct).delete(deleteContact);

module.exports = router;
