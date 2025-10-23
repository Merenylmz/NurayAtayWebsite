import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <div>
      {/* style={{borderWidth: 1, borderColor: "#fff", borderRadius: 20, padding: 30}}   */}
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Kendinizi Yeniden Keşfedin: <span className="font-tangerine font-bold text-7xl" style={{color: "gold"}}>Nuray Atay Beauty</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-300">
             Uzman dokunuşlarla cildinize ışıltı katın, tırnaklarınıza zarafet getirin. Yüz bakımı, cilt bakımı ve protez tırnak uygulamalarıyla güzelliğinizin her adımında yanınızdayız. İçinizdeki güzelliği dışarıya çıkarın ve her anınıza değer katın.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#task"
                className="px-8 py-4 text-lg font-medium text-center text-white rounded-md" style={{backgroundColor: "gold", textShadow: '1px 1px 0 goldenrod'}}>
                Yapılan İşlemler
              </a>
              {/* Social Media Link */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={"/img/forhero.png"}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
