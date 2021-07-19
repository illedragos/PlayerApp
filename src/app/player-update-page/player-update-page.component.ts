import { Component, Inject, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { PlayerRequestDTO, PlayerResponseDTO, PlayerRank } from '../interfaces';
import { Location } from '@angular/common';
import { Router , ActivatedRoute} from '@angular/router';

import {

  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-player-update-page',
  templateUrl: './player-update-page.component.html',
  styleUrls: ['./player-update-page.component.css']
})

export class PlayerUpdatePageComponent implements OnInit {
 
  player:PlayerResponseDTO;

  playerExternalId:string;

   playerDetailsForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    rank: new FormControl(''),
  });

  constructor(

    private crudService:CrudService,
    private location:Location,
    private router:Router,private route: ActivatedRoute

  )
   {
   //  this.player=this.router.getCurrentNavigation().extras.state.player;
     this.playerExternalId = this.route.snapshot.paramMap.get('id');  
   }

  ngOnInit(): void {

     this.playerExternalId = this.route.snapshot.paramMap.get('id'); 

    this.crudService.getPlayer(Number(this.playerExternalId)).subscribe(res=>
      {
      this.player=res;
          this.playerDetailsForm = new FormGroup({
      name: new FormControl(this.player?.name, [
        Validators.required,
      ]),
      email: new FormControl(this.player?.email),
      dateOfBirth: new FormControl(this.player?.dateOfBirth),
      rank: new FormControl(this.player?.rank),
    });
      });

  }


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

    this.crudService.updatePlayerWithId(Number(this.playerExternalId), {name,email,dateOfBirth,rank} as PlayerRequestDTO).subscribe(() => {this.location.back();});
    console.warn(this.playerDetailsForm.value);

    this.location.back();

  }}
