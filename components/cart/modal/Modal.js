import { useCart } from '../../../context/cartState';
import { ModalStyles } from './ModalStyles';

export default function ({ showModal, setShowModal }) {
  const { setModalCloseBtnRef } = useCart();

  return (
    <ModalStyles showModal={showModal}>
      <h3>Our purchase policy</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Neque id sint aspernatur dolor, autem dolores
        magnam amet. Eius sint impedit expedita libero
        labore officia cum, fuga, repudiandae velit
        inventore totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Neque id sint aspernatur dolor, autem dolores
        magnam amet. Eius sint impedit expedita libero
        labore officia cum, fuga, repudiandae velit
        inventore totam! Eius sint impedit expedita libero
        labore officia cum, fuga, repudiandae velit
        inventore totam! Eius sint impedit expedita libero
        labore officia cum, fuga, repudiandae velit
        inventore totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Obcaecati, corrupti fugiat, labore repudiandae
        beatae eius repellat voluptatum aliquid neque natus
        architecto eveniet a iure ducimus nam voluptas
        pariatur saepe atque necessitatibus consectetur
        autem culpa ratione minima commodi! Hic ipsum est
        enim magnam, consectetur rerum a reiciendis, natus,
        sit alias nam.
      </p>
      <button
        onClick={() => setShowModal(false)}
        aria-label='Close modal'
        ref={node => setModalCloseBtnRef(node)}
      >
        close
      </button>
    </ModalStyles>
  );
}
