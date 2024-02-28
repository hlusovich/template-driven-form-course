import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PurchaseFormComponentComponent} from "./purchase-form-component/purchase-form-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PurchaseFormComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simplified-course';
}
