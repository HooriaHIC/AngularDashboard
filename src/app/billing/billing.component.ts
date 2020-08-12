import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  postData = {
    client: 'mark ronson',
    date: '24/5/2019',
    payment: 9000,
    status: 'paid',
  }
  url = `http://httpbin.org/post`;
  clientName;
  date;
  payment;
  status;
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then((data: any) => {
      console.log(data.json.client);
      this.clientName = data.json.client;
      this.date = data.json.date;
      this.payment = data.json.payment;
      this.status = data.json.status;
    });
  }




  ngOnInit() {
  }

}
