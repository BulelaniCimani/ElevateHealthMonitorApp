import { Component } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  token : string =''
  userModel = new User('','','','')

  constructor(private _registrationService: RegistrationService){}

  onSubmit()
  {
    this._registrationService.register(this.userModel)
                              .subscribe(response => this.token = response)
    
    console.log(this.userModel)
    console.log(this.token)
  
  }
}
