import { Component, ContentChildren, AfterViewInit, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { WizardService } from '../wizard.service';
import { WizardStep } from '../wizard-step.model';

@Component({
  selector: 'pok-wizard-step-container',
  templateUrl: './wizard-step-container.component.html',
  providers: [WizardService]
})
export class WizardStepContainerComponent implements OnInit, AfterViewInit {
  @Input() activeStepId: string;

  @ContentChildren(WizardStepComponent) private steps: WizardStepComponent[];

  @Output() finishEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() stepForwardEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() stepBackEvent: EventEmitter<void> = new EventEmitter<void>();

  @Output() invalidStep: EventEmitter<WizardStep> = new EventEmitter<WizardStep>();

  @Output() currentStep: EventEmitter<WizardStep> = new EventEmitter<WizardStep>();
  @Output() isOnStartingStep: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isOnFirstStep: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isOnLastStep: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    this.wizardService.finishSubject.subscribe(
      () => this.finishEvent.emit()
    );

    this.wizardService.stepForwardSubject.subscribe(
      () => this.stepForwardEvent.emit()
    );

    this.wizardService.stepBackSubject.subscribe(
      () => this.stepBackEvent.emit()
    );

    this.wizardService.invalidStepSubject.subscribe(
      (step: WizardStep) => this.invalidStep.emit(step)
    );

    this.wizardService.currentStepSubject.subscribe(
      (step: WizardStep) => this.currentStep.emit(step)
    );

    this.wizardService.isOnFirstStepSubject.subscribe(
      (val: boolean) => setTimeout(() => this.isOnFirstStep.emit(val))
    );

    this.wizardService.isOnLastStepSubject.subscribe(
      (val: boolean) => setTimeout(() => this.isOnLastStep.emit(val))
    );

    this.wizardService.isOnStartingStepSubject.subscribe(
      (val: boolean) => setTimeout(() => this.isOnStartingStep.emit(val))
    );
  }

  ngAfterViewInit() {
    this.wizardService.init(this.steps, this.activeStepId);
  }
}
