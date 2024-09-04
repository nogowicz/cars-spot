import { useState } from 'react';

import Carousel from '../components/Carousel';
import TabButton from '../components/TabButton';

const passengerCars = [
  'https://s3-alpha-sig.figma.com/img/455f/8170/25d16da721f760a93a18014553e211f7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZ-N-dclQnby88BdIUrBinjC8S6lwg18rcPAc1AG0UNt2SZTW~rJlfTfpI6XMsOqqHcrDNXnJrECdJdSWpoUME5JTd~bEjS8TmKq63Iqop3lAli32RhXppNPKmjRUM~Y2TXfkLNniUOXj74VMk3BixHBQxDB-9e38WxphN2fC2EZan5WZ3cD6yHoJJGrivcIV7K-Dy9pr1O5ximSNYJl3h4CgXzvPawLajf5~3OIg~j0TNjUgAxtzCKHPVC2kCfbNIacMUOrIy1IOifaQqeGyMGQbY0f2eKBC1GZzeacMpRK3ffMcTSVwExDHPxOuuaBpgTxhVUa6WyHTRaN3brgAg__',
  'https://s3-alpha-sig.figma.com/img/facd/0f09/a928544695dd2ac8e3ccfcdefa57038a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LvqqQjJbHUApPsYehPmjDfxIb4uBYrd3WDE2NdC~-mQT1M9mQlyvpPBdjBKlAKYp6IVwc8QB8hpBTHBM8nnA59h~aTMmBkmfTN69d3pEhJ3EZC30uQfq~EHCo86CaQq9QWGM8vp6taB62kERt3FhQv6ABF~-Pi2Q1QXcGMAvAoLT4mj98fWcJKKS6Udus1~m~unT4AdfPeM9xc9USe5Eu9bhFH9fIHOXcCVG0Biadcb0zARYHIawwMijnCuq8dI2RAlEKUommihrKWoGeMMJ6P-WuV8a7y5paDM7k9qv7eULQriuO8nGmg1SRWbpR2Oj5pJWydEkRg3WTNK3pO~ejg__',
  'https://s3-alpha-sig.figma.com/img/5813/f263/a3b1d015a8cf7e3b1fe4740e3d0a66ad?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKfh7r7~JFfHoh0Bl1gapmITR~Gq-bmNWfslOlSjj-oXUTOkCARZkbYfjV~yJKiJoK1oiHBJfosTFo2AdqVfZHGQ3Prkn4u6QSYsXvJ1SGRouRTC7i26bXl65pryV0dMn04Vi0hNa8W~fpe-yJu~AFMsvob4lJSU40qOZjgS3UtW8xJ-j8--rxHHPJUKWiRcasEpsh3mvEP2~7wKSb2~ajwglH~9jAnm3H2YB8El7WKWF0-FF7wC22xa5-fdCgTp4bsIWDxCTyWqSMNcNAgplsVBQn-6KXIVOGEuBaarEbzyoT5~3-QTNeEv9i4HChFvkVBNR-SpOYjW6XX6IfuJUg__',
  'https://s3-alpha-sig.figma.com/img/7ce8/d402/502a78b2a74212338686fec1a03cb2be?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvyFCaOx30zvIdUKqT6KyVf4dF0WItXasotnQPJA~LVxTkfYmx6HGz4m3ybWqAp73rjMMfk7gHChamES0ZOkXHkWkF~iw~mgmwjdDc7AlrBXOULjmC-9IE009sVtJQK4D2SzsXt3hikS1sXQ9Je6XBTk1VaSz-DtPfCTZZ0UFHoYaU~Ls-wUOYHStmuwqV9V~4w73dtL43jzMsldkmVY-5O7NjDU-VyGbNTV5xjVbl-ZqbK66AHN7jwjYM8pxIQH3k6g65VHRas-EMl9vQkfFuZm2SS05-LysLvETto~XGxiKZaRRO1OmQxs-au33cH4-BfpLdFH12OhwT716xCzZA__',
  'https://s3-alpha-sig.figma.com/img/3c82/1167/691cf59c31044b67d94d841d0721e76f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewHf4vCpYVfC1bDy1J10AJcsyksBo6pQmHNxTuFY46qoKe-MMhytBF-ZfB37K0E-qnRavcBhDxsP9UbVbzx5YsBQ-LXrliTzWJWSuaHwpuXAOycy3iIITNBYozbGnR8ws4GkUqGyO3onZ0j9-qjMoaIJOafGITBT3aoESTrvNQJDz8hJann4TObD1elwm1izpYodJalmbFLWxnnaF1xiHEFVi-uyNBFH2qCK43tVPEL07kTw8Vi8peTaUKJIKMbN6NTSyhDftLCvT1jI7TKNsBZCwQtRK3OMBHK0dJkPfOyidzkjQgr8L9zDu2uu5C9is8MVWfyYIfIpmpShtuDT6Q__',
];

const cargoCars = [
  'https://ocdn.eu/pulscms-transforms/1/HGrk9kpTURBXy9hYTNkMjlmNGNhYzNiZTM3NjM4ODMyNjNlOTA5YTNlMy5qcGeSlQMAzQE0zQu4zQaYkwXNBLDNAqTeAAKhMAWhMQA',
  'https://api.zasadaauto.pl/uploads/posts/headers/14494807383604.jpg',
  'https://www.mercedes-benz.pl/content/poland/pl/vans/services/homologation/_jcr_content/root/responsivegrid/simple_stage.component.damq1.3325794413747.jpg/mercedes-benz-vans-tachograph-dako-stage.jpg',
];

export default function GallerySection() {
  const [isPassengerCars, setIsPassengerCars] = useState(true);

  return (
    <section
      id="gallery"
      className="flex flex-col items-center px-5 my-32 xl:px-0 xl:mt-96"
    >
      <div className="flex flex-col self-center w-full gap-5 my-20 max-w-7xl">
        <div>
          <p className="text-xl font-normal font-robotoCondensed text-primary ">
            Prezentacja firmy
          </p>
          <h2 className="text-3xl font-normal uppercase font-bebas text-secondary">
            Zobacz naszą galerię zdjęć
          </h2>
        </div>
        <div className="flex flex-row gap-10">
          <TabButton
            active={isPassengerCars}
            onClick={() => setIsPassengerCars(true)}
          >
            Samochody osobowe
          </TabButton>
          <TabButton
            active={!isPassengerCars}
            onClick={() => setIsPassengerCars(false)}
          >
            Samochody dostawcze
          </TabButton>
        </div>
      </div>
      <Carousel images={isPassengerCars ? passengerCars : cargoCars} />
    </section>
  );
}
