import { Button } from "@mui/material";
import { Cost, Description, Info, Name, Photo, StyledListing, StyledListItem } from "./index.styles";

export default function ProfessorList() {
    return (
        <StyledListing>
            <StyledListItem>
                <Photo src="https://github.com/Matheus-IT.png">
                    
                </Photo>
                <Info>
                    <Name>Matheus da Costa da Silva</Name>
                    <Cost>R$20.00 per hour</Cost>
                    <Description>Programming classes</Description>
                    <Button sx={{ width: '70%'}}>Schedule Class with Matthew</Button>
                </Info>
            </StyledListItem>
            
            <StyledListItem>
                <Photo src="https://github.com/Matheus-IT.png">
                    
                </Photo>
                <Info>
                    <Name>Matheus da Costa da Silva</Name>
                    <Cost>R$20.00 per hour</Cost>
                    <Description>Programming classes</Description>
                    <Button sx={{ width: '70%'}}>Schedule Class with Matthew</Button>
                </Info>
            </StyledListItem>
            
            <StyledListItem>
                <Photo src="https://github.com/Matheus-IT.png">
                    
                </Photo>
                <Info>
                    <Name>Matheus da Costa da Silva</Name>
                    <Cost>R$20.00 per hour</Cost>
                    <Description>Programming classes</Description>
                    <Button sx={{ width: '70%'}}>Schedule Class with Matthew</Button>
                </Info>
            </StyledListItem>
        </StyledListing>
    );
}