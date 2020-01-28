import { Kurs } from './Kurs';
import { Student } from './Student';
import { Opiniujacy } from './Opiniujacy';

export  class Podanie{
    id: number;
    zamienniki: Kurs[];
    zamieniany: Kurs;
    uzasadnieniePodania: string;
    uzasadnienieOpinii: string;
    student: Student;
    status: string;
    opiniujacy: Opiniujacy;
}