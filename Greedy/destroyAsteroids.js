function asteroidsDestroyed(mass, asteroids) {
  asteroids.sort((a, b) => a - b);
  for (const asteroid of asteroids) {
    if (asteroid > mass) {
      return false;
    }
    mass += asteroid;
  }
  return true;
}
