import { useState } from 'react';
import { Modal } from './components/Modal';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Modal
      </button>
      <Modal show={show} setShow={setShow}>
        <Modal.Header>
          <h1>Title header</h1>
        </Modal.Header>
        <Modal.Body>
          <h1>Modal Content</h1>
        </Modal.Body>
        <Modal.Footer>
          <h2>Footer modal</h2>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default App
