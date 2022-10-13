import { useEffect, useState } from "react";
import { Professor } from "../@types/professor";
import { ApiService } from "../services/apiService";

export default function useIndex() {
    const [ teacherList, setTeacherList ] = useState<Array<Professor>>([]);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ selectedTeacher, setSelectedTeacher ] = useState<Professor | null>(null);

    useEffect(() => {
        ApiService.get('/app/teacher/').then(response => {
            setTeacherList(adapterToProfessor(response.data));
        });
    }, []);

    function scheduleClass() {
        if (selectedTeacher !== null && validateClassData()) {
            ApiService.post(`/app/class/${selectedTeacher.id}/`, {
                name,
                email,
            }).then(response => {
                setSelectedTeacher(null);
                alert('Scheduled successfully');
            }).catch(error => {
                alert(error.response?.data.message);
            });
        } else {
            alert('Please fill out the form correctly');
        }
    }

    function validateClassData() {
        return name.length > 0 && email.length > 0;
    }

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
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        scheduleClass,
    };
}