import { DetalleMedicamento } from "./detalle-medicamento";

export class Solicitud {
  id:number;
  estado:string;
  fecha: string;
  total: number;
  idSede:number;
  detalle: DetalleMedicamento;
}
