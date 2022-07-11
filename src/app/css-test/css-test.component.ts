import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-css-test',
  templateUrl: './css-test.component.html',
  styleUrls: ['./css-test.component.css']
})
export class CssTestComponent implements OnInit {
  imgAll:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://picsum.photos/v2/list').subscribe(res =>{
      this.imgAll = res;
    })
  }

}
