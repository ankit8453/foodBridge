import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  OTPsent(){
    alert("OTP sent to your registered email address. This OTP will be your password for the next 10 minutes.");
  }
}
