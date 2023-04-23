import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal.component';
import { ModalCloseDirective } from './directives/modal-close.directive';

@NgModule({
  declarations: [
    ModalComponent,
    ModalCloseDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ModalCloseDirective
  ]
})
export class ModalModule { }
