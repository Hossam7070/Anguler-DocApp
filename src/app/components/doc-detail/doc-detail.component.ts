import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap ,Router} from '@angular/router';
@Component({
  selector: 'app-doc-detail',
  templateUrl: './doc-detail.component.html',
  styleUrls: ['./doc-detail.component.css'],
})
export class DocDetailComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {}
  docId: any;
  doctorsDetails: any;
  imgSrc = `../../../assets/man.png`;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.docId = params.get('id');
    });
    this.http
      .get<any>(`http://localhost:3000/doctor/${this.docId}`)
      .subscribe((data) => {
        this.doctorsDetails = data;
      });
  }
  back(){
    this.router.navigate(['/'])
  }

}


