enum UserRole {
  ADMINISTRADOR = 'administrador',
  SECRETARIA = 'secretaria',
  SOPORTE = 'soporte',
}

interface ModuleMenuItem {
  name: string;
  route: string;
  icon: string;
  roles: UserRole[];
}
