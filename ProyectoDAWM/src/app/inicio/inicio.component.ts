import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';
import{Router} from '@angular/router'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public _MessageService:MessageService, private router:Router) { }

  ngOnInit(): void {
  }
  login(form:any){
    console.log(form.username)
    console.log(form.password)
    this._MessageService.login(form).subscribe((data) => {
      console.log(data.message)
      if(data.success){
        Swal.fire({
          text:data.message,
          icon:'success',
          confirmButtonText: 'Continuar',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate([""])
          }
        })
      }else{
        Swal.fire({
          text:data.message,
          icon:'error'
        })
      }
    });
  }

}
