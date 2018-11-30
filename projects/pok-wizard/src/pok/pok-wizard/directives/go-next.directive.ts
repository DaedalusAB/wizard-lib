import { Directive, HostListener } from '@angular/core';
import { WizardService } from '../wizard.service';

@Directive({
  selector: '[pokWizardGoNext]'
})
export class GoToNextDirective {

  constructor(private wizardService: WizardService) { }

  @HostListener('click') onClick() {
    this.wizardService.goToNext();
  }
}
