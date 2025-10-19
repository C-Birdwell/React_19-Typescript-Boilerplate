import { useEffect } from "react";
import { PageTemplate } from "@/components";

export const PlaygroundPage: React.FC = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data here
        console.log("fetch data", data);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }, []);

  return (
    <PageTemplate title={"Playground"}>
      <p>Foobar</p>
    </PageTemplate>
  );
};
