import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail ;
  list: PaymentDetail[];
  readonly rootUrl = 'http://localhost:55467';

  constructor( private http: HttpClient ) { }

  // tslint:disable-next-line: typedef
  postPaymentDetail()
  {
    return this.http.post(this.rootUrl + '/api/paymentDetail', this.formData );
  }

  // tslint:disable-next-line: typedef
  putPaymentDetail()
  {
    return this.http.put(this.rootUrl + '/api/paymentDetail/' + this.formData.PMID, this.formData);
  }
  // tslint:disable-next-line: typedef
  deletePaymentDetail( id )
  {
     return this.http.delete(this.rootUrl + '/api/paymentDetail/' + id);
  }

  // tslint:disable-next-line: typedef
  refreshfList()
  {
    this.http.get(this.rootUrl + '/api/paymentDetail').toPromise().then(res => this.list = res as PaymentDetail[]);
  }

}
