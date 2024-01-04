import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BothomeComponent } from './components/bothome/bothome.component';
import { DectivelComponent } from './components/dectivel/dectivel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './components/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig,GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CopytoclipDirective } from './guards/copytoclip.directive';
import { HighliterDirective } from './guards/highliter.directive';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SharedataService } from './shared/sharedata.service';
import { HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {MatExpansionModule} from '@angular/material/expansion';
import { BardAIComponent } from './components/bard-ai/bard-ai.component';
import { DashComponent } from './components/dash/dash.component';
import { LazyLoaderDirective } from './guards/lazy-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    BothomeComponent,
    DectivelComponent,
    LoginComponent,
    CopytoclipDirective,
    HighliterDirective,
    BardAIComponent,
    DashComponent,
    LazyLoaderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    HighlightModule,
    MatExpansionModule,
  ],
  providers: [SharedataService,
      {
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
          lineNumbers: true
        }
      },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        windowType: 'page',
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              `473613341850-s5h9fh951irgt9ba0397u4i3alv9aj44.apps.googleusercontent.com`
              // ccc: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
            ),
          }
          
        ],
        onError: (err) => {
          console.error("error");
        }
      } as SocialAuthServiceConfig,
    },
   
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
