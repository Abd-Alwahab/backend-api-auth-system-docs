import React, { useState } from "react";
import step_1 from "./../media/installation/step_1.png";
import step_2 from "./../media/installation/step_2.png";
import step_3 from "./../media/installation/step_3.png";
import step_4 from "./../media/installation/step_4.png";
import { mongoImages } from "./../util/data";
import Collapsible from "react-collapsible";
import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa";
import HighLightText from "./HighLightText";

function Installation() {
  const [mongoOpen, setMongoOpen] = useState(false);
  const [sendGridOpen, setSendGridOpen] = useState(false);
  const [jwtOpen, setJWtOpen] = useState(false);
  const [cloudOpen, setCloudOpen] = useState(false);
  return (
    <div>
      <h2>How To Get Started</h2>
      <p className="docs_desc">
        To get started you need to jump over to this{" "}
        <a href="https://github.com/Abd-Alwahab/auth-system" className="m-m">
          {" "}
          github repo{" "}
        </a>{" "}
        and download the project to your local environment or you can use this command{" "}
        <br />
        <br />
        <HighLightText text=" git clone https://github.com/Abd-Alwahab/auth-system.git" />
        <p className="docs_desc">
          Now, you have the project localy on your OS, its time for you to open it in your
          code editor (I use VSCode)
          <img src={step_1} alt="open folder" className="docs__img" />
        </p>
        <p className="docs_desc">
          Now, once you open the project in your code editor, we need to run the following
          command to install some npm packages that we need, so open your terminal in your
          code editor and run the following command
          <br />
          <br />
          <HighLightText text="npm install" />
          <p className="docs_desc">That will go ahead and add the node_modules folder </p>
          <img src={step_2} alt="open folder" className="docs__img" />
        </p>
        <p className="docs_desc">
          Once you have the node_modules folder added to your porject, now we need to
          create a file to store the environment variables that we need in order for our
          application to run, now if you are wondering why we are using environment
          variables here, well the answer is very simple its just to store secure and
          important information
          <p className="docs_desc">
            To create the environment variables you need to run the follwoing command{" "}
          </p>
          <div className="hilight">touch .env</div>
          <p className="docs_desc">
            That will go ahead and add new file called .env to your project tree{" "}
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

      <div className="steps_container">
        <Collapsible
          // tabIndex={0}
          lazyRender
          open={mongoOpen}
          transitionTime={900}
          transitionCloseTime={300}
          onClosing={() => {
            setMongoOpen(false);
          }}
          onOpening={() => {
            setMongoOpen(true);
          }}
          trigger={
            <button className="btn-collaps">
              <div>
                {!mongoOpen ? (
                  <FaArrowDown size="2em" color="#fff" />
                ) : (
                  <FaArrowRight size="2em" color="#fff" />
                )}
              </div>
              <h3>Show MondoDB Steps</h3>
            </button>
          }
          triggerStyle={{
            backgroundColor: mongoOpen ? "green" : "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
            transitionDuration: ".5s",
          }}
        >
          {mongoImages.map((img) => (
            <img src={img} alt="mongo steps" className="docs__img img_step" />
          ))}
        </Collapsible>

        <Collapsible
          // tabIndex={0}
          lazyRender
          open={jwtOpen}
          transitionTime={900}
          transitionCloseTime={300}
          onClosing={() => {
            setJWtOpen(false);
          }}
          onOpening={() => {
            setJWtOpen(true);
          }}
          // onClick={() => {
          //   setJWtOpen(!jwtOpen);
          //   console.log(jwtOpen);
          // }}
          trigger={
            <button className="btn-collaps">
              <div>
                {!jwtOpen ? (
                  <FaArrowDown size="2em" color="#fff" />
                ) : (
                  <FaArrowRight size="2em" color="#fff" />
                )}
              </div>
              <h3>
                {!jwtOpen ? "Show JSON Web Token Steps" : "Close JSON Web Token Steps"}
              </h3>
            </button>
          }
          triggerStyle={{
            backgroundColor: jwtOpen ? "green" : "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
            transitionDuration: ".5s",
          }}
        >
          <div className="content_container">
            <p className="docs_desc">
              If you followed the mongoDB steps then you should get you conection string ,
              let us move to the next two environment variables, which will be the{" "}
              <div className="m-s">
                <div className="dark">
                  token_secret <br />
                  token_date
                </div>
              </div>
            </p>

            <p className="docs_desc">
              These are very simple once , for the{" "}
              <span className="dark">token_secret</span>, just give it any long text ,
              juts make sure that is at least <span className="dark"> 32 charcters</span>,
              and for the <span className="dark"> token_date</span>, just give it any
              number plus the letter d, this will be used for as expire date for the json
              web token, in my case I used 90d, you can use the same as me.
            </p>

            <p className="docs_desc">
              Now Let us move to the next once which are:
              <div className="m-s">
                <div className="dark">
                  email_user <br />
                  email_password
                </div>
              </div>
            </p>
          </div>
        </Collapsible>

        <Collapsible
          // tabIndex={0}
          lazyRender
          open={sendGridOpen}
          transitionTime={900}
          transitionCloseTime={300}
          onClick={() => setSendGridOpen(false)}
          onClosing={() => {
            setSendGridOpen(false);
          }}
          onOpening={() => {
            setSendGridOpen(true);
          }}
          trigger={
            <button className="btn-collaps">
              <div>
                {!sendGridOpen ? (
                  <FaArrowDown size="2em" color="#fff" />
                ) : (
                  <FaArrowRight size="2em" color="#fff" />
                )}
              </div>
              <h3>Show SendGrid Steps</h3>
            </button>
          }
          triggerStyle={{
            backgroundColor: sendGridOpen ? "green" : "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
            transitionDuration: ".5s",
          }}
        >
          <ol className="sub_list_item">
            <li>
              Create an Account With <a href="https://sendgrid.com/">SendGrid</a>{" "}
            </li>

            <li>Login into your account</li>
            <li>
              From your dashboard page , Expand The{" "}
              <span className="dark">Email API </span>Tap
            </li>
            <li>
              From the Email API Tap, select{" "}
              <span className="dark"> Integration Guide </span>
            </li>
            <li>
              Now Click on the <span className="dark"> SMTP Relay </span>
            </li>
            <li>
              Chosse a name for you key and click create key, this will create an api key
              for you{" "}
            </li>
            <li>Now, you will see username and password </li>
            <li>
              Copy the user name and the password and use them in the environment
              variables{" "}
            </li>
            <li>
              Use the username for the <span className="dark">email_user</span>{" "}
            </li>
            <li>
              Use the password for the <span className="dark">email_password</span>{" "}
            </li>
          </ol>
        </Collapsible>

        <Collapsible
          // tabIndex={0}
          lazyRender
          open={cloudOpen}
          transitionTime={900}
          transitionCloseTime={300}
          onClick={() => setCloudOpen(false)}
          onClosing={() => {
            setCloudOpen(false);
          }}
          onOpening={() => {
            setCloudOpen(true);
          }}
          trigger={
            <button className="btn-collaps">
              <div>
                {!cloudOpen ? (
                  <FaArrowDown size="2em" color="#fff" />
                ) : (
                  <FaArrowRight size="2em" color="#fff" />
                )}
              </div>
              <h3>Show Cloudinary Steps</h3>
            </button>
          }
          triggerStyle={{
            backgroundColor: cloudOpen ? "green" : "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
            transitionDuration: ".5s",
          }}
        >
          <ol className="sub_list_item">
            <li>
              Create an Account With <a href="https://cloudinary.com">Cloudinary</a>{" "}
            </li>

            <li>Login into your account</li>
            <li>
              From your dashboard page , You will see the{" "}
              <span className="dark">Account Details </span> Box
            </li>
            <li>
              Copy the
              <span className="dark"> Cloud name </span> and use it in the cloud_name
              environment variable
            </li>
            <li>
              Copy the <span className="dark">API Key</span> and past it in the
              <span className="dark"> cloud_api </span> environment variable
            </li>
            <li>
              Copy the <span className="dark">API Secret</span> and past it in the
              <span className="dark"> cloud_secrit </span> environment variable
            </li>
            <li>Now, you are done. </li>
          </ol>
        </Collapsible>

        <p className="docs_desc">
          Now , everything should be ok for you, to make sure that everything went ok,
          just run this command in your terminal
          <span className="dark">npm start</span> , you should be able to see this message{" "}
          <span className="dark">
            MongoDB database connection established successfully
          </span>
          if not please read the steps and make sure you did everything with me.
        </p>
      </div>
    </div>
  );
}

//

export default Installation;
