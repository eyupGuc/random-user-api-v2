const Button=({getUser})=>{
  const fetchNewUser=(e)=>{
    // console.log("buton clicked")
    getUser()
    console.log(e.target)
 
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