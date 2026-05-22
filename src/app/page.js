import AllFacility from "@/Components/AllFacility";
import Banner from "@/Components/Banner";
import ClientsFeedback from "@/Components/ClientsFeedback";
import HowItWorks from "@/Components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AllFacility></AllFacility>
      <HowItWorks></HowItWorks>
      <ClientsFeedback></ClientsFeedback>
    </div>
  );
}
