import { Component, Inject, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { PlayerRequestDTO, PlayerResponseDTO, PlayerRank } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { PlayerAddDialogComponent } from '../player-add-dialog/player-add-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-player-add-page',
  templateUrl: './player-add-page.component.html',
  styleUrls: ['./player-add-page.component.css']
})

export class PlayerAddPageComponent implements OnInit {

  players:PlayerRequestDTO[];

  constructor(
    
    private crudService:CrudService,
    private location:Location,
 
    ) 
    {
     
    }



  ngOnInit(): void {
    
  }
  

  playerDetailsForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    rank: new FormControl(''),
  });

  playerRanks:Array<PlayerRank>=[
    {displayName:'BEGINNER',value:'B'},
    {displayName:'AMATEUR', value:'A'},
    {displayName:'PRO',value:'P'},
    {displayName:'SEMI-PRO',value:'SP'},
    {displayName:'WORD CLASS',value:'W'},
    {displayName:'LEGEND',value:'L'}
  ];

  onSubmit() {
    
    const name=this.playerDetailsForm.value.name;
    const email=this.playerDetailsForm.value.email;
    const dateOfBirth=this.playerDetailsForm.value.dateOfBirth;
    const rank=this.playerDetailsForm.value.rank;

    this.crudService.addPlayer({name,email,dateOfBirth,rank} as PlayerRequestDTO).subscribe(() => {this.location.back();});
    console.warn(this.playerDetailsForm.value);
  }


}
