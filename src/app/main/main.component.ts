import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <main class="wrapper">
  <!-- <label> TESTE </label>
  <button routerLink="/graphics"> CLIQUE </button> -->
    <div id="scrollInMain" class="content-wrapper scroll">
      <section id="main__content" class="content">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
      </section>
    </div>
  </main>
  <div id="sidebar-overlay"></div>
`
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
