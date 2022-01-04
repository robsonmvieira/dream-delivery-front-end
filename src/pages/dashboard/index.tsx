/* eslint-disable react/no-children-prop */
import { useState } from "react";
import { NextPage } from "next";

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
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const DashBoard: NextPage = () => {
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
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoard;
