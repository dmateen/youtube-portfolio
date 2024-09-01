import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionWrapper() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:w-1/2 mx-auto px-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Can you provide a link to your Upwork profile?
        </AccordionTrigger>
        <AccordionContent>
          Certainly! You can view my Upwork profile and reviews from previous
          clients by clicking here. Feel free to reach out to me there if
          youprefer to collaborate through Upwork.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How long does it take to complete a script?
        </AccordionTrigger>
        <AccordionContent>
          The turnaround time for a script typically depends on the length and
          complexity of the content. For most projects, I can deliver a polished
          script within 1-3 business days. However, I’m always open to
          discussing expedited timelines if you’re on a tight schedule
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How do you ensure the scripts align with my channel's tone and style?
        </AccordionTrigger>
        <AccordionContent>
          I start by thoroughly researching your channel and understanding your
          brand voice. We’ll have a detailed discussion about your preferences,
          and I’ll ensure that each script matches the tone, style, and audience
          expectations of your channel.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>What is your pricing structure?</AccordionTrigger>
        <AccordionContent>
          My pricing varies depending on the length and complexity of the
          script. I offer competitive rates and am happy to provide a custom
          quote based on your specific needs. Please contact me directly for
          more details.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer revisions?</AccordionTrigger>
        <AccordionContent>
          Yes, I offer revisions to ensure the final script meets your
          expectations. My goal is to deliver a script that you’re 100%
          satisfied with, and I’m happy to make adjustments based on your
          feedback.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          How can I get started with a project?
        </AccordionTrigger>
        <AccordionContent>
          Getting started is simple! Just reach out via the contact form on this
          site or through my Upwork profile. We’ll discuss your project in
          detail, and I’ll provide a timeline and quote to get your
          scriptwriting journey underway.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
