import { Kurs } from './Kurs';
import { Student } from './Student';

export  class Podanie{
    id: number;
    zamiennik: Kurs;
    zamieniany: Kurs;
    uzasadnieniePodania: string;
    uzasadnienieOpinii: string;
    student: Student;
    status: string;
}