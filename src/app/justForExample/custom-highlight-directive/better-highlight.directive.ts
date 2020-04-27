import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

   @Input('default') defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightedColor:string = 'red';
  // another way access the property on which our directive sits is below
  // there is no problem with render2 but this would be simple
  // and depends on user choice

  @HostBinding('style.backgroundColor') background:string;


  constructor(private elemRef: ElementRef,private render : Renderer2) { }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnters(eventData: Event){
    //commenting this line on code just to use the HostBinding way
    // this.render.setStyle(this.elemRef.nativeElement,'background-color','red');
    this.background = this.highlightedColor;
  }

  @HostListener('mouseleave') onMouseLeaves(eventData: Event){
    // this.render.setStyle(this.elemRef.nativeElement,'background-color','transparent');
    this.background = this.defaultColor;
  }

}
