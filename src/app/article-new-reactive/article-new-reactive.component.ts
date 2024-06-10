import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent implements OnInit {
  articleForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, this.forbiddenNameValidator]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://[^\\s/$.?#].[^\\s]*\\.(jpg|jpeg|png|gif)')]],
      isOnSale: [false]
    });
  }

  forbiddenNameValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
    return forbiddenNames.includes(control.value) ? { forbiddenName: true } : null;
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Formulario válido, datos:', this.articleForm.value);
      this.articleForm.reset();
    } else {
      console.log('Formulario no válido');
      this.markAllAsTouched();
    }
  }

  markAllAsTouched() {
    this.articleForm.markAllAsTouched();
  }
}
