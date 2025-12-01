import { DetalleMedicamento } from "../detalle-medicamento";

export class SolicitudDto {

  idSede: number;
  estado: string;
  fecha: string;
  total: number;
  detalle: DetalleMedicamento[];
}

