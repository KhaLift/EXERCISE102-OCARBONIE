// src/app/app.component.ts
import { Component, trigger, state, style, animate, transition } from '@angular/core';

import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('trend