import { Component, OnInit } from '@angular/core';
import { PodanieService } from 'src/app/services/podanie.service';
import { Podanie } from 'src/app/models/Podanie';

@Component({
  selector: 'app-podanie-table',
  templateUrl: './podanie-table.component.html',
  styleUrls: ['./podanie-table.component.css']
})
export class PodanieTableComponent implements OnInit {

  podania: Podanie[];
  showSpinner: boolean = true;
  showBrak: boolean = false;

  constructor(private podanieService: PodanieService) { }

  ngOnInit() {
    this.getPodania();
  }

  getPodania(): void {
    this.podanieService.getPodania()
    .subscribe(podania => this.assign(podania));
  }

  assign(podania):void{
    this.podania = podania;
    if(this.podania.length == 0) this.showBrak=true;
    this.showSpinner = false;
  }
}
