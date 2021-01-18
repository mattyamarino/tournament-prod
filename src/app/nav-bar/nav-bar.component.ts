import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartModalComponent } from './chart-modal/chart-modal.component';
import { RulesModalComponent } from './rules-modal/rules-modal.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openRulesDialog() {
    const dialogRef = this.dialog.open(RulesModalComponent);
  }

  openChartDialog() {
    const dialogRef = this.dialog.open(ChartModalComponent);
  }

}
