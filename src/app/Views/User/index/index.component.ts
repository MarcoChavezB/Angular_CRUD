import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/user.interface';
import { UsersService } from '../../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  Users:User[] = [];

  constructor (private readonly dataSVu: UsersService ){ }
  /*
      Metodo para ejecurar funciones 
      al iniciar el componente
   */
  ngOnInit(): void {
    this.getUsers();
    console.log("Componente de usuarios");
  }

  getUsers(){
    this.dataSVu.getUsers().subscribe(
      users =>{
        this.Users = users;
      }
    )
    console.log(this.Users);
  }
}
