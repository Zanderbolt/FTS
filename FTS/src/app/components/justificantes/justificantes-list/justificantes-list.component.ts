import { Component, OnInit } from '@angular/core';

//Servicio Justificantes
import { justificanteService } from '../../../services/justificante.service';

//Modelo de datos JUSTIFICANE
import { Justificante } from '../../../models/justificante';


@Component({
  selector: 'app-justificantes-list',
  templateUrl: './justificantes-list.component.html',
  styleUrls: ['./justificantes-list.component.css']
})
export class JustificantesListComponent implements OnInit {

  justificantesList: Justificante[];

  constructor(
    private justificanteService: justificanteService
  ) { }

  ngOnInit() {
    this.justificanteService.getJustificantes()
    .snapshotChanges()
    .subscribe(justificante => {
      this.justificantesList = [];
      justificante.forEach(elemento => {
        let x = elemento.payload.toJSON();
        x["$key"] = elemento.key;
        this.justificantesList.push(x as Justificante);
      })
    })
  }

}
