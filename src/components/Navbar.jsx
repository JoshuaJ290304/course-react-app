import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Navbar=()=>{

const location=useLocation()

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">

<div className="container">

<Link className="navbar-brand fw-bold" to="/">
Course App
</Link>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#menu">

<span className="navbar-toggler-icon"></span>

</button>

<div className="collapse navbar-collapse" id="menu">

<ul className="navbar-nav ms-auto">

<li className="nav-item">

<Link
className={`nav-link ${location.pathname==="/"?"active":""}`}
to="/">

Insert Course

</Link>

</li>

<li className="nav-item">

<Link
className={`nav-link ${location.pathname==="/view"?"active":""}`}
to="/view">

View Courses

</Link>

</li>

</ul>

</div>

</div>

</nav>

)

}

export default Navbar