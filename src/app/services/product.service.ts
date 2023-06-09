import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/Product';
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`http://localhost:8080/api/products`)
    }

    deleteProduct(_id: number): Observable<IProduct> {
        return this.http.delete<IProduct>(`http://localhost:8080/api/products/${_id}`)
    }

    getProductById(_id: number): Observable<IProduct> {
        return this.http.get<IProduct>(`http://localhost:8080/api/products/${_id}`)
    }

    addProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(`http://localhost:8080/api/products`, product)
    }

    updateProduct(product: any): Observable<IProduct> {
        return this.http.patch<IProduct>(`http://localhost:8080/api/products/${product._id}`, product);
    }
}
