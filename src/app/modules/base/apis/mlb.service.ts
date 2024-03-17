import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HitterStatsModel } from '../models/mlb.model';

@Injectable()
export class MlbService {

  constructor(private http: HttpClient) { }

  getPlayerStats(playerId: number): Observable<Array<HitterStatsModel>> {
    const url = `~/mlb-api/people/${playerId}`;
    return this.http.get<any>(url, {
      params: {
        hydrate: 'stats(type=yearByYear)'
      }
    }).pipe(map(result => {
      return result.people[0].stats[0].splits
        .filter((x: any) => x.team != undefined) // filter掉同一年轉隊的資料
        .map((x: any) => {
          return <HitterStatsModel>{
            season: x.season,
            team: x.team.name,
            ...x.stat
          }
        });
    }));
  }
}
