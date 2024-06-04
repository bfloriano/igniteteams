import { Container, IconBack, Logo, BackButton } from "./styles";
import logoImg from "@assets/Logo.png";

type Props = {
	showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
	return (
		<Container>
			{showBackButton && (
				<BackButton>
					<IconBack />
				</BackButton>
			)}
			<Logo source={logoImg} />
		</Container>
	);
}
