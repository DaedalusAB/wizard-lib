import { Component, OnInit } from '@angular/core';
import { WizardStep } from 'projects/pok-wizard/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  person = true;
  animal = false;
  cat = true;
  dog = false;
  isOnFirstStep: boolean;
  isOnLastStep: boolean;
  mustBeTrue = false;
  invalidStep: WizardStep;
  currentStep: WizardStep;

  ngOnInit() {
    this.makePerson();
  }

  public makePerson() {
    this.person = true;
    this.animal = false;
  }

  public makeAnimal() {
    this.person = false;
    this.animal = true;
  }

  public makeDog() {
    this.dog = true;
    this.cat = false;
  }

  public makeCat() {
    this.dog = false;
    this.cat = true;
  }

  public finish() {
    this.resetInvalidStep();
    console.log('DONE');
  }

  public forward() {
    this.resetInvalidStep();
    console.log('forward');
  }

  public back() {
    this.resetInvalidStep();
    console.log('back');
  }

  public invalid(step: WizardStep) {
    this.invalidStep = step;
    console.log('Step ' + step.id + ' is invalid, please fix it');
  }

  public isInvalid(stepId: any): boolean {
    return this.invalidStep && this.invalidStep.id === stepId;
  }

  public resetInvalidStep() {
    this.invalidStep = undefined;
  }

  public current(step: WizardStep) {
    this.currentStep = step;
    console.log(this.currentStep);
  }

  public first(val: boolean) {
    console.log('first', val);
  }

  public last(val: boolean) {
    console.log('last', val);
  }

  public allSteps(steps: WizardStep[]) {
    console.log(steps);
  }
}
