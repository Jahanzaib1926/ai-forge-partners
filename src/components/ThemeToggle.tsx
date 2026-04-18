import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full border border-border/50 bg-background/30" aria-hidden />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "h-8 w-8 rounded-full border border-border/40",
        "bg-background/20 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light" : "Switch to dark"}
      aria-label="Toggle color theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
};
