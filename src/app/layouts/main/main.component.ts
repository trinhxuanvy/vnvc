import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  vacxinList: Array<any> = [
    {
      image: '../../../assets/images/vacxin-varilrix-2-300x199.jpg',
      title: 'Vắc xin VARILRIX (Bỉ) phòng bệnh thủy đậu',
    },
    {
      image: '../../../assets/images/INFANRIX-6-300x199.jpg',
      title: 'Vắc xin 6 trong 1 INFANRIX HEXA (Bỉ)',
    },
    {
      image: '../../../assets/images/PENTAXIM-5-300x199.jpg',
      title: 'Vắc xin 5 trong 1 PENTAXIM (Pháp)',
    },
    {
      image: '../../../assets/images/VERORAB-300x199.jpg',
      title: 'Vắc xin VERORAB 0.5ml (Pháp) phòng bệnh dại',
    },
    {
      image: '../../../assets/images/GARDASIL-300x199.jpg',
      title: 'Vắc xin GARDASIL (Mỹ) phòng bệnh ung thư cổ tử cung',
    },
    {
      image: '../../../assets/images/Imojev-boom-300x199.png',
      title: 'IMOJEV – Vắc xin phòng viêm não Nhật Bản thế hệ mới',
    },
    {
      image: '../../../assets/images/ENGERIX-B-300x199.jpg',
      title: 'Vắc xin ENGERIX B (Bỉ) phòng bệnh viêm gan B',
    },
    {
      image: '../../../assets/images/TWINRIX-300x199.jpg',
      title: 'Vắc xin TWINRIX (Bỉ) phòng bệnh viêm gan A+B',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
