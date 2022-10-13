import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material';
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor';
import Header from '../src/components/Header';
import ProfessorList from '../src/components/ProfessorList';
import useIndex from '../src/hooks/useIndex';


const Home: NextPage = () => {
    const {
        teacherList,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        scheduleClass,
        feedback,
        setFeedback } = useIndex();

    return (
        <div>
            <Box sx={{ backgroundColor: 'secondary.main' }}>
                <ProfessorList
                    professors={teacherList}
                    onSelect={professor => setSelectedTeacher(professor)}
                />
            </Box>

            <Dialog
                open={selectedTeacher !== null}
                onClose={() => setSelectedTeacher(null)}
                fullWidth
                PaperProps={{sx: {p: 5}}}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter your full name"
                            type="text"
                            fullWidth
                            onChange={event => setName(event.target.value)}
                            value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter your email"
                            type="email"
                            fullWidth
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />
                    </Grid>
                </Grid>

                <DialogActions sx={{mt: 5}}>
                    <Button onClick={() => setSelectedTeacher(null)}>Cancel</Button>
                    <Button onClick={scheduleClass}>Schedule</Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                message={feedback}
                open={feedback.length > 0}
                autoHideDuration={3000}
                onClose={() => setFeedback('')}
            />
        </div>
    );
}

export default Home;

// Video stopped at 34:41
