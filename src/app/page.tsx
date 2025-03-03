import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Hello Word</h1>
      <Button>Click me</Button>
      <Input placeholder="Enter your name" />
    </div>
  );
};

export default HomePage;
