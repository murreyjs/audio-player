import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { CreateAccountComponent } from 'src/app/dialogs/create-account/create-account.component'
import { MatDialog } from '@angular/material/dialog';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {



  constructor( 
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }




  openLoginDialog() {

    if(this.authenticationService.isAuthenticated){
      this.router.navigate(['/main-paige']);
      return;
    }
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
