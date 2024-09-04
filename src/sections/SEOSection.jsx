import SEOElement from '../components/SEOElement';

export default function SEOSection() {
  return (
    <section className="flex flex-col items-center justify-center px-5 bg-secondary xl:px-0">
      <div className="flex flex-col w-full gap-20 my-24 max-w-7xl sm:flex-row">
        <SEOElement
          title="Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo."
          description="Mauris varius ispum mauris, rutrum lobortis magne efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et Vestibulum et dolor vel velit condimentum blandit. Quisque sed ante ut quam volutpat pharetra ac nec justo. Fusce at ex quam. Sed vel malesuada eros, sit amet ultricies purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vehicula, sapien a dignissim tincidunt, nisl urna venenatis lectus, ut tincidunt turpis odio a arcu. Integer fringilla interdum sapien in posuere. Curabitur sed orci in ligula cursus sodales. Proin efficitur nisl in libero fermentum, vel porttitor risus dignissim."
        />
        <SEOElement
          title="Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo."
          description="Mauris varius ispum mauris, rutrum lobortis magne efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et Vestibulum et dolor vel velit condimentum blandit. Quisque sed ante ut quam volutpat pharetra ac nec justo. Fusce at ex quam. Sed vel malesuada eros, sit amet ultricies purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vehicula, sapien a dignissim tincidunt, nisl urna venenatis lectus, ut tincidunt turpis odio a arcu. Integer fringilla interdum sapien in posuere. Curabitur sed orci in ligula cursus sodales. Proin efficitur nisl in libero fermentum, vel porttitor risus dignissim."
        />
      </div>
    </section>
  );
}
