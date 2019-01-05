import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { AboutComponent } from '../components/about/about.component';
import { GameResultsComponent } from '../components/game-results/game-results.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from '../components/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { EntranceComponent } from '../components/entrance/entrance.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
import swal from 'sweetalert2';
import { MinuteSecondsPipe } from '../pipes/minuteSeconds.pipe';
import { ClockComponent } from '../components/clock/clock.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackComponent,
    ThumbnailComponent,
    AboutComponent,
    GameResultsComponent,
    ContactUsComponent,
    GameComponent,
    EntranceComponent,
    FeedbacksComponent,
    MinuteSecondsPipe,
    ClockComponent
    // NgbModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    NgbModule,
    HttpClientModule,
    // ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
