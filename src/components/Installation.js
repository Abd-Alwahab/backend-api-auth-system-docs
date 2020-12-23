import React, { useState } from "react";
import step_1 from "./../media/installation/step_1.png";
import step_2 from "./../media/installation/step_2.png";
import step_3 from "./../media/installation/step_3.png";
import step_4 from "./../media/installation/step_4.png";
import { mongoImages } from "./../util/data";
import Collapsible from "react-collapsible";

function Installation() {
  const [mongoOpen, setMongoOpen] = useState(false);
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
        <p className="docs_desc">
          Once you have the node_modules added to your porject, now we need to create a
          file to store the environment variables that we need in order for our
          application to run, now if you are wondering why we are using environment
          variables here, well the answer is very simple its just to store secure and
          important information
          <p className="docs_desc">
            To create the environment variables you need to run the follwoing command{" "}
          </p>
          <div className="hilight">touch .env</div>
          <p className="docs_desc">
            That will ahead and add new file called .env to your project tree{" "}
          </p>
          <img src={step_3} alt="open folder" className="docs__img" />
          <p className="docs_desc">
            Now We need to add the following environment variables to our file so our
            application cloud run
          </p>
          <div className="hilight">
            mongodb_url <br />
            token_secret
            <br /> token_date
            <br />
            email_user <br />
            email_password <br />
            cloud_name <br />
            cloud_api
            <br />
            cloud_secrit
          </div>
          <img src={step_4} alt="open folder" className="docs__img" />
        </p>
      </p>

      <div className="note_danger">
        <div className="note">Note</div>
        <p className="docs_desc">
          <ul>
            <li>Do not be confuse becuase of the number of the environment variables </li>
            <li>
              Make sure to use the exact same name as shown in the screeshot otherwise
              thing will not work for you.
            </li>
          </ul>
        </p>
      </div>

      <p className="docs_desc">
        Now let us undersatand what values to add to these environment variables, the
        first one is mongo_db , its your contection string that you will use to contect
        your api to mongoDB atlas
      </p>

      <p className="docs_desc">
        To get you contection string, you need to create an account here and{" "}
        <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> , Once you have
        your account created then you need to follow these steps to get your contection
        string
      </p>

      <p className="docs_desc">
        <Collapsible
          tabIndex={0}
          lazyRender
          transitionTime={100}
          transitionTime={100}
          easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
          transitionCloseTime={100}
          onOpen={() => setMongoOpen(true)}
          onClose={() => setMongoOpen(false)}
          triggerOpenedClassName="trigger__open"
          trigger={!mongoOpen ? "Show MongoDB Steps" : "Hide MongoDB Steps"}
          triggerStyle={{
            backgroundColor: "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
          }}
        >
          {mongoImages.map((img) => (
            <img src={img} alt="mongo steps" className="docs__img img_step" />
          ))}
        </Collapsible>
      </p>
    </div>
  );
}

export default Installation;
