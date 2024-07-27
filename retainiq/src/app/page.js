import LeftBar from "@/components/LeftBar";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <div className="flex">
      <LeftBar />
      <div className="flex-1">
        <MainComponent />
      </div>
    </div>
  );
}