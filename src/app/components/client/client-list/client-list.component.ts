import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Client} from 'src/app/models/client';
import {ClientService} from 'src/app/services/client.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  ELEMENT_DATA: Client[] = []
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Client>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: ClientService
  ) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    console.log('findAll');
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response
      this.dataSource = new MatTableDataSource<Client>(response);
      this.dataSource.paginator = this.paginator;
    })
  }
}
