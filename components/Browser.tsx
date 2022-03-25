import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Badge,
  HStack,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  Center,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Browser(): JSX.Element {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Text>yo nice recipe app</Text>
    </Flex>
  );
}
