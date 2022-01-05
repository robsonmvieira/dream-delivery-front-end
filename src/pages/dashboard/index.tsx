/* eslint-disable react/no-children-prop */
import { useState } from "react";
import { GetServerSideProps, NextPage, InferGetServerSidePropsType } from "next";

import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import {
  Flex,
  Box,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import service from "../../utils/http/api";
import { Supplier } from "../../models/supplier.model";
import { SupplierMapper } from "../../mappers/supplier.mapper";


export const getServerSideProps: GetServerSideProps = async () => {
  const mapper = new SupplierMapper()
  const { data } = await service.get('suppliers')

  return {
    props: {
      suppliers: data.map((supplier: Supplier) => mapper.map(supplier))
      }
  }
}

const DashBoard: NextPage = ({ suppliers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isColapsed, setIsColapsed] = useState(false);
  const [sideBarWidth, setSideBarWidth] = useState("32");

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
              <Button colorScheme="pink">Add Novo Fornecedor</Button>
            </Box>
          </Flex>

          <Flex mx='10' bg='blue.910'>
            <Table size='lg' variant='unstyled'>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>CNPJ</Th>
                  <Th>Telefone</Th>
                  <Th>Email</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  suppliers.map((res: Supplier) => (
                    <Tr key={res.id}>
                      <Td>{res.name}</Td>
                      <Td>{ res.CNPJ }</Td>
                      <Td >{res.phone}</Td>
                      <Td >{res.email}</Td>
                   </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoard;
