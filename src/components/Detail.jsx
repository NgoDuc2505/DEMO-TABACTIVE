import React from 'react'

function Detail({listActive}) {
    
  return (
    <div className='detail w-75 mx-auto'>
        {
            listActive.map((item,index)=>{
                return(
                    <div key={index}>
                        <p className={`para ${!item ? "disable" : ""}`}>
                        <h2>Para {index+1}</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus reiciendis, eaque error necessitatibus hic obcaecati corrupti voluptate. Quae saepe sapiente officia aperiam sit eveniet sequi voluptates non maiores, a optio enim dolores aliquam expedita nam omnis possimus, nulla dicta. Magni officiis explicabo quo fugit?
                        </p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Detail