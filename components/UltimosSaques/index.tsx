import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { CustomShadow, TableHeading } from "../";
import { getStatusColor } from "@/utils/getStatusColor";

interface TableData {
  key: string;
  date: string;
  status: string;
  total: number;
}

const data: TableData[] = [
  { key: "12345", date: "01/10/2023", status: "enviado", total: 100.0 },
  { key: "67890", date: "05/10/2023", status: "cancelado", total: 50.0 },
  { key: "23456", date: "10/10/2023", status: "depositar", total: 75.0 },
];

export const UltimosSaques = () => {
  return (
    <CustomShadow>
      <TableHeading title=" Últimos saques" />
      <Table variant="simple">
        <Thead bg="gray.400">
          <Tr bg={useColorModeValue("gray.200", "gray.700")}>
            <Th>Chave</Th>
            <Th>Data</Th>
            <Th>Status</Th>
            <Th>Total (R$)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr
              key={index}
              _hover={{
                backgroundColor: useColorModeValue("gray.100", "gray.700"),
              }}
            >
              <Td>{item.key}</Td>
              <Td>{item.date}</Td>
              <Td>
                <Badge
                  colorScheme={getStatusColor(item.status)}
                  variant="outline"
                >
                  {item.status}
                </Badge>
              </Td>
              <Td>{item.total.toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </CustomShadow>
  );
};
