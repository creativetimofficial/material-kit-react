declare module "footer.routes" {
  export type FooterRouteConfig = {
    brand: {
      name: string;
      image: string;
      route: string;
    };
    socials: {
      icon: React.ReactNode;
      link: string;
    }[];
    menus: {
      name: string;
      items: {
        name: string;
        href: string;
      }[];
    }[];
    copyright: React.ReactNode;
  };
  const footerRoutes: FooterRouteConfig[];
  export default footerRoutes;
}
