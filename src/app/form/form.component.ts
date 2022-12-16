import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoeType } from './poetype';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //profileForm!: FormGroup;


  poeForm = new FormGroup({
    title: new FormControl('',Validators.required),
    begindate: new FormControl('',Validators.required),
    enddate:new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),

  });
  constructor() { }

  options =[PoeType.POEI,PoeType.POEC]
  selected='POEI'
  ngOnInit(): void {

  }
    

  public goHome(): void {
    
  }

  onSubmit() {
    console.log( this.poeForm.value);
  }

  getOptionLabel(option: PoeType) {
    switch (option) {
      case PoeType.POEI:
        return "POEI";
      case PoeType.POEC:
        return "POEC";
      default:
        throw new Error("Unsupported option");
    }
  }

  onSelect(){
    console.log(this.selected)
} 
}
