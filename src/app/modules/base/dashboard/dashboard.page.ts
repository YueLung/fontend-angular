import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { MlbService } from '../apis/mlb.service';
import { StatsModel } from '../models/mlb.model';

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
  tableData: Array<StatsModel> = [];
  displayedColumns: string[] = ['year', 'team', 'g', 'pa', 'ab', 'h', 'hr', 'bb', 'sb', 'avg', 'slg'];

  totalHit = 0;
  totalHr = 0;
  totalSb = 0;
  totalRbi = 0;

  playerList = [
    { display: '鈴木一郎', value: 'Ichiro', id: 400085, startDate: '2001-03-28T00:00:00', endDate: '2019-03-28T00:00:00' },
    { display: '大谷翔平', value: 'Shohei', id: 660271, startDate: '2018-03-28T00:00:00', endDate: '2022-03-28T00:00:00' },
    { display: 'Barry Bonds', value: 'barry bonds', id: 111188, startDate: '1986-03-28T00:00:00', endDate: '2007-03-28T00:00:00' },
    { display: 'Derek Jeter', value: 'Derek Jeter', id: 116539, startDate: '1995-03-28T00:00:00', endDate: '2014-03-28T00:00:00' },
    { display: 'Mike Trout', value: 'Mike Trout', id: 545361, startDate: '2011-03-28T00:00:00', endDate: '2022-03-28T00:00:00' }
  ]

  selectedPlayer?: { display: string, value: string, id: number, startDate: string, endDate: string };

  constructor(private service: MlbService) { }

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

    this.service.getPlayerPastYearHittingsStats(this.selectedPlayer).subscribe(result => {
      result.forEach(seasonData => {
        const data = seasonData.sport_hitting_tm.queryResults.row;

        if (Array.isArray(data)) {
          data.forEach((stats: any) => {
            this.yearChartLabels.push(`${stats.season}-${stats.team_short}`);
            this.avgChartData[0].data.push(stats.avg);
            this.hChartData[0].data.push(stats.h);
            this.totalHit += +stats.h;
            this.totalHr += +stats.hr;
            this.totalSb += +stats.sb;
            this.totalRbi += +stats.rbi;
            this.tableData.push({
              year: stats.season,
              team: stats.team_short,
              g: stats.g,
              pa: stats.tpa,
              ab: stats.ab,
              h: stats.h,
              hr: stats.hr,
              bb: stats.bb,
              sb: stats.sb,
              avg: stats.avg,
              slg: stats.slg,
            })
          });
        } else {
          this.yearChartLabels.push(`${data.season}-${data.team_short}`);
          this.avgChartData[0].data.push(data.avg);
          this.hChartData[0].data.push(data.h);
          this.totalHit += +data.h;
          this.totalHr += +data.hr;
          this.totalSb += +data.sb;
          this.totalRbi += +data.rbi;
          this.tableData.push({
            year: data.season,
            team: data.team_short,
            g: data.g,
            pa: data.tpa,
            ab: data.ab,
            h: data.h,
            hr: data.hr,
            bb: data.bb,
            sb: data.sb,
            avg: data.avg,
            slg: data.slg,
          })
        }
      });

      this.isDataLoading = false;
    });
  }

}
