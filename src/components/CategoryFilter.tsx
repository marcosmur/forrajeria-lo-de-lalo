type Props = {
  categorias: string[];
  onFilter: (cat: string | null) => void;
  categoriaSeleccionada: string | null;
  className?: string;
};

export default function CategoryFilter({
  categorias,
  onFilter,
  categoriaSeleccionada,
  className = "",
}: Props) {
  return (
    <div className={`w-full ${className}`}>
      <ul className="space-y-2">
        <li
          onClick={() => onFilter(null)}
          className={`cursor-pointer text-black ${
            categoriaSeleccionada === null ? "font-bold underline" : ""
          }`}
        >
          Todas
        </li>
        {categorias.map((cat) => (
          <li
            key={cat}
            onClick={() => onFilter(cat)}
            className={`cursor-pointer text-black ${
              categoriaSeleccionada === cat ? "font-bold underline" : ""
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
