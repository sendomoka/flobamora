import logodark from "/logo-dark.svg";
import logolight from "/logo-light.svg";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import { I18nToggle } from "./i18n-toggle";
import { Button } from "./ui/button";
import { Search } from "./search";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuSheet } from "./menu";

export default function Header() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div class="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-10">
      <div class="container mx-auto">
        <div class="flex justify-between items-center h-16">
          <a href="/" class="flex items-center">
            <img
              src={theme === "dark" ? logodark : logolight}
              alt="logo"
              width={50}
            />
            <h3 class="uppercase text-lg font-bold">flobamora</h3>
          </a>
          <div class="lg:hidden">
            <MenuSheet />
          </div>
          <div class="hidden lg:flex items-center">
            {/* <a href="/about">
              <Button variant="link">{t("Things To Do")}</Button>
            </a>
            <a href="/contact">
              <Button variant="link">{t("Practical Tips")}</Button>
            </a> */}
            <a href="/home">
              <Button variant="link">{t("Home")}</Button>
            </a>
            <a href="/about">
              <Button variant="link">{t("About")}</Button>
            </a>
            <a href="/destination">
              <Button variant="link">{t("Destination")}</Button>
            </a>
          </div>
          <div class="hidden lg:flex items-center space-x-2">
            <div onClick={() => setOpen(true)}>
              <Button variant="outline">
                <MagnifyingGlassIcon
                  // @ts-expect-error
                  className="size-5"
                />
                <span class="pl-2 pr-6">{t("Search")}...</span>
                <Search
                  open={open}
                  setOpen={
                    setOpen as React.Dispatch<React.SetStateAction<boolean>>
                  }
                />
              </Button>
            </div>
            <ModeToggle />
            <I18nToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
