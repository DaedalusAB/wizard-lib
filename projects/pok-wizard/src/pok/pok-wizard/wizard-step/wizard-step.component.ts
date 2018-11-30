import { Component, Input, OnChanges } from '@angular/core';
import { WizardStep } from '../wizard-step.model';

@Component({
  selector: 'pok-wizard-step',
  templateUrl: './wizard-step.component.html'
})
export class WizardStepComponent implements OnChanges {
  @Input() included = true;
  @Input() valid = true;
  @Input() id: string;

  public wizardStep: WizardStep;

  constructor() {
    this.wizardStep = new WizardStep(this.id, this.included, this.valid);
  }

  ngOnChanges() {
    this.wizardStep.included = this.included;
    this.wizardStep.valid = this.valid;
    this.wizardStep.id = this.id;
  }

  public get isActive(): boolean {
    return this.wizardStep.active;
  }

  public get isIncluded(): boolean {
    return this.wizardStep.included;
  }
}
