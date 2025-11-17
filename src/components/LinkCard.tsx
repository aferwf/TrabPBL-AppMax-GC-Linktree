import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  delay?: number;
}

/**
 * LinkCard Component
 * 
 * Card clicável para links no estilo Linktree
 * Usa as cores do design system (primary, secondary, etc.)
 * 
 * Props:
 * @param title - Título do card
 * @param description - Descrição opcional
 * @param icon - Ícone Lucide React
 * @param href - URL de destino
 * @param className - Classes adicionais
 * @param delay - Delay da animação (em ms)
 */
export const LinkCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  className,
  delay = 0 
}: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block w-full p-6 rounded-xl",
        "bg-card hover:bg-gradient-card",
        "border-2 border-border hover:border-primary/50",
        "shadow-md hover:shadow-glow",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.02] hover:-translate-y-1",
        "animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <div className="relative flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};
