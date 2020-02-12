import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['FirstName', 'LastName', 'Address', 'Gender', 'Email', 'Phone'];
  data: MatTableDataSource<any>;

  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: UsersService) { }

  ngAfterViewInit() {

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          console.log("Sending request!");
          return this.service!.getUsersList(this.paginator.pageIndex);
        }),
        map(data => {

          this.resultsLength = data.totalCount;
          return data;

        }),
        catchError(() => {
          return observableOf([]);
        })
      ).subscribe(data => this.data = data.values);
  }
}
