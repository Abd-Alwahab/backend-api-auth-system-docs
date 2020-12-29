import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

function HighLightText({ text, endpoint }) {
  const [isCopied, setIsCopied] = useState(false);

  const notify = () => toast.success("Text Copied");
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
      </span>

      <ToastContainer />
    </div>
  );
}

export default HighLightText;
