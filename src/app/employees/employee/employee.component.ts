
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { ImageService } from 'src/app/shared/image.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  // formTemplate = new FormGroup({
  //   caption: new FormControl('', Validators.required),
  //   category: new FormControl(''),
  //   imageUrl: new FormControl('', Validators.required)
  // })
  constructor( public employeeService: EmployeeService,private service: ImageService,private storage: AngularFireStorage) { 


  }
  employeelist: Employee[];
  ngOnInit() {
    this.resetForm();
    var x = this.employeeService.getData();
   
  }


  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    if (form.valid) {
      var filePath = `${this.selectedImage.name.split('.').slice(0, -1)
     // .join('.')}_${new Date().getTime()
      
      }`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
          //  form['imageUrl'] = url;
            form.value.imageUrl=url;
        //    this.service.insertImageDetails(form);
           // this.resetForm();

           if (form.value.$key == null)
           this.employeeService.insertEmployee(form.value);
          else
           this.employeeService.updateEmployee(form.value);
           
          // tostr.succees("successfully added and saved !")

           this.resetForm(form);
          })
        })
      ).subscribe();
    }

  
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
      imageUrl:''
    }
    this.imgSrc = '/assets/img/image_placeholder.jpg';
  }

  onDelete(form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }


  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }
}

