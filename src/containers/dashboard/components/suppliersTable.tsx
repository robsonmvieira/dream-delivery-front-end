import { Flex, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { Supplier } from "../../../../models/supplier.model"


export type SupplierTableProps = {
  list: Supplier[]
}

const SupplierTable = ({ list }: SupplierTableProps) => {

  return (
    <Flex mx="10" bg="blue.910">
    <Table size="lg" variant="unstyled">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>CNPJ</Th>
          <Th>Telefone</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {list.map((res: Supplier) => (
          <Tr key={res.id}>
            <Td>{res.name}</Td>
            <Td>{res.CNPJ}</Td>
            <Td>{res.phone}</Td>
            <Td>{res.email}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Flex>
  )
}

export default SupplierTable