import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  client: Client = {
    id: '',
    name: '',
    cpf: '',
    cnpj: '',
    telephone: '',
    email: ''
  }

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

  delete(): void {
    this.service.delete(this.client.id).subscribe(() => {
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
