import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddnewComponent } from './addnewStudent/addnew.component';
import { AddnewTeacherComponent } from './addnew-teacher/addnew-teacher.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { AddExamresultComponent } from './add-examresult/add-examresult.component';
import { AddmarksComponent } from './addmarks/addmarks.component';

export const routes: Routes = [
    {path:'',component:StudentComponent,title:'student'},
    {path:'teacher',component:TeachersComponent,title:'teacher'},
    {path:'addnew',component:AddnewComponent,title:'new student'},
    {path:'add-teacher',component:AddnewTeacherComponent,title:'add teacher'},
    {path:'examresult',component:ExamresultComponent,title:'exam result'},
    {path:'add-examresult',component:AddExamresultComponent,title:'add exam result'},
    {path:'add-marks',component:AddmarksComponent,title:'add exam marks'},
];
