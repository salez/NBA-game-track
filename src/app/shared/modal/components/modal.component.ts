import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, OnDestroy, QueryList, ViewChild } from '@angular/core';
import { from, fromEvent, mergeMap, Observable, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { ModalCloseDirective } from '../directives/modal-close.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(ModalCloseDirective, { read: ElementRef<HTMLElement>, descendants: true }) closeElements!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  private destroy$ = new Subject<void>();

  constructor() {
  }

  ngAfterContentInit(): void {
    this.listenToCloseEvents();
  }

  private listenToCloseEvents() {
    (this.closeElements.changes as Observable<QueryList<ElementRef<HTMLElement>>>).pipe(
      takeUntil(this.destroy$),
      startWith(this.closeElements),
      switchMap((elements) => from(elements.toArray())),
      mergeMap((element) => fromEvent(element.nativeElement, 'click'))
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
