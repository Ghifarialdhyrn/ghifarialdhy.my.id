import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Building Modern Digital Experiences"
            description="Frontend & Fullstack Developer specializing in Next.js and modern web technologies."
          />

          <div className="flex gap-4 mb-8">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>

          <Card>
            <Badge>Next.js</Badge>

            <h3 className="mt-4 text-xl font-semibold">
              Test Card
            </h3>

            <p className="mt-2 text-zinc-400">
              Jika tampilan ini sudah rapi, berarti design system kita berhasil.
            </p>
          </Card>
        </Container>
      </Section>
    </main>
  );
}