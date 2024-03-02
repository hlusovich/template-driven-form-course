import {Directive, inject, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {debounce, debounceTime, map} from "rxjs";
import {main} from "@angular/compiler-cli/src/main";

@Directive({
  selector: '[appForm]',
  standalone: true
})
export class FormDirective<T> {
  private readonly ngForm = inject(NgForm, {self: true});

  @Output() public  readonly  formValueChange = this.ngForm.form.valueChanges.pipe(debounceTime(0));
  @Output() public readonly dirtyChange = this.ngForm.form.valueChanges.pipe(map(() => this.ngForm.form.dirty));
  @Output() public readonly validChange  = this.ngForm.form.valueChanges.pipe(map(() => this.ngForm.valid));
  }
