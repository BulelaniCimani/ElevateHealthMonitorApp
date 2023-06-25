import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit{
  token : string | null =''
  auth = '';
   connectClosed =  false
   
   public ngOnInit(): void
   {
     let value = localStorage.getItem("token");
     this.token = value
     console.log(value)
   }

}
