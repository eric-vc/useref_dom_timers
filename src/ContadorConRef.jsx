import { useRef, useState } from 'react';
import './ContadorConRef.css';
export function ContadorConRef() {
const [segundos, setSegundos] = useState(0);
const [activo, setActivo] = useState(false);
const timerRef = useRef(null);
const contadorRef = useRef(0);
const iniciar = () => {
if (!activo) {
      setActivo(true);
      timerRef.current = setInterval(() => {
        setSegundos(s => s + 1);
      }, 1000);
    }
  };
  const pausar = () => {
    setActivo(false);
    clearInterval(timerRef.current);
  };
  const reiniciar = () => {
    pausar();
    setSegundos(0);
    contadorRef.current = 0;
  };
  const formatearTiempo = (secs) => {
    const horas = Math.floor(secs / 3600);
    const minutos = Math.floor((secs % 3600) / 60);
    const segs = secs % 60;
    return `${String(horas).padStart(2, 
'0')}:${String(minutos).padStart(2, 
'0')}:${String(segs).padStart(2, '0')}`;
  };
  return (
    <div className="contador-ref">
      <h1> Cronómetro Avanzado</h1>
      <div className="display">
        {formatearTiempo(segundos)}
      </div>
      <div className="botones">
        <button className="btn-iniciar" onClick={iniciar}>
           Iniciar
        </button>
        <button className="btn-pausar" onClick={pausar}>
 Pausar
</button>
<button className="btn-reiniciar" onClick={reiniciar}>
 Reiniciar
</button>
</div>
</div>
);
}
export default ContadorConRef;