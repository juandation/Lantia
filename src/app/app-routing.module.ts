import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { MainComponent } from "./Components/main/main.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "news", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
