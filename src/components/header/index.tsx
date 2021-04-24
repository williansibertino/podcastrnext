// importação dos formatos e regiões das datas
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

// importação do modulo do estilo
import styles from './styles.module.scss';

export default function Header() {
    // função de data - formato da data especifica
    const currentDate = format(new Date(), 'iii, d MMMM', {
        locale: ptBR,
    });


    return (
        // Importação do style, somente é aplicado neste componente
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para voçe ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    );
}