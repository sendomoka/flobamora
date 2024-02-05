import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import indonesiaFlag from "/id.svg";
import unitedKingdomFlag from "/gb.svg";

export function I18nToggle() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          {i18n.language === "id" ? (
            <img src={indonesiaFlag} width="20" />
          ) : (
            <img src={unitedKingdomFlag} width="20" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => i18n.changeLanguage("id")}>
          Indonesia
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
