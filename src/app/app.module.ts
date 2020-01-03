import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

//Components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { MainComponent } from "./Components/main/main.component";

//Services
import { NewsService } from "./Services/news.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
