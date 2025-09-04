"use client";

type Props = {
categorias: string[];
onFilter: (categoria: string | null) => void;
};

export default function CategoryFilter({ categorias, onFilter }: Props) {
return (
<aside className="w-48 p-4 border-r bg-gray-50">
<h2 className="font-bold mb-4">Categorías</h2>
<ul className="flex flex-col gap-2">
<li>
<button
onClick={() => onFilter(null)}
className="text-blue-600 hover:underline"
>
Todas
</button>
</li>
{categorias.map((cat) => (
<li key={cat}>
<button
onClick={() => onFilter(cat)}
className="hover:underline"
>
{cat}
</button>
</li>
))}
</ul>
    </aside>
);
}
