import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  addDocForm = this.fb.group({
    doctorName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],

    phone: ['', [Validators.required, Validators.minLength(8)]],
    gender: ['', [Validators.required]],
    offDays: ['', [Validators.required]],
    age: ['', [Validators.required]],
    speciality: ['', [Validators.required]],
    rating: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let head = new HttpHeaders(
      {
        authorization: `${localStorage.getItem('token')}`,
      }

    );
    this.http
      .post<any>('http://localhost:3000/doctor', this.addDocForm.value ,{ headers: head})
      .subscribe((data) => {
        console.log(data);
        // this.router.navigate(['/admin-login']);
      });
  }
}

// doctorName : String ,
//   phone:Number,
//   gender:String,
//   offDays:String,
//   age : Number,
//   speciality: String,
//   rating: Number,
//   city: String, --> -->
