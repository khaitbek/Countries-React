import './styles/App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import CardList from './components/CardList/CardList';

function App() {

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <main className='site-main'>
        <section className='countries'>
          <div className="container">
            <Form />
            <CardList />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
