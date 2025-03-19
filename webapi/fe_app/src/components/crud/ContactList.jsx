import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api, Url } from "../../config/Api";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const res = await axios.get(Api);
    // console.log(res.data.data);
    setContacts(res.data.data);
  };

  // Delete contact
  const deleteContact = async (contactId) => {
    try {
      console.log(contactId);
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // untuk pemanggilan api delete
          await axios.delete(`${Api}/${contactId}`);
          getContacts();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">Contact List</h1>
        <Link to={"/create"} className="btn btn-outline-primary">
          Add Contact
        </Link>
      </div>
      <hr />
      <div className="container mt-5 mb-5">
        <div className="row">
          {contacts.map((contact) => {
            return (
              <div key={contact.id} className="col-md-4 mb-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${Url}/${contact.image}`}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>{contact.email}</Card.Text>
                    <Card.Text>{contact.phone}</Card.Text>
                  </Card.Body>
                  <div className="btn-group">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
