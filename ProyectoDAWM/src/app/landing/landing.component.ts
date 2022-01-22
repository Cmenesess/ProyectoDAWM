import { Component} from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent{

  constructor(public _MessageService: MessageService) {
  }

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
      console.log("Enviado");
    });
    }
}
