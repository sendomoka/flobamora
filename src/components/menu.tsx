import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { I18nToggle } from "@/components/i18n-toggle"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "@/components/search"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export function MenuSheet() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon
            // @ts-expect-error
            className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <a href="/about" class="flex justify-center mt-6">
          <Button variant="link">{t("Things To Do")}</Button>
        </a>
        <a href="/contact" class="flex justify-center my-6">
          <Button variant="link">{t("Practical Tips")}</Button>
        </a>
        <div>
        <div onClick={() => setOpen(true)} class="flex justify-center">
          <Button variant="outline">
            <div class="flex mr-10">
            <MagnifyingGlassIcon
              // @ts-expect-error
              className="size-5" />
            <span class="pl-2 pr-6">{t("Search")}...</span>
            </div>
            <Search open={open} setOpen={setOpen as React.Dispatch<React.SetStateAction<boolean>>} />
          </Button>
        </div>
        <div class="flex justify-center mt-6 gap-4">
          <ModeToggle />
          <I18nToggle />
        </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
