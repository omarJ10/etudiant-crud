import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { EtudiantModule } from "./etudiant/etudiant.module";
import {HttpClientModule} from "@angular/common/http"


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        EtudiantModule,
        FormsModule,
        AuthModule,
        HttpClientModule,
    ]
})
export class AppModule { }
