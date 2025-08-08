import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { sstore } from './store';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';

interface bro {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  good: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [sstore]
})
export class AppComponent {
  title = 'signal';
  book = inject(sstore)
  http = inject(HttpClient)

  users: bro[] = [];

  apiurl = 'https://jsonplaceholder.typicode.com/todos'
  async getdata() {
    this.users = await lastValueFrom(
      this.http.get<bro[]>(this.apiurl)
    )
    console.log(this.users);
  }

  newpost() {
    let newuser = [
      {
        userId: 123,
        id: 332,
        title: 'salom',
        completed: true,
        good: true
      }
    ]
    this.http.post(this.apiurl, newuser).subscribe(data => {
      console.log(data);
    })
  }

  updatepost(n: number) {
    let newuser = [
      {
        userId: 123,
        id: 331,
        title: 'salom',
        completed: true,
        good: true
      }
    ]
    this.http.patch(`https://jsonplaceholder.typicode.com/todos/${n}`, newuser).subscribe(data => {
      console.log(data);
    })
  }
  deletep(n: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${n}`).subscribe(data => {
      console.log(n, ' ochirildi');
      console.log(data);
    })
  }
}
