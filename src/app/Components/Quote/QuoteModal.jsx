import { useRouter } from "next/navigation";
import React from "react";

const QuoteModal = ({ message, onClose }) => {
  const router = useRouter();

  if (!message) return null;

  return (
    <div className="quote-modal">
      <div className="quote-modal-overlay" onClick={onClose}></div>
      <div className="quote-modal-content">
        <button className="quote-modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="quote-modal-inner">
          <div className="header">
            Are you sure?
            </div>
          <p>We’ll only use your contact details to send you your quote and follow up if needed.
          If you continue without entering your details, you won’t be able to retrieve your quote later.</p>
          <div className="button-group">
          <button className="button" onClick={onClose}>No, I want to enter my details</button>

                <button className="button" onClick={() => router.push("/quote")}>Yes, continue without saving</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
