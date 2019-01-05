import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { AboutComponent } from '../components/about/about.component';
import { GameResultsComponent } from '../components/game-results/game-results.component';
import { GameComponent } from '../components/game/game.component';
import { EntranceComponent } from '../components/entrance/entrance.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';

const routes: Routes = [
  { path: '', redirectTo: '/entrance', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'game-results', component: GameResultsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'game', component: GameComponent },
  { path: 'entrance', component: EntranceComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
