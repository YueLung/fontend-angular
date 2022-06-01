import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { MlbService } from '../apis/mlb.service';

type ChartDataType = { data: Array<number>, label: string };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDataLoading = false;

  avgChartLabels: Array<string> = [];
  avgChartData: Array<ChartDataType> = [];
  avgChartOptions: ChartOptions = { responsive: true };
  totalHit = 0;
  totalHr = 0;
  totalSb = 0;
  totalRbi = 0;

  playerList = [
    { display: '鈴木一郎', value: 'Ichiro' },
    { display: '大谷翔平', value: 'Shohei' },
    { display: 'Barry Bonds', value: 'barry bonds' },
  ]

  selectedPlayer?: { display: string, value: string };

  constructor(private service: MlbService) { }

  ngOnInit(): void {
    this.selectedPlayer = this.playerList[0];
    this.loadData();
  }

  loadData() {
    if (!this.selectedPlayer) return;

    this.isDataLoading = true;

    this.avgChartLabels = [];
    this.avgChartData = [{ data: [], label: this.selectedPlayer.display }];
    this.totalHit = 0;
    this.totalHr = 0;
    this.totalSb = 0;
    this.totalRbi = 0;

    this.service.getPlayerPastYearHittingsStats(this.selectedPlayer.value).subscribe(result => {
      result.forEach(seasonData => {
        const data = seasonData.sport_hitting_tm.queryResults.row;

        if (Array.isArray(data)) {
          data.forEach((stats: any) => {
            this.avgChartLabels.push(`${stats.season}-${stats.team_short}`);
            this.avgChartData[0].data.push(stats.avg);
            this.totalHit += +stats.h;
            this.totalHr += +stats.hr;
            this.totalSb += +stats.sb;
            this.totalRbi += +stats.rbi;
          });
        } else {
          this.avgChartLabels.push(`${data.season}-${data.team_short}`);
          this.avgChartData[0].data.push(data.avg);
          this.totalHit += +data.h;
          this.totalHr += +data.hr;
          this.totalSb += +data.sb;
          this.totalRbi += +data.rbi;
        }
      });

      this.isDataLoading = false;
    });
  }

}
