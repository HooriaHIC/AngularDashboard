import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  bills: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getUserBilling().subscribe(data => {
      this.bills = data;
      console.log(this.bills);
    });

  }


  public series: any[] = [{
    name: "Sales",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855, 2.44, 5.11]
  }, {
    name: "Clients",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3, 1.1, 5.567]
  }, {
    name: "Growth",
    data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, 5.127, 3.690, 2.995, 0.3, 1.2]
  }];
  public categories: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  public data: any[] = [{
    kind: 'Sales', share: 0.175
  }, {
    kind: 'Subcriptions', share: 0.238
  }, {
    kind: 'Clients', share: 0.118
  }, {
    kind: 'Growth', share: 0.052
  }, {
    kind: 'Staff', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public labelContent(e: any): string {
    return e.category;
  }
}
