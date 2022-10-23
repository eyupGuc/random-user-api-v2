const Button = ({ getUser, setButtonClick, buttonClick, addUser }) => {
  const fetchNewUser = (e) => {
    // console.log("buton clicked")
    getUser();
    // console.log(e.target)
    setButtonClick("true");
    // console.log(buttonClick);
  };

  const handleAddUser = () => {
    addUser();
  };
  return (
    <div className="btn-group">
      <button className="btn" type="button" onClick={fetchNewUser}>
        new user
      </button>
      <button className="btn" type="button" onClick={handleAddUser}>
        add user
      </button>
    </div>
  );
};

export default Button;
