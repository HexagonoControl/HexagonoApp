import { Question } from './questions';

export class Respuestas{
    id_respuesta?:number;
    observacion?:string = "0";
    options?: string = "5";
    id_user?:number;
    id_subcategory?:number;
    id_question?: number;
    realizado?:number;
    fecha_respuesta?:Date;
question:any;
}

