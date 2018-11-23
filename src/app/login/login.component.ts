import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'userEmail': new FormControl(),
      'userPassword': new FormControl()
    })
  }


  login() {
    if (this.loginForm.get('userEmail').value === 'nikgavali@gmail.com'
      && this.loginForm.get('userPassword').value === 'nik123') {
      this.router.navigateByUrl('/home')
    } else {
      this.router.navigateByUrl('/login')
      this.loginForm.reset()
      this.showNotification('top', 'right')
    }
  }

  showNotification(from, align) {
    var type = ['', 'info', 'success', 'warning', 'danger'];

    var color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "ti-gift",
      message: "Invalid Email and Password."
    }, {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  }
}
