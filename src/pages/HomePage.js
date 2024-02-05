import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Highlight,
} from "@chakra-ui/react";

import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate("/find-recipe");
	};

	return (
		<div>
			<Navbar />
			<Container maxW={"3xl"}>
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}>
					<Heading
						fontWeight={600}
						fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}>
						Find Global <br />
						<Text as={"i"} color={"green.400"}>
							Cuisines
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						<Highlight
							query="global culinary"
							styles={{ px: "0.3", py: "0.3", bg: "orange.100" }}>
							Embark on a global culinary journey with our curated
							collection of cuisines and iconic dishes,
							celebrating the rich tapestry of flavors from around
							the world.
						</Highlight>
					</Text>
					<Stack
						direction={"column"}
						spacing={3}
						align={"center"}
						alignSelf={"center"}
						position={"relative"}>
						<Button
							colorScheme={"green"}
							bg={"green.400"}
							rounded={"full"}
							px={6}
							_hover={{
								bg: "green.500",
							}}
							onClick={clickHandler}>
							Get Started
						</Button>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default HomePage;
