import React, {Component} from 'react';
import * as V from 'victory';
import {VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis} from 'victory';
import moment from 'moment-timezone';

class Chart extends React.Component {

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
            <VictoryChart width={800} height={350} scale={{x: "time"}}
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
                  data: {stroke: "blue"}
                }}
                data={[
                    {x: getDate([2018, 1, 1, 16,55, 20, 33]), y:  5 + "°C"},
                    {x: getDate([2018, 1, 1,  8,55, 20, 33]) , y:  7 + "°C"},
                    {x: getDate([2018, 1, 1, 12,55, 20, 33]) , y: 12 + "°C"},
                    {x: getDate([2018, 1, 1, 14,55, 20, 33]) , y: 13 + "°C"},
                    {x: getDate([2018, 1, 1, 16,55, 20, 33]) , y: 15 + "°C"},
                    {x: getDate([2018, 1, 1, 18,55, 20, 33]) , y: 21 + "°C"},
                    {x: getDate([2018, 1, 1, 20,55, 20, 33]) , y: 22 + "°C"},
                    {x: getDate([2018, 1, 1, 22,55, 20, 33]) , y: 28 + "°C"},
                    {x: getDate([2018, 1, 1, 23,10, 20, 33]) , y: 34 + "°C"},
                    {x: getDate([2018, 1, 2, 24,30, 20, 33]) , y: 37 + "°C"},
                    {x: getDate([2018, 1, 2, 24,40, 20, 33]) , y: 42 + "°C"},
                    {x: getDate([2018, 1, 2, 24,55, 20, 33]) , y: 44 + "°C"}
                ]}
              />
  
            </VictoryChart>
  
            <VictoryChart
              padding={{top: 0, left: 50, right: 50, bottom: 30}}
              width={600} height={90} scale={{x: "time"}}
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
                  new Date(2018, 1, 1, 1:0),
                  /* new Date(1990, 1, 1),
                  new Date(1995, 1, 1),
                  new Date(2000, 1, 1),
                  new Date(2005, 1, 1),
                  new Date(2010, 1, 1) */
                ]}
                tickFormat={(x) => new Date(x).getFullYear()}
              />



              <VictoryLine
                style={{
                  data: {stroke: "green"}
                }}
                data={[
                    {x: new Date(2018, 1, 1,  6:55, 20, 33), y:  5 + "°C"},
                    {x: new Date(2018, 1, 1,  8:55, 20, 33), y:  7 + "°C"},
                    {x: new Date(2018, 1, 1, 12:55, 20, 33), y: 12 + "°C"},
                    {x: new Date(2018, 1, 1, 14:55, 20, 33), y: 13 + "°C"},
                    {x: new Date(2018, 1, 1, 16:55, 20, 33), y: 15 + "°C"},
                    {x: new Date(2018, 1, 1, 18:55, 20, 33), y: 21 + "°C"},
                    {x: new Date(2018, 1, 1, 20:55, 20, 33), y: 22 + "°C"},
                    {x: new Date(2018, 1, 1, 22:55, 20, 33), y: 28 + "°C"},
                    {x: new Date(2018, 1, 1, 23:10, 20, 33), y: 34 + "°C"},
                    {x: new Date(2018, 1, 2, 24:30, 20, 33), y: 37 + "°C"},
                    {x: new Date(2018, 1, 2, 24:40, 20, 33), y: 42 + "°C"},
                    {x: new Date(2018, 1, 2, 24:55, 20, 33), y: 44 + "°C"}
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

 function getDate(date) {
        
        var d = new Date(date[0], date[1], date[2], date[3], date[4], date[5], date[6]);
        var n = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        var f = n.split(',');
        console.log(n)
        return n;
      }