import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:55467';


  constructor(private http: HttpClient, private fb: FormBuilder) {}

  formModel = this.fb.group({
     UserName: ['', Validators.required],
     Email: ['', Validators.email],
     FullName: [''],
     Passwords: this.fb.group({
       Password: ['', [Validators.required, Validators.minLength(4)]],
       ConfirmPassword: ['', Validators.required]
     },
     { validator: this.ComparePasswords})

  });

  // tslint:disable-next-line: typedef
  ComparePasswords(fg: FormGroup)
  {
    const confirmPswrdCtrl = fg.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors)
    {
       if (fg.get('Password').value !== confirmPswrdCtrl.value  )
       {
         confirmPswrdCtrl.setErrors({passwordMismatch: true});
       }
       else
       {
        confirmPswrdCtrl.setErrors(null);
       }
    }
  }

  // tslint:disable-next-line: typedef
  Register()
  {
    // tslint:disable-next-line: prefer-const
    let body = {
       UserName: this.formModel.value.UserName,
       Email: this.formModel.value.Email,
       FullName: this.formModel.value.FullName,
       Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.rootUrl + '/api/ApplicationUser/Register' , body);
  }
  // tslint:disable-next-line: typedef
  login(formData)
  {
    return (this.http.post(this.rootUrl + '/api/ApplicationUser/Login' , formData));
  }
}
