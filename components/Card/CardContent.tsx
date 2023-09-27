import React, { ElementType, CSSProperties } from "react";
import { Text, Card, CardBody, Heading, Flex } from "@chakra-ui/react";

interface CardContentProps {
  title: string;
  content: number;
  icon: ElementType;
  borderLeft: CSSProperties["borderLeft"];
}
export const CardContent = ({
  title,
  content,
  icon: Icon,
  borderLeft,
}: CardContentProps) => {
  return (
    <Card borderLeft={borderLeft}>
      <CardBody py={8}>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex direction="column">
            <Heading size="sm">{title}</Heading>
            <Text>{content}</Text>
          </Flex>
          <Icon fontSize="24px" mr="2" />
        </Flex>
      </CardBody>
    </Card>
  );
};
