import React, { useState } from "react";
import copy from "copy-to-clipboard";

function HighLightText({ text, endpoint }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      onClick={() => {
        copy(endpoint);
        setIsCopied(true);
      }}
      className="textCopied-parent"
    >
      {isCopied ? (
        <div className="textCopied">
          Text Copied{" "}
          <span className="close" onClick={() => setIsCopied(false)}>
            {" "}
            x{" "}
          </span>
        </div>
      ) : null}
      <span className="hilight m-m">
        {text} <div className="empty_space"></div> {endpoint}
      </span>
    </div>
  );
}

export default HighLightText;
