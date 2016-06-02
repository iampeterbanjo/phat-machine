import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-instrument',
  templateUrl: 'instrument.component.html',
  styleUrls: ['instrument.component.css']
})
export class InstrumentComponent {
  private _hit;

  textToShowTriggers;

  @Input()
  set hit(hit:any){
    this._hit = hit;
    this.playSomeSound(hit);
  }

  get hit(){
    return this._hit;
  }

  playSomeSound(hit){
    this.textToShowTriggers = hit;
  }
}
