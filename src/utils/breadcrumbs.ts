export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Always start with home
  breadcrumbs.push({ name: 'Inicio', href: '/' });
  
  let currentPath = '';
  
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    
    // Generate readable name from URL segment
    const name = generateReadableName(segments[i], currentPath);
    
    breadcrumbs.push({
      name,
      href: currentPath
    });
  }
  
  return breadcrumbs;
}

function generateReadableName(segment: string, fullPath: string): string {
  // Handle specific known paths
  const pathMappings: Record<string, string> = {
    'productos': 'Productos',
    'sectores': 'Sectores',
    'zonas': 'Zonas',
    'recursos': 'Recursos',
    'diseno-de-laboratorio': 'Diseño de Laboratorio',
    'tecnologia-laboratorios': 'Tecnología',
    'nuestros-clientes': 'Nuestros Clientes',
    'mobiliario-para-laboratorio-por-sector': 'Por Sector',
    
    // Productos
    'mesas-configurables-para-laboratorio': 'Mesas Configurables',
    'mesas-no-configurables': 'Mesas No Configurables',
    'gabinetes-seguridad': 'Gabinetes de Seguridad',
    'tarjas-grifo-laboratorio': 'Tarjas y Grifo',
    'vitrinas-laboratorio-repisas-puente': 'Vitrinas y Repisas',
    'campanas-laboratorio': 'Campanas y Extractores',
    'productos-emergencia': 'Productos de Emergencia',
    'accesorios-cubiertas-mesas': 'Accesorios',
    
    // Sectores
    'laboratorio-para-industria-alimentaria': 'Industria Alimentaria',
    'laboratorio-para-farmaceutica': 'Farmacéutica',
    'laboratorios-hospitalarios-y-clinicos': 'Salud y Hospitalario',
    'laboratorios-industria-minera': 'Minería',
    'laboratorios-educacion-e-investigacion': 'Educación',
    'laboratorios-sector-gobierno': 'Gobierno',
    'laboratorios-biotecnologia-biomedicina': 'Biotecnología',
    'laboratorios-centros-investigacion': 'Investigación',
    'laboratorios-control-de-calidad': 'Control de Calidad',
    'laboratorios-industria-automotriz': 'Industria Automotriz',
    
    // Zonas
    'sistema-7-zonas': 'Sistema 7 Zonas',
    'sistema-de-diseno-laboratorio-7-zonas': 'Sistema de Diseño 7 Zonas',
    'zona-1-trabajo-general': 'Zona 1 - Trabajo General',
    'zona-2-almacenaje-elevado': 'Zona 2 - Almacenaje Elevado',
    'zona-3-reactivos': 'Zona 3 - Reactivos',
    'zona-4-pesaje': 'Zona 4 - Pesaje',
    'zona-5-manipulacion-segura': 'Zona 5 - Manipulación Segura',
    'zona-6-seguridad-y-emergencias': 'Zona 6 - Seguridad y Emergencias',
    'zona-7-lavado': 'Zona 7 - Lavado',
    
    // Recursos
    'centro-descargas': 'Centro de Descargas',
    'blog-tecnico': 'Blog Técnico',
    'garantia-adn-santre': 'Garantía ADN Santre'
  };
  
  // Check if we have a specific mapping
  if (pathMappings[segment]) {
    return pathMappings[segment];
  }
  
  // Fallback: convert kebab-case to Title Case
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
