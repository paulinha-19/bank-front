import { Badge } from "@chakra-ui/react";
import { getStatusColor } from "@/utils/getStatusColor";
import React from "react";

interface CustomBadgeProps {
  status?: string;
}

export const CustomBadge = ({ status = "" }: CustomBadgeProps) => {
  return (
    <Badge colorScheme={getStatusColor(status)} variant="outline">
      {status}
    </Badge>
  );
};
