import { Directive, HostListener } from '@angular/core';
import { WizardService } from '../wizard.service';

@Directive({
  selector: '[pokWizardFinish]'
})
export class FinishDirective {
  constructor(private wizardService: WizardService) { }

  @HostListener('click') onClick() {
    this.wizardService.finish();
  }

}
