import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

const Demo = () => {
	return (
		<div style={{ position: "relative" }}>
            Hello world
			<div
				style={{
                    position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					filter: "blur(2px)",
					zIndex: -1,
				}}
                />
			<Center style={{ position: "relative", zIndex: 1 }}>
				<Spinner size={'xl'} />
			</Center>
		</div>
	);
};

export default Demo;
