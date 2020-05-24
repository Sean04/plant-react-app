import React, { useState } from 'react';
import CanvasJSReact from '../canvasjs.react';
import { Container, Row, Col, Button } from 'reactstrap';
import SideNav from './SideNav';
import axios from 'axios';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Dashboard() {

    const [data, setData] = useState({
        temperature: 0,
        humidity: 0,
        moisture: 0,
        light: 0,
        soil_temperature: 0,
        time: 0,
    });


    const options2 = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title:{
            text: "Soil Moisture"
        },
        axisY: {
            title: "Moisture %",
            includeZero: false,
            suffix: "%"
        },
        axisX: {
            title: "Time",
            prefix: "",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Time {x}: {y}%",
            dataPoints: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 60 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
                { x: 13, y: 55 },
                { x: 14, y: 60 },
                { x: 15, y: 56 },
                { x: 16, y: 60 },
                { x: 17, y: 59.5 },
                { x: 18, y: 63 },
                { x: 19, y: 58 },
                { x: 20, y: 54 },
                { x: 21, y: 59 },
                { x: 22, y: 64 },
                { x: 23, y: 59 }
            ]
        }]
    }

    const updateData = () => {
        fetch('http://localhost:5000/api/test_data')
        .then(response => response.json())
        .then(new_data => {
            console.log(new_data);
            setData(new_data);
            console.log('Plant Data Object');
            // console.log(plant_data);
        });

        // axios.get('http://localhost:5000/api/plant_data')
        // .then((res) => {
        //     console.log(res);
        // });
    };

    return (
        <div>
            <Container>
                <h1>Dashboard</h1>
                <Row>
                    <Col>
                        <h2>Current Status:</h2>
                        <ul>
                            <li>Room Temperature: {data.temperature}</li>
                            <li>Humidity: {data.humidity}</li>
                            <li>Soil Temperature: {data.soil_temperature}</li>
                            <li>Soil Moisture: {data.moisture}</li>
                            <li>Light: {data.light}</li>
                        </ul>
                        <Button color="primary" onClick={updateData}>Update</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CanvasJSChart options={options2}></CanvasJSChart>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
