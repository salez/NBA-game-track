import { AfterContentInit, Component, ContentChildren, ElementRef, HostBinding, OnDestroy, QueryList, Renderer2, ViewChild } from '@angular/core';
import { from, fromEvent, mergeMap, Observable, of, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ModalCloseDirective } from '../directives/modal-close.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(ModalCloseDirective, { read: ElementRef, descendants: true }) closeElements!: QueryList<ElementRef>;
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  private destroy$ = new Subject<void>();

  constructor(
    private renderer: Renderer2
  ) {
  }

  ngAfterContentInit(): void {
    this.listenToCloseEvents();
  }

  private listenToCloseEvents() {
    (this.closeElements.changes as Observable<QueryList<ElementRef>>).pipe(
      takeUntil(this.destroy$),
      startWith(this.closeElements),
      switchMap((elements) => from(elements.toArray())),
      mergeMap((element) =>  fromEvent(element.nativeElement, 'click'))
    ).subscribe(() => {
      this.close();
    })
  }

  open() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
