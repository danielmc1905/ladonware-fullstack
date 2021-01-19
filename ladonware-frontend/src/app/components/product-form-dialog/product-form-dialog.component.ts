import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Product from 'src/app/model/Product';

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.scss']
})
export class ProductFormDialogComponent implements OnInit {

  productForm: FormGroup;

  categories: string[] = ['Zapatos', 'Camisas', 'Pantalones', 'Bolsos'];

  state: string[] = ['En Stock', 'Limitado', 'Agotado'];

  constructor(
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category_name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      status: ['', Validators.required],
      image_url: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.product.id) {
      this.productForm.controls['name'].setValue(this.product.name)
      this.productForm.controls['description'].setValue(this.product.description)
      this.productForm.controls['category_name'].setValue(this.product.category_name)
      this.productForm.controls['price'].setValue(this.product.price)
      this.productForm.controls['quantity'].setValue(this.product.quantity)
      this.productForm.controls['status'].setValue(this.product.status)
      this.productForm.controls['image_url'].setValue(this.product.image_url)
    }
  }

  submitForm() {
    this.product = this.productForm.value;
    this.dialogRef.close(this.product)
    console.log(this.product)
  }

}
