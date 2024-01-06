"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Input,
  Td,
  Flex,
  IconButton,
  Select,
  Heading,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  CustomGrid,
  CustomBadge,
  CustomShadow,
  Table,
  ButtonActions,
} from "@/components/";
import { utils } from "@/utils/index";
import { Card } from "@/components/";

interface TableData {
  nome: string;
  chavePix: string;
  data: string;
  status: string;
  total: number;
}

const exampleData: TableData[] = [
  {
    nome: "João",
    chavePix: "123456",
    data: "05/10/2023",
    status: "disponível",
    total: 100.0,
  },
  {
    nome: "Maria",
    chavePix: "789012",
    data: "10/10/2023",
    status: "pendente",
    total: 50.0,
  },
  {
    nome: "Pedro",
    chavePix: "345678",
    data: "15/10/2023",
    status: "processando",
    total: 75.0,
  },
];

export default function Saques() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("todos");
  const [searchResults, setSearchResults] = useState<TableData[]>([]); //exampleData no []
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    const filteredData = exampleData.filter((item) => {
      const statusMatch =
        selectedStatus === "todos" ||
        item.status.toLowerCase() === selectedStatus.toLowerCase();
      const searchMatch =
        searchTerm === "" ||
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.chavePix.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.data.toLowerCase().includes(searchTerm.toLowerCase());
      return statusMatch && searchMatch;
    });
    setSearchResults(filteredData);
    setShowNoResults(filteredData.length === 0);
  }, [searchTerm, selectedStatus]);

  const handleSearch = async () => {
    try {
      // Fazer a requisição ao backend com o searchTerm e receber os resultados
      const response = await axios.get(`/api/search?query=${searchTerm}`);
      const data: TableData[] = response.data;
      setSearchResults(data);
      setShowNoResults(data.length === 0);
    } catch (error) {
      console.error("Erro na pesquisa:", error);
    }
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus((prevState) => {
      const newStatus = event.target.value;
      if (prevState === newStatus) {
        return prevState;
      }
      return newStatus;
    });
  };

  return (
    <Box>
      <Box mb="8">
        <Flex justifyContent="space-between">
          <Heading as="h4" size="lg">
            Saques
          </Heading>
          <Button
            leftIcon={<utils.Icons.BiMoneyWithdraw />}
            colorScheme="red"
            variant="solid"
            aria-label="Fazer saque da conta"
            size="sm"
          >
            Fazer saque
          </Button>
        </Flex>
      </Box>
      <CustomGrid>
        <Card.Root>
          <Card.Content
            title="Total"
            content={1200.45}
            icon={utils.Icons.TbCurrencyReal}
            borderLeft=" 0.25rem solid #4e73df !important"
          />
        </Card.Root>
        <Card.Root>
          <Card.Content
            title="Jogador - Tx"
            content={980.18}
            icon={utils.Icons.TbCurrencyReal}
            borderLeft="0.25rem solid #1cc88a !important"
          />
        </Card.Root>
        <Card.Root>
          <Card.Content
            title="Quantidade"
            content={2}
            icon={utils.Icons.FaInfo}
            borderLeft="0.25rem solid #36b9cc !important"
          />
        </Card.Root>
      </CustomGrid>
      <CustomShadow>
        <Box p={5}>
          <Flex pb={5}>
            <Input
              mr={2}
              maxW="300px"
              type="text"
              placeholder="Digite o nome ou chave Pix"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton
              variant="outline"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={handleSearch}
            />
            <Select
              ml={2}
              maxW="200px"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              {utils.optionsSaque.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Flex>

          {showNoResults && <p>Não foi encontrado nenhum item.</p>}

          {(!showNoResults || searchResults.length > 0) && (
            <Table.Root>
              <Table.Thead>
                <Table.TheadContent headers={utils.headersSaques} />
              </Table.Thead>
              <Table.Body>
                {searchResults.map((item: any, index: any) => (
                  <Table.Tr key={index}>
                    <Td>{item.nome}</Td>
                    <Td>{item.chavePix}</Td>
                    <Td>{item.data}</Td>
                    <Td>
                      <CustomBadge status={item.status} />
                    </Td>
                    <Td>{utils.FormatValue(item.total)}</Td>
                    <Td>
                      <ButtonActions infoActions={utils.buttonActions.buttonActionsAR} />
                    </Td>
                  </Table.Tr>
                ))}
              </Table.Body>
            </Table.Root>
          )}
        </Box>
      </CustomShadow>
    </Box>
  );
}
