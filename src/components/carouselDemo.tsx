import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel className="mx-12">
      <CarouselContent>
        <CarouselItem className="basis-1/3">1</CarouselItem>
        <CarouselItem className="basis-1/3">2</CarouselItem>
        <CarouselItem className="basis-1/3">3</CarouselItem>
        <CarouselItem className="basis-1/3">4</CarouselItem>
        <CarouselItem className="basis-1/3">5</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
