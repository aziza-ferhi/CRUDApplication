import { PaymentDetail } from './../../shared/payment-detail.model';
import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: ['./PaymentDetaillist.css'
  ]
})
export class PaymentDetailListComponent implements OnInit {

 constructor(public service: PaymentDetailService, private toastr: ToastrService) { }



  ngOnInit(): void {
    this.service.refreshfList();
  }

  // tslint:disable-next-line: typedef
  populateForm(pd: PaymentDetail)
  {
    this.service.formData = Object.assign({}, pd);
  }
  // tslint:disable-next-line: typedef
  onDelete(PMID)
  {
    if (confirm('Are you sure to delete this record?'))
    {
    this.service.deletePaymentDetail(PMID).subscribe(
      res => {
        this.service.refreshfList();
        this.toastr.warning('Delete successfully', 'Payment Detail Register');
      },
      err => {
            console.log(err);
          }

    );

    }
  }

}
