import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md'

const EmailButton = () => {
  const recipient = 'matiasczo93@gmail.com';
  const subject = 'Consulta sobre entrenamiento';
  const body = 'Hola Matías estoy interesado en '

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleEmailClick} target="_blank" rel="noopener noreferrer">
      < MdOutlineMarkEmailRead className='transition duration-300 ease-in-out hover:scale-150 text-red-500'/>
    </button>
  );
};

export default EmailButton;
