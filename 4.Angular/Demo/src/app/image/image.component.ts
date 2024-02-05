/*
import { HttpClient } from '@angular/common/http';
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
  category: string = '';
  categoryFilter: string = '';
  
  // New variable to store the array of images
  allImages: any[] = [];

  public onFileChanged(event: any) {
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

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('category', this.category);

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

getAllImages() {
  this.httpClient.get<any[]>('http://localhost:8085/image/getAllImages').subscribe(
    (res: any[]) => {
      console.log('Images retrieved successfully:', res);

      // Assign the array of images to the new variable
      this.allImages = res;
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

  this.httpClient.get<any[]>(`http://localhost:8085/image/getImagesByCategory/${this.categoryFilter}`).subscribe(
    (res: any[]) => {
      console.log('Images retrieved by category:', res);

      // Assign the array of images to the new variable
      this.allImages = res;
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

*/

/*

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  selectedFile: File | undefined;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string = '';
  imageName: string = '';
  category: string = '';
  categoryFilter: string = '';

  // New variable to store the array of images
  allImages: any[] = [];

  ngOnInit() {
    // Call the method to get all images when the component is initialized
    this.getAllImages();
  }

  public onFileChanged(event: any) {
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

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('category', this.category);

    this.httpClient
      .post('http://localhost:8085/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
          // After uploading, refresh the list of all images
          this.getAllImages();
          this.resetValues();
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }

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

  getAllImages() {
    this.httpClient.get<any[]>('http://localhost:8085/image/getAllImages').subscribe(
      (res: any[]) => {
        console.log('Images retrieved successfully:', res);

        // Assign the array of images to the new variable
        this.allImages = res;
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

    this.httpClient.get<any[]>(`http://localhost:8085/image/getImagesByCategory/${this.categoryFilter}`).subscribe(
      (res: any[]) => {
        console.log('Images retrieved by category:', res);

        // Assign the array of images to the new variable
        this.allImages = res;
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

*/

/*
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  selectedFile: File | undefined;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string = '';
  imageName: string = '';
  category: string = '';
  categoryFilter: string = '';

  // New variable to store the array of images
  allImages: any[] = [];

  ngOnInit() {
    // Call the method to get all images when the component is initialized
    this.getAllImages();
  }

  public onFileChanged(event: any) {
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

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('category', this.category);

    this.httpClient
      .post('http://localhost:8085/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
          // After uploading, refresh the list of all images
          this.getAllImages();
          this.resetValues();
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }

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

  getAllImages() {
    this.httpClient.get<any[]>('http://localhost:8085/image/getAllImages').subscribe(
      (res: any[]) => {
        console.log('Images retrieved successfully:', res);

        // Assign the array of images to the new variable
        this.allImages = res;
        // Decode base64 images for displaying
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

    this.httpClient.get<any[]>(`http://localhost:8085/image/getImagesByCategory/${this.categoryFilter}`).subscribe(
      (res: any[]) => {
        console.log('Images retrieved by category:', res);

        // Assign the array of images to the new variable
        this.allImages = res;
        // Decode base64 images for displaying
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

*/

// image.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ImageService } from '../image.service';

// @Component({
//   selector: 'app-image',
//   templateUrl: './image.component.html',
//   styleUrls: ['./image.component.css'],
// })
// export class ImageComponent implements OnInit {
//   selectedFile: File | undefined;
//   retrievedImage: any;
//   message: string = '';
//   imageName: string = '';
//   category: string = '';
//   categoryFilter: string = '';
//   allImages: any[] = [];

//   constructor(private imageService: ImageService) {}

//   ngOnInit() {
//     this.getAllImages();
//   }

//   onFileChanged(event: any) {
//     const inputElement = event.target as HTMLInputElement;

//     if (inputElement.files && inputElement.files.length > 0) {
//       this.selectedFile = inputElement.files[0];
//     }
//   }

//   onUpload() {
//     if (!this.selectedFile) {
//       this.message = 'Please select an image to upload.';
//       return;
//     }

//     this.imageService.uploadImage(this.selectedFile, this.category).subscribe(
//       (response) => {
//         if (response.status === 200) {
//           this.message = 'Image uploaded successfully';
//           this.getAllImages();
//           this.resetValues();
//         } else {
//           this.message = 'Image not uploaded successfully';
//         }
//       },
//       (error) => {
//         this.message = 'Error uploading image';
//       }
//     );
//   }

//   getImage() {
//     if (!this.imageName) {
//       this.message = 'Please enter an image name.';
//       return;
//     }

//     this.imageService.getImage(this.imageName).subscribe(
//       (res) => {
//         this.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;
//       },
//       (error) => {
//         this.message = 'Image not found';
//         this.resetValues();
//       }
//     );
//   }

//   getAllImages() {
//     this.imageService.getAllImages().subscribe(
//       (res: any[]) => {
//         this.allImages = res;
//         this.decodeBase64Images();
//       },
//       (error) => {
//         console.error('Error retrieving all images:', error);
//       }
//     );
//   }

//   // ... existing code ...

//   private decodeBase64Images() {
//     this.allImages.forEach((image) => {
//       // Check if the base64 prefix is already present
//       if (!image.picByte.startsWith('data:image/jpeg;base64,')) {
//         image.picByte = 'data:image/jpeg;base64,' + image.picByte;
//       }
//     });
//   }

//   /*

//   getAllImages() {
//     this.imageService.getAllImages().subscribe(
//       (res: any[]) => {
//         this.allImages = res;
//         this.decodeBase64Images();
//       },
//       (error) => {
//         console.error('Error retrieving all images:', error);
//       }
//     );
//   }

//   private decodeBase64Images() {
//     this.allImages.forEach((image) => {
//       image.picByte = 'data:image/jpeg;base64,' + image.picByte;
//     });
//   }
//   */

//   getImagesByCategory() {
//     if (!this.categoryFilter) {
//       this.message = 'Please enter a category for filtering.';
//       return;
//     }

//     this.imageService.getImagesByCategory(this.categoryFilter).subscribe(
//       (res: any[]) => {
//         this.allImages = res;
//         this.decodeBase64Images();
//       },
//       (error) => {
//         console.error('Error retrieving images by category:', error);
//         this.resetValues();
//       }
//     );
//   }

//   private resetValues() {
//     this.selectedFile = undefined;
//     this.imageName = '';
//     this.category = '';
//     this.categoryFilter = '';
//   }
// }



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

