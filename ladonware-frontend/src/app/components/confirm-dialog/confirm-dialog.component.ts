import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Product from 'src/app/model/Product';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  deleteProduct() {
    let fileName = this.product.image_url.split("/")[5];
    this.requestService.deleteProduct(this.product.id, fileName)
      .subscribe(resp => {
        console.log(resp)
        this.dialogRef.close(this.product)
      });
  }

}
