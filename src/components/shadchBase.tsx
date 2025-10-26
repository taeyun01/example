import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { CarouselDemo } from "@/components/carouselDemo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChefHat } from "lucide-react";

function ShadchBase() {
  const isActive = true;
  return (
    <div>
      {/* 1. 타이포그래프 */}
      <h2 className="text-2xl font-bold">타이포그래프</h2>
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[13px]">text-13px</div>
      <hr className="my-4" />

      {/* 2. 백그라운드컬러 */}
      <h2 className="text-2xl font-bold">백그라운드컬러</h2>
      <div className="bg-amber-500">amber-500</div>
      <hr className="my-4" />

      {/* 3. 사이즈 */}
      <h2 className="text-2xl font-bold">사이즈</h2>
      <div className="h-20 w-full bg-blue-500">box</div>
      <hr className="my-4" />

      {/* 4. 여백 */}
      <h2 className="text-2xl font-bold">여백</h2>
      <div className="mx-5 my-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>
      <hr className="my-4" />

      {/* 5. 보더 */}
      <h2 className="text-2xl font-bold">보더</h2>
      <div className="m-5 rounded-md border-t-2 border-r-2 border-b-2 border-l-2 border-red-500">
        border
      </div>
      <hr className="my-4" />

      {/* 6. 플렉스 컨테이너 */}
      <h2 className="text-2xl font-bold">플렉스 컨테이너</h2>
      <div className="flex flex-row items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>

      <hr className="my-4" />

      <h2 className="text-2xl font-bold">shadcn 컴포넌트</h2>
      <Button>Click me</Button>

      <div className="bg-primary text-primary-foreground">Primary</div>
      <div className="bg-muted text-muted-foreground">Muted</div>
      <div className="bg-destructive text-destructive-foreground">
        Destructive
      </div>

      {/* cn을 사용하면 여러개의 클래스를 줄바꿈하면서 나눠서 적용할 수 있음 */}
      <div
        className={cn(
          "text-2xl font-bold",
          isActive && "bg-blue-500",
          isActive ? "text-green-500" : "text-red-500",
        )}
      >
        isActive
      </div>

      <h2 className="text-2xl font-bold">버튼 컴포넌트</h2>
      <Button variant="destructive">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="link">Click me</Button>
      <Button variant="secondary">Click me</Button>

      <h2 className="text-2xl font-bold">인풋 컴포넌트</h2>
      <div className="p-5">
        <Input />
        <Input type="email" placeholder="Email" />

        <Textarea />

        <Toaster />

        <Button
          onClick={() =>
            toast("Hello", {
              position: "top-center",
            })
          }
        >
          토스트 버튼
        </Button>
      </div>

      <h2 className="text-2xl font-bold">캐러셀 컴포넌트</h2>
      <CarouselDemo />
      <hr className="my-4" />
      <h2 className="text-2xl font-bold">팝오버 컴포넌트</h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">팝오버 열기</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      <hr className="my-4" />
      <h2 className="text-2xl font-bold">다이얼로그 컴포넌트</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">다이얼로그 열기</Button>
        </DialogTrigger>
        <DialogContent>
          {/* <DialogHeader> */}
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          {/* </DialogHeader> */}
        </DialogContent>
      </Dialog>
      <hr className="my-4" />
      <h2 className="text-2xl font-bold">경고 다이얼로그 컴포넌트</h2>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">경고 다이얼로그 열기</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => alert("Cancel")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => alert("Continue")}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <hr className="my-4" />
      <h2 className="text-2xl font-bold">기본 제공되는 아이콘 컴포넌트</h2>
      <ChefHat className="h-10 w-10 fill-red-500" />
    </div>
  );
}

export default ShadchBase;
