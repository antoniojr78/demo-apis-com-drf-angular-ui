import { Component, OnInit } from '@angular/core';
import { Authors } from './models/authors.model';
import { AuthorService } from './services/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authors: Authors[];
  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    return this.authorService.getAuthors()
    .subscribe(data => this.authors = data);
  }
}
