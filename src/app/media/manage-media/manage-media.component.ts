import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/media/shared/media.service';
import { MediaDetail } from 'src/app/media/shared/media.model';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-manage-media',
  templateUrl: './manage-media.component.html',
  styleUrls: ['./manage-media.component.scss']
})
export class ManageMediaComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  constructor(public mediaService : MediaService ,private storage:AngularFireStorage) { }


  ngOnInit() {
  }
  onSubmit(form: NgForm) {

   // alert(form.value.title);

    this.isSubmitted = true;
    if (form.valid) {

      if (form.value.$key == null)
      this.mediaService.insertMedia(form.value);
      var filePath = `${this.selectedImage.name.split('.').slice(0, -1)
     // .join('.')}_${new Date().getTime()
      
      }`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
           //form['mediaUrl'] = url;
            form.value.mediaUrl=url;

           if (form.value.$key == null)
             this.mediaService.insertMedia(form.value);
          // else
          //  this.mediaService.updateEmployee(form.value);

             
           
         //  this.resetForm(form);
          })
        })
      ).subscribe();
     
    }
    alert("Added successfully");
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
