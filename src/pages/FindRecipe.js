import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
	Button,
	Container,
	Heading,
	Input,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FindRecipe = () => {
	const [recipe, setRecipe] = React.useState("");

	const handleChange = (event) => setRecipe(event.target.value);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();

	const cuisines = [
		"African",
		"Asian",
		"American",
		"British",
		"Cajun",
		"Caribbean",
		"Chinese",
		"Eastern European",
		"European",
		"French",
		"German",
		"Greek",
		"Indian",
		"Irish",
		"Italian",
		"Japanese",
		"Jewish",
		"Korean",
		"Latin American",
		"Mediterranean",
		"Mexican",
		"Middle Eastern",
		"Nordic",
		"Southern",
		"Spanish",
		"Thai",
		"Vietnamese",
	];

	const [allRecipes, setAllRecipes] = useState(cuisines);
	const [selRes, setSelRes] = useState("");

	useEffect(() => {
		const filtered = cuisines.filter((rec) => {
			return rec.toLowerCase().includes(recipe.toLowerCase());
		});
		setAllRecipes(filtered);
	}, [recipe]);

	const selector = (c) => {
		setSelRes(c);
		onOpen();
	};

	const navigate = useNavigate();

	const onYes = () => {
		navigate(`/recipes/${selRes.toLowerCase()}`);
	};

	const CuisineGrid = () => {
		return (
			<SimpleGrid columns={[2, null, 3]} spacing="40px">
				{allRecipes.map((cuisine, index) => (
					<Button
						key={index}
						height="50px"
						_hover={{
							bg: "green.500",
						}}
						onClick={() => selector(cuisine)}>
						<Text>{cuisine}</Text>
					</Button>
				))}
			</SimpleGrid>
		);
	};

	return (
		<div>
			<Navbar />
			<Container maxW={"container.md"}>
				<Heading
					marginTop={10}
					marginBottom={10}
					fontWeight={600}
					fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
					lineHeight={"110%"}>
					{"Search for "}
					<Text as={"i"} color={"green.400"}>
						Cuisines
					</Text>
				</Heading>

				{/* Search bar for cuisines */}

				<Container marginTop={5} marginBottom={15}>
					<Input
						placeholder="Name of Cuisine"
						value={recipe}
						onChange={handleChange}
					/>
				</Container>

				{CuisineGrid()}
			</Container>

			<AlertDialog
				motionPreset="slideInBottom"
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Find Cuisine?</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Are you sure you want to find recipes in this cuisine? -{" "}
						{selRes}
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>
							No
						</Button>
						<Button colorScheme="green" ml={3} onClick={onYes}>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default FindRecipe;
