import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import { MENU_LIST } from 'src/app/constants/variables';
import { Menu } from 'src/app/interfaces/interfaces';

SwiperCore.use([EffectFade, Navigation]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isShowSearchBox = false;
  menuList: Array<Menu> = MENU_LIST;
  sliderList: Array<String> = [
    '../../../assets/images/combo-vx-dsk.jpg',
    '../../../assets/images/dang-ky-tiem-khang-the-don-dong-desk.jpg',
    '../../../assets/images/khuyen-mai-vnvc.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}

  handleShowSearchBox(): void {
    this.isShowSearchBox = !this.isShowSearchBox;
  }
}
