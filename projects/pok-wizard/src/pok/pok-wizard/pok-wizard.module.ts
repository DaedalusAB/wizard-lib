import { NgModule } from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { CommonModule } from '@angular/common';
import { WizardStepContainerComponent } from './wizard-step-container/wizard-step-container.component';
import { GotoDirective } from './directives/goto.directive';
import { GoToNextDirective } from './directives/go-next.directive';
import { GoBackDirective } from './directives/go-back.directive';
import { FinishDirective } from './directives/finish.directive';

@NgModule({
  declarations: [
    WizardStepComponent,
    WizardStepContainerComponent,
    WizardStepContainerComponent,
    GotoDirective,
    GoToNextDirective,
    GoBackDirective,
    FinishDirective,
  ],
  exports: [
    WizardStepComponent,
    WizardStepContainerComponent,
    GotoDirective,
    GoToNextDirective,
    GoBackDirective,
    FinishDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class PokWizardModule { }
