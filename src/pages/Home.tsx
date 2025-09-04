import { useNavigate } from "react-router-dom";
import { SimpleGrid, Select, Box, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; // <-- FIXED HERE

import { models } from "../models";
import ModelCard from "../components/ModelCard";
import { useState, useMemo } from "react";

// Keyframes for pulsing glow
const pulse = keyframes`
  0% { box-shadow: 0 0 10px rgba(167, 139, 250, 0.6); }
  50% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.9); }
  100% { box-shadow: 0 0 10px rgba(167, 139, 250, 0.6); }
`;

export default function Home() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  const [day, setDay] = useState<"today" | "tomorrow">("today");

  const nationalities = Array.from(new Set(models.map((m) => m.nationality)));

  const filteredModels = useMemo(() => {
    return models.filter(
      (m) => (filter === "all" || m.nationality === filter) && m.working === day
    );
  }, [filter, day]);

  return (
    <Box p={4}>
      {/* Filter */}
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        w="200px"
        mb={4}
      >
        <option value="all">All Nationalities</option>
        {nationalities.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </Select>

      {/* Clean transparent buttons with pulsing glow */}
      <Box display="flex" gap={4} mb={6}>
        {["today", "tomorrow"].map((d) => (
          <Button
            key={d}
            onClick={() => setDay(d as "today" | "tomorrow")}
            variant="outline"
            borderColor="purple.400"
            color="purple.300"
            fontWeight="bold"
            px={8}
            py={4}
            borderRadius="full"
            fontSize="lg"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              textDecoration: "none",
            }}
            _focus={{ boxShadow: "none" }}
            _focusVisible={{ boxShadow: "none"}}
            animation={day === d ? `${pulse} 2s infinite` : "none"}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </Button>
        ))}
      </Box>

      {/* Model Grid */}
      <SimpleGrid columns={[3, 3, 10]} spacing={4}>
        {filteredModels.map((m) => (
          <ModelCard
            key={m.id}
            model={m}
            onClick={() =>
              navigate(`/model/${m.id}`, {
                state: { background: window.location },
              })
            }
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
