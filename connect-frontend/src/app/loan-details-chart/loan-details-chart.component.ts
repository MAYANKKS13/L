import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { LoanDetailsService } from '../services/loan-details.service';
import { DecimalPipe } from '@angular/common';



export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
  title:any
  legend:any
};


@Component({
  selector: 'app-loan-details-chart',
  templateUrl: './loan-details-chart.component.html',
  styleUrls: ['./loan-details-chart.component.css']
})
export class LoanDetailsChartComponent implements OnInit
 {
  @ViewChild("myChart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  
  loanAmount:number = 10000;
  interestAmount:number = 500;


constructor(private loanDetails:LoanDetailsService)
{
  
}



ngOnInit(): void {
  
  this.displayChart();
}





displayChart() {

  let principalamount:number = parseFloat(this.loanDetails.principalAmount);    
  let total:number = parseFloat(this.loanDetails.totalAmount);
  let interest:number = total - principalamount 

  this.chartOptions = {
    series: [principalamount, interest],
    title: {
      text: 'Break-up of Total Payment', // Specify the title text
      align: 'right', // Set title alignment (optional)
      offsetX: -50,
      margin: 0 ,// Set title margin (optional)
      marginLeft:5,
      style: {
        fontSize: '16px' // Set the desired font size here
      }
    },
    chart: {
      type: "donut"
    },
    labels: ["Principal Amount", "Total Interest"],
    legend: {
      position:"left",
      offsetX: 10,
      offsetY:20,
      style:{
      fontSize: '20px',
      fontWeight:'bold'
    }
            },
    
    responsive: [
      
      {
        breakpoint: 400,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }

      
    ]
  };


}



}



