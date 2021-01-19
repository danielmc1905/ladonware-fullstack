import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Product from 'src/app/model/Product';
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

  status: string = 'En Stock';

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.product)
    console.log(this.showUnderline)
  }

  getStatusColor() {
    if (this.status == 'En Stock') {
      return '#1cb133';
    } else if (this.status == 'Limitado') {
      return '#eda620';
    } else {
      return '#e04517';
    }
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '250px',
      data: { product: this.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { product: this.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
