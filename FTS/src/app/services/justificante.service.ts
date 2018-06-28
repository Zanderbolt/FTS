import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//Modelo de Datos
import { Justificante } from '../models/justificante'

@Injectable({
  providedIn: 'root'
})
export class justificanteService {

  // Lista de Datos
  justificanteList: AngularFireList<any>;
  selectedJustificante: Justificante = new Justificante();

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  // SELECT  
  getJustificantes() {
    return this.justificanteList = this.firebase.list('justificantes');
  }

  // INSERT  
  insertJustificante(justificante: Justificante) {
    this.justificanteList.push({
      nombre: justificante.nombre,
      semestre: justificante.semestre,
      grupo: justificante.grupo,
      fecha: justificante.fecha,
      materias: justificante.materias,
      motivo: justificante.motivo
    })
  }

  //UPDATE
  updateJustificante(justificante: Justificante) {
    this.justificanteList.update(justificante.$key, {
      nombre: justificante.nombre,
      semestre: justificante.semestre,
      grupo: justificante.grupo,
      fecha: justificante.fecha,
      materias: justificante.materias,
      motivo: justificante.motivo
    })
  }

  // DELETE
  deleteJustificante($key: string) {
    this.justificanteList.remove($key);
  }
  
}
