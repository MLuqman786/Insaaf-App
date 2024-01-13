import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function SideBar() {
    const {id}=useParams()
  return (
<>
<span>
<nav className='shadow-xl bg-slate-200  mt-3 w-48   '>
<ul className='flex flex-col justify-around ml-5 s  h-lvh'>

    <li>
        <NavLink className="" to={`/membersLayout/${id}/`} >Profile</NavLink>
    </li>
    <li>
        <NavLink className="" to="membersEvents">Events </NavLink>
    </li>
    <li>
        <NavLink to={`/membersLayout/${id}/membersNews`}>News </NavLink>
    </li>
    <li>
        <NavLink to="membersSocialActivity">Social-Activity</NavLink>
    </li>
    <li>
        <NavLink to="polingStations">polling-Stations</NavLink>
    </li>
    <li>
        <NavLink to="/chats">chats</NavLink>
    </li>
</ul>
</nav>
</span>
</>
  )
}

export default SideBar