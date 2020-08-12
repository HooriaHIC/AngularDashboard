import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {


  postData = {
    client: 'David jazz',
    date: '24/5/2019',
  }
  url = `http://httpbin.org/post`;
  clientName;
  date;
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then((data: any) => {
      console.log(data.json.client);
      this.clientName = data.json.client;
      this.date = data.json.date;
    });
  }

  ngOnInit() {
  }

  public mailmethod: string = "mailto:no-one@snai1mai1.com";
  public mailSubject: string = "?subject=Your payment Invoice";
  public mailContent: string = "website&body=Hi, thanks for your interest. \n your payment invoice is ready and attached in this email.";

  public mail: string = "" + this.mailmethod + this.mailSubject + this.mailContent;
}
