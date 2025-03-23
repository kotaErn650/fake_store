import { Component, Input } from '@angular/core';

// card-user.component.ts (versión corregida)
@Component({
  selector: 'app-card-user',
  standalone: true,
  imports: [],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css',
})
export class CardUserComponent {
  @Input() user: any = {};
}