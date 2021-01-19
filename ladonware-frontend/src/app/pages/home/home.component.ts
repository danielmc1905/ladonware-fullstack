import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from 'src/app/components/product-form-dialog/product-form-dialog.component';
import Product from 'src/app/model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsList: Product[] = [];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let product = new Product();
    product.id = '123';
    product.name = 'Nike Adapt BB 2.0';
    product.description = '84% Poliester, 16% Elástico';
    product.category_name = 'Zapatos';
    product.price = 350.25;
    product.quantity = 4;
    product.status = 'En Stock';
    product.image_url = 'https://images.squarespace-cdn.com/content/v1/59aa18678fd4d28748fdc362/1582234001660-F0S8MPSOXU2TFPKTLT9L/ke17ZwdGBToddI8pDm48kIIWdAnyBSrZ5E6Gv7JXlDh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k9kZPbuygN4RSDPe_G5PO_pbVb0jdkjHmk-MhSr8npod9fyhKaF6iH64GfT8sX2GQ/IMG_9272.jpg';
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '250px',
      data: { product: new Product() }
    });

    dialogRef.afterClosed().subscribe(newProduct => {
      console.log('The dialog was closed');
      console.log(newProduct);
      if (newProduct) {
        this.productsList.push(newProduct)
      }
    });
  }

}
