import React from 'react'
import Button from 'react-bootstrap/Button';
import "./button.css"
import {Link} from "react-router-dom"

export default function buttons() {
  return (
    <div className="btn-blue"><Link to="/about"><Button variant="primary" className="blue">Button</Button></Link></div>
  )
}
