import { categories } from "../data/udemyData";

function Categories() {
  return (
    <section>
      <h2>Top Categories</h2>
      <div className="category-list">
        {categories.map(cat => (
          <div key={cat.id} className="category-card">
            {cat.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
