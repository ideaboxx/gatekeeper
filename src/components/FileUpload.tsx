import { Box, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function FileUpload(props: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [msg, setMessage] = useState();

  const changeSelection = async (e: any) => {
    const { files } = e.target;
    if (files.length > 0) {
      const file = files[0];
      setMessage(file.name);
      if (props.onLoad) {
        props.onLoad({
          test: await file.text(),
          name: file.name,
          type: file.type,
        });
      }
    }
  };

  return (
    <Box>
      <input
        type={"file"}
        className="hidden"
        ref={inputRef}
        onChange={changeSelection}
      />
      <Button
        variant={"outline"}
        w="full"
        p="6"
        onClick={() => inputRef.current?.click()}
      >
        {msg || "Select MasterKey file"}
      </Button>
    </Box>
  );
}
