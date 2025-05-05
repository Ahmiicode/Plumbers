import React, { useEffect, useState } from 'react';

const ShowContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/form') // matches your route
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error('Error fetching contacts:', err));
  }, []);

  return (
    <div className="w-full max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>
      {contacts.length === 0 ? (
        <p>No contact submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowContacts;
