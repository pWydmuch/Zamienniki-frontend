import { Component, OnInit } from '@angular/core';
import { PodanieService } from 'src/app/services/podanie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Podanie } from 'src/app/model/Podanie';

@Component({
  selector: 'app-podanie-detail',
  templateUrl: './podanie-detail.component.html',
  styleUrls: ['./podanie-detail.component.css']
})
export class PodanieDetailComponent implements OnInit {

  podanie: Podanie;
 
  constructor(
    private route: ActivatedRoute,
    private podanieService: PodanieService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPodanie(); 

  }

  getPodanie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.podanieService.getPodanie(id)
    .subscribe(podanie => this.podanie=podanie);
  }
  goBack():void{
    this.location.back();
  }

  save():void{
    console.log(this.podanie);
    if(this.podanie.uzasadnienieOpinii==null){

    }
    else if(this.podanie.status=="NIEROZPATRZONE"){

    }
    else{
    this.podanieService.updatePodanie(this.podanie)
    .subscribe(()=>this.goBack());
    }
  }

}
