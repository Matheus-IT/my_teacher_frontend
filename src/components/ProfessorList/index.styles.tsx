import { styled } from "@mui/material";

export const StyledListing = styled('ul')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${(props) => props.theme.spacing(9)};
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing(10, 2, 10, 2)};
    ${(props) => props.theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${(props) => props.theme.spacing(7)};
    }
`;

export const StyledListItem = styled('li')`
    list-style: none;
`;

export const Photo = styled('img')`
    width: 100%;
`;

export const Info = styled('div')`

`;

export const Name = styled('h3')`
    margin: ${(props) => props.theme.spacing(2, 0, 0, 0)};
`;

export const Cost = styled('h3')`
    margin: 0;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main};
`;

export const Description = styled('p')`
    word-break: break-word;
`;
