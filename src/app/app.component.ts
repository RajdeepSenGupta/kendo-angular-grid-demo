// Angular imports
import { Component, OnInit } from '@angular/core';

// Kendo imports
import { process, State, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

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
  }
    
  toggle(){
    this.dialogOpen = !this.dialogOpen;
  }

  toggleKendoDialog(){
    this.kendoDialogOpen = !this.kendoDialogOpen;
  }

  pageChange(ev){
      alert("Changing page");
      console.log(ev);
      this.state.skip = ev.skip;
      this.state.take = ev.take;
  }

  filterChange(ev){
      console.log(ev);
  }
}