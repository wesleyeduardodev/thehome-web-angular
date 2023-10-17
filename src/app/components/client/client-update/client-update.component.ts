import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-cliente-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client = {
    id: '',
    name: '',
    cpf: '',
    cnpj: '',
    telephone: '',
    email: ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  telephone: FormControl = new FormControl(null, Validators.minLength(9));

  constructor(
    private service: ClientService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.client.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.client.id).subscribe(response => {
      this.client = response;
    })
  }

  update(): void {
    this.service.update(this.client).subscribe(() => {
      this.router.navigate(['clients'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {

        });
      } else {

      }
    })
  }
}
