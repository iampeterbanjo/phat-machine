import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PhatMachineAppComponent } from '../app/phat-machine.component';

beforeEachProviders(() => [PhatMachineAppComponent]);

describe('App: PhatMachine', () => {
  it('should create the app',
      inject([PhatMachineAppComponent], (app: PhatMachineAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'phat-machine works!\'',
      inject([PhatMachineAppComponent], (app: PhatMachineAppComponent) => {
    expect(app.title).toEqual('phat-machine works!');
  }));
});
