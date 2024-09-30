import { useEffect, useState } from 'react'
import ContactForm from './contactForm';
import GroupForm from './groupForm';


const PhoneBook = () => {
    const [contacts, setContacts] = useState([]);
    const [groups, setGroups] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const [editGroup, setEditGroup] = useState(null);

    useEffect(() => {
        const storedContact = JSON.parse(localStorage.getItem('contacts')) || [];
        const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
        setContacts(storedContact);
        setGroups(storedGroups);
    },[]);

    useEffect(() => {
        localStorage.setItem('contact', JSON.stringify(contacts));
    },[contacts]);

    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups));
    },[groups]);

    const addContact = (contact) => {
        if(editingContact) {
            setContacts(contacts.map(c => c.id === editingContact.id ? {...editingContact, ...contact} : c));
            setEditingContact(null);
        } else {
            setContacts([...contacts, {id : Date.now(), ...contact}]);
        }
    };

    const deleteContact = (id) => {
        setContacts(contact.filter(contact => contact.id !== id));
    };

    return(
        <div>
            <h1>전화번호부</h1>
            <ContactForm onSubmit={addContact} initialContact={editContact} />
            <ContactList contact={cotacts} onDelete={deleteContact} onEdit={editContact} />
            <GroupForm onSubmit={addGroup} initialGroup={editGroup} />
        </div>
    )
}