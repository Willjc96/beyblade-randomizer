import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <div>Beyblade Randomiser</div>
      <div>
        <a href="/">Home</a>
        <a href="/Create-A-Beyblade">Create a Beyblade</a>
        <a href="/Beyblade-Parts">Beyblade Parts</a>
      </div>
    </nav>
  );
};