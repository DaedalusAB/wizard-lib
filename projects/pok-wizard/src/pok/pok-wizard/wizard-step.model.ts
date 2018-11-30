export class WizardStep {
  public id: any;
  public active: boolean;
  public visited: boolean;
  public included: boolean;
  public valid: boolean;

  constructor(id: any, included: boolean, valid: boolean) {
    this.id = id;
    this.active = false;
    this.visited = false;
    this.included = included;
    this.valid = valid;
  }

  public activate() {
    setTimeout(() => {
      this.active = true;
      this.visited = true;
    });
  }

  public deactivate() {
    setTimeout(() => this.active = false);
  }
}
