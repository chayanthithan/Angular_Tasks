import { Marks } from "./marks";
export interface Result {
    id:string;
    srudent_id:string;
    grade:string;
    total_marks:number;
    average:number;
    teacher_opinion:string;
    teacher_id:number;          //this is fetch from teacher
    attend_days:number;
    term_start_date:string;
    term_end_date:string;
    marks:Marks[];


}
