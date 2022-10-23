import mailSvg from "../../assets/mail.svg";
import manSvg from "../../assets/man.svg";
import womanSvg from "../../assets/woman.svg";
import manAgeSvg from "../../assets/growing-up-man.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";
import padlockSvg from "../../assets/padlock.svg";
import cwSvg from "../../assets/cw.svg";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import Button from "../button/Button";
// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const url = "https://randomuser.me/api/";

const Card = () => {
  const [user, setUser] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [userValue, setUserValue] = useState("");
  const [buttonClick, setButtonClick] = useState(false);

  const getUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  console.log(user);
  console.log(buttonClick);
  const { name, email, dob, location, picture, phone, gender, login } = user;

  useEffect(() => {
    getUser();
  }, []);
  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={picture?.large} alt="random user" className="user-img" />
          <p className="user-title">
            My {buttonClick ? "name" : userTitle ? userTitle : "name"} is
          </p>

          <p className="user-value">
            {" "}
            {buttonClick
              ? name?.title + " " + name?.first + " " + name?.last
              : userValue
              ? userValue
              : name?.title + " " + name?.first + " " + name?.last}
          </p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={() => {
                setUserTitle("name");
                setUserValue(name.title + " " + name.first + " " + name.last);
                setButtonClick(false);
              }}
            >
              <img
                src={gender === "female" ? womanSvg : manSvg}
                alt="user"
                id="iconImg"
              />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={() => {
                setUserTitle("email");
                setUserValue(email);
                setButtonClick(false);
              }}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={() => {
                setUserTitle("age");
                setUserValue(dob?.age);
                setButtonClick(false);
              }}
            >
              <img
                src={gender === "female" ? womanAgeSvg : manAgeSvg}
                alt="age"
                id="iconImg"
              />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={() => {
                setUserTitle("street");
                setUserValue(location.state);
                setButtonClick(false);
              }}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={() => {
                setUserTitle("phone");
                setUserValue(phone);
                setButtonClick(false);
              }}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={() => {
                setUserTitle("password");
                setUserValue(login.password);
                setButtonClick(false);
              }}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <Button
            getUser={getUser}
            setButtonClick={setButtonClick}
            buttonClick={buttonClick}
          />

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
};

export default Card;
