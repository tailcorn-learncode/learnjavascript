import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  myTextareaValue: string;
  response: string;

  constructor(private http: HttpClient) {}

  sendPostRequest() {
    const body = {text: this.myTextareaValue};
    this.http.post('https://example.com/api', body).subscribe(
      response => {
        console.log(response);
        this.response = response['message']; // or whatever property your response has
      },
      error => console.log(error)
    );
  }
}
