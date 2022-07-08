import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './../../../models/movie';
import { Tv } from '../../../models/tv';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() items: Movie[] = []
  @Input() title: string = "";
}
