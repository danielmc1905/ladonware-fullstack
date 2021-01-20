import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from 'src/app/components/product-form-dialog/product-form-dialog.component';
import Product from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsList: Product[] = [];
  searchText: string = '';
  loading: boolean = true;

  constructor(
    private dialog: MatDialog,
    private requestService: RequestService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.requestService.getAllProducts().subscribe((data: Product[]) => {
      this.productsService.productsListObserver.subscribe(productsList => {
        this.productsList = productsList
      });
      this.productsService.setProductsList(data);
      this.loading = false;
    })
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '450px',
      data: new Product()
    });

    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.productsList.push(product);
      }
    });
  }

}
