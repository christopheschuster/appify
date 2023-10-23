/* 
   Filename: complexCode.js - Complex Code Example
   
   This code demonstrates a complex implementation of a contact management system
   with features like adding contacts, searching contacts, editing contacts, and deleting contacts.
*/

// Define the Contact class
class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

// Initialize an empty array to store contacts
let contacts = [];

// Function to add a new contact
function addContact(name, email, phone) {
  const contact = new Contact(name, email, phone);
  contacts.push(contact);
  console.log("New contact added successfully!");
}

// Function to search for a contact by name
function searchContactByName(searchName) {
  let foundContacts = [];
  for (let contact of contacts) {
    if (contact.name.toLowerCase().includes(searchName.toLowerCase())) {
      foundContacts.push(contact);
    }
  }
  return foundContacts;
}

// Function to edit a contact's details
function editContact(name, newEmail, newPhone) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      contacts[i].email = newEmail;
      contacts[i].phone = newPhone;
      console.log("Contact details updated successfully!");
      break;
    }
  }
}

// Function to delete a contact
function deleteContact(name) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      contacts.splice(i, 1);
      console.log("Contact deleted successfully!");
      break;
    }
  }
}

// Test the contact management system
addContact("John Doe", "john.doe@example.com", "1234567890");
addContact("Jane Smith", "jane.smith@example.com", "9876543210");
addContact("Alice Johnson", "alice.johnson@example.com", "5555555555");

console.log(searchContactByName("doe")); // Prints the found contacts with 'doe'
console.log(searchContactByName("john")); // Prints the found contacts with 'john'

editContact("John Doe", "john.doe.updated@example.com", "1111111111");
console.log(searchContactByName("doe")); // Prints the updated contact

deleteContact("Alice Johnson");
console.log(contacts); // Prints the remaining contacts after deletion

// ... Add more complex code here ...