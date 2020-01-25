import { Component, OnInit } from '@angular/core';
import { Kurs } from 'src/app/model/Kurs';
import { KursService } from 'src/app/services/kurs.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-kursy',
  templateUrl: './result-kursy.component.html',
  styleUrls: ['./result-kursy.component.css']
})
export class ResultKursyComponent implements OnInit {

  kursy: Kurs[];
  kursData: Kurs;
  showSpinner: boolean = true;
  showBrak: boolean = false;
  

  constructor(
    private kursService : KursService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    delete history.state.navigationId;
    this.kursData = history.state;
    
    this.findKursy(this.kursData);
    
  }

  goBack():void{
    this.location.back();
  }

  

  findKursy(kurs: Kurs): void {
    this.kursService.findKursy(kurs)
    .subscribe(kursy => this.assign(kursy), response => console.log(response.status));
  }

  assign(kursy):void{
    this.kursy = kursy;
    if(this.kursy.length == 0) this.showBrak=true;
    this.showSpinner = false;
  }

  

}
