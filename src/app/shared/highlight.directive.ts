import { Directive,HostListener,ElementRef,Renderer,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

@HostListener('mouseenter') onMouserOver(){
  this.backgroundColor = this.highlightColor;
}


@HostListener('mouseleave') onMouserLeave(){
  this.backgroundColor = this.defaultColor;
}

@HostBinding('style.backgroundColor') backgroundColor: string;

@Input() defaultColor: string = 'white';
@Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){

    this.backgroundColor=this.defaultColor;
  }

}
