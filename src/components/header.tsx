import logodark from "/logo-dark.svg";
import logolight from "/logo-light.svg";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import { I18nToggle } from "./i18n-toggle";

export default function Header() {
  const { theme } = useTheme();
  return (
    <div class="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-10">
      <div class="container mx-auto">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <img
                src={theme === "dark" ? logodark : logolight}
                alt="logo"
                width={50}
              />
              <h3 class="uppercase text-lg font-bold">flobamora</h3>
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <ModeToggle />
            <I18nToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
