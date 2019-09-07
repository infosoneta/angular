import { Component, OnInit } from '@angular/core';

import { MediaService } from 'src/app/media/shared/media.service';
import { MediaDetail } from 'src/app/media/shared/media.model';


@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  mediaDetailList:MediaDetail[];

  constructor( private mediaService:MediaService) { }

  ngOnInit() {

    var x = this.mediaService.mediaDetailList
    x.snapshotChanges().subscribe(item => {
      this.mediaDetailList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.mediaDetailList.push(y as MediaDetail);
      });
    });

  }

  onItemClick(media : MediaDetail){
    this.mediaService.media =media; 
    //alert(media.title);
    //Object.assign({},emp);
  }

}
