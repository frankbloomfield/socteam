import React from "react";
import profile from "./profile.jpg";

function Entry(){
  return(
    <div className = "entry">
        <img
          className = "circle-img inline franklogo"
          src= {profile}
          alt="avatar_img"
        />

        <div className="addthought">
        <h3>A penny for your thoughts?</h3>
        </div>


    </div>

  )
}

export default Entry;
