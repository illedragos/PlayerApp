export interface PlayerRequestDTO{
    name:string;
    dateOfBirth:Date;
    email:string;
    rank:string;
}

export interface PlayerResponseDTO{
    name:string;
    dateOfBirth:Date;
    email:string;
    rank:string;
    externalId:string;
    age:number;
}

export interface PlayerRank{
    displayName:string;
    value:string
}
