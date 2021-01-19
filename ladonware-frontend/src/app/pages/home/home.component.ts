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
  searchText: string = '';

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
    product.image_url = 'https://storage.googleapis.com/ladonware-6f358.appspot.com/products/1611082481398-test.jpg';
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
    this.productsList.push(product);
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '450px',
      data: new Product()
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
