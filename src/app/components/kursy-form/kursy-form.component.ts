import { Component, OnInit } from '@angular/core';
import { KursService } from 'src/app/services/kurs.service';
import { Router } from '@angular/router';
import { Kurs } from 'src/app/models/Kurs';
import { PlanStudiowService } from 'src/app/services/plan-studiow-service.service';
import { PlanInfo } from 'src/app/models/PlanInfo';

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

  negEcts: boolean = false;
  decimalErr: boolean = false;
  overNumber: boolean = false;

  kursData: Kurs = {trybStudiow: 'Stacjonarne', stopienStudiow:'Pierwszy', formaZaliczenia:'Egzamin' };
  // kursData.trybStudiow = ;

  constructor(private kursService: KursService,
    private planService: PlanStudiowService,
    private router: Router ) { }

  ngOnInit() {
    this.getPlanInfo();
    
  }

  getPlanInfo(): void {
    this.planService.getPlanInfo()
    .subscribe(planInfo =>this.setKierunkiAndCykle(planInfo) );
  }

  setKierunkiAndCykle( planInfo : PlanInfo){
    this.kierunki =planInfo.kierunki;
    this.cykleKsztalcenia = planInfo.cykle;
  }

  // getKierunki(): void {
  //   this.planService.getKierunki()
  //   .subscribe(kierunki => this.kierunki=kierunki);
  // }

  checkNumber(){
    console.log(this.kursData.ects);
  
    if(this.kursData.ects<0) this.negEcts =true;
    if(this.kursData.ects>=0) this.negEcts =false;
    if(this.kursData.ects>30) this.overNumber =true;
    if(this.kursData.ects<=30) this.overNumber =false;
    if(Number.isInteger(this.kursData.ects)) this.decimalErr =false;
    if(!Number.isInteger(this.kursData.ects)) this.decimalErr =true;
    if(this.kursData.ects==null){
       this.decimalErr =false;
       delete this.kursData.ects;
      }
  }

  isError(): boolean{
    return this.overNumber || this.negEcts || this.decimalErr;
  }

  send(){
    if (!this.isError())
    this.router.navigateByUrl('/wyszukiwanie/wyniki', { state: this.kursData });
    
  }

}
