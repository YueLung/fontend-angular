import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { MlbService } from '../apis/mlb.service';
import { HitterStatsModel } from '../models/mlb.model';

type ChartDataType = { data: Array<number>, label: string };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  isDataLoading = false;

  yearChartLabels: Array<string> = [];
  avgChartData: Array<ChartDataType> = [];
  hChartData: Array<ChartDataType> = [];
  chartOptions: ChartOptions = { responsive: true };
  tableData: Array<HitterStatsModel> = [];
  displayedColumns: string[] = ['year', 'team', 'g', 'pa', 'ab', 'h', 'hr', 'bb', 'sb', 'avg', 'slg'];

  totalHit = 0;
  totalHr = 0;
  totalSb = 0;
  totalRbi = 0;

  playerList = [
    { display: 'Aaron Judge', id: 592450 },
    { display: '大谷翔平', id: 660271 },
    { display: '鈴木一郎', id: 400085 },
    { display: 'Barry Bonds', id: 111188 },
    { display: 'Mike Trout', id: 545361 }
  ]

  selectedPlayer?: { display: string, id: number };

  constructor(private mlbService: MlbService) { }

  ngOnInit(): void {
    this.selectedPlayer = this.playerList[0];
    this.loadData();
  }

  loadData() {
    if (!this.selectedPlayer) return;

    this.isDataLoading = true;

    this.yearChartLabels = [];
    this.avgChartData = [{ data: [], label: this.selectedPlayer.display }];
    this.hChartData = [{ data: [], label: this.selectedPlayer.display }];
    this.tableData = [];
    this.totalHit = 0;
    this.totalHr = 0;
    this.totalSb = 0;
    this.totalRbi = 0;

    this.mlbService.getPlayerStats(this.selectedPlayer.id)
      .subscribe(result => {
        // console.log(result);
        this.tableData = result;

        result.forEach(x => {
          this.yearChartLabels.push(x.season);
          this.avgChartData[0].data.push(x.avg);
          this.hChartData[0].data.push(x.hits);
        });

        this.totalHit = result.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.hits;
        }, 0);

        this.totalHr = result.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.homeRuns
        }, 0);

        this.totalSb = result.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.stolenBases
        }, 0);

        this.totalRbi = result.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.rbi
        }, 0);

        this.isDataLoading = false;
      });
  }
}
