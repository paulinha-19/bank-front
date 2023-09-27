"use client";

import { Box } from "@chakra-ui/react";
import { Card } from "../../components/index";
import { Icons } from "@/utils/icons";
import { UltimosSaques, Retirada, CustomGrid } from "@/components/";

export default function Dashboard() {
  return (
    <Box>
      <CustomGrid>
        <Card.Root>
          <Card.Content
            title="Chave pix"
            content={2}
            icon={Icons.MdPix}
            borderLeft=" 0.25rem solid #4e73df !important"
          />
        </Card.Root>
        <Card.Root>
          <Card.Content
            title="Total"
            content={2}
            icon={Icons.TbCurrencyReal}
            borderLeft="0.25rem solid #1cc88a !important"
          />
        </Card.Root>
        <Card.Root>
          <Card.Content
            title="Saldo"
            content={2}
            icon={Icons.TbCurrencyReal}
            borderLeft="0.25rem solid #36b9cc !important"
          />
        </Card.Root>
      </CustomGrid>
      <UltimosSaques />
      <Retirada />
    </Box>
  );
}
