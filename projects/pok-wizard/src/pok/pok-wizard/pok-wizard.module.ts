import { NgModule } from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { GotoDirective } from './directives/goto.directive';
import { GoToNextDirective } from './directives/go-next.directive';
import { GoBackDirective } from './directives/go-back.directive';
import { FinishDirective } from './directives/finish.directive';

@NgModule({
  declarations: [
    WizardStepComponent,
    WizardComponent,
    WizardComponent,
    GotoDirective,
    GoToNextDirective,
    GoBackDirective,
    FinishDirective,
  ],
  exports: [
    WizardStepComponent,
    WizardComponent,
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
