import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginUser } from '../login-user';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  access={}
  constructor(private _loginService: LoginService, private _router: Router, private _route: ActivatedRoute){}

  loginUser = new LoginUser('','')

  onLoginSubmit()
  {
      this._loginService.login(this.loginUser).subscribe(response => this.access = response)
      this._router.navigate(["/connect"])

  }

}
