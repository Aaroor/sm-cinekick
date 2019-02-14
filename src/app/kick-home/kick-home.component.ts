import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-kick-home',
  templateUrl: './kick-home.component.html',
  styleUrls: ['./kick-home.component.css']
})
export class KickHomeComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta, @Inject(DOCUMENT) private doc) { 
    
  }

  ngOnInit() {
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:site_name"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="description"');

    this.meta.addTag({ name: 'keywords', content: 'Cinekick,Tamil cinema news, Tamil Cinema, Cinema news, India cinema news, Movie Reiews,Trending Movie Reviews, Global Tamil Cinema News, Hot Cinema News, World cinema news, breaking cinema news, Cinema video, audio, Photos, trailer, teaser, tamil movie review, hollywood cinema in tamil' });
    this.meta.addTag({ name: 'description', content: 'Cinekick is an entertainment website for tamil cinema audience. Which provides all the latest news of tamil cinema and all other world wide cinema. The pages includes movie reviews, movie news, movie clips, trailer, teaser videos and youtube trending videos.' });
    this.meta.addTag({ property: 'og:type', content: 'Website' });
    this.meta.addTag({ property: 'og:title', content: 'Cinekick' });
    this.meta.addTag({ property: 'og:url', content: 'https://www.cinekick.com' });
    this.meta.addTag({ property: 'og:site_name', content: 'Cinekick' });
    this.meta.addTag({ property: 'og:image', content: 'https://cinekick.com/assets/img/cover/cinekick-cover-photo.jpg' });
    this.meta.addTag({ property: 'og:description', content: 'Cinekick is an entertainment website for tamil cinema audience. Which provides all the latest news of tamil cinema and all other world wide cinema. The pages includes movie reviews, movie news, movie clips, trailer, teaser videos and youtube trending videos.' });
  }

}
