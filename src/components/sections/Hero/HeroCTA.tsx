import Button from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button href="#projects">
        View Projects
      </Button>

      <Button
        href="/resume/cv.pdf"
        variant="secondary"
      >
        Download CV
      </Button>
    </div>
  );
}