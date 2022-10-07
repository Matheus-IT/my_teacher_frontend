import { Box } from '@mui/material';
import type { NextPage } from 'next'
import Header from '../src/components/Header';
import ProfessorList from '../src/components/ProfessorList';


const Home: NextPage = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
        <ProfessorList />
    </Box>
  );
}

export default Home;

// Video stopped at 34:41
