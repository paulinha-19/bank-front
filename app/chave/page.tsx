"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Input,
  Td,
  Flex,
  IconButton,
  Heading,
  Button,
  Select,
  Skeleton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  CustomBadge,
  CustomShadow,
  Table,
  CustomIconButton,
} from "@/components/";
import { Icons } from "@/utils/icons";
import { FormatValue } from "@/utils/format-total";
import { optionsPix } from "@/utils/options";
import { exampleData } from "@/utils/example-data";
import { headers } from "@/utils/headers";
import { TableData } from "@/interface/TableData";

export default function Chave() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TableData[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("todos");

  useEffect(() => {
    const filteredData = exampleData.filter((item) => {
      const statusMatch =
        selectedStatus === "todos" ||
        item.status.toLowerCase() === selectedStatus.toLowerCase();
      const searchMatch =
        searchTerm === "" ||
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cpf.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Heading as="h4" size="lg">
            Chaves pix
          </Heading>
          <Button
            leftIcon={<Icons.MdPix />}
            colorScheme="blue"
            variant="solid"
            aria-label="Adicionar chave Pix"
            size="sm"
          >
            Nova chave
          </Button>
        </Flex>
      </Box>

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
              variant="solid"
              colorScheme="gray"
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
              {optionsPix.map((option) => (
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
                <Table.TheadContent headers={headers} />
              </Table.Thead>
              <Table.Body>
                {searchResults.map((item: any, index: any) => (
                  <Table.Tr key={index}>
                    <Td>{item.nome}</Td>
                    <Td>{item.cpf}</Td>
                    <Td>{item.data}</Td>
                    <Td>
                      <CustomBadge status={item.status} />
                    </Td>
                    <Td>{FormatValue(item.saldo)}</Td>
                    <Td>
                      <CustomIconButton
                        aria-label="Informação"
                        icon={<Icons.AiOutlineInfoCircle />}
                        colorScheme="teal"
                        variant="ghost"
                      />
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
