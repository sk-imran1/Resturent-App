import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
  return (
      <>
          <section className="main-card--cointainer">
          {
                  menuData.map((curElem) => {
                  
                      const {id,name,category,description,image} = curElem
                  return (
                      <>
                          
           <div className="card-container" key={id}>
              <div className="card">
                  <div className="card-body">
                      <span className="card-number card-circle">{id}</span>
                      <span className="card-author subtle" style={{ color: 'red' }}>{name}</span>
                     <h2 className="card-title">{category}</h2>
                      <span className="card-description subtle">{description}
                      </span>
                       
                  </div>
                  <img src={image}  alt="images" className='card-media' />
                  <span className="card-tag subtle">Order Now</span>
              </div>
          </div>
                      </>
                 )
             }) 
          }
          </section>
          </>
  )
}

export default MenuCard