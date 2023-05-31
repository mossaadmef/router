import React from 'react'

const NavBAr = () => { 

  return (
    <div>
        <nav>
            <ul>
            <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/category'>Category</Link>
                </li>
                <li>
                    <Link to='/adminarea'>Admin Area</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default 
