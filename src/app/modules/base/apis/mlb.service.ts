import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable, zip } from 'rxjs';

@Injectable()
export class MlbService {

  constructor(private http: HttpClient) { }

  getPlayerPastYearHittingsStats(player: any): Observable<any[]> {

    const playerId = player.id;
    const startDate = new Date(player.startDate)
    const endDate = new Date(player.endDate)

    let obsList = [];
    for (var year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
      obsList.push(this.getHittingsStats(playerId, year.toString()));
    }

    return zip([...obsList]);



    // return this.getPlayerInfo(player).pipe(
    //   mergeMap(result => {
    //     const playerId = result.search_player_all.queryResults.row.player_id;
    //     return this.getPlayerDetailInfo(playerId);
    //   }),
    //   mergeMap(result => {
    //     const data = result.player_info.queryResults.row;
    //     const playerId = data.player_id;
    //     const startDate = new Date(data.pro_debut_date)
    //     const endDate = data.end_date ? new Date(data.end_date) : new Date(data.status_date)

    //     let obsList = [];
    //     for (var year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    //       obsList.push(this.getHittingsStats(playerId, year.toString()));
    //     }

    //     return zip([...obsList]);
    //   })
    // );
  }

  getTeamList(): Observable<any> {
    const url = '~/mlb-api/json/named.team_all_season.bam';
    return this.http.get<any>(url, {
      params: {
        sport_code: `'mlb'`,
        all_star_sw: `'N'`,
        sort_order: 'name_asc',
        season: '2017'
      }
    });
  }

  getPlayerInfo(player: string): Observable<any> {
    const url = '~/mlb-api/json/named.search_player_all.bam';
    return this.http.get<any>(url, {
      params: {
        sport_code: `'mlb'`,
        name_part: `'${player}%'`
      }
    });
  }

  getPlayerDetailInfo(playerId: string): Observable<any> {
    const url = '~/mlb-api/json/named.player_info.bam';
    return this.http.get<any>(url, {
      params: {
        sport_code: `'mlb'`,
        player_id: `'${playerId}'`
      }
    });
  }

  getHittingsStats(playerId: string, season: string): Observable<any> {
    const url = '~/mlb-api/json/named.sport_hitting_tm.bam';
    return this.http.get<any>(url, {
      params: {
        league_list_id: `'mlb'`,
        game_type: `'R'`,
        season: `'${season}'`,
        player_id: `'${playerId}'`
      }
    });
  }

}
