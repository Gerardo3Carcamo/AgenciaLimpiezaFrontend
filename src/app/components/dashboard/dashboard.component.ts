import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public api: ApiService, public alert: AlertService) {}

  dataByCuadrillas: any = {
    labels: [],
    datasets: [],
  };
  documentStyle = getComputedStyle(document.documentElement);
  textColor = this.documentStyle.getPropertyValue('--text-color');
  options: any;
  data: any;
  optionsBar:any;

  ngOnInit(): void {

    const textColor = this.documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');
    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: this.textColor,
          },
        },
      },
    };

    this.optionsBar = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    this.GetDataChart();
    this.GetDataByCuadrillas();
  }

  GetDataChart() {
    this.api
      .PostMethod(
        { CuadrillaID: parseInt(localStorage.getItem('cuadrilla')) },
        'Tarea/ChartCompletedHomeworks'
      )
      .subscribe((x) => {
        if (!x.error) {
          console.log(x.data);
          this.data = {
            labels: ['Incompletas', 'Completas'],
            datasets: [
              {
                data: [x.data[0].incompleted, x.data[0].completed],
                backgroundColor: [
                  this.documentStyle.getPropertyValue('--red-500'),
                  this.documentStyle.getPropertyValue('--green-500'),
                ],
                hoverBackgroundColor: [
                  this.documentStyle.getPropertyValue('--red-400'),
                  this.documentStyle.getPropertyValue('--green-400'),
                ],
              },
            ],
          };
        } else {
          this.alert.error('Error', 'Recargue la pagina nuevamente');
        }
      });
  }

  GetDataByCuadrillas() {
    this.api.GetMethod('Tarea/GetChartDataByCuadrillas').subscribe(x => {
      if (!x.error) {
        this.dataByCuadrillas = {
          labels: [],
          datasets: [],
        };
        let firstLabels = x.data.names;
        let dataCompleted = x.data.completed;
        let dataIncompleted = x.data.incompleted;
        let dataSet = [];
        dataSet.push({
          label: 'Completadas',
          backgroundColor: this.documentStyle.getPropertyValue('--green-500'),
          borderColor: this.documentStyle.getPropertyValue('--green-500'),
          data: dataCompleted
        });
        dataSet.push({
          label: 'Incompletas',
          backgroundColor: this.documentStyle.getPropertyValue('--red-500'),
          borderColor: this.documentStyle.getPropertyValue('--red-500'),
          data: dataIncompleted
        });
        this.dataByCuadrillas.labels = firstLabels;
        this.dataByCuadrillas.datasets = dataSet;
      }
    });
  }
}
