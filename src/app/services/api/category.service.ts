import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private apiUrl = '';
  private categoryPath = '';

  constructor(private httpClient: HttpClient) { }

  public getCategories() {
    return this.httpClient.get(this.apiUrl + '/' + this.categoryPath);
  }
}
