import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-client-create',
  templateUrl: './cliente-creat.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    id: '',
    name: '',
    cpf: '',
    cnpj: '',
    telephone: '',
    email: ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.minLength(11));
  email: FormControl = new FormControl(null, Validators.email);
  telephone: FormControl = new FormControl(null, Validators.minLength(11));

  constructor(
    private service: ClientService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.client).subscribe(() => {
      this.router.navigate(['clients'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {

        });
      } else {

      }
    })
  }

  isCamposValidos(): boolean {
    return this.name.valid && this.cpf.valid && this.email.valid && this.telephone.valid
  }
}
