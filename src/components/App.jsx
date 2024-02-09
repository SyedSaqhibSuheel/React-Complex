import React, { useState } from "react";

/*function App() {

    const[fname,chname]=useState("");
    const[flast,lchname]=useState("");
  

    function firstname(event){
        console.log(event.target.value);
        chname(event.target.value)
    }

    function lastname(event){
        console.log(event.target.value);
        lchname(event.target.value)
    }

 


  return (
    <div className="container">
      <h1>Hello {fname} {flast}</h1>
      <form>
        <input name="fName"  onChange={firstname} placeholder="First Name" value={fname}/>
        <input  name="flast" onChange={lastname} placeholder="Last Name" value={flast}/>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;*/

function App(){
  const[fullName,setFullname]=useState({
    fname:"",
    lname:""
  });

  function handel(event){
    // const value=event.target.value;
    //const name=event.target.value;
    const{value, name}=event.target;
    setFullname(prevValue=>{
      if(name==="fname"){
        return{
          fname:value,
          lname: prevValue.lname
        };
      }
      else if(name==="lname"){
        return{
          fname:prevValue.fname,
          lname:value
        };
      }
    });
  }

  return(
    <div className="container">
    <h1>
      Hello {fullName.fname}   {fullName.lname}
    </h1>
    <input name="fname" onChange={handel} placeholder="First Name" value={fullName.fname}/>
    <input name="lname" onChange={handel} placeholder="Last Name" value={fullName.lname}/>
    <button>Submit</button>
    </div>
  );
}

export default App;
