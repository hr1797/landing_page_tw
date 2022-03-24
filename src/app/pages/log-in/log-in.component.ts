import { Component, OnInit } from '@angular/core';
import { users } from './../../dummy_users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  token: string | undefined;

  constructor(private router: Router) {
    this.token = undefined;
  }

  ngOnInit(): void {}

  submit({
    user_email,
    user_password,
  }: {
    user_email: string;
    user_password: string;
  }): void {
    if (
      users.some(
        (user) => user.mail === user_email && user.password === user_password
      )
    ) {
      console.log(user_email);
      console.log(user_password);
      this.router.navigateByUrl('/search');
    }
  }
}
