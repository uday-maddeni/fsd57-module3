import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  constructor(private httpClient: HttpClient) {}

  selectedFile: File | undefined;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string = '';
  imageName: string = '';

  public onFileChanged(event: any) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  // Gets called when the user clicks on submit to upload the image
  onUpload() {
    if (!this.selectedFile) {
      this.message = 'Please select an image to upload.';
      return;
    }

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.httpClient
      .post('http://localhost:8085/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
          this.resetValues();
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }

  // Gets called when the user clicks on retrieve image button to get the image from the back end
  getImage() {
    if (!this.imageName) {
      this.message = 'Please enter an image name.';
      return;
    }

    this.httpClient.get('http://localhost:8085/image/get/' + this.imageName).subscribe(
      (res) => {
        this.retrieveResponse = res;
        this.base64Data = this.retrieveResponse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      },
      (error) => {
        this.message = 'Image not found';
        this.resetValues();
      }
    );
  }

  private resetValues() {
    this.selectedFile = undefined;
    this.imageName = '';
  }
}

