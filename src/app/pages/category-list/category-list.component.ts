import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
    categories: ICategory[] = [];

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategories().subscribe(data => {
            this.categories = data
        }, error => {
            console.log(error.message)
        })
    }
    removedItems: ICategory[] = [];

    removeItem(_id: any) {
        if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
            this.categoryService.deleteCategory(_id).subscribe(() => {
                console.log('Delete Success');
                const removedItem = this.categories.find(item => item._id === _id);
                if (removedItem) {
                    this.removedItems.push(removedItem);
                    this.categories = this.categories.filter(item => item._id !== _id);
                }
            });
        }

    }
}
