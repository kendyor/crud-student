export class StudentModel {
        id : string;
        nombre: string;
        apellido: string;
        edad: number;
        codigoStudent: number;       

        constructor(id, nombre, apellido, edad, codigoStudent){
                this.id = id;
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
                this.codigoStudent = codigoStudent;
        }
}
