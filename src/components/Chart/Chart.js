import React from "react";

import ChartBar from "./ChartBar";

const Chart = props => {
    
    return (
        <div className="chart">
            {props.dataPoints.map(datapoint => 
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={null} 
                label={dataPoint.label}/>)}
        </div>
    )
};

export default Chart;