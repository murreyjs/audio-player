import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { CreateAccountComponent } from 'src/app/create-account/create-account.component'
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  


  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }



  
openloginDialog() {

  const dialogRef = this.dialog.open(LoginComponent, {
    width: '400px',
    data: {}
  });

  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

open_newAccount_Dialog() {

  const dialogRef = this.dialog.open(CreateAccountComponent, {
    width: '400px',
    data: {}
    });
    
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    });
  }

}
