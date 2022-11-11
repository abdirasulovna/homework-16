import React, { Component } from "react";
import clasess from "./ChartBar.module.css";

export default class ChartBar extends Component {
  render() {
    const { value, maxValue, label } = this.props;
    let barFillHeight = "0%";
    if (maxValue > 0) {
      barFillHeight = Math.round((value / maxValue) * 100) + "%";
    }
    return (
      <div className={clasess.char_bar}>
        <div className={clasess.chart_bar__inner}>
          <div
            className={clasess.chart_bar__fill}
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className={clasess.chart_bar__label}>{label}</div>
      </div>
    );
  }
}
