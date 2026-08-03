import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/features/hero/hero-section";
import { AboutSection } from "@/features/home/about-section";
import { ContactSection } from "@/features/home/contact-section";
import { ProjectsSection } from "@/features/home/projects-section";
import { ServicesSection } from "@/features/home/services-section";
import { StatsSection } from "@/features/home/stats-section";
import { TrustedClientsSection } from "@/features/home/trusted-clients-section";
import { WorkflowSection } from "@/features/home/workflow-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <StatsSection />
        <TrustedClientsSection />
        <WorkflowSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
