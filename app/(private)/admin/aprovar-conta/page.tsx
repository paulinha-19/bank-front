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
  useDisclosure,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  FormLabel,
  ModalBody,
  ModalContent,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CustomBadge, CustomShadow, Table, ButtonActions } from "@/components/";
import { utils } from "@/utils/index";

interface TableData {
  cpf: string | null;
  cnpj: string | null;
  email: string;
  status: string;
}

const exampleData: TableData[] = [
  {
    cpf: "256.685.659-99",
    cnpj: "",
    email: "user1@gmail.com",
    status: "aprovado",
  },
  {
    cpf: "",
    cnpj: "66.338.394/6945-99",
    email: "user2@gmail.com",
    status: "pendente",
  },
  {
    cpf: "000.222.779-00",
    cnpj: "",
    email: "user3@gmail.com",
    status: "recusado",
  },
];

export default function AprovarConta() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TableData[]>([]); //exampleData no []
  const [showNoResults, setShowNoResults] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("todos");
  const [selectedTypePix, setSelectedTypePix] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();


  useEffect(() => {
    const filteredData = exampleData.filter((item) => {
      const statusMatch =
        selectedStatus === "todos" ||
        item.status.toLowerCase() === selectedStatus.toLowerCase();
      const searchMatch =
        searchTerm === "" ||
        item?.cpf?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.cnpj?.toLowerCase().includes(searchTerm.toLowerCase());
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

  const handleTypePixChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTypePix((prevState) => {
      const newTypePix = event.target.value;
      if (prevState === newTypePix) {
        return prevState;
      }
      return newTypePix;
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
            Aprovar contas
          </Heading>
          <Button
            leftIcon={<utils.Icons.MdPix />}
            colorScheme="blue"
            variant="solid"
            aria-label="Adicionar chave Pix"
            size="sm"
            onClick={onOpen}
          >
            Aprovar conta
          </Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Criar chave de identificação</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
              <FormLabel htmlFor="nome">Nome completo</FormLabel>
              <Input placeholder="Insira seu nome completo" id="nome" />
              <FormLabel htmlFor="nome-da-mae" pt={3}>Nome da mãe</FormLabel>
              <Input placeholder="Insira o nome da mãe" id="nome-da-mae" />
              <FormLabel htmlFor="endereco" pt={3}>Endereço</FormLabel>
              <Input placeholder="Insira seu endereço" id="endereco" />
              <FormLabel htmlFor="data-de-nascimento" pt={3}>Data de nascimento</FormLabel>
              <Input placeholder="Insira sua data de nascimento" id="data-de-nascimento" />
                <FormLabel htmlFor="cpf" pt={5}>CPF</FormLabel>
                <Input placeholder="Insira seu CPF" id="cpf" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Salvar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <CustomShadow>
        <Box p={5}>
          <Flex pb={5}>
            <Input
              mr={2}
              maxW="300px"
              type="text"
              placeholder="Digite o cpf ou cnpj"
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
              {utils.optionsAprovarConta.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Flex>

          {showNoResults && <p>Não foi encontrada nenhuma solicitação</p>}

          {(!showNoResults || searchResults.length > 0) && (
            <Table.Root>
              <Table.Thead>
                <Table.TheadContent headers={utils.headersAprovarConta} />
              </Table.Thead>
              <Table.Body>
                {searchResults.map((item: any, index: any) => (
                  <Table.Tr key={index}>
                    <Td>{item.cpf}</Td>
                    <Td>{item.cnpj}</Td>
                    <Td>{item.email}</Td>
                    <Td>
                      <CustomBadge status={item.status} />
                    </Td>
                    <Td>
                      <ButtonActions
                        infoActions={utils.buttonActions.buttonActionsAR}
                        isDisabled={
                          item.status === "aprovado" ||
                          item.status === "recusado"
                        }
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
