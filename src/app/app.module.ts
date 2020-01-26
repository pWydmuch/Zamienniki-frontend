import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { KursyFormComponent } from './components/kursy-form/kursy-form.component';
import { FormsModule }   from '@angular/forms';
import { ResultKursyComponent } from './components/result-kursy/result-kursy.component';
import { PodanieTableComponent } from './components/podanie-table/podanie-table.component';
import { PodanieDetailComponent } from './components/podanie-detail/podanie-detail.component';
import { KursDetailComponent } from './components/kurs-detail/kurs-detail.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { KodTransPipe } from './pipes/kod-trans.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KursyFormComponent,
    ResultKursyComponent,
    PodanieTableComponent,
    PodanieDetailComponent,
    KursDetailComponent,
    SpinnerComponent,
    TranslatePipe,
    KodTransPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
