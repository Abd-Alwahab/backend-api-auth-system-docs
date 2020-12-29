import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { FaClipboard, FaCheckCircle } from "react-icons/fa";

function HighLightText({ text, endpoint }) {
  const [isCopied, setIsCopied] = useState(false);

  const notify = () => {
    toast.success("Text Copied", {
      closeOnClick: true,
      autoClose: 1200,
      hideProgressBar: true,
      onClose: () => {
        setIsCopied(false);
      },
    });
    setIsCopied(true);
  };

  return (
    <div
      onClick={() => {
        copy(endpoint);
        notify();
      }}
      className="textCopied-parent"
    >
      <span className="hilight">
        {text} <div className="empty_space"></div> {endpoint}
        {isCopied ? (
          <FaCheckCircle size={25} color="green" className="icon" />
        ) : (
          <FaClipboard size={25} color="#fff" className="icon" />
        )}
      </span>

      <ToastContainer />
    </div>
  );
}

export default HighLightText;
