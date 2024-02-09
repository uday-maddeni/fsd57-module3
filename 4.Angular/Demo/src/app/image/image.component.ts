import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  selectedFile: File | undefined;
  retrievedImage: any;
  message: string = '';
  imageName: string = '';
  category: string = '';
  categoryFilter: string = '';
  allImages: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getAllImages();
  }

  onFileChanged(event: any) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  onUpload() {
    if (!this.selectedFile) {
      this.message = 'Please select an image to upload.';
      return;
    }

    this.imageService.uploadImage(this.selectedFile, this.category).subscribe(
      (response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
          this.getAllImages();
          this.resetValues();
        } else {
          this.message = 'Image not uploaded successfully';
        }
      },
      (error) => {
        this.message = 'Error uploading image';
      }
    );
  }

  getImage() {
    
    if (!this.imageName) {
      this.message = 'Please enter an image name.';
      return;
    }

    this.imageService.getImage(this.imageName).subscribe(
      (res) => {
        this.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;
      },
      (error) => {
        this.message = 'Image not found';
        this.resetValues();
      }
    );
  }

  getAllImages() {
    this.imageService.getAllImages().subscribe(
      (res: any[]) => {
        this.allImages = res;
        this.allImages.forEach((image) => {
          image.picByte = 'data:image/jpeg;base64,' + image.picByte;
        });
      },
      (error) => {
        console.error('Error retrieving all images:', error);
      }
    );
  }

  getImagesByCategory() {
    if (!this.categoryFilter) {
      this.message = 'Please enter a category for filtering.';
      return;
    }

    this.imageService.getImagesByCategory(this.categoryFilter).subscribe(
      (res: any[]) => {
        this.allImages = res;
        this.allImages.forEach((image) => {
          image.picByte = 'data:image/jpeg;base64,' + image.picByte;
        });
      },
      (error) => {
        console.error('Error retrieving images by category:', error);
        this.resetValues();
      }
    );
  }

  private resetValues() {
    this.selectedFile = undefined;
    this.imageName = '';
    this.category = '';
    this.categoryFilter = '';
  }
}

