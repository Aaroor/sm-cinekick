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
    // console.log("I am constructer");
    
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="description"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:site_name"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:description"');


    this.meta.addTag({ name: 'keywords', content: 'Orasada Song,ஒரசாதே உசிரத்தான்,Cover Video Songs,Orasada Cover Video Song,Most popular tamil album song,Youtube treanding tamil song' });
    this.meta.addTag({ name: 'description', content: 'Orasada Usiraththan song is a most populer tamil album song in youtube' });
    this.meta.addTag({ property: 'og:type', content: 'Website Page' });
    this.meta.addTag({ property: 'og:title', content: 'Orasade Usiraththaan | Cinekick.com | Cover Videos' });
    this.meta.addTag({ property: 'og:url', content: 'https://www.cinekick.com/orasada-song-view' });
    this.meta.addTag({ property: 'og:site_name', content: 'Cinekick | Orasada Video Cover Songs' });
    this.meta.addTag({ property: 'og:image', content: 'https://cinekick.com/assets/img/orasada-song/orasada-song-url-cover.jpg' });
    this.meta.addTag({ property: 'og:description', content: 'Orasada Usiraththan song is a most populer tamil album song in youtube' });
    
    



    // https://www.concretepage.com/angular/angular-title-service-and-canonical-url
    // let link: HTMLLinkElement = this.doc.createElement('link');
    // link.setAttribute('rel', 'canonical');
    // this.doc.head.appendChild(link);
    // link.setAttribute('href', this.doc.URL);
  }

  ngOnInit() {
    console.log("I am ng Init");
  }

}
