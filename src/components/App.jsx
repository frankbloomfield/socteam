import React from "react";
import Heading from "./Heading";
import Leftbank from "./Leftbank";
import Stream from "./Stream";
import Rightbank from "./Rightbank";
import Horizon from "./Horizon";
import Sea from "./Sea";
import Ocean from "./Ocean"

function App(){
return(

<div>

<Heading/>




<Horizon/>
<Ocean/>
<Sea/>


  <div className="row">


    <Leftbank/>
    <Stream/>
    <Rightbank/>
</div>
</div>

)}

export default App
