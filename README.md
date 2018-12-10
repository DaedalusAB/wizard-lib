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
    declarations: [ MyTestApp ],
    bootstrap:    [ MyTestApp ]
})
export class MyTestAppModule {}
```

## Usage
// todo
