import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Product from 'src/app/model/Product';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.scss']
})
export class ProductFormDialogComponent implements OnInit {

  productForm: FormGroup;

  categories: string[] = ['Zapatos', 'Camisas', 'Pantalones', 'Bolsos'];

  state: string[] = ['En Stock', 'Limitado', 'Agotado'];
  error: string = '';

  newProduct: boolean = true;
  oldProduct: Product;
  loading: boolean = false;
  uploading: boolean = false;
  imageUploaded: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private formBuilder: FormBuilder,
    private requestService: RequestService
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
    console.log(this.product)
    if (this.product.name) {
      this.newProduct = false;
      this.imageUploaded = true;
      this.oldProduct = JSON.parse(JSON.stringify(this.product));
      this.productForm.controls['name'].setValue(this.product.name);
      this.productForm.controls['description'].setValue(this.product.description);
      this.productForm.controls['category_name'].setValue(this.product.category_name);
      this.productForm.controls['price'].setValue(this.product.price);
      this.productForm.controls['quantity'].setValue(this.product.quantity);
      this.productForm.controls['status'].setValue(this.product.status);
      this.productForm.controls['image_url'].setValue(this.product.image_url);
    }
  }

  submitForm() {
    this.product = this.productForm.value;
    if (this.oldProduct) {
      this.product.id = this.oldProduct.id;
    }
    this.loading = true;
    if (this.newProduct) {
      this.requestService.createProduct(this.product)
        .subscribe(resp => {
          console.log(resp)
          this.loading = false;
          this.dialogRef.close(this.product)
        });
    } else {
      this.requestService.editProduct(this.product)
        .subscribe(resp => {
          console.log(resp)
          this.loading = false;
          this.dialogRef.close(this.product)
        });
    }
  }

  uploadImage(event) {
    let image = event.target.files[0];
    this.imageUploaded = false;
    if (image) {
      const uploadImageData = new FormData();
      uploadImageData.append('file', image, image.name);
      this.uploading = true;
      this.requestService.uploadImage(uploadImageData)
        .subscribe(resp => {
          this.productForm.controls['image_url'].setValue(resp.imageUrl);
          this.uploading = false;
          this.imageUploaded = true;
        }, () => {
          this.uploading = false;
          this.imageUploaded = false;
          this.error = 'Ha ocurrido un error al intentar subir la imagen.';
        })

    } else {
      this.error = 'Por favor seleccione una imagen.';
    }
  }

}
