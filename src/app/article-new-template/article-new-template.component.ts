import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent implements OnInit {
  articleForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.articleForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0.1)]),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.pattern('https?://[^\\s/$.?#].[^\\s]*\\.(jpg|jpeg|png|gif)')
      ]),
      isOnSale: new FormControl(false)
    });
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
    Object.values(this.articleForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
