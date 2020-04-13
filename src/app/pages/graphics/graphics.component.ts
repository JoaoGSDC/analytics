import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataGraphics } from 'src/app/interface/dataGraphic';
import { GraphicsService } from 'src/services/graphics.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  years!: number[];
  graphicFooter!: string[];
  dataGraphic!: DataGraphics[];
  totalDataGraphic!: DataGraphics[];

  total = [];
  value = [];

  LineChart = [];
  BarChart = [];
  PieChart = [];

  graphicsService: GraphicsService;

  constructor() {
    this.graphicsService = new GraphicsService();
  }

  ngOnInit(): void {
    this.years = this.graphicsService.getYears();
    this.graphicFooter = this.graphicsService.getFooter();
    this.dataGraphic = this.graphicsService.getDataGraphics();
    this.totalDataGraphic = this.graphicsService.getTotal();

    this.checkMobile();

    this.loadInfo();
    this.createBarsGraphic();
    this.createLineGraphic();
    this.createPieGraphic();
  }

  // Ajusta os tamanhos dos gráficos em caso da resolução ser para mobile
  checkMobile(): void {
    if (window.innerWidth < 600) {
      const barChart = document.getElementById('barChart');
      const lineChart = document.getElementById('lineChart');
      const pieChart = document.getElementById('pieChart');
  
      barChart.setAttribute('width', '300');
      barChart.setAttribute('height', '400');
  
      lineChart.setAttribute('width', '300');
      lineChart.setAttribute('height', '400');
  
      pieChart.setAttribute('width', '300');
      pieChart.setAttribute('height', '800');
    }
  }

  // Carrega valores para ser usado nos gráficos ao trocar os anos
  loadInfoYear(iYear: any) {
    this.value = [];
    this.total = [];

    if (Number(iYear) === 1) {
      this.totalDataGraphic.forEach((t) => {
        this.value.push(t.value);
        this.total.push(t.total);
      });
    } else {
      this.dataGraphic.forEach((d) => {
        if (d.year === Number(iYear)) {
          this.value.push(d.value);
          this.total.push(d.total);
        }
      });
    }

    this.createBarsGraphic();
    this.createLineGraphic();
    this.createPieGraphic();
  }

  // Carrega as informações ao inicializar o componente
  loadInfo(): void {
    this.totalDataGraphic.forEach((t) => {
      this.value.push(t.value);
      this.total.push(t.total);
    });
  }

  // Cria gráfico de barras
  createBarsGraphic(): void {
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.graphicFooter,
        datasets: [
          {
            label: "E-commerce",
            backgroundColor: "rgba(153, 102, 255, 0.3)",
            data: this.value
          },
          {
            label: "Total",
            backgroundColor: "rgba(255, 69, 0, 0.3)",
            data: this.total
          }
        ]
      },
      options: {
        title: {
          text: "Total and E-commerce Sales by Merchandise Lin",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  // Cria gráfico de linhas
  createLineGraphic(): void {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.graphicFooter,
        datasets: [
          {
            label: 'E-commerce',
            data: this.value,
            fill: false,
            lineTension: 0.2,
            borderColor: "rgba(153, 102, 255, 0.3)",
            borderWidth: 1
          },
          {
            label: 'Total',
            data: this.total,
            fill: false,
            lineTension: 0.2,
            borderColor: "rgba(255, 69, 0, 0.3)",
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "Total and E-commerce Sales by Merchandise Lin",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  // Cria gráfico de pizza
  createPieGraphic(): void {
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: this.graphicFooter,
        datasets: [
          {
            label: '# of Votes',
            data: this.value,
            backgroundColor: [
              'rgba(255, 255, 255, 0.35)',
              'rgba(255, 205, 243, 0.35)',
              'rgba(233, 222, 187, 0.35)',
              'rgba(255, 238, 51, 0.35)',
              'rgba(255, 146, 51, 0.35)',
              'rgba(128, 0, 128, 0.35)',
              'rgba(41, 208, 208, 0.35)',
              'rgba(157, 175, 255, 0.35)',
              'rgba(129, 197, 122, 0.35)',
              'rgba(173, 35, 35, 0.35)',
              'rgba(129, 38, 192, 0.35)',
              'rgba(129, 74, 25, 0.35)',
              'rgba(29, 105, 20, 0.35)',
              'rgba(42, 75, 215, 0.35)'
            ],
            borderColor: [
              'rgba(255, 255, 255, 0.35)',
              'rgba(255, 205, 243, 0.35)',
              'rgba(233, 222, 187, 0.35)',
              'rgba(255, 238, 51, 0.35)',
              'rgba(255, 146, 51, 0.35)',
              'rgba(128, 0, 128, 0.35)',
              'rgba(41, 208, 208, 0.35)',
              'rgba(157, 175, 255, 0.35)',
              'rgba(129, 197, 122, 0.35)',
              'rgba(173, 35, 35, 0.35)',
              'rgba(129, 38, 192, 0.35)',
              'rgba(129, 74, 25, 0.35)',
              'rgba(29, 105, 20, 0.35)',
              'rgba(42, 75, 215, 0.35)'
            ],
            borderWidth: 1
          },
          {
            label: '# of Votes',
            data: this.total,
            backgroundColor: [
              'rgba(255, 255, 255, 0.35)',
              'rgba(255, 205, 243, 0.35)',
              'rgba(233, 222, 187, 0.35)',
              'rgba(255, 238, 51, 0.35)',
              'rgba(255, 146, 51, 0.35)',
              'rgba(128, 0, 128, 0.35)',
              'rgba(41, 208, 208, 0.35)',
              'rgba(157, 175, 255, 0.35)',
              'rgba(129, 197, 122, 0.35)',
              'rgba(173, 35, 35, 0.35)',
              'rgba(129, 38, 192, 0.35)',
              'rgba(129, 74, 25, 0.35)',
              'rgba(29, 105, 20, 0.35)',
              'rgba(42, 75, 215, 0.35)'
            ],
            borderColor: [
              'rgba(255, 255, 255, 0.35)',
              'rgba(255, 205, 243, 0.35)',
              'rgba(233, 222, 187, 0.35)',
              'rgba(255, 238, 51, 0.35)',
              'rgba(255, 146, 51, 0.35)',
              'rgba(41, 208, 208, 0.35)',
              'rgba(41, 208, 208, 0.35)',
              'rgba(157, 175, 255, 0.35)',
              'rgba(129, 197, 122, 0.35)',
              'rgba(173, 35, 35, 0.35)',
              'rgba(129, 38, 192, 0.35)',
              'rgba(129, 74, 25, 0.35)',
              'rgba(29, 105, 20, 0.35)',
              'rgba(42, 75, 215, 0.35)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "Total and E-commerce Sales by Merchandise Lin",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

}
