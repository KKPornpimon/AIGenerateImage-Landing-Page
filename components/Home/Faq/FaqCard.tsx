import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FaqCard = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:underline hover:decoration-orange-300">สามารถ Generate ภาพได้กี่ภาพ?</AccordionTrigger>
          <AccordionContent className="indent-7 text-orange-300">
            สามารถเรียกใช้งาน API ได้สูงสุด 25 ครั้งต่อเดือน (เกินนี้จะใช้งานไม่ได้)
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:underline hover:decoration-orange-300">ถ้าเรียกใช้งาน API เกิน 25 ครั้งล่ะ จะเกิดอะไรขึ้น?</AccordionTrigger>
          <AccordionContent className="indent-7 text-orange-300">
            ถ้าเกิน 25 ครั้ง จะใช้ไม่ได้จนกว่าจะเริ่มเดือนใหม่ หรืออัปเกรดแผน
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:underline hover:decoration-orange-300">อัพเกรดแผนแบบไหนได้บ้าง?</AccordionTrigger>
          <AccordionContent className="indent-7 text-orange-300">
            สามารถอัพเกรดแผนได้ 
            <Link 
              href={`https://rapidapi.com/poorav925/api/ai-text-to-image-generator-flux-free-api/pricing`} 
              className="mx-2 underline underline-offset-2 text-blue-500 hover:text-[var(--hoverColor)]" target="_blank">ที่นี่
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default FaqCard;
