import { useEffect, useState } from "react";
import { Professor } from "../@types/professor";
import { ApiService } from "../services/apiService";

export default function useIndex() {
    const [ teacherList, setTeacherList ] = useState<Array<Professor>>([]);

    useEffect(() => {
        ApiService.get('/app/teacher/').then(response => {
            setTeacherList(adapterToProfessor(response.data));
        });
    }, []);

    function adapterToProfessor(data: Array<any>): Array<Professor> {
        const professors: Array<Professor> = [];

        for (const p of data) {
            professors.push({
                id: p.id,
                name: p.name,
                description: p.description,
                cost: p.price_per_hour,
                photoUrl: p.photo,
            });
        }
        return professors;
    }

    return {
        teacherList,
    };
}