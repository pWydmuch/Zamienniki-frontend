import { Component, OnInit } from '@angular/core';
import { KursService } from 'src/app/services/kurs.service';
import { Router } from '@angular/router';
import { Kurs } from 'src/app/model/Kurs';

@Component({
  selector: 'app-kursy-form',
  templateUrl: './kursy-form.component.html',
  styleUrls: ['./kursy-form.component.css']
})
export class KursyFormComponent implements OnInit {

  wydzialy = ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12','W13']; // czy to trzeba pobierać z bazy
  stopnie = ['Pierwszy', 'Drugi', 'Trzeci'];
 
  formyZaliczenia = ['Zaliczenie', 'Egzamin'];
  jezyk = ['Polski, Angielski'];
  formyZajec = [ 'WYKLAD','CWICZENIA','LABORATORIUM','SEMINARIUM','PROJEKT'];
  cykleKsztalcenia: string[];
  kierunki: string[];

  kursData: Kurs = {trybStudiow: 'Stacjonarne', stopienStudiow:'Pierwszy', formaZaliczenia:'Egzamin' };
  // kursData.trybStudiow = ;

  constructor(private kursService: KursService, private router: Router ) { }

  ngOnInit() {
    this.getCykle();
    this.getKierunki();
  }

  getCykle(): void {
    this.kursService.getCykle()
    .subscribe(cykle => this.cykleKsztalcenia=cykle);
  }
  getKierunki(): void {
    this.kursService.getKierunki()
    .subscribe(kierunki => this.kierunki=kierunki);
  }

 
  send(){
    this.router.navigateByUrl('/wyszukiwanie/wyniki', { state: this.kursData });
  }

}
