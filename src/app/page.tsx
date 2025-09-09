import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
// import { Cta } from "@/components/Cta";

import { benefitFour, benefitOne, benefitThree, benefitTwo } from "@/components/data";
// import Image from "next/image";
export default function Home() {
  return (
    <Container>
      <Hero />
      <div id="task"></div>
      <SectionTitle
        preTitle="Nuray Atay Beauty"
        title="Yapılan Islemler"
      >
        Nuray Atay Güzellik Merkezi olarak, her biri alanında uzman ekibimiz ve en güncel teknolojilerle size özel hizmetler sunuyoruz. İster pürüzsüz bir cilt, ister göz alıcı tırnaklar veya kalıcı makyaj uygulamaları olsun, tüm işlemlerimizde beklentilerinizin ötesine geçmeyi hedefliyoruz.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Benefits imgPos="right" data={benefitFour} />

      <SectionTitle
        preTitle="Bilgiler"
        title="Neden Biziz?"
      >
        Çünkü biz sadece güzelliğinize değil, mutluluğunuza da önem veriyoruz. Uzman ekibimizle, en son teknolojiyi kullanarak, size özel çözümler sunuyor ve her anınızda kendinizi değerli hissetmenizi sağlıyoruz. Kalite, hijyen ve kişiye özel hizmet anlayışımızla, güzellik yolculuğunuzda en güvenilir durağınız olmak için buradayız.

      </SectionTitle>

    

      <SectionTitle
        preTitle="Yorumları"
        title="Müşterilerimizin Yorumları"
      >
        Müşterilerimizin memnuniyeti bizim en büyük motivasyon kaynağımız. Onların gözünden Nuray Atay Güzellik Merkezi deneyimini okuyun ve neden bizi tercih ettiklerini keşfedin
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="Sorular" title="Sıkça Sorulan Sorular">
        Hizmetlerimiz, randevu süreçleri veya aklınıza takılan diğer konular hakkında merak ettikleriniz mi var? Aşağıdaki bölümden en çok sorulan soruların yanıtlarına ulaşabilirsiniz.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}






