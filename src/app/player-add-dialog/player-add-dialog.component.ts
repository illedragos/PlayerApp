import {Component, Inject, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlayerRank, PlayerRequestDTO } from '../interfaces';
@Component({
  selector: 'app-player-add-dialog',
  templateUrl: './player-add-dialog.component.html',
  styleUrls: ['./player-add-dialog.component.css']
})
export class PlayerAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlayerAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      player: PlayerRequestDTO;
    }
  ) {}

  playerRanks:Array<PlayerRank>=[
    {displayName:'BEGINNER',value:'B'},
    {displayName:'AMATEUR', value:'A'},
    {displayName:'PRO',value:'P'},
    {displayName:'SEMI-PRO',value:'SP'},
    {displayName:'WORD CLASS',value:'W'},
    {displayName:'LEGEND',value:'L'}
  ];

  playerDetailsForm = new FormGroup({
    name: new FormControl(this.data?.player?.name, [
      Validators.required,
    ]),
    email: new FormControl(this.data?.player?.email),
    dateOfBirth: new FormControl(this.data?.player?.dateOfBirth),
    rank: new FormControl(this.data?.player?.rank)
  });

  ngOnInit(): void {
    console.log(this.data);
  }

  onCancel(): void {
    console.log(this.data.player.name);
    this.dialogRef.close();
  }

}
