
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow"; 

function ContactList({setSelectedContactId, URL}) {
    
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        async function fetchContacts() {
            try {
                const response = await fetch(URL);
                const obj = await response.json();
                if (!response.ok) {
                    throw new Error(obj.error.message);
                }
                setContacts(obj);
            } catch (e) {
                console.error(e);
            }
        }fetchContacts()
    },[])

    return (
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
                contacts.map((contact) => { return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />})
            }
          </tbody>
        </table>
    );
}
export default ContactList