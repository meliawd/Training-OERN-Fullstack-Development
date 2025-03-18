import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api, Url } from "../../config/Api";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const res = await axios.get(Api);
    console.log(res.data.data);
    setContacts(res.data.data);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">ContactList</h1>
        <Link className="btn btn-outline-primary">Add Contact</Link>
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
                    <Link className="btn btn-outline-primary btn-sm">Edit</Link>
                    <Link className="btn btn-outline-danger btn-sm">
                      Delete
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};

export default ContactList;
