import { EstablishmentService } from './../../service/establishment.service';
import { User } from '../../models/user';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-list-item',
  templateUrl: './establishment-list-item.component.html',
  styleUrls: ['./establishment-list-item.component.css']
})
export class EstablishmentListItemComponent implements OnInit {
  public user: User;
  establishments = [];

  constructor(private establishmentService: EstablishmentService) { }
  
  ngOnInit() {
    this.establishmentService.getAllEstablishments()
      .subscribe(response => this.establishments = <any> response)
  }

  reciverList(establishmentList: Observable<any>) {
    establishmentList.subscribe(response => this.establishments = <any> response)
  }

}
