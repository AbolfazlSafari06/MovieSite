import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constanst/image-sizes';
import { Tv } from '../../../models/tv';

@Component({
  selector: 'tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.scss']
})
export class TvItemComponent {
  @Input() item: Tv | null = null
  readonly imageSizes = IMAGES_SIZES;
}
