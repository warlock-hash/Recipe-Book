import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

  /*
this was my to implement the dropdown but the tutorials ways and shorter way

  @HostListener('click') onClick(){
     let className:string = this.elemRef.nativeElement.className;
     // this.className = className;
     if (!className.includes('open')){
        this.elemRef.nativeElement.className = className + ' open';
     }else{
       this.elemRef.nativeElement.className = className.replace(' open','');
     }
  }

  constructor(private elemRef:ElementRef) { }

   */



}
