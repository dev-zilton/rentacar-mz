import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade | Transporte&Logística K&K",
  description:
    "Política de Privacidade da Transporte&Logística K&K - como tratamos os seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
            Última atualização: Julho de 2026
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                1. Introdução
              </h2>
              <p>
                A Transporte&amp;Logística K&amp;K ("nós", "a empresa") respeita a
                privacidade dos seus clientes e visitantes. Esta política explica que
                dados pessoais recolhemos, para que fins os utilizamos, e quais são
                os seus direitos em relação a esses dados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                2. Dados que recolhemos
              </h2>
              <p>
                Recolhemos apenas os dados que nos fornece diretamente através do
                nosso formulário de contacto, nomeadamente:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>Datas e local pretendidos para levantamento e devolução da viatura</li>
              </ul>
              <p className="mt-2">
                Não utilizamos cookies de rastreamento, publicidade ou ferramentas de
                análise de terceiros no nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                3. Como utilizamos os seus dados
              </h2>
              <p>Os dados submetidos através do formulário são utilizados exclusivamente para:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Responder ao seu pedido de cotação ou reserva</li>
                <li>Coordenar o levantamento e devolução da viatura</li>
                <li>Comunicar consigo sobre a sua reserva</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                4. Partilha de dados
              </h2>
              <p>
                Não vendemos, alugamos nem partilhamos os seus dados pessoais com
                terceiros para fins de marketing. Os seus dados são utilizados
                apenas internamente pela nossa equipa para gerir o seu pedido.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                5. Retenção de dados
              </h2>
              <p>
                Mantemos os seus dados apenas pelo tempo necessário para cumprir a
                finalidade para a qual foram recolhidos, ou conforme exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                6. Os seus direitos
              </h2>
              <p>
                Pode, a qualquer momento, solicitar acesso, correção ou eliminação
                dos seus dados pessoais, entrando em contacto connosco através dos
                meios indicados abaixo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                7. Contacto
              </h2>
              <p>
                Para questões relacionadas com esta Política de Privacidade, contacte-nos:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Email: transporteslogisticakk@gmail.com</li>
                <li>Telefone: +258 84 379 2635</li>
                <li>Morada: Matola, Matola-Rio, Maputo, Moçambique</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
