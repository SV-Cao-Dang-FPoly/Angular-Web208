import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent {
    categories: ICategory[] = [];
    // limitedCategories: ICategory[] = [];

    constructor(private categoryService: CategoryService) {
        this.fetchCategories();
    }
    fetchCategories() {
        this.categoryService.getCategories().subscribe(data => {
            this.categories = data.slice(0, 7);
        }, error => {
            console.log(error.message)
        })
    }
}
