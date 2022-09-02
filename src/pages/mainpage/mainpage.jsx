import React from 'react'
import Accordian from "../../components/accordian"
import Buttons from "../../components/buttons/"
import Table from "../../components/table"
import {Row,Col} from 'react-bootstrap/';

export default function mainpage({children}) {
  return (
    <main>
            <h1>Landing Page</h1>
            <Row>
                <Col><Accordian /></Col>
            </Row>
            <Row>
                <Col><Buttons /></Col>
            </Row>
            <Row>
                <Col><Table /></Col>
            </Row>
    </main>
  )
}
