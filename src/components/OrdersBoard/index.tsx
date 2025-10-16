import { Board, OrdersContainer } from "./styles";

export function OrdersBoard() {
  return (
    <Board>
      <header>
        <span>xXx</span>
        <strong>Fila de Espera</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
