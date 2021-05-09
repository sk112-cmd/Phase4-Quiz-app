import { QuizComponent } from './quiz/quiz.component';
import {Routes} from "@angular/router"



export const appRoutes : Routes = [

    {path:'quiz', component:QuizComponent},
    {path:'', redirectTo:'register',pathMatch:'full'},

]