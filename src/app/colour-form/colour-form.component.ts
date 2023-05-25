import { Component } from '@angular/core';

@Component({
  selector: 'app-colour-form',
  templateUrl: './colour-form.component.html',
  styles: [
  ]
})

export class ColourFormComponent {

  isFormValid: boolean = true

  formData = {
    colour1: '#000000',
    colour2: '#ffffff',
  }

  colourValidation(event: Event) {
    this.isFormValid = this.formData.colour1 !== this.formData.colour2
  }

  onSubmit() {
    if (this.isFormValid) {
      alert("C'est envoyé")
    } else {
      // TODO: error
      alert("Merci de corriger l'erreur")
    }
  }
}
