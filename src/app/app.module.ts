import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { StudentComponent } from "./student/student.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { StudentRegisterationComponent } from "./student-registeration/student-registeration.component";
import { StudentInfoComponent } from "./student-info/student-info.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  { path: "", redirectTo: "student", pathMatch: "full" },
  {
    path: "student",
    children: [
      { path: "", component: StudentComponent },
      { path: "studentdetails", component: StudentdetailsComponent },
      {
        path: "studentregisteration",
        component: StudentRegisterationComponent
      },
      { path: "studentinfo", component: StudentInfoComponent }
    ]
  },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentdetailsComponent,
    StudentRegisterationComponent,
    StudentInfoComponent,
    PagenotfoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
