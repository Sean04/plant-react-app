import React, {useState} from 'react';
import Chart from 'react-apexcharts';

import { Button } from '@material-ui/core';

export default function LineChart() {
    const [ state, setState ] = useState({
        options: {
            chart: {
                id: "basic-line",
                background: "#fff"
            },
            xaxis: {
                categories: []
            }
        },
        series: [
            {
                name: "series-1",
                data: []
            }
        ]
    });

    const updateData = () => {
        fetch('http://localhost:5000/api/data')
        .then(response => response.json())
        .then(new_data => {
            const graphDataPoints = []
            new_data.forEach((item, index) => {
                graphDataPoints.push(item.Temperature);
            });
            // console.log(graphDataPoints);

            // const new_state = state;
            // new_state.series.data = graphDataPoints;
            // console.log(new_state);
            setState({
                options: state.options,
                series: [
                    {
                        name: "Temperature",
                        data: graphDataPoints.slice(graphDataPoints.length-100, graphDataPoints.length)
                    }
                ]
            });
            console.log(state.series.data);
        });
    }

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="100%"
            />
            <Button onClick={updateData}>Update</Button>
        </div>
    )
}
