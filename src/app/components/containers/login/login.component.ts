import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = new FormControl('');
  chosenName = '';
  isLoading = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
  }

  onLoginFormSubmit(event) {
    event.preventDefault();
    this.isLoading = true;
    this.authService.login().subscribe(() => {
      this.chosenName = this.name.value;
    });
  }

}
