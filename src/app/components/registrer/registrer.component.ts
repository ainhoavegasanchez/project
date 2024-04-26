import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.scss'
})
export class RegistrerComponent {
  user = {
    email: "",
    name: "",
    pass: "",
  }

  constructor(private userService: UserService) { }

  registrerUser() {

    const formData = new FormData();
    formData.append('name', this.user.name);
    formData.append('email', this.user.email);
    formData.append('pass', this.user.pass);

    this.userService.insertUser(formData).subscribe(
      (response) => {
        console.log('Usuario insertado correctamente:', response);
      },
      (error) => {
        console.error('Error al insertar usuario:', error);
      }
    );
  }

}

