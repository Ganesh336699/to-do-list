import React from 'react'

const Profile = () => {
  return (
    <div className="profile">
         <img
          src="https://th.bing.com/th/id/OIP.VqPvGsWqGrrSoL9sw4FsJAHaHa?w=187&h=187&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt="Profile " 
          width="100" 
        height="100" 
        style={{ marginTop: "10px" , borderRadius: "50%", border: "2px solid #ccc" }} 
        />
       <h2>Prabhas</h2>
       <h3>prabhas@gmail.com</h3>
        </div>
  )
}

export default Profile