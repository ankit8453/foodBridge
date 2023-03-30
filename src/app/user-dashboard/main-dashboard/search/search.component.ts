import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServerService} from  'C:/Users/HP/Desktop/internship/foodBridge/src/app/server/server.service';
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
}