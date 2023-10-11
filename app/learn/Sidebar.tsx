'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <aside className="min-w-[250px] text-mainTitle dark:text-mainTitleBlack hidden lg:block">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Вступ</AccordionTrigger>
          <AccordionContent>
            <Link href="/learn/intro">Для чого мені спортзал?</Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Тренування</AccordionTrigger>
          <AccordionContent>
            <Link href="/learn/training/warm-up">Розминка</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/basic-exercises">Базові вправи</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/load-progression">
              Прогресія навантаження
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Харчування</AccordionTrigger>
          <AccordionContent>
            <Link href="/learn/training/warm-up">Основи</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/basic-exercises">
              Їжа до і після тренування
            </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/load-progression">
              Раціон при схудненні
            </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/load-progression">
              Раціон при наборі ваги
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Відновлення</AccordionTrigger>
          <AccordionContent>
            <Link href="/learn/training/warm-up">Достатній відпочинок</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/basic-exercises">
              Як визначити перетренованість?
            </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/load-progression">
              Прогресія навантаження
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Мотивація</AccordionTrigger>
          <AccordionContent>
            <Link href="/learn/training/warm-up">Як подолати тривожність?</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/basic-exercises">Пошук мотивації</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/learn/training/load-progression">Сила дисципліни</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};
