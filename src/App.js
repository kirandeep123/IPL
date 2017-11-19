import React, { Component } from 'react';
import Chart from './Chart';
import './App.css';
//import {csv} from 'd3-request';

class App extends Component {
    constructor(){
        super();
        this.getChartData = this.getChartData.bind(this);
        this.state={
            chartData:{
                
            }
        }
    }
    // this runs when component is mounted 
    componentWillMount(){
       var csvFilePath = require("./Player_Match.csv");
         var Papa = require("papaparse/papaparse.min.js");
        Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: this.getChartData
    });
        this.getChartData();
    }
    getChartData(result){
      this.setState({
            chartData:{
                labels:['Normal','draw','no-result','tie'],
                datasets:[
                    {
                    label:'Avergae No of matches',
                    data:['23423','34243','3234','3234'],
                    backgroundColor:'green'}
                     ]
            }
                
            
        }); 
        
     //  this.setState({chartData:data});
        console.log('stataaaa',this.state.chartData);
    }
    

  render() {
    return (
        <div className="App">
        <div className="App-header">
  <Chart legendPosition="bottom" chartData={this.state.chartData} chartTitle="ipl matches data"/>
<Chart legendPosition="top" chartData={this.state.chartData} chartTitle="ipl deliveries data"/>
</div>
        </div>
    )
  }
}

export default App;
