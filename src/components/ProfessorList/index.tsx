import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Cost, Description, Info, Name, Photo, StyledListing, StyledListItem } from "./index.styles";

interface ProfessorListProps {
    professors: Array<Professor>;
}

export default function ProfessorList(props: ProfessorListProps) {

    return (
        <StyledListing>
            {props.professors.length > 0 ? props.professors.map(p => {
                return (
                    <StyledListItem key={p.id}>
                        <Photo src={p.photoUrl} />
                        <Info>
                            <Name>{p.name}</Name>
                            <Cost>
                                {p.cost.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} per hour
                            </Cost>
                            <Description>{p.description}</Description>
                            <Button sx={{ width: '70%'}}>Schedule Class with {p.name}</Button>
                        </Info>
                    </StyledListItem>
                );
            }) : (
                <p>No items...</p>
            )}
        </StyledListing>
    );
}