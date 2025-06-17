import { PageTemplate } from "@/components";
import { HomeDemo } from "./Demo/HomeDemo";
const envTitle = import.meta.env.VITE_API_TITLE;

export const HomePage: React.FC = () => {
  return (
    <PageTemplate title={envTitle} subtitle="Welcome the Home Page!">
      <HomeDemo />
    </PageTemplate>
  );
};
