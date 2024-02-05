import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = (props) => {
	return (
		<div>
			{props.isLoading && (
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			)}
		</div>
	);
};

export default Loader;
