import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user_name: string = '';
  password: string = '';
  showMessage = 'none';
  signupStatus = false;
  errorMessage: any = '';
  

  constructor(private service:CommonService) { }
  signup() {
    this.service.signupService(this.user_name, this.password).subscribe((signupData) => {
      console.log(signupData)
      this.showMessage = 'block';
      this.signupStatus = signupData.signup;
      this.errorMessage = signupData.message;
    })
  }
  ngOnInit(): void {
  }

}
