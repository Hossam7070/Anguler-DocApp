import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorServicesService {

  constructor(private http: HttpClient) {
  //   getAllDc():Observable<doctor>{
  //     return this.http.get<any>('http://localhost:3000/doctor')
  //   }
  //  }
}




}
//Doctors Model :
// {
//   doctorName : String ,
//   phone:Number,
//   gender:String,
//   offDays:String,
//   age : Number,
//   speciality: String,
//   rating: Number,
//   city: String,
// }
