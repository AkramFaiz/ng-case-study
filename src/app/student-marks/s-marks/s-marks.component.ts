import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/core/student';

@Component({
  selector: 'app-s-marks',
  templateUrl: './s-marks.component.html',
  styleUrls: ['./s-marks.component.scss']
})
export class SMarksComponent implements OnInit {
  @ViewChild(MatSort) sort = new MatSort();

  studentMarks: Student[] = [
    { name: "Stud1", class: 3, section: 'D', sub1: 23, sub2: 54, sub3: 89 },
    { name: "Stud2", class: 3, section: 'A', sub1: 43, sub2: 14, sub3: 49 },
    { name: "Stud3", class: 3, section: 'B', sub1: 33, sub2: 24, sub3: 39 },
    { name: "Stud4", class: 3, section: 'C', sub1: 43, sub2: 34, sub3: 29 },
    { name: "Stud5", class: 3, section: 'F', sub1: 13, sub2: 44, sub3: 19 },
  ];
  dataSource: any = [];
  displayedColumns: string[] = [];
  constructor() { 
    const tempArr = this.studentMarks[0];
    this.displayedColumns = Object.keys(tempArr);
    console.log(this.displayedColumns);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.studentMarks);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
