import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { SubscribeDirective } from '@ngneat/subscribe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    SubscribeDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //isLightTheme$: Observable<boolean> = of(false);
  isLightTheme$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnInit() {}

  toggleDarkTheme(on: any) {
    console.log(`light theme: ${on}`);
    this.isLightTheme$.next(on);
  }
}
