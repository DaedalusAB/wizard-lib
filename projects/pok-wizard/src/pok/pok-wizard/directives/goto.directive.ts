import { Directive, Input, HostListener } from '@angular/core';
import { WizardService } from '../wizard.service';

@Directive({
  selector: '[pokWizardGoto]'
})
export class GotoDirective {
  @Input() stepId: string;

  constructor(private wizardService: WizardService) { }

  @HostListener('click') onClick() {
    this.wizardService.goTo(this.stepId);
  }
}
