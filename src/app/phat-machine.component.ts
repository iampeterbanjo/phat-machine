import { Component } from '@angular/core';

import { MetronomeComponent } from './metronome';

@Component({
  moduleId: module.id,
  selector: 'phat-machine-app',
  templateUrl: 'phat-machine.component.html',
  styleUrls: ['phat-machine.component.css'],
  directives: [MetronomeComponent]
})
export class PhatMachineAppComponent {
  title = 'phat-machine works!';
}
