import React from 'react'
import { useState } from 'react'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'


const uniqueList = [...new Set( Menu.map((curElem) => {
    return curElem.category
})
),'All'
]
console.log(uniqueList);

const Resturent = () => {
    const [menuData, setMenuDate] = useState(Menu)
    const [menulist, setMenulist] = useState(uniqueList)

    const filterItem = (category) => {

        if (category === 'All') {
            setMenuDate(Menu);
            return;
            
      }

        const updatedlist = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuDate(updatedlist)
        console.log(setMenuDate);
    };
        
  return (
      <>
          <Navbar filterItem={filterItem} menulist={menulist} />
          <MenuCard menuData={menuData} />
      </>
  )
}

export default Resturent