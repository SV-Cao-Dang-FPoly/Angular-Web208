import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategorys(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:8080/api/categories`);
  };

  deleteCategory(_id: number|string): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`http://localhost:8080/api/categories/${_id}`,);
  }
  getCategoryById(_id: number|string): Observable<ICategory> {
    return this.http.get<ICategory>(`http://localhost:8080/api/categories/${_id}`);
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`http://localhost:8080/api/categories`, category);
  }
  updateCategory(category : any): Observable<ICategory> {
    return this.http.patch<ICategory>(`http://localhost:8080/api/categories/${category._id}`, category);
  }
}
