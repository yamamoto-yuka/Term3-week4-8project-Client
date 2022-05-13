import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user_name:string = '';
  password: string = '';
  showMessage = 'none';
  loingStatus = true;
  errorMessage:any = '';

  constructor(private service: CommonService, private router:Router) { }

  login() {
    this.service.loginService(this.user_name, this.password).subscribe((loginData) => {
      console.log(loginData);
      this.showMessage = 'block'
      this.loingStatus = loginData.login;
      this.errorMessage = loginData.message;
      if (loginData.login) {
        this.router.navigate(['/admin']);
        console.log(loginData.data[0].adminID)
        localStorage.setItem('adminID', JSON.stringify(loginData.data[0].adminID))

      }
    })
  }

  ngOnInit(): void {
  }

}
