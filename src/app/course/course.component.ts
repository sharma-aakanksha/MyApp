
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { ICovid } from '../ICovid';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  Covid:ICovid[] = [];
  constructor(service:ServiceService) {
    service.getService().subscribe(data => this.Covid = data);
   }

  ngOnInit(): void {
  }

}

