import { useState } from 'react';
import './styles/App.css';
import './styles/reset.css';
import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {
  const [input, setInput] = useState("");
  const [chatlog, setChatlog] = useState([
    {
      user: "gpt",
      message: "Como posso ajudar?"
    }
  ]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return; // Verifica se o input está vazio

    try {
      // Faz a requisição para o servidor
      const response = await makeRequest({ prompt: input });

      // Atualiza o chatlog com a mensagem enviada e a resposta recebida
      setChatlog(prevChatlog => [
        ...prevChatlog,
        { user: 'me', message: input },
        { user: 'gpt', message: response.data.split('\n').map(line => <p>{line}</p>) }
      ]);

      // Limpa o campo de input
      setInput("");
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  return (
    <div className="App">
      <SideMenu />
      <section className='chatbox'>
        <div className='chat-log'>
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              className='chat-input-textarea'
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
