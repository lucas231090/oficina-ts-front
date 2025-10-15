import { Container, Content } from './styles';

import logo from '../../assets/images/Group.svg'

export function Header() {
    function handleRefresh(palavra:any){
        alert("Clicou: " + palavra)
    }
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h1>Home</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>

                <div className="refresh" onClick={handleRefresh}>
                    <img src={logo} alt="Reiniciar o dia" />
                    <button type="button">Reiniciar o dia</button>
                </div>
            </Content>
        </Container>
    )
}