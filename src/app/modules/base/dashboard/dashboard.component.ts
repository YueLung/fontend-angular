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

  playerList = [
    { display: 'Shohei Ohtani', value: 'Shohei' },
    { display: 'Ichiro suzuki', value: 'Ichiro' }
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

    this.service.getPlayerPastYearHittingsStats(this.selectedPlayer.value).subscribe(result => {
      result.forEach(seasonData => {
        const data = seasonData.sport_hitting_tm.queryResults.row;

        if (Array.isArray(data)) {
          data.forEach((stats: any) => {
            this.avgChartLabels.push(`${stats.season}-${stats.team_short}`);
            this.avgChartData[0].data.push(stats.avg);
          });
        } else {
          this.avgChartLabels.push(`${data.season}-${data.team_short}`);
          this.avgChartData[0].data.push(data.avg);
        }
      });

      this.isDataLoading = false;
    });
  }

}
