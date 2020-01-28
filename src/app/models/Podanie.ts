import { Kurs } from './Kurs';
import { Student } from './Student';

export  class Podanie{
    id: number;
    zamienniki: Kurs[];
    zamieniany: Kurs;
    uzasadnieniePodania: string;
    uzasadnienieOpinii: string;
    student: Student;
    status: string;
}