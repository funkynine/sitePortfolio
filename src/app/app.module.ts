import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

// Connect and declaration Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule,
   MatCardModule, MatMenuModule, MatIconModule, MatDialogModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { DataFromLnService } from './data-from-ln.service';
import { ModelWindowComponent } from './model-window/model-window.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    NotFoundComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ModelWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
  ],
  providers: [DataFromLnService],
  bootstrap: [AppComponent],
  entryComponents: [ModelWindowComponent]
})
export class AppModule { }
