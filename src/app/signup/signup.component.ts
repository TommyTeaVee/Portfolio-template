import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  profileForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      password: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });

  }

  ngOnInit(): void {

  }
  submitForm(){
    console.warn(this.profileForm.value);

  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy', password: 'Strong Password',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
