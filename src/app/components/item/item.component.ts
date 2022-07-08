import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constanst/image-sizes';
import { Movie } from './../../../models/movie';
import { Tv } from '../../../models/tv';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input("itemData") item: Movie | null = null;
  readonly imageSizes = IMAGES_SIZES;

}
