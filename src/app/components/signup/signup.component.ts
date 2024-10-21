import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Simulate account creation
    if (this.email && this.password) {
      this.authService.login(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please fill in all fields');
    }
  }
}
