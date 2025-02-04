import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    serverDate: string = '';

    constructor(private router: Router) {}

    ngOnInit(): void {
      this.setServerDate();
    }
    setServerDate(): void {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        this.serverDate = today.toLocaleDateString('es-ES', options);
    }

    navigateTo(route: string) {
        this.router.navigate([`/${route}`]);
    }
}

