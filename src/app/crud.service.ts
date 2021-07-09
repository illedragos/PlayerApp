import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PlayerRequestDTO, PlayerResponseDTO } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API_URL="http://localhost:8080/api/v1/player";

  constructor(private httpClient: HttpClient) { }

    getPlayers():Observable<PlayerResponseDTO[]>{
      return this.httpClient.get<PlayerResponseDTO[]>(this.API_URL);
    }
    
    addPlayer(player:PlayerRequestDTO):Observable<any>{
     return this.httpClient.post<any>(this.API_URL,player,{responseType:'json'});
    }

    deletePlayer(playerExtId:string):Observable<any>{
      return this.httpClient.delete(this.API_URL+'/' + playerExtId);
    }

    updatePlayer(playerExtId:string,player:PlayerRequestDTO):Observable<any>{
      return this.httpClient.put(this.API_URL + '/' +playerExtId,player);
    }
}
