import NewsCard from "../../components/NewsCard/NewsCard";
import Footer from "../../components/Footer/Footer";
import { noticias } from "../../data/noticias";
import './Home.css'

export default function Home() {
  const [manchete, ...demais] = noticias
  
  return (
    <main className="container">
        <section className="manchete">
            <NewsCard
                categoria={manchete.categoria}
                titulo={manchete.titulo}
                resumo={manchete.resumo}
            />
        </section>
        <section className="grade">
            {demais.map((noticia) => (
                <NewsCard
                    key={noticia.id}
                    categoria={noticia.categoria}
                    titulo={noticia.titulo}
                    resumo={noticia.resumo}
                />
            ))}
        </section>
        <Footer>

        </Footer>
    </main>
  )
}