import React ,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component{
    
    constructor(props){
        super(props);// to maintain its state 
        this.state={
            chartData:props.chartData
        }
    }
    //whatever you will pass from your main component i.e. from APP.js it will overrride all the properties which are defined in this object 
    static defaultProps={
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    } 
    render(){
        return(
        <div className="chart">
           <Bar
	   data={this.state.chartData}
	   options={{
            title:{
            display:this.props.displayTitle,
            text:this.props.chartTitle,
            fontSize:25
            },
            legend:{
            display:this.props.displayLegend,
            position:this.props.legendPosition
            },
            responsive: true, // to make charts responsive
            }}/>
            
            
            </div>

        )
    }
    
}
export default Chart;
