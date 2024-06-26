// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { NewComponent } from './header/new/new.component';
// import { SubHeaderComponent } from './sub-header/sub-header.component';
// import { AuthComponent } from './sub-header/auth/auth.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';


// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     NewComponent,
//     SubHeaderComponent,
//     AuthComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewComponent } from './header/new/new.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { AuthComponent } from './sub-header/auth/auth.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngForm
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewComponent,
    SubHeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Include FormsModule in imports array
    HttpClientModule // Include HttpClientModule in imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
