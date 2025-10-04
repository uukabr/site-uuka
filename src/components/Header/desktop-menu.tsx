'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function DesktopMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-6">
        {/* somos */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="!bg-transparent !text-[#F59F23] hover:!bg-black hover:!text-[#F9c57b] data-[state=open]:!bg-black data-[state=open]:!text-[#F9c57b] focus:!bg-black focus:!text-[#F9c57b] !ring-0 !outline-none">
            Somos
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="!bg-black !text-[#F59F23] px-6 py-4 min-w-[200px] [&_a]:text-[#F59F23] [&_a:hover]:text-[#F9c57b] !border-0 shadow-none rounded-none">
            <NavigationMenuLink asChild>
              <a href="#publico-alvo"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Público-alvo
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a href="#por-que"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Por que?
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a href="#missao"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Missão
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a href="#visao"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Visão
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a href="#valores"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Valores
              </a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* metodologia */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="!bg-transparent !text-[#F59F23] hover:!bg-black hover:!text-[#F9c57b] data-[state=open]:!bg-black data-[state=open]:!text-[#F9c57b] focus:!bg-black focus:!text-[#F9c57b] !ring-0 !outline-none">
            Metodologia
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className="!bg-black !text-[#F59F23] px-6 py-4 min-w-[200px] [&_a]:text-[#F59F23] [&_a:hover]:text-[#F9c57b] !border-0 shadow-none rounded-none">
            <NavigationMenuLink asChild>
              <a href="#cronograma"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Cronograma
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a href="#lideranca"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Liderança e Autoconhecimento
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a href="#ciclo-virtuo"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Ciclo Virtuoso
              </a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* diretoria */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="!bg-transparent !text-[#F59F23] hover:!bg-black hover:!text-[#F9c57b] data-[state=open]:!bg-black data-[state=open]:!text-[#F9c57b] focus:!bg-black focus:!text-[#F9c57b] !ring-0 !outline-none">
            Diretoria
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className="!bg-black !text-[#F59F23] px-6 py-4 min-w-[200px] [&_a]:text-[#F59F23] [&_a:hover]:text-[#F9c57b] !border-0 shadow-none rounded-none">
            <NavigationMenuLink asChild>
              <a href="#parcerias"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Parcerias
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a href="#apoiadores"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
                Apoiadores
              </a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* depoimentos */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="#depoimentos"
              className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
              Depoimentos
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* contatos */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="#contatos"
              className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm">
              Contatos
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}