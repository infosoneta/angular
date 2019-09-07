import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MediaDetail } from 'src/app/media/shared/media.model';


@Injectable({
  providedIn: 'root'
})
export class MediaService {
  mediaDetailList: AngularFireList<any>;

  media: MediaDetail = new MediaDetail();
 // selectedMedia: MediaDetail = new MediaDetail();

  constructor(private firebase: AngularFireDatabase) { 
      this.mediaDetailList= this.firebase.list('mediaDetail');
  }

  getMediaDetailListDetailList() {
    this.mediaDetailList = this.firebase.list('mediaDetail');
  }

  insertMediaDetails(mediaDetails) {
    this.mediaDetailList.push(mediaDetails);
  }

  
  getMediaDetailData() {
    this.mediaDetailList = this.firebase.list('mediaDetail');
    return this.mediaDetailList;
  }

  insertMedia(media: MediaDetail) {
    this.mediaDetailList.push({
      title: media.title,
      artist: media.artist,
      description: media.description,
      lyrics: media.lyrics,
      mediaUrl: media.mediaUrl,
      type : 'audio',
      category: 'music'

    });
  }

  // updateEmployee(emp : Employee){
  //    this.employeeList.update(emp.$key,{
  //      name : emp.name,
  //      position : emp.position,
  //      office : emp.office,
  //      salary : emp.salary,
  //      imageUrl: emp.imageUrl
  //    })
  // }

  // deleteEmployee(key : string){
  //   this.employeeList.remove(key);
  // }

}