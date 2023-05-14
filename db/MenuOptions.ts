import Artistas from "../db/Artistas.json"
import Colores from "../db/Colores.json"
import Elementos from "../db/Elementos.json"
import Estilos from "../db/Estilos.json"
import Lugares from "../db/Lugares.json"
import Personajes from "../db/Personajes.json"
import Resoluciones from "../db/Resoluciones.json"
import Websites from "../db/Websites.json"

export const MenuOptions = [
  {
    name: "👨‍🎨 Character",
    db: Personajes,
    max: 3,
  },
  {
    name: "✏️ Styles",
    db: Estilos,
    max: 5,
  },
  {
    name: "🎨 Colors",
    db: Colores,
    max: 2,
  },
  {
    name: "🔮 Additional Elements",
    db: Elementos,
    max: 10,
  },
  {
    name: "🏰 Places",
    db: Lugares,
    max: 2,
  },
  {
    name: "✏️ Artists",
    db: Artistas,
    max: 1,
  },
  {
    name: "📝 Website",
    db: Websites,
    max: 1,
  },
  {
    name: "🔍 Resolution",
    db: Resoluciones,
    max: 1,
  },
]
