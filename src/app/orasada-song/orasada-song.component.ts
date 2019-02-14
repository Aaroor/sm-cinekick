import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-orasada-song',
  templateUrl: './orasada-song.component.html',
  styleUrls: ['./orasada-song.component.css']
})
export class OrasadaSongComponent implements OnInit {
  public pageTitle = "Cinekick | Orasada Song";

  constructor(private titleService: Title, private meta: Meta, @Inject(DOCUMENT) private doc) {
    //https://angular.io/guide/set-document-title
    this.titleService.setTitle(this.pageTitle);
    //https://www.talkingdotnet.com/how-to-set-html-meta-tags-using-angular-4/
    this.meta.removeTag('name="author"');

    //https://www.concretepage.com/angular/angular-title-service-and-canonical-url
    // let link: HTMLLinkElement = this.doc.createElement('link');
    // link.setAttribute('rel', 'canonical');
    // this.doc.head.appendChild(link);
    // link.setAttribute('href', this.doc.URL);
  }

  ngOnInit() {
  }

}
