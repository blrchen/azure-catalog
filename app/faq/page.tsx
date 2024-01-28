import { Flex } from '@radix-ui/themes'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/Accordion'
import PageLayout from '@/components/PageLayout'

const Questions = [
  {
    question: 'How to report issues or propose feature requests?',
    answer:
      'If you come across any bugs or have a feature suggestion, please create an issue on our Github page at https://github.com/blrchen/azure-catalog/issues.'
  },
  {
    question: 'How to contribute?',
    answer:
      'The source code is accessible on Github at <a href="https://github.com/blrchen/azure-catalog">https://github.com/blrchen/azure-catalog</a>. We welcome pull requests of all sizes.'
  }
]
const FaqPage = () => {
  return (
    <PageLayout title="FAQ" subTitle="">
      <Flex justify="center">
        <Accordion type="multiple" className="w-[750px] max-md:w-full">
          {Questions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </PageLayout>
  )
}

export default FaqPage
