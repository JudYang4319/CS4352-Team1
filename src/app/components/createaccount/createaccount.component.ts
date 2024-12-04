import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateAccountComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    if (this.authService.login(this.email, this.password) && this.email == 'user' && this.password == 'password') {
      this.router.navigate(['/overview']);
    } else {
      alert('Invalid credentials');
    }
  }

  createAccount() {
    // Implement signup logic or navigation to signup page
  }
}
