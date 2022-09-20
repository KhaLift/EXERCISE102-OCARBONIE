// src/app/app.component.ts
import { Component, trigger, state, style, animate, transition } from '@angular/core';

import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('trending', [
      state('DOWN', style({
        'background-color': 'red'
      })),
      state('UP', style({
        'background-colo