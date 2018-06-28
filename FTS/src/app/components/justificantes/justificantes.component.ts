import { Component, OnInit } from '@angular/core';

//Justificante SERVICE
import { justificanteService } from '../../services/justificante.service'

//Variable para el Justificante FORM
import { NgForm } from '@angular/forms';

//Modelo de Datos JUSTIFIFICANTE
import { Justificante } from '../../models/justificante';

@Component({
  selector: 'app-justificantes',
  templateUrl: './justificantes.component.html',
  styleUrls: ['./justificantes.component.css']
})
export class JustificantesComponent implements OnInit {

  constructor(
    private justificanteService: justificanteService
  ) { }

  ngOnInit() {
    this.justificanteService.getJustificantes();
    this.resetForm();
  }

  onSubmit(justificanteForm: NgForm) {
    this.justificanteService.insertJustificante(justificanteForm.value)
    this.resetForm(justificanteForm);
  }

  resetForm(justificanteForm?: NgForm) {
    if (justificanteForm != null) {
      justificanteForm.reset();
      this.justificanteService.selectedJustificante = new Justificante();
    }
  }

}
