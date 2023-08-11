import Logo_github from '../components/assets/images/Logo_github.jpg';
import {Contain} from './styles';
import Input from '../components/Input';
import ItemRepos from '../components/ItemRepos';
import { useState } from 'react';
import Button from '../components/Button';
import { api } from '../services/api';


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos ,setRepos] = useState([]);

  const handleRemoveRepo = (repoId) => {
    setRepos(prev => prev.filter(repo => repo.id !== repoId));
  };

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        
        if (!isExist) {
          setRepos(prevRepos => [...prevRepos, data]);
          setCurrentRepo('');
        } else {
          alert('The repository has already been added');
        }
      } else {
        alert('Repository does not exist or misspelled');
      }
    } catch (error) {
      alert('An error occurred while fetching the repository');
    }
  };

  return (
    <Contain className="App">
      <img src={Logo_github} alt="Logo_GitHub" width={300} height={300} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      <div className='repos-container'>
        {repos.map(repo => (
          <ItemRepos key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
        ))}
      </div>
    </Contain>
  );
}

export default App;
