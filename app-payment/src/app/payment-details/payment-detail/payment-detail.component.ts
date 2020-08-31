
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: ['./payment-detail.css'
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  // tslint:disable-next-line: typedef
  resetForm(form?: NgForm)
  {
    if (form != null)
    {
      form.form.reset();
    }
    this.service.formData = {
      PMID: 0 ,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''

    };

  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm)
  {
    // tslint:disable-next-line: triple-equals
    if (this.service.formData.PMID == 0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }

  // tslint:disable-next-line: typedef
  insertRecord(form: NgForm)
  {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshfList();
      }
      );
  }

  // tslint:disable-next-line: typedef
  updateRecord(form: NgForm)
  {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshfList();
      },
      err => { console.log(err);
      }
      );
  }

}
