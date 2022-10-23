const Button=({getUser,setButtonClick,buttonClick})=>{
  const fetchNewUser=(e)=>{
    // console.log("buton clicked")
    getUser()
    // console.log(e.target)
    setButtonClick("false")
    console.log(buttonClick)
 
  }
    return(
        <div className="btn-group">
              <button className="btn" type="button" onClick={fetchNewUser}>
                new user
              </button>
              <button className="btn" type="button">
                add user
              </button>
            </div>
    )
}

export default Button;