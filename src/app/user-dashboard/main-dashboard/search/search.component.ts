import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServerService} from '../../../server/server.service';
import Swal from 'sweetalert2';
import * as path from 'path';
import { Server } from '../../../server/server';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  noteForm!: FormGroup
  noteData: any = []
  noteObj: Server ={
    id: '',
    place: '',
    mobile: 0,
    desc: '',
    food_img: undefined
  }
  constructor(private fb:FormBuilder, private serverService:ServerService) {
    this.noteForm = this.fb.group({
      place:['', Validators.required],
      decription:['', Validators.required],
      image:['', Validators.required],
      mobile:['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.getAllNotes()
  }
  addNote(){
    const {value} = this.noteForm
    console.log(value);
    this.noteObj.id ='',
    this.noteObj.place =value.place,
    this.noteObj.mobile =value.mobile,
    this.noteObj.desc =value.decription,
    this.noteObj.food_img =value.image

    this.serverService.addNote(this.noteObj).then((note)=>{
      if(note){
        alert("Item Added Sucessfull");
        this.noteForm.reset();
      }
    })
    
  }
  // get data
  getAllNotes(){
    this.serverService.getNotes().subscribe((res:Server[])=>{
      console.log(res)
      this.noteData = res;
    })
  }

  searchValue : string ="";

  // for book now button and change the text of button to booked
  itemBooked(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, book it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Booked!',
          'Your item has been booked successfully.',
          'success'

        )
        
      }
    })
  }


}