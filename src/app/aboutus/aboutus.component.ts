import { Component, OnInit } from '@angular/core';

import * as $ from "jquery"
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
    $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
}

 }


