import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeSidebar(): void {
    const modal = $('div.modal-sidebar');
    const sidebar = $('section.sidebar');
    const btnSidebar = $('a.btn-sidebar');

    sidebar.removeClass('sidebar-open');
    modal.removeClass('background-modal');
    btnSidebar.removeClass('btn-sidebar-open');
  }

}
