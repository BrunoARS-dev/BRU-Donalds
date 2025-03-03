import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="p-5 text-red-500">Hello Word</h1>
      <Button>Click me</Button>
      <Input placeholder="Enter your name" />
    </div>
  );
};

export default HomePage;
