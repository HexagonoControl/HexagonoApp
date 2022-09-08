export class Question{
    id_question?:number;
    question_name?:string;
    id_subcategory?:number;
    active?: boolean;
    observacion?:string = "0";
    options?: string = "5";;
    id_user:any;
    respuestas:any;
}

