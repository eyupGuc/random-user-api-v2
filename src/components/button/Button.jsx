const Button=({getUser})=>{
  const fetchNewUser=()=>{
    console.log("buton clicked")
    getUser()
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