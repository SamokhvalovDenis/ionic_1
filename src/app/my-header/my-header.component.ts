import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-my-header',
  templateUrl: 'my-header.component.html',
  styleUrls: ['my-header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class MyHeaderComponent implements OnInit {
  @Input() name: string = 'Лабораторні роботи';
  constructor() {}
  ngOnInit() {}
}
