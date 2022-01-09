/* eslint-disable react/no-children-prop */
import { useState } from "react";

import Header from "./components/header";
import Sidebar from "./components/Sidebar";

import {
  Flex,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from "@chakra-ui/react";


import { useForm, SubmitHandler } from "react-hook-form";
import SupplierTable from "./components/suppliersTable";

import ModalSupplierFom from "./components/modalSupplierForm";
import { Supplier } from "../../models/supplier.model";
import service from "../../utils/http/api";

export type DashboardContainerProps = {
  suppliers: Supplier[]
}


const DashboardContainer = ({ suppliers }: DashboardContainerProps) => {
  const [isColapsed, setIsColapsed] = useState(false);
  const [sideBarWidth, setSideBarWidth] = useState("32");
  
  const toast = useToast()
  
  const { reset, formState: { errors } } = useForm<Supplier>();


  const { isOpen, onOpen, onClose } = useDisclosure();


  const onSubmit: SubmitHandler<Supplier> = async (data) => {
    
    const response = await service.post("suppliers", data)
    if (response.status === 201) {
      toast({
        position: "top-end",
        title: 'Fornecedor',
        description: "Forncedor foi criado com sucesso",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      reset();
      onClose();
    }
    }
  
  const onCloseSupplierModal = () => {
    reset();
    onClose();
  };

  const handlerMenuCollapse = () => {
    setIsColapsed(!isColapsed);
    setSideBarWidth(isColapsed ? "32" : "10");
  };

  return (
    <Flex display="flex" direction="column">
      <Box>
        <Header
          handlerState={handlerMenuCollapse}
          isColapsed={isColapsed}
          sideBarWidth={sideBarWidth}
        />
      </Box>
      <Flex>
        <Flex direction="column" align="center">
          <Sidebar sideBarWidth="20" />
        </Flex>
        <Flex bg="blue.920" w="full" color="white" direction="column">
          <Flex m="10" justify="space-between">
            <Text fontSize="2xl">Fornecedores</Text>
            <Box>
              <Button colorScheme="pink" onClick={onOpen}>
                Add Novo Fornecedor
              </Button>
            </Box>
          </Flex>
          <SupplierTable list={suppliers} />
        </Flex>

        <Modal isOpen={isOpen} size="6xl" onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="blue.910">
            <ModalHeader color="white">Novo Fornecedor</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody>
              <ModalSupplierFom 
                onSubmit={onSubmit} 
                onCloseSupplierModal={onCloseSupplierModal} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default DashboardContainer
