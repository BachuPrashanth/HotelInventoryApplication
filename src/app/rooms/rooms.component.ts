import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
import { RoomData } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor() { }
// Interpolation
  name: string = "Prashanth";
  age: number = 24;

//Property Binding
  title:string = "Hotel rooms";

  hotelrooms = false;

  
  message:string ='';
//Event Binding
  toggle(){
 this.hotelrooms = !this.hotelrooms;
  }

  rooms: Room ={
    totalRooms:10,
    occupiedRooms: 5,
    availableRooms: 5,
  }

  roomData: RoomData[] =[
    {roomNo:1,
     roomType:'Delux',
     price:400,
    checkinTime:new Date('3-jul-2024')
    },
    {roomNo:2,
      roomType:'Super-Delux',
      price:600,
     checkinTime:new Date('4-jul-2024')
     },
     {roomNo:3,
      roomType:'Ordinary',
      price:300,
     checkinTime:new Date('2-jul-2024')
     }
  ]

  login="patient";
  
  ngOnInit(): void {
  }

}
