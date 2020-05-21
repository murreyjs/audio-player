import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { CreateAccountComponent } from 'src/app/dialogs/create-account/create-account.component'
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




  openLoginDialog() {

    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openNewAccountDialog() {

    const dialogRef = this.dialog.open(CreateAccountComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
