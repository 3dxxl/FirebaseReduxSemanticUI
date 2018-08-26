import React, {Component} from 'react';
//import * as V from 'victory';
import {VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryTheme} from 'victory';


import './css.css';


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
            <VictoryChart 
            theme={VictoryTheme.material}
            padding={{top: 10, left: 50, right: 50, bottom: 30}}
            width={1100} height={350} scale={{x: "time"}}
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
                  data: {
                    stroke: "green",
                    strokeWidth: 5
                  },
                  
                }}
                data={[
                  {x: new Date(2018, 8,  1,  1, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  5 + "°C"},
                  {x: new Date(2018, 8,  2,  6, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  7 + "°C"},
                  {x: new Date(2018, 8,  3, 10, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  3 + "°C"},
                  {x: new Date(2018, 8,  4, 10, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  3 + "°C"},
                  {x: new Date(2018, 8,  4, 12, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  8 + "°C"},
                  {x: new Date(2018, 8,  5, 12, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  8 + "°C"},
                  {x: new Date(2018, 8,  5, 13, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  5 + "°C"},
                  {x: new Date(2018, 8,  6, 14, 55, 20).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), y:  20 + "°C"},
                
                ]}
              />
  
            </VictoryChart>

  
            <VictoryChart
              theme={VictoryTheme.material}          
              padding={{top: 10, left: 50, right: 50, bottom: 30}}
              width={880} height={450} scale={{x: "time"}}
              containerComponent={
                <VictoryBrushContainer responsive={false}
                  brushDimension="x"
                  brushDomain={this.state.selectedDomain}
                  onBrushDomainChange={this.handleBrush.bind(this)}
                />
              }
            >
              {/* <VictoryAxis
                tickValues={[
                  new Date(2018, 8, 1),
                  new Date(2018, 8, 2),
                  new Date(2018, 8, 3),
                  new Date(2018, 8, 4),
                  new Date(2018, 8, 5),
                  new Date(2018, 8, 6),
                  new Date(2018, 8, 7),
                  new Date(2018, 8, 8),
                  new Date(2018, 8, 9),
                  new Date(2018, 8, 10),
                  new Date(2018, 8, 11),
                  new Date(2018, 8, 12),
                ]}
                tickFormat={(x) => new Date(x).setUTCFullYear([], {month:"string"})}
              />  */}
              <VictoryLine
                style={{
                  data: {stroke: "red"}
                }}
                data={[

                  {x: new Date(2018, 8,  1,  1, 55, 20).toLocaleTimeString(), y:  5 + "°C"},
                  {x: new Date(2018, 8,  2,  6, 55, 20).toLocaleTimeString(), y:  7 + "°C"},
                  {x: new Date(2018, 8,  3, 10, 55, 20).toLocaleTimeString(), y:  3 + "°C"},
                  {x: new Date(2018, 8,  4, 10, 55, 20).toLocaleTimeString(), y:  3 + "°C"},
                  {x: new Date(2018, 8,  4, 12, 55, 20).toLocaleTimeString(), y:  8 + "°C"},
                  {x: new Date(2018, 8,  5, 12, 55, 20).toLocaleTimeString(), y:  8 + "°C"},
                  {x: new Date(2018, 8,  5, 13, 55, 20).toLocaleTimeString(), y:  5 + "°C"},
                  {x: new Date(2018, 8,  6, 14, 55, 20).toLocaleTimeString(), y:  20 + "°C"},


                  
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