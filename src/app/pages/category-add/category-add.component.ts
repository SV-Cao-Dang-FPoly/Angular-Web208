import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
})

constructor(
    private categoryService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder) { }

onHandleAdd() {
    if (this.categoryForm.valid){
        const category: ICategory = {
            name: this.categoryForm.value.name || ""
        }
        this.categoryService.addCategory(category).subscribe(category => {
            console.log('Thành công', category);
            alert("Thêm danh mục thành công");
            this.router.navigate(['/admin/category']);
        })
    }
    

}
}
