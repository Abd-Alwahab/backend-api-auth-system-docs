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
        <div className={isCopied ? "textCopied shown" : "textCopied hidden"}>
          Text Copied{" "}
          <div
            className="close"
            onClick={() => {
              setIsCopied(false);
              console.log("Close");
            }}
          >
            {" "}
            x{" "}
          </div>
        </div>
      ) : null}
      <span className="hilight">
        {text} <div className="empty_space"></div> {endpoint}
      </span>
    </div>
  );
}

export default HighLightText;
