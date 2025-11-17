import { X, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  linkedinUrl: string;
}

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamMembers: TeamMember[];
}

/**
 * TeamModal Component
 * 
 * Modal elegante para exibir os LinkedIns da equipe
 * Abre com animação suave e overlay semi-transparente
 * 
 * Para adicionar/editar membros da equipe, atualize o array teamMembers
 * no componente Index.tsx
 * 
 * Props:
 * @param isOpen - Controla se o modal está aberto
 * @param onClose - Função para fechar o modal
 * @param teamMembers - Array com nome e URL do LinkedIn de cada membro
 */
export const TeamModal = ({ isOpen, onClose, teamMembers }: TeamModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={cn(
            "bg-card rounded-2xl shadow-2xl w-full max-w-md",
            "pointer-events-auto animate-scale-in",
            "border-2 border-primary/20"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Nossa Equipe
              </h2>
            </div>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <a
                  key={index}
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex items-center gap-4 p-4 rounded-xl",
                    "bg-muted/50 hover:bg-gradient-primary/10",
                    "border border-border hover:border-primary/50",
                    "transition-all duration-300",
                    "hover:scale-[1.02]"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ver perfil no LinkedIn
                    </p>
                  </div>
                  
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
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-muted/30">
            <p className="text-sm text-center text-muted-foreground">
              Conecte-se conosco no LinkedIn! 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
