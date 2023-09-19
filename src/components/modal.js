import React from 'react'

export default function Modal({ open, onClose, children, btnMessage}) {
  if (!open) return null;
  
  return (
    <>
      
      <div className="modal-open">
        
        {children}
        <button onClick={onClose} className="close-modal-btn boka-btn">
          {btnMessage}
        </button>
      </div>
    </>
  );
}
