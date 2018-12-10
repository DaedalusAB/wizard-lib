# Pretty Ok Wizard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Description

A wizard module for Angular applications. Deals mostly with navigation. 
* Has optional steps.
* Can navigate to any previous step, always.
* Can navigate forward to any steps, if current step is valid and you are not jumping over a step you haven't visited previously.
* Emits events whenever a step changes (on next or back), the wizard finishes, a step is invalit, etc.
* Provides attribute directives for navigation (Next, Back, GoTo, Finish)
* The style (CSS) is up to you.

## Installation

To install this component, follow the procedure:
1. **npm install pok-wizard --save**
2. Add PokWizardModule
```javascript
import { PokWizardModule } from 'pok-wizard';
  
@NgModule({
    imports:      [ BrowserModule, PokWizardModule ],
    // ...
})
export class MyAppModule {}
```

## Usage
Add `pok-wizard` component to the html template, like this (make sure you provide step ids and to make them unique)
```html
<pok-wizard-step>
  <pok-wizard-step id="1"> Step 1 content </pok-wizard-step>
  <pok-wizard-step id="2"> Step 2 content </pok-wizard-step>
  <button pokWizardGoBack>Back</button>
  <button pokWizardGoNext>Next</button>
</pok-wizard-step>
```

## Components 

### <pok-wizard>
This is where you define your steps and where the attribute directives work. Each `<pok-wizard>` has its own service, and multiple `<pok-wizard>` components can run at the same time. 
#### [activeStepId] 
The id of the active step. The wizard will start on this step. Can be left out in case you want the wizard to start on the first step you define.
#### (wizardSteps) 
Emits all the steps you've defines and their status. The data type is `WizardStep[]`, `WizardStep` is defined in this module (see below)
#### (finishEvent)
Emits when wizard finishes.
#### (stepForwardEvent) 
Emits when the step changes forward.
#### (stepBackEvent)
Emtis when step changes backwards.
#### (invalidStep)
Emits when you try to navigate forward/finish, but the current step is invalid. Emits the current step (`WizardStep`)
#### (currentStep)
Emits the current step. Emits when the wizards initializes and whenever the step changes.
#### (isOnStartingStep)
Emits `true` if current step is the step you provided as `[activeStepId]`
#### (isOnFirstStep)
Emits `true` if current step is the the first step you've defined.
#### (isOnLastStep)
Emits `true` if the current step is the last, included step.
