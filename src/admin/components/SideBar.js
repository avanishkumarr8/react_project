import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
      <ul className="side-menu">
      <li><Link to = "/admin/Products" >Products</Link></li>
      <li><Link to = "/admin/ProductCreate">Product Create</Link></li>
      </ul>
    </div>
  )
}

export default SideBar


