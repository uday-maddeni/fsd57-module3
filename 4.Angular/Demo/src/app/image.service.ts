// // image.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ImageService {
//   private baseUrl = 'http://localhost:8085/image';

//   constructor(private httpClient: HttpClient) {}

//   uploadImage(imageFile: File, category: string): Observable<any> {
//     const uploadImageData = new FormData();
//     uploadImageData.append('imageFile', imageFile, imageFile.name);
//     uploadImageData.append('category', category);

//     return this.httpClient.post(`${this.baseUrl}/upload`, uploadImageData, { observe: 'response' });
//   }

//   getImage(imageName: string): Observable<any> {
//     return this.httpClient.get(`${this.baseUrl}/get/${imageName}`);
//   }

//   getAllImages(): Observable<any[]> {
//     return this.httpClient.get<any[]>(`${this.baseUrl}/getAllImages`);
//   }

//   getImagesByCategory(category: string): Observable<any[]> {
//     return this.httpClient.get<any[]>(`${this.baseUrl}/getImagesByCategory/${category}`);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private baseUrl = 'http://localhost:8085/image';

  constructor(private httpClient: HttpClient) {}

  uploadImage(imageFile: File, category: string): Observable<any> {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', imageFile, imageFile.name);
    uploadImageData.append('category', category);

    return this.httpClient.post(`${this.baseUrl}/upload`, uploadImageData, { observe: 'response' });
  }

  getImage(imageName: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/get/${imageName}`);
  }

  getAllImages(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/getAllImages`);
  }

  getImagesByCategory(category: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/getImagesByCategory/${category}`);
  }
}

