import { Logo } from "../Logo";
import { HeaderContainer } from "./index.styles";

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <Logo src="images/myteacher.png"/>
            </div>
            <p>Encontre o professor perfeito</p>
        </HeaderContainer>
    );
}