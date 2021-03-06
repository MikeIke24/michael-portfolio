import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements AfterViewInit {
  @ViewChild('spinner') spinner: ElementRef;
  @Input() size: number;
  constructor() {
    this.size = 100;
  }

  ngAfterViewInit() {
    const spinnerEl: HTMLElement = this.spinner['_elementRef'].nativeElement;
    const spinnerElSvgChild: HTMLElement = spinnerEl.children[0] as HTMLElement;
    spinnerEl.style.width = '100%';
    spinnerEl.style.height = '100%';
    spinnerElSvgChild.style.width = '100%';
    spinnerElSvgChild.style.height = '100%';
  }

}
