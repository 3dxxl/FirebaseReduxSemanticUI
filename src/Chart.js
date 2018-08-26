import React, {Component} from 'react';
//import * as V from 'victory';
import {VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis} from 'victory';


class Chart extends Component {

    constructor() {
      super();
      this.state = {};
    }
  
    handleZoom(domain) {
      this.setState({selectedDomain: domain});
    }
  
    handleBrush(domain) {
      this.setState({zoomDomain: domain});
    }
  
    render() {
      return (
        <div>
            <VictoryChart width={1100} height={350} scale={{x: "time"}}
              containerComponent={
                <VictoryZoomContainer responsive={false}
                  zoomDimension="x"
                  zoomDomain={this.state.zoomDomain}
                  onZoomDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryLine
                style={{
                  data: {stroke: "green"}
                }}
                data={[
                  {x: new Date(2018, 8, 1,  1, 55, 20).toLocaleDateString(), y:  5 + "°C"},
                  {x: new Date(2018, 8, 2,  6, 55, 20).toLocaleDateString(), y:  7 + "°C"},
                  {x: new Date(2018, 8, 3, 10, 55, 20).toLocaleDateString(), y: 12 + "°C"},
                  {x: new Date(2018, 8, 4, 12, 55, 20).toLocaleDateString(), y: 13 + "°C"},
                  {x: new Date(2018, 8, 5, 14, 55, 20).toLocaleDateString(), y: 15 + "°C"},
                  {x: new Date(2018, 8, 6, 16, 55, 20).toLocaleDateString(), y: 21 + "°C"},
                  {x: new Date(2018, 8, 7, 18, 55, 20).toLocaleDateString(), y: 22 + "°C"},
                  {x: new Date(2018, 8, 8, 20, 55, 20).toLocaleDateString(), y: 28 + "°C"},
                  {x: new Date(2018, 8, 9, 21, 10, 20).toLocaleDateString(), y: 34 + "°C"},
                  {x: new Date(2018, 8, 10, 22, 30, 20).toLocaleDateString(), y: 37 + "°C"},
                  {x: new Date(2018, 8, 11, 22, 40, 20).toLocaleDateString(), y: 42 + "°C"},
                  {x: new Date(2018, 8, 12, 23, 55, 20).toLocaleDateString(), y: 44 + "°C"}
                  
                ]}
              />
  
            </VictoryChart>
  
            <VictoryChart
              padding={{top: 0, left: 50, right: 50, bottom: 30}}
              width={1100} height={350} scale={{x: "time"}}
              containerComponent={
                <VictoryBrushContainer responsive={false}
                  brushDimension="x"
                  brushDomain={this.state.selectedDomain}
                  onBrushDomainChange={this.handleBrush.bind(this)}
                />
              }
            >
              <VictoryAxis
                tickValues={[
                  new Date(2018, 8, 1),
                  new Date(2018, 9, 1),


                  /* new Date(1990, 1, 1),
                  new Date(1995, 1, 1),
                  new Date(2000, 1, 1),
                  new Date(2005, 1, 1),
                  new Date(2010, 1, 1) */
                ]}
               // tickFormat={(x) => new Date(x).toLocaleDateString()}
              />
              <VictoryLine
                style={{
                  data: {stroke: "red"}
                }}
                data={[
                  {x: new Date(2018, 8, 1,  1, 55, 20).toLocaleTimeString(), y:  5 + "°C"},
                  {x: new Date(2018, 8, 2,  6, 55, 20).toLocaleTimeString(), y:  7 + "°C"},
                  {x: new Date(2018, 8, 3, 10, 55, 20).toLocaleTimeString(), y: 12 + "°C"},
                  {x: new Date(2018, 8, 4, 12, 55, 20).toLocaleTimeString(), y: 13 + "°C"},
                  {x: new Date(2018, 8, 5, 14, 55, 20).toLocaleTimeString(), y: 15 + "°C"},
                  {x: new Date(2018, 8, 6, 16, 55, 20).toLocaleTimeString(), y: 21 + "°C"},
                  {x: new Date(2018, 8, 7, 18, 55, 20).toLocaleTimeString(), y: 22 + "°C"},
                  {x: new Date(2018, 8, 8, 20, 55, 20).toLocaleTimeString(), y: 28 + "°C"},
                  {x: new Date(2018, 8, 9, 21, 10, 20).toLocaleTimeString(), y: 34 + "°C"},
                  {x: new Date(2018, 8, 10, 22, 30, 20).toLocaleTimeString(), y: 37 + "°C"},
                  {x: new Date(2018, 8, 11, 22, 40, 20).toLocaleTimeString(), y: 42 + "°C"},
                  {x: new Date(2018, 8, 12, 23, 55, 20).toLocaleTimeString(), y: 44 + "°C"}
                ]}

              />
            </VictoryChart>
        </div>
      );
    }
  }
/*   ReactDOM.render(<App/>, mountNode)
 */

 export default Chart;