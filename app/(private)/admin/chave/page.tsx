"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Input,
  InputGroup,
  Td,
  Flex,
  Heading,
  Button,
  Select,
  InputRightElement,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  FormLabel,
  FormControl,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { SearchIcon } from "@chakra-ui/icons";
import {
  CustomBadge,
  CustomShadow,
  Table,
  CustomIconButton,
  CustomInputMask
} from "@/components/";
import { utils } from "../../../../utils/index";
import { TablePixData } from "@/interface/TablePixData";
import { usePagination } from "@/hook/usePagination";
import { examplePixData as data } from "@/data/table-pix";
import styles from "../../../../styles/Pagination.module.css";

export default function Chave() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TablePixData[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("todos");
  const [selectedTypePix, setSelectedTypePix] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { pageCount, currentPageData, currentPage, handlePageChange } =
    usePagination<TablePixData>({
      data: searchResults,
      itemsPerPage: 8,
    });
  useEffect(() => {
    const filteredData = data.filter((item) => {
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
      const data: TablePixData[] = response.data;
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
            Chaves pix
          </Heading>
          <Button
            leftIcon={<utils.Icons.MdPix />}
            colorScheme="blue"
            variant="solid"
            aria-label="Adicionar chave Pix"
            size="sm"
            onClick={onOpen}
          >
            Nova chave
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
              <FormLabel htmlFor="rg" pt={3}>RG</FormLabel>
              <Input placeholder="Insira seu RG" id="rg" />
              <FormLabel htmlFor="data-de-nascimento" pt={3}>Data de nascimento</FormLabel>
              <Input placeholder="Insira sua data de nascimento" id="data-de-nascimento" />
              <FormLabel htmlFor="tipo-pix" pt={3}>Selecione o tipo da chave</FormLabel>
                <Select
                  value={selectedTypePix}
                  onChange={handleTypePixChange}
                  id="tipo-pix"
                >
                  {utils.typePix.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                <FormLabel htmlFor="chave-pix" pt={5}>Chave pix</FormLabel>
                <Input placeholder="Insira sua chave" id="chave-pix" />
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
          <Box
            pb={5}
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <InputGroup maxW="300px">
              <InputRightElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputRightElement>
              <Input
                type="text"
                placeholder="Pesquise pelo o nome ou cpf"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
            <Select
              maxW="200px"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              {utils.optionsPix.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Box>

          {showNoResults && <p>Não foi encontrado nenhum item.</p>}

          {(!showNoResults || searchResults.length > 0) && (
            <Table.Root>
              <Table.Thead>
                <Table.TheadContent headers={utils.headersPix} />
              </Table.Thead>
              <Table.Body>
                {currentPageData.map((item: any, index: any) => (
                  <Table.Tr key={index}>
                    <Td>{item.nome}</Td>
                    <Td>{item.cpf}</Td>
                    <Td>{item.data}</Td>
                    <Td>
                      <CustomBadge status={item.status} />
                    </Td>
                    <Td>{utils.FormatValue(item.saldo)}</Td>
                    <Td>
                      <CustomIconButton
                        aria-label="Informação"
                        icon={<utils.Icons.AiOutlineInfoCircle />}
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
        {!showNoResults && searchResults.length > 0 && (
          <Box className={styles.pagination}>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={styles.pagination}
              activeClassName={styles.active}
            />
          </Box>
        )}
      </CustomShadow>
    </Box>
  );
}
