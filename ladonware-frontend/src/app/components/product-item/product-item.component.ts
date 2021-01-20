import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Product from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ProductFormDialogComponent } from '../product-form-dialog/product-form-dialog.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() showUnderline: boolean;

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  getStatusColor() {
    if (this.product?.status == 'En Stock') {
      return '#1cb133';
    } else if (this.product?.status == 'Limitado') {
      return '#eda620';
    } else {
      return '#e04517';
    }
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '450px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.product = product;
      }
    });
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.productsService.deleteProduct(product);
      }
    });
  }

}
