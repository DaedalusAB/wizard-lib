import { Injectable } from '@angular/core';
import { WizardStep } from './wizard-step.model';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { Subject } from 'rxjs';

@Injectable()
export class WizardService {
  private steps: WizardStep[];
  private activeStep: WizardStep;
  private startingStep: WizardStep;

  public finishSubject: Subject<void> = new Subject<void>();
  public stepForwardSubject: Subject<void> = new Subject<void>();
  public stepBackSubject: Subject<void> = new Subject<void>();

  public invalidStepSubject: Subject<WizardStep> = new Subject<WizardStep>();

  public allStepsSubject: Subject<WizardStep[]> = new Subject<WizardStep[]>();
  public currentStepSubject: Subject<WizardStep> = new Subject<WizardStep>();
  public isOnLastStepSubject: Subject<boolean> = new Subject<boolean>();
  public isOnFirstStepSubject: Subject<boolean> = new Subject<boolean>();
  public isOnStartingStepSubject: Subject<boolean> = new Subject<boolean>();

  public init(steps: WizardStepComponent[], startingStepId: any) {
    this.steps = steps.map(s => s.wizardStep);

    this.activeStep = startingStepId != null
      ? this.steps.find(s => s.id === startingStepId)
      : this.steps[0];
    this.startingStep = this.activeStep;
    this.activeStep.activate();
    this.updateStepSubjects();
  }

  public goTo(stepId: any) {
    if (this.findStep(stepId) == null) {
      throw Error('Step with id ' + stepId + ' could not be found');
    }

    if (!this.stepIsIncluded(stepId)) {
      throw Error('Step ' + stepId + ' is currently not included');
    }

    if (!this.canLeaveCurrentStep(stepId)) {
      this.invalidStepSubject.next(this.activeStep);
      return;
    }

    if (!this.canJumpForwardToStep(this.activeStep.id, stepId)) {
      throw Error('Cannot jump over unvisited steps to get to step ' + stepId);
    }

    this.isJumpingForward(this.activeStep.id, stepId)
      ? this.stepForwardSubject.next()
      : this.stepBackSubject.next();

    this.changeActiveStep(stepId);
    this.updateStepSubjects();
  }

  public goToNext() {
    const nextIncludedStep = this.nextIncludedStepIndex();
    if (nextIncludedStep != null) {
      this.goTo(nextIncludedStep.id);
    }
  }

  public goToPrevious() {
    const prevIncludedStep = this.previousIncludedStepIndex();
    if (prevIncludedStep != null) {
      this.goTo(prevIncludedStep.id);
    }
  }

  public finish() {
    if (this.isOnLastStep()) {
      this.finishSubject.next();
    }
  }

  private changeActiveStep(stepId: any) {
    this.activeStep.deactivate();
    this.activeStep = this.findStep(stepId);
    this.activeStep.activate();
  }

  private updateStepSubjects() {
    this.allStepsSubject.next(this.steps.slice());
    this.currentStepSubject.next(this.activeStep);
    this.isOnLastStepSubject.next(this.isOnLastStep());
    this.isOnFirstStepSubject.next(this.activeStep === this.startingStep);
    this.isOnFirstStepSubject.next(this.activeStep === this.steps[0]);
  }

  private isOnLastStep(): boolean {
    return this.nextIncludedStepIndex() == null;
  }

  private findStep(id: any): WizardStep {
    return this.steps.find(s => s.id === id);
  }

  private stepIsIncluded(id: any): boolean {
    return this.findStep(id).included;
  }

  private isJumpingForward(currentStepId: any, destStepId: any): boolean {
    return this.steps.findIndex(s => s.id === currentStepId) < this.steps.findIndex(s => s.id === destStepId);
  }

  private canLeaveCurrentStep(stepId: any) {
    return !this.isJumpingForward(this.activeStep.id, stepId) || this.activeStep.valid;
  }

  private canJumpForwardToStep(currentStepId: any, destStepId: any): boolean {
    if (!this.isJumpingForward(currentStepId, destStepId)) {
      return true;
    }

    const currentStepIndex = this.steps.findIndex(s => s.id === currentStepId);
    const destStepIndex = this.steps.findIndex(s => s.id === destStepId);

    return this.steps
      .slice(currentStepIndex + 1, destStepIndex)
      .find(s => s.included && !s.visited) == null;
  }

  private nextIncludedStepIndex(): WizardStep {
    const currentStepIndex = this.steps.findIndex(s => s.id === this.activeStep.id);

    return this.steps
      .slice(currentStepIndex + 1, this.steps.length + 1)
      .find(s => s.included);
  }

  private previousIncludedStepIndex(): WizardStep {
    const currentStepIndex = this.steps.findIndex(s => s.id === this.activeStep.id);

    return this.steps
      .slice(0, currentStepIndex)
      .reverse()
      .find(s => s.included);
  }
}
