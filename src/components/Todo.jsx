import React from 'react'
 

export const Todo = () => {
  return (
      <div className="main-div">
          <div className="child-div">
              <figure>
                  <img src="" alt="" />
              <figcaption> Add Your List Here</figcaption>
              </figure>
              <div className="addItems">
                  <input type="text" placeholder='Add Item' className="text" />
                  <i class="fa-solid fa-plus"></i> 
                   
                   
                        
             </div>
          </div>
     </div>
  )
}

export default Todo