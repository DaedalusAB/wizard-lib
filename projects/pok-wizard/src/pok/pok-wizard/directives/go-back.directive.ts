import { Directive, HostListener } from '@angular/core';
import { WizardService } from '../wizard.service';

@Directive({
  selector: '[pokWizardGoBack]'
})
export class GoBackDirective {

  constructor(private wizardService: WizardService) { }

  @HostListener('click') onClick() {
    this.wizardService.goToPrevious();
  }
}
