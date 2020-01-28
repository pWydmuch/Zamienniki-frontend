import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KursService } from 'src/app/services/kurs.service';
import { Kurs } from 'src/app/models/Kurs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-kurs-detail',
  templateUrl: './kurs-detail.component.html',
  styleUrls: ['./kurs-detail.component.css']
})
export class KursDetailComponent implements OnInit {

  kurs: Kurs;
  kursData: Kurs;

  constructor(
    private route: ActivatedRoute,
    private kursService: KursService,
    private location: Location,
    private router: Router 
  ) { }

  ngOnInit() {
    this.getKurs(); 

  }

  getKurs(): void {
    delete history.state.navigationId;
    this.kursData = history.state;
    const id = +this.route.snapshot.paramMap.get('id');
    this.kursService.getKurs(id)
    .subscribe(kurs => this.kurs=kurs);
  }
  goBack():void{
    // this.location.back();
    this.router.navigateByUrl(`/wyszukiwanie/wyniki`, { state: this.kursData  });
  }

}
