import React from "react";
import { Button, Flex, MenuItem, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<Flex
			align="center"
			justify="space-between"
			p={4}
			bg="green.400"
			color="white">
			<Text fontWeight="bold" as={"i"} onClick={() => navigate("/")}>
				RecipeFinder
			</Text>
            
		</Flex>
	);
};

export default Navbar;
