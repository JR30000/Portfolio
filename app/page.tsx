import { Hero } from "@/components/Hero";
import profile from "@/content/profile.json";

export default function HomePage() {
  return (
    <Hero
      name={profile.name}
      headline={profile.hero.headline}
      subheadline={profile.hero.subheadline}
      ctaLabel={profile.hero.cta}
    />
  );
}
