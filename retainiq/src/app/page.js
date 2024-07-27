import LeftBar from "@/components/LeftBar";
import MainComponent from "@/components/MainComponent";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex">
    <Toaster/>
      <LeftBar />
      <div className="flex-1">
        <MainComponent />
      </div>
    </div>
  );
}