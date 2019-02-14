import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { KickFooterComponent } from './kick-footer/kick-footer.component';
import { KickHeaderComponent } from './kick-header/kick-header.component';
import { KickHomeComponent } from './kick-home/kick-home.component';
import { KickThemeComponent } from './kick-theme/kick-theme.component';
import { KickTitleComponent } from './kick-title/kick-title.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    KickFooterComponent,
    KickHeaderComponent,
    KickHomeComponent,
    KickThemeComponent,
    KickTitleComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
 TransferHttpCacheModule,
HttpClientModule,
 
    
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
