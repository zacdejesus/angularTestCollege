import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  public users: any;
  loginForm: FormGroup;
  errorMessage: string = '';
  public superUser: any;

  ngOnInit(): void {
    this.getUsers()
  }

  constructor(private router: Router, private service: UsersService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }

  validateLogin(userIn: string, passIn: string) {
    let validate = false;

    let userAux = this.users.filter(user => user.username == userIn)
    this.superUser = userAux[0]

    if (this.superUser.address.zipcode == passIn) {
      validate = true
    }

   

    return validate;
  }


  getUsers() {
    this.service.getUsers().subscribe(
      data => {

        this.users = data;
      },
      err => {
        console.log(err);
      }
    );
  }



  submitLogin() {

    if (this.loginForm.valid) {
      if (this.validateLogin(this.loginForm.value.username, this.loginForm.value.password)) {
        this.router.navigate(['/Posts'], this.superUser.id);
      } else {
        this.errorMessage = 'credenciales invalidas';
      }
    }
  }
}