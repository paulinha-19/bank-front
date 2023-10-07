import React from "react";
import { Td, Skeleton } from "@chakra-ui/react";
import { CustomShadow, TableHeading, Table, CustomBadge } from "../index";
import { utils } from "@/utils";

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
      <Table.Root variant="simple">
        <Table.Thead>
          <Table.TheadContent headers={utils.headersDashboard} />
        </Table.Thead>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Tr key={index}>
              <Td>{item.key}</Td>
              <Td>{item.date}</Td>
              <Td>
                <CustomBadge status={item.status} />
              </Td>
              <Td>{utils.FormatValue(item.total)}</Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table.Root>
    </CustomShadow>
  );
};
