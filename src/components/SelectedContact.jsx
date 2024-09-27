import { useState, useEffect } from 'react'

function SelectedContact({selectedContactId, setSelectedContactId, URL}) {

    const [contact, setContact] = useState({});

    useEffect(() => {
        async function getContact(){
            try {
                if(selectedContactId === null){
                    return
                }
                const response = await fetch(URL+selectedContactId);
                const obj = await response.json();
                if (!response.ok) {
                    throw new Error(obj.error.message);
                }
                setContact(obj);

            } catch (e) {
                console.error(e);
            }
        }
        getContact();
    },[selectedContactId]);

    return (
        <ul className="contactUl">
            <h2>Contact Information</h2>
            <li><span>Name:</span> {contact.name}</li>
            <li><span>Username:</span> {contact.username}</li>
            <li><span>Email:</span> {contact.email}</li>
            <li><span>Phone:</span> {contact.phone}</li>
            <li><span>Website:</span> {contact.website}</li>
            
            {contact.address && (
                <>
                    <li><span>Street:</span> {contact.address.street || 'N/A'}</li>
                    <li><span>Suite:</span> {contact.address.suite || 'N/A'}</li>
                    <li><span>City:</span> {contact.address.city || 'N/A'}</li>
                    <li><span>Zipcode:</span> {contact.address.zipcode || 'N/A'}</li>
                    {contact.address.geo && (
                        <>
                            <li><span>Latitude:</span> {contact.address.geo.lat || 'N/A'}</li>
                            <li><span>Longitude:</span> {contact.address.geo.lng || 'N/A'}</li>
                        </>
                    )}
                </>
            )}
            
            {contact.company && (
                <>
                    <li><span>Company Name:</span> {contact.company.name || 'N/A'}</li>
                    <li><span>Catchphrase:</span> {contact.company.catchPhrase || 'N/A'}</li>
                    <li><span>Business:</span> {contact.company.bs || 'N/A'}</li>
                </>
            )}

            <button onClick={() => {setSelectedContactId(null)}}>Return</button>
        </ul>
    );
}
export default SelectedContact