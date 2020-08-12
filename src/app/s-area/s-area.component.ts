import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-s-area',
  templateUrl: './s-area.component.html',
  styleUrls: ['./s-area.component.css']
})
export class SAreaComponent implements OnInit {


  postData = {
    sector: 'B06F50',
    address: 'clifton block 12, karachi, pakistan',
    paymentcol: 'Ahmed, Nouman',
  }
  url = `http://httpbin.org/post`;
  sector;
  address;
  paymentcol;
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then((data: any) => {
      console.log(data.json.client);
      this.sector = data.json.sector;
      this.address = data.json.address;
      this.paymentcol = data.json.paymentcol;
    });
  }

  ngOnInit() {
  }

}
