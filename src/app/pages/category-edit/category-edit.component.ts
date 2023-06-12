import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
  categories!: ICategory;
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    img: ['', [Validators.required]]
  })

  constructor(
    private caetgoryService: CategoryService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
      
    this.route.paramMap.subscribe(param => {
      const id = this.route.snapshot.params['id'];
      this.caetgoryService.getCategoryById(id).subscribe(category => {
        this.categories = category;
        // set giá trị từ API vào input form
        this.categoryForm.patchValue({
          name:this.categories.name,
          img:this.categories.img
        })
      }, error => console.log(error.message))
    })
  }
  onHandleEdit() {
    // kiểm tra nếu form hợp lệ 
    if (this.categoryForm.valid) {
      const newProduct: ICategory = {
        _id: this.categories._id,
        name: this.categoryForm.value.name || "",
        img: this.categoryForm.value.img || ""
      }
      console.log(newProduct);
      
      this.caetgoryService.updateCategory(newProduct).subscribe(category => {
        alert("Cập nhật sản phẩm thành công")
        this.router.navigate(['/admin/category']);
      })
    }
  }
}
