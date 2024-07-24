import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

const ErrorCallout = (props: { message: string }) => {
  return (
    <Callout.Root color="red">
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>{props.message}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorCallout;
