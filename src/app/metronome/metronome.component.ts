import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { InstrumentComponent } from '../instrument';


@Component({
  moduleId: module.id,
  selector: 'app-metronome',
  templateUrl: 'metronome.component.html',
  styleUrls: ['metronome.component.css'],
  directives: [InstrumentComponent]
})
export class MetronomeComponent implements OnInit {
  bpm: number = 120;
  counter: number = 0;
  nums: string[] = ['one','two','three','four'];

  get beat(){
    let name = this.nums[this.counter%4];
    let hit = {};
    hit[name] = 'something';

    return hit;
  }

  getBeatInMilliseconds(bpm: number): number {
    return (60 * 1000 / bpm) * 4;
  }

  getQuarterNotes(bpm: number): number {
    return this.getBeatInMilliseconds(bpm) / 4
  }

  ngOnInit(){
    Observable.timer(0,this.getQuarterNotes(this.bpm)).subscribe(i=>this.counter++);
  }
}
