import { Box } from '@mui/material';
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor';
import Header from '../src/components/Header';
import ProfessorList from '../src/components/ProfessorList';
import useIndex from '../src/hooks/useIndex';


const Home: NextPage = () => {
    const { teacherList } = useIndex();

    return (
        <Box sx={{ backgroundColor: 'secondary.main' }}>
            <ProfessorList professors={teacherList} />
        </Box>
    );
}

export default Home;

// Video stopped at 34:41
