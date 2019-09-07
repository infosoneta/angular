import { Component, OnInit } from '@angular/core';

import { MediaService } from 'src/app/media/shared/media.service';
import { MediaDetail } from 'src/app/media/shared/media.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  nediaDetailList : MediaDetail[];
  constructor( private mediaServices : MediaService) { }

  ngOnInit() {

    var x = this.mediaServices.getMediaDetailData();

    x.snapshotChanges().subscribe(item => {
      this.nediaDetailList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.nediaDetailList.push(y as MediaDetail);
      });
    });
  }

}
