import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Center,
	Container,
	Heading,
	Image,
	Link,
	Spinner,
	Text,
} from "@chakra-ui/react";
import Loader from "../components/Loader";

// require('dotenv').config()

function AllDishes() {
	const { id } = useParams();

	const [allRecipes, setAllRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const getDetails = async () => {
			const response = await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${id}`
			);
			console.log(response);
			setAllRecipes(response.data.results);
		};
		getDetails();
		setLoading(false);
	}, []);

	return (
		<div>
			<Navbar />
			<Container maxW={"4xl"} marginTop={20} marginBottom={50}>
				<Heading
					fontWeight={600}
					fontSize={{ base: "xl", sm: "2xl", md: "5xl" }}
					lineHeight={"110%"}
					marginBottom={20}>
					{id.toLocaleUpperCase()}{" "}
					<Text as={"i"} color={"green.400"}>
						Cuisines
					</Text>
				</Heading>

				<Loader isLoading={loading} />

				{loading == false ? (
					<Accordion allowMultiple allowToggle>
						{allRecipes.map((recipe) => {
							return (
								<div>
									<AccordionItem>
										<h2>
											<AccordionButton
												_expanded={{
													bg: "green.500",
													color: "white",
												}}>
												<Box
													as="span"
													flex="1"
													textAlign="left">
													{recipe.title}
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<Center>
												<Image
													boxSize="250px"
													objectFit="cover"
													src={recipe.image}
													alt={recipe.title}
												/>
											</Center>
											<Text>
												<Link
													color="teal.500"
													href={`/recipe/${recipe.id}/summary`}>
													Click here
												</Link>{" "}
												for full recipe
											</Text>
										</AccordionPanel>
									</AccordionItem>
								</div>
							);
						})}
					</Accordion>
				) : (
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				)}
			</Container>
		</div>
	);
}

export default AllDishes;
