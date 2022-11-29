import { Component, OnInit } from '@angular/core';

interface FormData{
  name: string;
  surname: string;
  address: string;
  password: string;
  confirmPassword: string;
  allowAdverts: boolean;
  allowWeather: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData: FormData = this.formDataInit();

  constructor() { }

  public formDataInit(){
    return {
      name: '',
      surname: '',
      address: '',
      password: '',
      confirmPassword: '',
      allowAdverts: false,
      allowWeather: false
    };
  }

  public register(){
    let errors = '';
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(this.formData.name == '') errors += 'name is null\n';
    if(this.formData.surname == '') errors += 'surname is null\n';
    if(!this.formData.address.match(emailRegex)) errors += 'address should be in email format\n';
    if(this.formData.password !== this.formData.confirmPassword) errors += 'password missmatch\n';
    alert(errors);
  }

  public reset(){
    this.formData = this.formDataInit(); 
  }

  ngOnInit() {
  }

}
