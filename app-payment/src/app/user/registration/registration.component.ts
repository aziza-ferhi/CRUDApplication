import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }


  // tslint:disable-next-line: typedef
  onSubmit()
  {
this.service.Register().subscribe(
  (res: any) => {
          if (res.succeeded)
          {
            this.service.formModel.reset();
            this.toastr.success('New user created', 'Registration Successful');
          }
          else
          {
            res.errors.forEach(element => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error('user is already taken', 'Registration Failed');
                  break;

                default:
                  this.toastr.error(element.description, 'Registration Failed');
                  break;
              }
            });
          }
  },
  err => { console.log(err); }

);
  }

}
