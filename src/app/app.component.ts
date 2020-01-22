// Angular imports
import { Component, OnInit } from '@angular/core';

// Kendo imports
import { process, State, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';

// Additional imports
import { Products } from './product.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  private dialogOpen: boolean = false;
  private kendoDialogOpen: boolean = false;
  private filter: CompositeFilterDescriptor;
  
  // Kendo related
  private gridData;
  private autoCompleteData;
  private autoCompleteDataList;
  public state: State = {
        skip: 0,
        take: 5,
        filter: this.filter,
    };

  public position: 'top' | 'bottom' | 'both' = 'top';

  ngOnInit(){
      this.gridData = Products;
      
      this.autoCompleteData = new Array();
      Products.forEach(product => {
          this.autoCompleteData.push(product.ProductName);
      });

      this.autoCompleteDataList = this.autoCompleteData;
  }
    
  toggle(){
    this.dialogOpen = !this.dialogOpen;
  }

  toggleKendoDialog(){
    this.kendoDialogOpen = !this.kendoDialogOpen;
  }

  pageChange(ev){
      this.state.skip = ev.skip;
      this.state.take = ev.take;
  }

  public autoCompleteChange(filter: any): void {
        this.autoCompleteData = this.autoCompleteDataList.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

  public filterData(ev: any){
      this.gridData = Products.filter(x => x.ProductName.toLowerCase() === ev.toLowerCase());
      if(ev === null || ev === undefined || ev === ""){
        this.gridData = Products;
      }
    }

    public downloadPdf(){
      const dataURI = "data:text/plain;base64," + encodeBase64("Hello World!");
      saveAs(dataURI, "test.pdf");
    }
}