import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Model } from "../models";

export default function ModelCard({ model }: { model: Model }) {
  return (
    <Link to={`/model/${model.id}`}>
      <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={2}>
        <Image src={model.photo} alt={model.name} />
        <Text fontWeight="bold">{model.name}</Text>
        <Text fontSize="sm" color="gray.500">{model.shift}</Text>
      </Box>
    </Link>
  );
}

