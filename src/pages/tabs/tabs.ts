import { Component } from '@angular/core';

import { TripPage } from '../trip/trip';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TripPage;

  constructor() {

  }
}
