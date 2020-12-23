import React from "react";
import step_1 from "./../media/installation/step_1.png";
import step_2 from "./../media/installation/step_2.png";

function Installation() {
  return (
    <div>
      <h2>How To Get Started</h2>
      <p className="docs_desc">
        To get started you need to jump over to this github repo and download the project
        to your local enviroment or you can use this command{" "}
        <div className="hilight">
          git clone https://github.com/Abd-Alwahab/auth-system.git
        </div>
        <p className="docs_desc">
          Now, you have the project localy on your OS, its time for you to open it in your
          code editor (I use VSCode)
          <img src={step_1} alt="open folder" className="docs__img" />
        </p>
        <p className="docs_desc">
          Now, once you open the project in your code editor, we need to run the following
          command to install some npm packages that we need, so open your terminal in your
          code editor and run the following command
          <div className="hilight">npm install</div>
          <p className="docs_desc">That will ahead and add the node_modules </p>
          <img src={step_2} alt="open folder" className="docs__img" />
        </p>
      </p>
    </div>
  );
}

export default Installation;
