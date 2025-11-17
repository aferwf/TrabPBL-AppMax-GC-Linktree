import { useState } from "react";
import { 
  Home, 
  LayoutDashboard, 
  Github, 
  FileText, 
  BookOpen,
  Users
} from "lucide-react";
import { LinkCard } from "@/components/LinkCard";
import { TeamModal } from "@/components/TeamModal";
import logo from "@/assets/logo.png";

/**
 * ===================================
 * CONFIGURAÇÃO DOS LINKS DO PROJETO
 * ===================================
 * 
 * Para editar os links, atualize os objetos abaixo:
 */

const projectLinks = [
  {
    title: "Landing Page",
    description: "Conheça nosso projeto",
    icon: Home,
    href: "https://seu-projeto.com", // ⚠️ EDITE AQUI
  },
  {
    title: "Dashboard",
    description: "Acesse a plataforma",
    icon: LayoutDashboard,
    href: "https://dashboard.seu-projeto.com", // ⚠️ EDITE AQUI
  },
  {
    title: "Repositório GitHub",
    description: "Veja o código-fonte",
    icon: Github,
    href: "https://github.com/seu-usuario/seu-repo", // ⚠️ EDITE AQUI
  },
  {
    title: "Fluxograma",
    description: "Entenda a arquitetura",
    icon: FileText,
    href: "https://seu-fluxograma.com", // ⚠️ EDITE AQUI
  },
  {
    title: "Documentação Completa",
    description: "Guia técnico detalhado",
    icon: BookOpen,
    href: "https://docs.seu-projeto.com", // ⚠️ EDITE AQUI
  },
];

/**
 * ===================================
 * CONFIGURAÇÃO DOS LINKEDINS DA EQUIPE
 * ===================================
 * 
 * Para adicionar/editar membros, atualize o array abaixo:
 */

const teamMembers = [
  {
    name: "Manuella - Marketing e Design",
    linkedinUrl: "https://linkedin.com/in/manuella", // ⚠️ EDITE AQUI com o link real
  },
  {
    name: "Mariana - Marketing e Design",
    linkedinUrl: "https://linkedin.com/in/mariana", // ⚠️ EDITE AQUI com o link real
  },
  {
    name: "Fernanda - IA & Dados",
    linkedinUrl: "https://linkedin.com/in/fernanda", // ⚠️ EDITE AQUI com o link real
  },
  {
    name: "Raziel - IA & Dados",
    linkedinUrl: "https://linkedin.com/in/raziel", // ⚠️ EDITE AQUI com o link real
  },
  {
    name: "Valentina - Programação Java",
    linkedinUrl: "https://linkedin.com/in/valentina", // ⚠️ EDITE AQUI com o link real
  },
  {
    name: "Gustavo - Programação Java",
    linkedinUrl: "https://linkedin.com/in/gustavo", // ⚠️ EDITE AQUI com o link real
  },
  {
    name: "Dalessandro - Gestão Comercial",
    linkedinUrl: "https://linkedin.com/in/dalessandro", // ⚠️ EDITE AQUI com o link real
  },
  {
    name: "Érica - Gestão Comercial",
    linkedinUrl: "https://linkedin.com/in/erica", // ⚠️ EDITE AQUI com o link real
  },
];

/**
 * ===================================
 * INFORMAÇÕES DO PROJETO
 * ===================================
 */

const projectInfo = {
  name: "MaxTeam",
  tagline: "Rastreamento AppMax - Grupo 10",
};

// ============================================================================
// Componente Principal - Não precisa editar abaixo, apenas os objetos acima
// ============================================================================

const Index = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
      
      <div className="container max-w-2xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white shadow-glow mb-6 p-3">
            <img 
              src={logo} 
              alt={`Logo ${projectInfo.name}`}
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {projectInfo.name}
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {projectInfo.tagline}
          </p>
        </header>

        {/* Links Section */}
        <main className="space-y-4 mb-8">
          {projectLinks.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              description={link.description}
              icon={link.icon}
              href={link.href}
              delay={index * 100}
            />
          ))}

          {/* Team Button */}
          <button
            onClick={() => setIsTeamModalOpen(true)}
            className="group relative block w-full p-6 rounded-xl bg-gradient-primary shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${projectLinks.length * 100}ms` }}
          >
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-lg font-semibold text-white">
                  Equipe & LinkedIns
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  Conheça nosso time
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
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
          </button>
        </main>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-border animate-fade-in">
          <p className="text-sm text-muted-foreground">
            Feito com 💜 pela equipe {projectInfo.name}
          </p>
        </footer>
      </div>

      {/* Team Modal */}
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        teamMembers={teamMembers}
      />
    </div>
  );
};

export default Index;
