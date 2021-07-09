import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { PlayerRequestDTO, PlayerResponseDTO } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { PlayerAddDialogComponent } from '../player-add-dialog/player-add-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players:PlayerResponseDTO[];

  constructor(private crudService:CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {
  this.crudService.getPlayers().subscribe(res=>
    {this.players=res;
    console.log(res);
    });

  }

  onAddPlayer() {
    const dialogRef = this.dialog.open(PlayerAddDialogComponent, {
      autoFocus: false,
    });

    dialogRef
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
        result && this.crudService.addPlayer(result).subscribe(res=>{
          console.log(res);
          this.crudService.getPlayers().subscribe(response=>this.players=response);
        });
      });
  }

  onDeletePlayer(player: PlayerResponseDTO) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Player ${player.name} will be deleted. Are you sure?`,
        buttonColor: 'warn',
        buttonLabel: 'Yes',
        icon: 'delete',
      },
      autoFocus: false,
    });

    dialogRef
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
        result && this.crudService.deletePlayer(player.externalId).subscribe(res=>{
          console.log(res);
          this.crudService.getPlayers().subscribe(response=>this.players=response);
        });
      });
    }

    onUpdatePlayer(playerExtId:string,player:PlayerRequestDTO){
      const dialogRef = this.dialog.open(PlayerAddDialogComponent, {
      data:{player},
        autoFocus: false,
      });
      dialogRef
      .afterClosed()
      .subscribe((result : PlayerRequestDTO)=>{
        result && this.crudService.updatePlayer(playerExtId,result)
      .subscribe(res=>{
        console.log(res);
        this.crudService.getPlayers().subscribe(response=>this.players=response);
      })}
      )
    }
    

}
