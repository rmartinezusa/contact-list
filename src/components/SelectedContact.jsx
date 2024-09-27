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

    console.log(contact.address);

    const address = contact.address ? `${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}` : 'No address available';


    return (
        <ul>
            <li>Name: {contact.name}</li>
            <li>Username: {contact.username}</li>
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone}</li>
            <li>Website: {contact.website}</li>
            
            {contact.address && (
                <>
                    <li>Street: {contact.address.street || 'N/A'}</li>
                    <li>Suite: {contact.address.suite || 'N/A'}</li>
                    <li>City: {contact.address.city || 'N/A'}</li>
                    <li>Zipcode: {contact.address.zipcode || 'N/A'}</li>
                    {contact.address.geo && (
                        <>
                            <li>Latitude: {contact.address.geo.lat || 'N/A'}</li>
                            <li>Longitude: {contact.address.geo.lng || 'N/A'}</li>
                        </>
                    )}
                </>
            )}
            
            {contact.company && (
                <>
                    <li>Company Name: {contact.company.name || 'N/A'}</li>
                    <li>Catchphrase: {contact.company.catchPhrase || 'N/A'}</li>
                    <li>Business: {contact.company.bs || 'N/A'}</li>
                </>
            )}

            <li><button onClick={() => {setSelectedContactId(null)}}>Return</button></li>
        </ul>
    );
}
export default SelectedContact