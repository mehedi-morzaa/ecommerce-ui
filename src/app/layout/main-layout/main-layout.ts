import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { NavbarAside } from "../navbar-aside/navbar-aside";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer, NavbarAside, RouterOutlet],
  templateUrl: './main-layout.html',
})
export class MainLayout {

}
