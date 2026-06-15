import { Hero } from "@/components/sections/Hero";
import { Credibility } from "@/components/sections/Credibility";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { RestaurantPricing } from "@/components/sections/RestaurantPricing";
import { Featured } from "@/components/sections/Featured";
import { WhyMe } from "@/components/sections/WhyMe";
import { TechStack } from "@/components/sections/TechStack";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Services />
      <Solutions />
      <RestaurantPricing />
      <Featured />
      <WhyMe />
      <TechStack />
      <CTA />
    </>
  );
}
