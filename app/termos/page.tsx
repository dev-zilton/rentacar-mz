import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Termos e Condições | Transporte&Logística K&K",
  description:
    "Termos e Condições de utilização dos serviços de aluguer de viaturas da Transporte&Logística K&K.",
};

export default function TermosPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Termos e Condições
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
            Última atualização: Julho de 2026
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                1. Aceitação dos termos
              </h2>
              <p>
                Ao solicitar uma cotação, reserva ou utilizar os serviços da
                Transporte&amp;Logística K&amp;K, o cliente aceita os termos e
                condições descritos neste documento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                2. Serviços
              </h2>
              <p>
                Prestamos serviços de Aluguer de Longa Duração (ALD), Gestão de
                Frota e Aluguer de Curto Prazo (RAC) de viaturas em Moçambique,
                conforme descrito na nossa página de Serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                3. Reservas e cotações
              </h2>
              <p>
                Os pedidos submetidos através do formulário de contacto são
                cotações preliminares e não constituem uma reserva confirmada até
                que a nossa equipa entre em contacto e confirme a disponibilidade
                da viatura, preço final e condições.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                4. Condutor e requisitos
              </h2>
              <p>
                O condutor deve possuir carta de condução válida e cumprir os
                requisitos mínimos de idade e experiência exigidos pela empresa,
                a confirmar no momento da reserva.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                5. Pagamentos
              </h2>
              <p>
                Os pagamentos são efetuados em Metical (MT), de acordo com as
                condições acordadas no momento da confirmação da reserva.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                6. Cancelamentos
              </h2>
              <p>
                As condições de cancelamento e eventuais penalizações serão
                comunicadas ao cliente no momento da confirmação da reserva.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                7. Responsabilidade
              </h2>
              <p>
                O cliente é responsável pela viatura durante o período de aluguer,
                incluindo eventuais danos, multas ou infrações cometidas durante a
                utilização, salvo condições contrárias acordadas por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                8. Alterações aos termos
              </h2>
              <p>
                Reservamo-nos o direito de atualizar estes termos a qualquer
                momento. As alterações entram em vigor assim que publicadas nesta
                página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                9. Contacto
              </h2>
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
