import {
  Box,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";

const Form1 = () => {
  return (
    <Box>
      <form
        action="https://getform.io/f/4f739fae-4e60-4f77-a69d-657650edefc8"
        method="POST"
      >
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Get In Touch With Me
        </Heading>
        <Box
        >
          <Flex>
            <FormControl mr="5%">
              <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                First name
              </FormLabel>
              <Input
                id="first-name"
                placeholder="First name"
                name="first-name"
                type="text"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                Last name
              </FormLabel>
              <Input
                id="last-name"
                placeholder="First name"
                name="last-name"
                type="text"
              />
            </FormControl>
          </Flex>
          <FormControl mt="2%">
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              Email address
            </FormLabel>
            <Input id="email" type="email" name="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="textarea" fontWeight={"normal"} mt="2%">
              Write your Message
            </FormLabel>
            <InputGroup size="md">
              <Textarea
                pr="4.5rem"
                type={"textarea"}
                name="message"
                placeholder="Enter Your Message"
              />
            </InputGroup>
            <Button type="submit" mt="20px">
              Next
            </Button>
          </FormControl>
        </Box>
      </form>
    </Box>
  );
};

export default function ContactForm() {
  return (
    <>
      <Box
        className="slideRight"
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Form1 />
      </Box>
    </>
  );
}
