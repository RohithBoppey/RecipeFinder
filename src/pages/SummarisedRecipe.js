import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
	Card,
	CardBody,
	Center,
	Container,
	Heading,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SummarisedRecipe = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [det, setDet] = useState({});

	useEffect(() => {
		const getDetails = async () => {
			setLoading(true);
			const response = await axios.get(
				`https://api.spoonacular.com/recipes/${id}/summary?apiKey=83c7700a2ba644f896bbe960f5dfea2b`
			);
			console.log(response);
			setDet(response.data);
			setLoading(false);
		};

		getDetails();
	}, []);

	return (
		<div>
			<Navbar />

			{loading === true ? (
				<Center>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Center>
			) : (
				<Container maxW={"4xl"} marginTop={25}>
					<Heading
						fontWeight={600}
						fontSize={{ base: "30", sm: "20", md: "20" }}
						lineHeight={"110%"}
						marginBottom={10}>
						<Text as={"i"} color={"green.400"}>
							{det.title}
						</Text>
					</Heading>

					<Card>
						<CardBody>
							<div
								dangerouslySetInnerHTML={{
									__html: det.summary,
								}}
							/>
						</CardBody>
					</Card>
				</Container>
			)}
		</div>
	);
};

export default SummarisedRecipe;
