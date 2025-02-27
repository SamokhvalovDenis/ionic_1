import { Component, Input, OnInit } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonButton, IonApp } from '@ionic/angular/standalone';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-header',
  templateUrl: 'my-header.component.html',
  styleUrls: ['my-header.component.scss'],
  standalone: true,
  imports: [IonApp, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar],
})
export class MyHeaderComponent implements OnInit {
  @Input() name: string = 'Лабораторні роботи';
  constructor() {}
  ngOnInit() {}
}
