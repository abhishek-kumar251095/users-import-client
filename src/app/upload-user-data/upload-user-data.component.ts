import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://users-import-server.herokuapp.com/user/upload';

@Component({
  selector: 'app-upload-user-data',
  templateUrl: './upload-user-data.component.html',
  styleUrls: ['./upload-user-data.component.css']
})

export class UploadUserDataComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'userdata'
  });

  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
    };
  }

}
