import { Button, Container, Flex, TabNav, Text } from "@radix-ui/themes";

function App() {
  return (
    <Container>
      <TabNav.Root>
        <Flex direction="row" justify={"between"} p={"5"} gap="2">
          <Text>Hello from Radix Themes :</Text>
          <Button>Let's go</Button>
        </Flex>
      </TabNav.Root>
    </Container>
  );
}

export default App;
