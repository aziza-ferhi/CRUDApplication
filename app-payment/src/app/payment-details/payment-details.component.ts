import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [ 'body {  background-color: white;}']
})

export class PaymentDetailsComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onLogout()
  {
    localStorage.removeItem('token');
    this.route.navigate(['/user/login']);
  }

}
