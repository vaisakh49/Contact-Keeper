import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContact, clearFilter } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contact'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
