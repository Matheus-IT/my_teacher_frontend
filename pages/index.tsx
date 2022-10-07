import { Box } from '@mui/material';
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor';
import Header from '../src/components/Header';
import ProfessorList from '../src/components/ProfessorList';


const Home: NextPage = () => {
    const professors: Array<Professor> = [
        {
            id: 1,
            name: 'Prof1',
            description: 'prof1 description',
            cost: 20,
            photoUrl: 'https://github.com/Matheus-IT.png',
        },
        {
            id: 2,
            name: 'Prof2',
            description: 'prof2 description',
            cost: 20,
            photoUrl: 'https://github.com/Matheus-IT.png',
        },
        {
            id: 3,
            name: 'Prof3',
            description: 'prof3 description',
            cost: 20,
            photoUrl: 'https://github.com/Matheus-IT.png',
        },
        {
            id: 4,
            name: 'Prof4',
            description: 'prof4 description',
            cost: 20,
            photoUrl: 'https://github.com/Matheus-IT.png',
        },
        {
            id: 5,
            name: 'Prof5',
            description: 'prof5 description',
            cost: 20,
            photoUrl: 'https://github.com/Matheus-IT.png',
        },
    ];

    return (
        <Box sx={{ backgroundColor: 'secondary.main' }}>
            <ProfessorList professors={professors} />
        </Box>
    );
}

export default Home;

// Video stopped at 34:41
