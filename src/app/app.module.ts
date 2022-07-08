import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesService } from './service/movies/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { TvService } from './service/tv/tv.service';
import { TvBannerComponent } from './components/tv-show-banner/tv-show-banner.component';
import { TvItemComponent } from './components/tv-show-item/tv-show-item.component';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    TvBannerComponent,
    TvItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [MoviesService, TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
