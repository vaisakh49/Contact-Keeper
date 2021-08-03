import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        phone: '',
        email: '',
        type: 'proffessional',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'proffessional',
  });

  const { name, phone, email, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearCurrent();
    }
    // setContact({
    //   name: '',
    //   phone: '',
    //   email: '',
    //   type: 'proffessional',
    // });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      ></input>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      ></input>
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      ></input>
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'proffessional'}
        onChange={onChange}
      />
      {'   '}
      <b>Professional</b>
      {'   '}
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />
      {'   '}
      <b>Personal</b>
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
