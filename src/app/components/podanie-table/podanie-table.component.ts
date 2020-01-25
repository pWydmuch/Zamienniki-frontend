import { Component, OnInit } from '@angular/core';
import { PodanieService } from 'src/app/services/podanie.service';
import { Podanie } from 'src/app/model/Podanie';

@Component({
  selector: 'app-podanie-table',
  templateUrl: './podanie-table.component.html',
  styleUrls: ['./podanie-table.component.css']
})
export class PodanieTableComponent implements OnInit {

  podania: Podanie[];
  showSpinner: boolean = true;

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
    this.showSpinner = false;
  }
}
