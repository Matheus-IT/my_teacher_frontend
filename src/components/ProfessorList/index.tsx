import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatterService } from "../../services/formatterService";
import { Cost, Description, Info, Name, Photo, StyledListing, StyledListItem } from "./index.styles";

interface ProfessorListProps {
    professors: Array<Professor>;
    onSelect: (professor: Professor) => void;
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
                                {FormatterService.currency(p.cost)} per hour
                            </Cost>
                            <Description>{FormatterService.limitText(p.description)}</Description>
                            <Button
                                onClick={() => props.onSelect(p)}
                                sx={{ width: '70%'}}
                            >
                                Schedule Class with {p.name}
                            </Button>
                        </Info>
                    </StyledListItem>
                );
            }) : (
                <p>No items...</p>
            )}
        </StyledListing>
    );
}