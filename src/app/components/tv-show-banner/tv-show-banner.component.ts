import { Component, Input, OnInit } from '@angular/core';
import { Tv } from '../../../models/tv';

@Component({
  selector: 'tv-show-banner',
  templateUrl: './tv-show-banner.component.html',
  styleUrls: ['./tv-show-banner.component.scss']
})
export class TvBannerComponent implements OnInit {
  @Input() items: Tv[] = []
  @Input() title: string = "";
  public ngOnInit(): void {
    console.log(this.items)
  }
}
