import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  lsOperator: any;
  @Input() heading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.lsOperator = JSON.parse(localStorage.getItem('lsOperator'));
  }

}
