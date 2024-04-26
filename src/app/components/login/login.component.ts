import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    email: "",
    pass: "",
  }

  constructor(
    private userService: UserService,
    private router:Router

  ) { }

  selectUser(): void {
 
    this.userService.getUser(this.user.pass, this.user.email).subscribe(
      (usuarioExiste) => {
        if (usuarioExiste) {
          this.router.navigate(['/inicio']);
          console.log('El usuario existe.');
        } else {
          console.log('El usuario no existe.');
        }
      }
    );
  }
}

