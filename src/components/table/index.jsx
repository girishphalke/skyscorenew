import React from 'react'
import Table from 'react-bootstrap/Table';
import EditButton from "../buttons/EditButton"
import ellipse from "../../assets/images/ellipse.svg"
import "./table.css"

export default function table() {
  return (
    <div className="tabledata">
        <Table responsive size="sm">
            <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>[X]</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><div>
                    <h5>Lorem Ipsum</h5><br/>
                    <span className="status1">Status1</span> <img src={ellipse} alt="ellipse" /> <span className="status2">Status1</span><br/>
                    <EditButton />
                </div>
                </td>
                <td>Data</td>
                <td>Link1</td>
                <td>Data</td>
                <td><input type="checkbox" id="text1" name="text1" value="text1" /></td>
            </tr>
      
            </tbody>
        </Table>
    </div>
  )
}
