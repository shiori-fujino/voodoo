// src/components/ModelProfileModal.tsx
import { useParams, useNavigate } from "react-router-dom";
import { models } from "../models";
import ModelProfile from "./ModelProfile";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Box, Fade, ScaleFade } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ModelProfileModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const model = id ? models.find(m => m.id === Number(id)) : null;

  useEffect(() => {
    if (model) onOpen();
  }, [model]);

  const handleClose = () => {
    onClose();
    navigate("/", { replace: true });
  };

  if (!model) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="xl"
      isCentered
      motionPreset="scale"
    >
      <ModalOverlay 
        bg="blackAlpha.600" 
        backdropFilter="blur(4px)" 
        transition="all 0.3s"
      />
      <ModalContent
        borderRadius="2xl"
        overflow="hidden"
      >
        <ModalCloseButton />
        <ModalHeader>{model.name}'s Profile</ModalHeader>
        <ModalBody>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box>
              <ModelProfile model={model} />
            </Box>
          </ScaleFade>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
