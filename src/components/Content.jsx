import React from 'react'

function Content({listActive,setListActive}) {
    const tabName = ["First","Second","Third"];
    const handleActive = (index)=>{
        const newState = [false,false,false];
        newState[index] = true;
        setListActive(newState);
    }
  return (
    <div className="content w-100 d-flex justify-content-center">
        <ul className="nav">
            {listActive.map((item,index)=>{
                  return(
                  <li className="nav-item" key={index} onClick={()=>{handleActive(index)}}>
                  <a 
                  className={`nav-link ${item ? "active" : ""}`} 
                  href="#"
                  >{tabName[index]}</a>
                    </li>)
            })}
        </ul>
    </div>
  )
}

export default Content
