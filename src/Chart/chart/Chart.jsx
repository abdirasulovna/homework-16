import React, { Component } from "react";
import ChartBar from "../chart_bar/ChartBar";
import clasess from "./Chart.module.css";

export default class Chart extends Component {
  render() {
    const datPoingsValues = this.props.dataPoints.map((poing) => poing.value);
    const totalMax = Math.max(...datPoingsValues);
    return (
      <div className={clasess.chart}>
        {this.props.dataPoints.map((point, index) => (
          <ChartBar {...point} maxValue={totalMax} key={index} />
        ))}
      </div>
    );
  }
}
