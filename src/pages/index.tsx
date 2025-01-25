import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-secondary-500 text-9xl">Heading 01</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>This is a paragraph.</p>
      </div>
      <Button variant="outline">Button</Button>
    </>
  );
}
